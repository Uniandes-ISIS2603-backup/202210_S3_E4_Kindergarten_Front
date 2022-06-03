/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JardinListComponent } from './jardin-list.component';

describe('JardinListComponent', () => {
  let component: JardinListComponent;
  let fixture: ComponentFixture<JardinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JardinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JardinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
