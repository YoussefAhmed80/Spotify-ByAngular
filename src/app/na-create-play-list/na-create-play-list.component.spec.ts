import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaCreatePlayListComponent } from './na-create-play-list.component';

describe('NaCreatePlayListComponent', () => {
  let component: NaCreatePlayListComponent;
  let fixture: ComponentFixture<NaCreatePlayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaCreatePlayListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaCreatePlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
