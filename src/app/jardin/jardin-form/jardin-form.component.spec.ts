/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JardinFormComponent } from './jardin-form.component';

describe('JardinFormComponent', () => {
  let component: JardinFormComponent;
  let fixture: ComponentFixture<JardinFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JardinFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JardinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
