import axios from 'axios';
import { ServiceUrl } from '../configs';
import { UserType, UserBodyType } from '../types/user';

const getUser = async (): Promise<UserType> => {
  try {
    const res = await axios.get(`${ServiceUrl}/user/user`);

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
      message: `getUser err ->> ${err}`,
      details: '',
    };
  }
};

const addUser = async (data: UserBodyType): Promise<UserType> => {
  try {
    const res = await axios.post(`${ServiceUrl}/user/user`, data);

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
      message: `addUser err ->> ${err}`,
      details: '',
    };
  }
};

export { getUser, addUser };