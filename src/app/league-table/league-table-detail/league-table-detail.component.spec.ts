import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTableDetailComponent } from './league-table-detail.component';

describe('LeagueTableDetailComponent', () => {
  let component: LeagueTableDetailComponent;
  let fixture: ComponentFixture<LeagueTableDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueTableDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueTableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
