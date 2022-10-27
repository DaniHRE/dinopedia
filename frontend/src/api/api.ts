import axios, { AxiosResponse } from 'axios';
import { DinosaurType } from '../models/dinosaur.interface';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
    put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Dinosaur = {
    getDinosaurs: (): Promise<DinosaurType[]> => requests.get('dinosaur/'),
    getDinosaur: (id: number): Promise<DinosaurType> => requests.get(`dinosaur/${id}`),
    createDinosaur: (dinosaur: DinosaurType): Promise<DinosaurType> => requests.post('dinosaur/', dinosaur),
    updateDinosaur: (dinosaur: DinosaurType, id: number): Promise<DinosaurType> => requests.put(`dinosaur/${id}`, dinosaur),
    deleteDinosaur: (id: number): Promise<void> => requests.delete(`dinosaur/${id}`),
};
