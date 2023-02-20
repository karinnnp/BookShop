import axios from 'axios';
import { ServiceUrl } from '../configs';
import { OrderBodyType, OrderType } from '../types/order';

const getOrders = async (): Promise<OrderType> => {
  try {
    const res = await axios.get(`${ServiceUrl}/order/orders`);

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
      message: `getOrders err ->> ${err}`,
      details: '',
    };
  }
};

const getOrderById = async (id: number): Promise<OrderType> => {
  try {
    const res = await axios.get(`${ServiceUrl}/order/order/${id}`);

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
      message: `getOrderById err ->> ${err}`,
      details: '',
    };
  }
};

const postOrder = async (data: OrderBodyType): Promise<OrderType> => {
  try {
    const res = await axios.post(`${ServiceUrl}/order/order`, data);

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
      message: `getOrders err ->> ${err}`,
      details: '',
    };
  }
};

const updateOrder = async (id: number): Promise<OrderType> => {
  try {
    const res = await axios.put(`${ServiceUrl}/order/order/${id}`);

    if (res.data.status.code === 0) {
      return {
        status: 'SUCCESS',
        message: '',
        details: '',
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
      message: `updateOrder err ->> ${err}`,
      details: '',
    };
  }
};

export { getOrders, getOrderById, postOrder, updateOrder };