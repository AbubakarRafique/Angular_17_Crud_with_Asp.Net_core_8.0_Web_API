import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicrudComponent } from './apicrud.component';

describe('ApicrudComponent', () => {
  let component: ApicrudComponent;
  let fixture: ComponentFixture<ApicrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApicrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApicrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
