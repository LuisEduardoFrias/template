import axios from 'axios';

export default class ProductService {

    // getProductsSmall() {
    //     return axios.get('data/products-small.json').then(res => res.data.data);
    // }

    getProducts() {
        return axios.get('products.data.json').then(res => res.data.data);
    }

    // getProductsWithOrdersSmall() {
    //     return axios.get('data/products-orders-small.json').then(res => res.data.data);
    // }
}