export interface Dimensions {
	width: number;
	length: number;
	height: number;
}

export function calculateVolume(dimensions: Dimensions): number {
	return dimensions.width * dimensions.length * dimensions.height;
}

export function calculateBaseArea(dimensions: Dimensions): number {
	return dimensions.width * dimensions.length;
}
