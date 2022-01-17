import { useState } from 'react';
import axios from 'axios';

interface generalResponse {
  success: boolean;
  loading: boolean;
  failed: boolean;
  result: any;
}

interface methodInterface {
  method: (url: string, data: any) => void;
}

interface outputInterface {
  [key: string]: generalResponse & methodInterface;
}

const useAxios = (): outputInterface => {
  const [post, setPost] = useState<generalResponse>({
    success: false,
    loading: false,
    failed: false,
    result: {},
  });
  const [get, setGet] = useState<generalResponse>({
    success: false,
    loading: false,
    failed: false,
    result: [],
  });

  const postMethod = async (url: string, data = {}): Promise<void> => {
    try {
      setPost({
        ...post,
        failed: false,
        loading: true,
      });
      const response = await axios.post(url, data);
      setPost({
        ...post,
        success: true,
        failed: false,
        loading: false,
        result: response.data.data,
      });
    } catch (error) {
      const err = error as any;
      console.error(err)
      setPost({
        ...post,
        failed: true,
        loading: false,
        result: err?.response?.data,
      });
    }
  };

  const getMethod = async (url: string, params = {}): Promise<void> => {
    try {
      setGet({
        ...get,
        failed: false,
        loading: true,
      });
      const response = await axios.get(url, {
        params
      });
      setGet({
        ...get,
        success: true,
        loading: false,
        result: response.data.data,
      });
    } catch (error) {
      const err = error as any;
      console.error(err)
      setGet({
        ...get,
        failed: true,
        loading: false,
        result: err?.response?.data,
      });
    }
  };
  return {
    post: {
        ...post,
        method: postMethod
    },
    get: {
      ...get,
      method: getMethod
  },
  };
};

export default useAxios