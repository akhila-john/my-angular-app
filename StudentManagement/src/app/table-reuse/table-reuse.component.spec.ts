import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReuseComponent } from './table-reuse.component';

describe('TableReuseComponent', () => {
  let component: TableReuseComponent;
  let fixture: ComponentFixture<TableReuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableReuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableReuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
