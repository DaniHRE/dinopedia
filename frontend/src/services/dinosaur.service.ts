import http from "../http-common";
import IDinosaurData from "../types/api.type";

class DinosaurDataService {
    getAll() {
        return http.get<Array<IDinosaurData>>("/dinosaur");
    }

    get(id: string) {
        return http.get<IDinosaurData>(`/dinosaur/${id}`);
    }

    create(data: IDinosaurData) {
        return http.post<IDinosaurData>(`/dinosaur`, data);
    }

    update(data: IDinosaurData, id: any) {
        return http.put<any>(`/dinosaur/${id}`, data);
    }

    delete(id: any) {
        return http.delete<any>(`/dinosaur/${id}`);
    }

    deleteAll() {
        return http.delete<any>("/dinosaur");
    }
}