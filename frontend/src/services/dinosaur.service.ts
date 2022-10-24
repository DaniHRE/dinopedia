import axios from "axios";
import { GetUsersResponse } from "../types/api.type";

const url = "http://localhost:8000/api";

async function getUsers() {
    try {
        const { data, status } = await axios.get<GetUsersResponse>(
            url,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        console.log(JSON.stringify(data, null, 4));
        console.log('response status: ', status);

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'unexpected error occurred.';
        }
    }
}

// get(id: string) {
//     return http.get<Dinosaur>(`/dinosaur/${id}`);
// }

// create(data: Dinosaur) {
//     return http.post<Dinosaur>(`/dinosaur`, data);
// }

// update(data: Dinosaur, id: any) {
//     return http.put<any>(`/dinosaur/${id}`, data);
// }

// delete (id: any) {
//     return http.delete<any>(`/dinosaur/${id}`);
// }

// deleteAll() {
//     return http.delete<any>("/dinosaur");
// }
