export interface IDinosaur {
    id: number;
    image: string;
    name: string;
    species: string;
    feeding_habit: string;
    height: number;
    length: number;
    weight: number;
    region: string;
    short_description: string;
    description: string;
}

export interface IDinosaurPost {
    id?: number;
    image: File | null;
    name: string;
    species: string;
    feeding_habit: string;
    height: number;
    length: number;
    weight: number;
    region: string;
    short_description: string;
    description: string;
}
