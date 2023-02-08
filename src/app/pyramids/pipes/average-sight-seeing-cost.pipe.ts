import { Pipe, PipeTransform } from '@angular/core';
import { PyramidData } from '../types/pyramid-data.type';

@Pipe({
	name: 'averageSightSeeingCost',
})
export class AverageSightSeeingCostPipe implements PipeTransform {
	transform(pyramidsData: PyramidData[]): number {
		const filteredData = pyramidsData.filter((pyramidsData) => pyramidsData.available);

		return filteredData.reduce((sum, pyramidData) => sum + pyramidData.price, 0) / filteredData.length;
	}
}
