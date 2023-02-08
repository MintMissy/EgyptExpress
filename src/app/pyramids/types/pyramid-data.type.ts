import { Dimensions } from './dimensions.type';

export interface PyramidData extends Dimensions {
  name: string;
  price: number;
  imageUrl: string;
  available: boolean;
}
