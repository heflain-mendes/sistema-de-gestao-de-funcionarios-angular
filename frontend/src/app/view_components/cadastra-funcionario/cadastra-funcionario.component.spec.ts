import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraFuncionarioComponent } from './cadastra-funcionario.component';

describe('CadastraFuncionarioComponent', () => {
  let component: CadastraFuncionarioComponent;
  let fixture: ComponentFixture<CadastraFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
