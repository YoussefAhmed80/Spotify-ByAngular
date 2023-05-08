import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryalbumsComponent } from './categoryalbums.component';

describe('CategoryalbumsComponent', () => {
  let component: CategoryalbumsComponent;
  let fixture: ComponentFixture<CategoryalbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryalbumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryalbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
