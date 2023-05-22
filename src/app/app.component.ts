import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculadora';

  // Variável para armazenar o valor atual da tela
  calculatorScreenValue = '0';
  calculatorClass = 'calculator'; // Classe padrão
  calculatorMode = 'light';

  // Array para armazenar os valores e operadores digitados
  calculatorInput: any[] = [];

  // Função para adicionar um valor ou operador ao array de entrada
  addInput(input: string) {
    // Adiciona o valor ou operador ao array de entrada
    this.calculatorInput.push(input);

    // Atualiza o valor da tela da calculadora
    this.updateCalculatorScreenValue();
  }

  // Função para atualizar o valor da tela da calculadora
  updateCalculatorScreenValue() {
    // Cria uma cópia do array de entrada para manipulação
    const input = [...this.calculatorInput];

    /*
    // Se o último item do array for um operador, remove-o
    if (['+', '-', '*', '/'].includes(input[input.length - 1])) {
      input.pop();
    }
    */

    // Atualiza o valor da tela da calculadora
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
      // Usa a função eval() para calcular o resultado da expressão
      const result = eval(this.calculatorInput.join(''));

      // Limpa o array de entrada e adiciona o resultado
      this.calculatorInput = [result.toString()];

      // Atualiza o valor da tela da calculadora
      this.updateCalculatorScreenValue();
    } catch {
      // Se houver um erro ao calcular o resultado, limpa o array de entrada e a tela da calculadora
      this.clearInput();
    }
  }

  // Função para manipular os cliques nos botões da calculadora
  handleButtonClick(value: string) {
    switch (value) {
      case 'ce': // remove o último elemento do array de entrada da calculadora
        this.calculatorInput.pop();
        this.updateCalculatorScreenValue();
        break;
      case 'c': // limpa completamente o array de entrada
        this.clearInput();
        break;
      case 'backspace': // remove o último elemento do array de entrada da calculadora
        this.calculatorInput.pop();
        this.updateCalculatorScreenValue();
        break;
      case 'x²': // pega o valor atual do array de entrada, calcula o seu quadrado e atualiza o array de entrada e a tela
        const currentValue = parseFloat(this.calculatorInput.join(''));
        const squaredValue = Math.pow(currentValue, 2);
        this.calculatorInput = [squaredValue.toString()];
        this.updateCalculatorScreenValue();
        break;
      case '&radic;': //pega o valor atual do array de entrada, calcula a raiz quadrada e atualiza o array de entrada e a tela
        const squareRootValue = Math.sqrt(
          parseFloat(this.calculatorInput.join(''))
        );
        this.calculatorInput = [squareRootValue.toString()];
        this.updateCalculatorScreenValue();
        break;
      case '%': // Redireciona o User para uma nova calculadora
        window.location.href = 'https://tgentil.github.io/porcentagens/';
        break;
      case '/': //adiciona o operador / ao array de entrada
      case '*': //adiciona o operador / ao array de entrada
      case '-': //adiciona o operador / ao array de entrada
      case '+': //adiciona o operador / ao array de entrada
        this.addInput(value);
        break;
      case ',': // adiciona a vírgula ao array de entrada
        // verificação para adicionar 0 antes da vírgula se o valor atual for vazio ou não tiver valor após a vírgula
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
      case '=': // calcula o resultado e atualiza o array de entrada e a tela
        // Substitui todas as vírgulas por pontos antes de fazer a conversão
        const input = this.calculatorInput.join('').replace(',', '.');
        // Usa a função eval() para calcular o resultado da expressão
        const result = eval(input);
        // Limpa o array de entrada e adiciona o resultado
        this.calculatorInput = [result.toString()];
        // Atualiza o valor da tela da calculadora
        this.updateCalculatorScreenValue();
        break;
      default:
        // Se o botão clicado for um número, adiciona-o ao array de entrada
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
