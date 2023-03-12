import { TestPipe } from './test.pipe';

describe('TestPipe', () => {
  const pipe = new TestPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('test the pipe for return power of number pipe', () => {
    expect(pipe.transform(15)).toEqual(30);
  });
});
