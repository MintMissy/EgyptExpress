import { Pipe, PipeTransform } from '@angular/core';
import { PyramidData } from '../types/pyramid-data.type';
import { calculateVolume } from '../utils/dimension.utility';

@Pipe({
	name: 'averagePyramidVolume',
})
export class AveragePyramidVolumePipe implements PipeTransform {
	transform(pyramidsData: PyramidData[]): number {
		const filteredData = pyramidsData.filter((pyramidsData) => pyramidsData.height > 0);

		return (
			filteredData.map((pyramidData) => calculateVolume(pyramidData)).reduce((sum, volume) => sum + volume, 0) /
			filteredData.length
		);
	}
}
