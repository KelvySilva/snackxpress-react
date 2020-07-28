import IComposite from "./IComposite";
import IProductFinal from "./IProductFinal";

interface IRecipe {
    id: number;
    name: string;
    composities: IComposite[],
    productFinal: IProductFinal;
}

export default IRecipe;