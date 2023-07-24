import { IResponse } from 'src/common/interfaces/response.interface';

export const handleResponse = ({
  success = true,
  data,
  message,
}: IResponse) => {
  return {
    success,
    message,
    data,
  };
};
