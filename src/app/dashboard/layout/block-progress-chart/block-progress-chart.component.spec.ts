import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockProgressChartComponent } from './block-progress-chart.component';

describe('BlockProgressChartComponent', () => {
  let component: BlockProgressChartComponent;
  let fixture: ComponentFixture<BlockProgressChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockProgressChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockProgressChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
