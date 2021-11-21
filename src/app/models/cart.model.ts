import { CartItem } from "./cart-item.module";

export class Cart {
    constructor(
        public items: CartItem[] = []
    ){
        
    }
}