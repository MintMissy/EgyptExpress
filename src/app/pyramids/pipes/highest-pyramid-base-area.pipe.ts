import { Pipe, PipeTransform } from '@angular/core';
import { PyramidData } from '../types/pyramid-data.type';
import { calculateBaseArea } from '../utils/dimension.utility';

@Pipe({
	name: 'highestPyramidBaseArea',
})
export class HighestPyramidBaseAreaPipe implements PipeTransform {
	transform(pyramidsData: PyramidData[]): number {
		return pyramidsData
			.map((pyramidData) => calculateBaseArea(pyramidData))
			.reduce((max, baseArea) => Math.max(max, baseArea), 0);
	}
}
