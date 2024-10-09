import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    expect(component).toBeDefined();

    fixture.detectChanges();
  });

  // Testar se o componente foi criado
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // Função para simular o clique nos botões da calculadora
  function simulateButtonClick(component: AppComponent, value: string) {
    component.handleButtonClick(value);
  }

  // Gerar um número aleatório entre um intervalo
  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Teste automatizado para soma, subtração, multiplicação e divisão com números aleatórios
  it('should perform random calculations (addition, subtraction, multiplication, division)', () => {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);

    // Soma
    simulateButtonClick(component, num1.toString());
    simulateButtonClick(component, '+');
    simulateButtonClick(component, num2.toString());
    simulateButtonClick(component, '=');
    const expectedSum = num1 + num2;
    expect(parseFloat(component.calculatorScreenValue.replace(',', '.'))).toBe(expectedSum);

    // Limpar a calculadora para o próximo teste
    simulateButtonClick(component, 'c');

    // Subtração
    simulateButtonClick(component, num1.toString());
    simulateButtonClick(component, '-');
    simulateButtonClick(component, num2.toString());
    simulateButtonClick(component, '=');
    const expectedSubtraction = num1 - num2;
    expect(parseFloat(component.calculatorScreenValue.replace(',', '.'))).toBe(expectedSubtraction);

    // Limpar a calculadora para o próximo teste
    simulateButtonClick(component, 'c');

    // Multiplicação
    simulateButtonClick(component, num1.toString());
    simulateButtonClick(component, '*');
    simulateButtonClick(component, num2.toString());
    simulateButtonClick(component, '=');
    const expectedMultiplication = num1 * num2;
    expect(parseFloat(component.calculatorScreenValue.replace(',', '.'))).toBe(expectedMultiplication);

    // Limpar a calculadora para o próximo teste
    simulateButtonClick(component, 'c');

    // Divisão
    if (num2 !== 0) {
      simulateButtonClick(component, num1.toString());
      simulateButtonClick(component, '/');
      simulateButtonClick(component, num2.toString());
      simulateButtonClick(component, '=');
      const expectedDivision = num1 / num2;
      expect(parseFloat(component.calculatorScreenValue.replace(',', '.'))).toBeCloseTo(expectedDivision, 5);
    }
  });

  // Testar alternância de sinal com número aleatório
  it('should toggle the sign of a random number', () => {
    const num = getRandomNumber(1, 100);

    simulateButtonClick(component, num.toString());
    simulateButtonClick(component, 'plus-minus');
    const expectedToggledValue = num * -1;
    expect(parseFloat(component.calculatorScreenValue.replace(',', '.'))).toBe(expectedToggledValue);
  });

  // Testar raiz quadrada com número aleatório positivo
  it('should calculate square root of a random number', () => {
    const num = getRandomNumber(1, 100);

    simulateButtonClick(component, num.toString());
    simulateButtonClick(component, 'sqrt');
    const expectedSquareRoot = Math.sqrt(num);
    expect(parseFloat(component.calculatorScreenValue.replace(',', '.'))).toBeCloseTo(expectedSquareRoot, 5);
  });
});
