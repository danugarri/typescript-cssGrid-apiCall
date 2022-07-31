import { GetPhotosResponse } from '../__dont_modify__/api/photos';

export interface IGetDataResponse {
  data: GetPhotosResponse | null;
  error: boolean;
}
