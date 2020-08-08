import {CalculateService} from './calculate.service';

describe('CalculateService', () => {
  it('calculate add', () => {
    expect(CalculateService.execute('2+2')).toBe('4');
  });

  it('calculate minus', () => {
    expect(CalculateService.execute('5-2')).toBe('3');
  });

  it('calculate multiplied', () => {
    expect(CalculateService.execute('5×2')).toBe('10');
  });

  it('calculate devided', () => {
    expect(CalculateService.execute('9÷3')).toBe('3');
  });
});
