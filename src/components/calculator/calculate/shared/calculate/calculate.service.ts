export class CalculateService {
  public static execute(inputString: string): string {

    // forming an array of numbers. eg for above string it will be: numbers = ['10', '26', '33', '56', '34', '23']
    const numbers: Array<string> = inputString.split(/\+|\-|\×|\÷/g);

    // forming an array of operators. for above string it will be: operators = ['+', '+', '-', '*', '/']
    // first we replace all the numbers and dot with empty string and then split
    const operators: Array<string> = inputString.replace(/[0-9]|\./g, '').split('');

    this.divideOperation(operators, numbers);
    this.multiplyOperation(operators, numbers);
    this.subtractOperation(operators, numbers);
    this.addOperation(operators, numbers);
    return numbers[0];
  }

  private static addOperation(operators: string[], numbers: string[]): void {
    let add = operators.indexOf('+');
    while (add !== -1) {
      // using parseFloat is necessary, otherwise it will result in string concatenation :)
      numbers.splice(add, 2, String(parseFloat(numbers[add]) + parseFloat(numbers[add + 1])));
      operators.splice(add, 1);
      add = operators.indexOf('+');
    }
  }

  private static subtractOperation(operators: string[], numbers: string[]): void {
    let subtract = operators.indexOf('-');
    while (subtract !== -1) {
      numbers.splice(subtract, 2, String(parseFloat(numbers[subtract]) - parseFloat(numbers[subtract + 1])));
      operators.splice(subtract, 1);
      subtract = operators.indexOf('-');
    }
  }

  private static multiplyOperation(operators: string[], numbers: string[]): void {
    let multiply = operators.indexOf('×');
    while (multiply !== -1) {
      numbers.splice(multiply, 2, String(parseFloat(numbers[multiply]) * parseFloat(numbers[multiply + 1])));
      operators.splice(multiply, 1);
      multiply = operators.indexOf('×');
    }
  }

  private static divideOperation(operators: string[], numbers: string[]): void {
    let divide = operators.indexOf('÷');
    while (divide !== -1) {
      numbers.splice(divide, 2, String(parseFloat(numbers[divide]) / parseFloat(numbers[divide + 1])));
      operators.splice(divide, 1);
      divide = operators.indexOf('÷');
    }
  }
}
