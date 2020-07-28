import IStock from "./IStock";


interface IIngreditent {
    id: number;
    name: string;
    description: string,
    cost: number,
    type: string,
    stock: IStock
}

export default IIngreditent;