import { expect } from 'chai';
import isBetween from './';

describe('isBetween', () => {
  it('should return true', () => {
    expect(isBetween('Hello', 1, 5)).to.be.true;
    expect(isBetween('Hello World!', 1, 15)).to.be.true;
    expect(isBetween('Hi', 2, 10)).to.be.true;
    expect(isBetween('Hi')).to.be.true;
  });

  it('should return false', () => {
    expect(isBetween('Hello', 6, 10)).to.be.false;
    expect(isBetween('Hi', 3, 20)).to.be.false;
    expect(isBetween('Hi', 3)).to.be.false;
  });
});
