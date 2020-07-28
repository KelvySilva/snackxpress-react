import Products from "../pages/Products";
import IStock from "./IStock";

interface IProductFinal {
    id:number;
    name: string;
    description: string;
    cost:number;
    stock:IStock;
    type: string;
    price:number;
    discount:number;
}

export default IProductFinal;