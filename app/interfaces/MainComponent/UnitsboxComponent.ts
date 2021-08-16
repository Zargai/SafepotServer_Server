export interface IUnit {
    _id: string;
    id: Number;
    title?: string;
    image?: string;
    description?: string;

}

export interface IUnitInput {
    id: Number;
    title?: string;
    image?: string;
    description?: string;
}