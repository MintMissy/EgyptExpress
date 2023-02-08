import { Pipe, PipeTransform } from '@angular/core';
import { PyramidData } from '../types/pyramid-data.type';
import { calculateVolume } from '../utils/dimension.utility';

@Pipe({
	name: 'highestPyramidVolume',
})
export class HighestPyramidVolumePipe implements PipeTransform {
	transform(pyramidsData: PyramidData[]): number {
		return pyramidsData
			.map((pyramidData) => calculateVolume(pyramidData))
			.reduce((max, volume) => Math.max(max, volume), 0);
	}
}
