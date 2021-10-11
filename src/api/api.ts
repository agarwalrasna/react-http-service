import initializeAxios from './axiosSetup';
import { axiosRequestConfiguration } from './config';
import { map } from 'rxjs/operators';
// @ts-ignore
import { defer, Observable } from 'rxjs';


const axiosInstance = initializeAxios(axiosRequestConfiguration);

const get = <T>(url: string, queryParams?: object): Observable<T> => {
  return defer(() => axiosInstance.get<T>(url, {params: queryParams}))
    .pipe(map((result: any) => result.data));
};

const post = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
  // @ts-ignore
  return defer(() => axiosInstance.post<T>(url, body, {params: queryParams}))
    .pipe(map((result: any) => result.data));
};

const put = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
  // @ts-ignore

  return defer(() => axiosInstance.put<T>(url, body, {params: queryParams}))
    .pipe(map((result: any) => result.data));
};

const patch = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
  // @ts-ignore

  return defer(() => axiosInstance.patch<T>(url, body, {params: queryParams}))
    .pipe(map((result: any) => result.data));
};

const deleteR = <T>(url: string, id: number): Observable<T | void> => {
  return defer(() => (axiosInstance.delete(`${url}/${id}`)))
    .pipe(map((result: any) => result.data)
    );
};
const api = {get, post, put, patch, delete: deleteR}
export default api;
