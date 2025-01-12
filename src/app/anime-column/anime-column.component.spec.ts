import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeColumnComponent } from './anime-column.component';

describe('AnimeColumnComponent', () => {
  let component: AnimeColumnComponent;
  let fixture: ComponentFixture<AnimeColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
