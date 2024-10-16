import axios from 'axios';

const CLIENT_ID = '817048509986412b9444e9ddfac1545a';
const CLIENT_SECRET = '4b25d21db7684f1e97259657ca027628';

const getToken = async () => {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
      },
      body: 'grant_type=client_credentials',
    });

    const auth = await response.json();
    const token = `${auth.token_type} ${auth.access_token}`;

    if (token) {
      localStorage.setItem('access_token', token); 
      localStorage.setItem('token_expiry', Date.now() + auth.expires_in * 1000); // Token muddati saqlanadi
    } else {
      console.log('Token topilmadi');
    }

    return token;
  } catch (err) {
    console.error('Token olishda xato:', err);
  }
};

const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

// Axios request interceptor: tokenni qo'shish
instance.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem('access_token');
    const tokenExpiry = localStorage.getItem('token_expiry');

    // Tokenni tekshirish (agar token mavjud bo'lsa va u tugamagan bo'lsa)
    if (!token || Date.now() > tokenExpiry) {
      console.log('Tokenni yangilash kerak');
      token = await getToken();  // Yangi tokenni olish
    }

    if (token) {
      config.headers['Authorization'] = token; // Tokenni sarlavhaga qo'shish
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
