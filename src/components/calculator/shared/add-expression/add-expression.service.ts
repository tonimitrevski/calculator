
export class AddExpressionService {
  private static readonly operators: Array<string> = ['+', '-', '×', '÷'];

  public static execute(expression: string, currentChar: string, lastChar: string): string {
    if (!expression && this.operators.includes(currentChar)) {
      return expression;
    }

    if (this.operators.includes(currentChar) && this.operators.includes(lastChar)) {
      expression = expression.substring(0, expression.length - 1) + currentChar;
      return expression;
    }

    expression = expression += currentChar;
    return expression;
  }
}
