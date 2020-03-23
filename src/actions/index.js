import { GET } from "./APIMethods";
import { PRODUCTS } from "../constants/products";

export const FETCH_PRODUCTS = async () => {
  const url = "http://localhost:7650/get-products";
  const APIResponse = await GET(url);
  if (APIResponse.error) {
    return PRODUCTS;
  }
  if (APIResponse.data) {
    return APIResponse.data;
  }
  return PRODUCTS;
};
