import { Pipe, PipeTransform } from '@angular/core';
import { calculateBaseArea } from '../types/dimensions.type';
import { PyramidData } from '../types/pyramid-data.type';

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
