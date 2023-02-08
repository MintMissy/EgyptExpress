import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PyramidData } from '../types/pyramid-data.type';

export interface PyramidDataResponse {
  name: string;
  dimensions: string;
  price: number;
  imageUrl: string;
  available: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class PyramidsService {
  API_URL = 'http://pyramids.mouflon.xyz/';

  constructor(private readonly httpClient: HttpClient) {}

  getPyramidsData(): Observable<PyramidData[]> {
    return this.httpClient
      .get<PyramidDataResponse[]>(this.API_URL)
      .pipe(map((response) => response.map(pyramidDataFactory)));
  }
}

function pyramidDataFactory(response: PyramidDataResponse): PyramidData {
  const [width, length, height] = response.dimensions
    .split('x')
    .map((dimension) => parseInt(dimension));

  return {
    name: response.name,
    price: response.price,
    imageUrl: response.imageUrl,
    available: response.available,
    width: width,
    length: length,
    height: height,
  };
}
