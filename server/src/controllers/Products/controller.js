import { SEND } from '../response'
import { PRODUCTS } from './data';

// const URL = {
//   FETCH_PRODUCTS: 'http://jsoneditoronline.org/#left=cloud.b48e27bd6f55413eaf796c70dc3e96eb'
// }

function getProducts() {
  const products = PRODUCTS()
  return products
}

export const fetchAll = (req, res, next) => {
  const products = getProducts()
  SEND(res, false, products)
};
