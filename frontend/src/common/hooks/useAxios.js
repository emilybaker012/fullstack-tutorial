import { useEffect } from 'react';
import axiosClient from '@common/client/axiosInstance';

const useAxios = () => {
  useEffect(() => {}, []);

  return axiosClient;
};

export default useAxios;
