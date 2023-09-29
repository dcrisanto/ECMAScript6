import fetch from "node-fetch";

const apiBase = "https://api.escuelajs.co";
const version = "v1";
const getProducts = `${apiBase}/api/${version}/products`
;

const response = await fetch(`${getProducts}`);

const products = await response.json();

export { products };

