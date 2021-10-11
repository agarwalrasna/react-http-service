import { AxiosRequestConfig } from 'axios';

export const axiosRequestConfiguration: AxiosRequestConfig = {
    baseURL: 'http://localhost:3001',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
};
