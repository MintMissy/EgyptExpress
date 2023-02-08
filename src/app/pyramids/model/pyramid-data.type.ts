export interface Dimensions {
  width: number;
  length: number;
  height: number;
}

export interface PyramidData extends Dimensions {
  name: string;
  price: number;
  imageUrl: string;
  available: boolean;
}
