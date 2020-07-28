import IIngreditent from './IIngredient';
interface IComposite {
    id: number;
    quantity: number;
    ingredient: IIngreditent;
}

export default IComposite;