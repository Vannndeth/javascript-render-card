'use strict'
import { cardComponent } from "../components/cardComponent";

let renderArea = document.querySelector('#render-area');
console.count(renderArea);

import { products } from "../data/products";

products.map((product) => {
    renderArea.innerHTML += cardComponent(product);
});