import { Dimensions } from '../types/dimensions.type';

export function calculateVolume(dimensions: Dimensions): number {
  return dimensions.width * dimensions.length * dimensions.height;
}

export function calculateBaseArea(dimensions: Dimensions): number {
  return dimensions.width * dimensions.length;
}