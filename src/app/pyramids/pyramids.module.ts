import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AveragePyramidVolumePipe } from './pipes/average-pyramid-volume.pipe';
import { HighestPyramidVolumePipe } from './pipes/highest-pyramid-volume.pipe';
import { AverageSightSeeingCostPipe } from './pipes/average-sight-seeing-cost.pipe';
import { HighestPyramidBaseAreaPipe } from './pipes/highest-pyramid-base-area.pipe';

@NgModule({
  declarations: [AveragePyramidVolumePipe, HighestPyramidVolumePipe, AverageSightSeeingCostPipe, HighestPyramidBaseAreaPipe],
  imports: [CommonModule, HttpClientModule],
})
export class PyramidsModule {}
