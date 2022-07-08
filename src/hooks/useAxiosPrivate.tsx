import {useEffect} from 'react';
import { axios_private_instance } from '../Utils/axios';

const useAxiosPrivate = () => {
  useEffect(() => {
    const requestIntercept = axios_private_instance.interceptors.request.use(
     async config => {
        const accessToken =  localStorage.getItem('accessToken');
        const refreshToken =  localStorage.getItem('refreshToken');
        if (!accessToken && !refreshToken ) return config;
        if (config.headers !== undefined) {
          if (accessToken)
            config.headers['authorization'] = `Bearer ${accessToken}`;
          if (refreshToken)
            config.headers['x-refresh'] = refreshToken;
        }
        return config;
      },
      error => Promise.reject(error),
    );
    const responseIntercept = axios_private_instance.interceptors.response.use(
      async response => {
        const resAccessToken = response.headers['x-access-token'];
        const resRefreshToken = response.headers['x-refresh'];
        if (!resAccessToken || !resRefreshToken) return response;
        try {
          localStorage.setItem('accessToken', resAccessToken);
          localStorage.setItem('refreshToken', resRefreshToken);
        } catch (error) {
          console.error(error);
        }
      },
      function (error) {
        return Promise.reject(error);
      },
    );
    return () => {
        axios_private_instance.interceptors.response.eject(responseIntercept);
        axios_private_instance.interceptors.request.eject(requestIntercept);
    };
  }, []);

  return axios_private_instance;
};

export default useAxiosPrivate;
