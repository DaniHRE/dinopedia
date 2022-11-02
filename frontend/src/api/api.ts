import axios, { AxiosResponse } from 'axios';
import { IDinosaur, IDinosaurPost } from '../models/dinosaur.interface';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 15000,
});

const postInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 15000,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) => postInstance.post(url, body).then(responseBody),
    put: (url: string, body: {}) => postInstance.put(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(response => response),
};

export const Dinosaur = {
    getDinosaurs: (): Promise<IDinosaur[]> => requests.get('dinosaur/'),
    getDinosaur: (id: number): Promise<IDinosaur> => requests.get(`dinosaur/${id}`),
    createDinosaur: (dinosaur: IDinosaurPost): Promise<IDinosaurPost> => requests.post('dinosaur/', dinosaur),
    updateDinosaur: (dinosaur: IDinosaurPost, id: number): Promise<IDinosaurPost> => requests.put(`dinosaur/${id}/`, dinosaur),
    deleteDinosaur: (id: number): Promise<AxiosResponse> => requests.delete(`dinosaur/${id}/`),
};
