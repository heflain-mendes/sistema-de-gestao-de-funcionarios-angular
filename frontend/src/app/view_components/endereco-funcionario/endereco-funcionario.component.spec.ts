import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoFuncionarioComponent } from './endereco-funcionario.component';

describe('EnderecoFuncionarioComponent', () => {
  let component: EnderecoFuncionarioComponent;
  let fixture: ComponentFixture<EnderecoFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnderecoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
