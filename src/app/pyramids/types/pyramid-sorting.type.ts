import { calculateVolume } from './dimensions.type';
import { PyramidData } from './pyramid-data.type';

export type PyramidSortingType =
	| 'Price Ascending'
	| 'Price Descending'
	| 'Volume Ascending'
	| 'Volume Descending'
	| 'Height Ascending'
	| 'Height Descending';

export function getPyramidSortingTypes() {
	return [
		'Price Ascending',
		'Price Descending',
		'Volume Ascending',
		'Volume Descending',
		'Height Ascending',
		'Height Descending',
	];
}

export function applyPyramidTypeSorting(pyramidData: PyramidData[], sortingType: PyramidSortingType) {
	switch (sortingType) {
		case 'Price Ascending':
			return pyramidData.sort((a, b) => (a.price > b.price ? 1 : -1));
		case 'Price Descending':
			return pyramidData.sort((a, b) => (b.price > a.price ? 1 : -1));
		case 'Volume Ascending':
			return pyramidData.sort((a, b) => (calculateVolume(a) > calculateVolume(b) ? 1 : -1));
		case 'Volume Descending':
			return pyramidData.sort((a, b) => (calculateVolume(b) > calculateVolume(a) ? 1 : -1));
		case 'Height Ascending':
			return pyramidData.sort((a, b) => (a.height > b.height ? 1 : -1));
		case 'Height Descending':
			return pyramidData.sort((a, b) => (b.height > a.height ? 1 : -1));
	}
}
