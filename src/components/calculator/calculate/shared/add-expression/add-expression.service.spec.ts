import {AddExpressionService} from './add-expression.service';


describe('AddExpressionService', () => {
  it('expression is empty current char is operation', () => {
    expect(AddExpressionService.execute('', '+', '')).toBe('');
  });
  it('expression number current char is operation', () => {
    expect(AddExpressionService.execute('7', '+', '7')).toBe('7+');
  });
  it('last expression + current char is -', () => {
    expect(AddExpressionService.execute('7+', '-', '+')).toBe('7-');
  });
  it('last expression + current char is number', () => {
    expect(AddExpressionService.execute('7+', '8', '+')).toBe('7+8');
  });
});
