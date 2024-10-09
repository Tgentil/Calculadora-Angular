import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculadora';

  calculatorScreenValue = '0';
  calculatorClass = 'calculator';
  calculatorMode = 'light';
  calculatorInput: any[] = [];

  // Função para adicionar um valor ou operador ao array de entrada
  addInput(input: string) {
    this.calculatorInput.push(input);

    this.updateCalculatorScreenValue();
  }

  // Função para atualizar o valor da tela da calculadora
  updateCalculatorScreenValue() {
    const input = [...this.calculatorInput];

    this.calculatorScreenValue = input.join('');
  }

  // Função para limpar o array de entrada e a tela da calculadora
  clearInput() {
    this.calculatorInput = [];
    this.calculatorScreenValue = '0';
  }

  // Função para calcular o resultado da expressão no array de entrada
  calculateResult() {
    try {
      const result = eval(this.calculatorInput.join(''));

      this.calculatorInput = [result.toString()];

      this.updateCalculatorScreenValue();
    } catch {
      this.clearInput();
    }
  }

  // Função para manipular os cliques nos botões da calculadora
  handleButtonClick(value: string) {
    switch (value) {
      case 'ce':
        this.calculatorInput.pop();
        this.updateCalculatorScreenValue();
        break;
      case 'c':
        this.clearInput();
        break;
      case 'backspace':
        this.calculatorInput.pop();
        this.updateCalculatorScreenValue();
        break;
      case 'x²':
        const currentValue = parseFloat(this.calculatorInput.join('').replace(',', '.'));
        const squaredValue = Math.pow(currentValue, 2);
        this.calculatorInput = [squaredValue.toString().replace('.', ',')];
        this.updateCalculatorScreenValue();
        break;
      case 'sqrt':
        const valueForSquareRoot = parseFloat(this.calculatorInput.join('').replace(',', '.'));
        if (!isNaN(valueForSquareRoot)) {
          if (valueForSquareRoot < 0) {
            alert('Não é possível calcular a raiz quadrada de um número negativo');
            this.clearInput();
          } else {
            const squareRootValue = Math.sqrt(valueForSquareRoot);
            this.calculatorInput = [squareRootValue.toString().replace('.', ',')];
            this.updateCalculatorScreenValue();
          }
        } else {
          alert('Entrada inválida para raiz quadrada');
          this.clearInput();
        }
        break;
      case 'plus-minus':
        const currentValueForToggle = parseFloat(this.calculatorInput.join('').replace(',', '.'));
        if (!isNaN(currentValueForToggle)) {
          const toggledValue = currentValueForToggle * -1;
          this.calculatorInput = [toggledValue.toString().replace('.', ',')];
          this.updateCalculatorScreenValue();
        }
        break;
      case '%':
        window.location.href = 'https://tgentil.github.io/porcentagens/';
        break;
      case '/':
      case '*':
      case '-':
      case '+':
        this.addInput(value);
        break;
      case ',':
        if (
          this.calculatorScreenValue === '0' ||
          this.calculatorScreenValue.slice(-1) === ',' ||
          this.calculatorScreenValue.slice(-1) === ''
        ) {
          this.addInput('0,');
        } else {
          this.addInput(',');
        }
        break;
      case '=':
        try {
          const input = this.calculatorInput.join('').replaceAll(',', '.');
          const result = eval(input);
          this.calculatorInput = [result.toString().replace('.', ',')];
          this.updateCalculatorScreenValue();
        } catch (error) {
          alert('Erro ao calcular a expressão');
          this.clearInput();
        }
        break;
      default:
        if (!isNaN(parseFloat(value))) {
          this.addInput(value);
        }
        break;
    }
}



  toggleMode() {
    if (this.calculatorMode === 'light') {
      this.calculatorMode = 'dark';
      this.calculatorClass = 'calculator dark';
    } else {
      this.calculatorMode = 'light';
      this.calculatorClass = 'calculator';
    }
  }
}
