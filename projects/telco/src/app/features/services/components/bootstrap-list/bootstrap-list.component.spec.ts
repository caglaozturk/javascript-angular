import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapListComponent } from './bootstrap-list.component';

describe('BootstrapListComponent', () => {
  let component: BootstrapListComponent;
  let fixture: ComponentFixture<BootstrapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
