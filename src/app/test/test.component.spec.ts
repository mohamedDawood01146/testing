// test component spec

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestService } from '../test.service';
import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let service:TestService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TestService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test name is string', () => {
    expect(component.name).toEqual("khaled");
  });
  it('test method in test service inside oninit', () => {
    spyOn(service,"testValue")
    component.ngOnInit()
    expect(service.testValue).toHaveBeenCalled()
  });

});
