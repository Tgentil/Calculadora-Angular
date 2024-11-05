# Calculadora Angular

 [![GitHub](https://img.shields.io/badge/Visit-My%20Profile-0891B2?style=flat-square&logo=github)](https://github.com/Tgentil)

Este é um projeto de uma calculadora em Angular que foi desenvolvido com o objetivo de aprimorar meus conhecimentos em Angular. A calculadora tem um formato parecido com a calculadora padrão do Windows e realiza as operações básicas de soma, subtração, multiplicação, divisão e potenciação, além de contar com números com vírgula e botões de apagar o último dígito ou todos os dígitos de uma vez. Há também um botão para alternar entre o light mode e o dark mode.

O projeto está hospedado no endereço https://calculadora-angular-26fe7.web.app/.

## Update v1.1.3
- Foram criados testes automatizados no karma, para testar as funções de soma, subtração, multiplicação e divisão, raiz quadra e toggle.
- Correção de bug na raiz quadrada.
- Correção de bug em conta com números decimais.
- Criação da função plusMinus para inverter o sinal do número.

## Tecnologias usadas

O projeto foi desenvolvido com as seguintes tecnologias:

- Angular
- Node
- Karma
- Jasmine
- Firebase
- TypeScript
- HTML
- SCSS

## Primeiro Teste

### Implementação

O código do primeiro teste encontra-se no arquivo app.component.spec.ts e utiliza as bibliotecas de testes Karma e Jasmine. O teste automatizado verifica as funcionalidades básicas da calculadora, como soma, subtração, multiplicação, divisão, alternância de sinal e cálculo da raiz quadrada.

```typescript
// Exemplo do teste de criação do componente
it('should create the app', () => {
  expect(component).toBeTruthy();
});
```
### Documentação

O teste automatizado foi implementado para garantir que a calculadora funcione corretamente para diferentes operações, incluindo:

- *Soma:* Verifica se a soma de dois números aleatórios é realizada corretamente.

- *Subtração:* Testa a subtração entre dois números.

- *Multiplicação:* Avalia a multiplicação com valores aleatórios.

- *Divisão:* Realiza a divisão e verifica o resultado com precisão.

- *Alternância de Sinal:* Confere se o botão para inverter o sinal de um número funciona como esperado.

- *Raiz Quadrada:* Testa o cálculo da raiz quadrada de um número aleatório com precisão.


> Para mais detalhes, veja o arquivo app.component.spec.ts na pasta src/app.

## Autor

* Thiago da Silveira Gentil. 
*