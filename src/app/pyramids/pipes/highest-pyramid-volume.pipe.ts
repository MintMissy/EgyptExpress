import { Pipe, PipeTransform } from '@angular/core';
import { calculateVolume } from '../types/dimensions.type';
import { PyramidData } from '../types/pyramid-data.type';

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
