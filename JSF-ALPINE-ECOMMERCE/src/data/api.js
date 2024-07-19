import { data } from "autoprefixer";

export default () => ({
  products: [],
  async getProducts() {
    try {
      let response = await fetch(
        `https://fakestoreapi.com/products`
      );

      if (!response.ok) {
        throw new Error();
      }

      let data = await response.json();

      this.products = data;
      console.log("Product Info:", this.products);
    } catch (error) {
      console.error("Error", error);
    }
  },
});


