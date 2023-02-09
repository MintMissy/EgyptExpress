import { Pipe, PipeTransform } from '@angular/core';
import { calculateBaseArea } from '../types/dimensions.type';
import { PyramidData } from '../types/pyramid-data.type';

@Pipe({
	name: 'highestPyramidBaseArea',
})
export class HighestPyramidBaseAreaPipe implements PipeTransform {
	transform(pyramidsData: PyramidData[]): PyramidData {
		return pyramidsData.reduce((maxBaseAreaPyramid, pyramidData) =>
			calculateBaseArea(maxBaseAreaPyramid) > calculateBaseArea(pyramidData) ? maxBaseAreaPyramid : pyramidData
		);
	}
}
