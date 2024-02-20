'use strict'
import { cardComponent } from "../components/cardComponent.js";

let renderArea = document.querySelector('#render-area');
console.count(renderArea);

import { products } from "../data/products.js";

products.map((product) => {
    renderArea.innerHTML += cardComponent(product);
});