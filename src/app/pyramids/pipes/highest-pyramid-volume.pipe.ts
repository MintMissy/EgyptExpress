import { Pipe, PipeTransform } from '@angular/core';
import { calculateVolume } from '../types/dimensions.type';
import { PyramidData } from '../types/pyramid-data.type';

@Pipe({
	name: 'highestPyramidVolume',
})
export class HighestPyramidVolumePipe implements PipeTransform {
	transform(pyramidsData: PyramidData[]): PyramidData {
		return pyramidsData.reduce((maxVolumePyramid, pyramidData) =>
			calculateVolume(maxVolumePyramid) > calculateVolume(pyramidData) ? maxVolumePyramid : pyramidData
		);
	}
}
