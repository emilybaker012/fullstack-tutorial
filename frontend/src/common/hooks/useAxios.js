import { useEffect } from 'react';
import axiosClient from '../client/axiosInstance';

const useAxios = () => {
  useEffect(() => {
  }, []);

  return axiosClient;
};

export default useAxios;
