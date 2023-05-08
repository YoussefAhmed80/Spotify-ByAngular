import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryalbumsongsComponent } from './categoryalbumsongs.component';

describe('CategoryalbumsongsComponent', () => {
  let component: CategoryalbumsongsComponent;
  let fixture: ComponentFixture<CategoryalbumsongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryalbumsongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryalbumsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
