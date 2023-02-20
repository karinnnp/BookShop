import axios from 'axios';
import { ServiceUrl } from '../configs';
import { ProductType } from '../types/product';

const getProducts = async (): Promise<ProductType> => {
  try {
    const res = await axios.get(`${ServiceUrl}/product/products`);

    if (res.data.status.code === 0) {
      return {
        status: 'SUCCESS',
        message: '',
        details: res.data.data,
      };

    } else {
      return {
        status: 'ERROR',
        message: '',
        details: '',
      };
    }
  } catch (err) {
    return {
      status: 'FAILED',
      message: `getProducts err ->> ${err}`,
      details: '',
    };
  }
};

const getProductById = async (id: number): Promise<any> => {
  try {
    const res = await axios.get(`${ServiceUrl}/product/product/${id}`);

    if (res.data.status.code === 0) {
      return {
        status: 'SUCCESS',
        message: '',
        details: res.data.data,
      };

    } else {
      return {
        status: 'ERROR',
        message: '',
        details: '',
      };
    }
  } catch (err) { 
    return {
      status: 'FAILED',
      message: `getProductById err ->> ${err}`,
      details: '',
    };
  }
};

export { getProducts, getProductById };