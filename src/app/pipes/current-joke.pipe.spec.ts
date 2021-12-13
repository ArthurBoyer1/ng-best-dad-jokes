import { CurrentJokePipe } from './current-joke.pipe';

describe('CurrentJokePipe', () => {
  it('create an instance', () => {
    const pipe = new CurrentJokePipe();
    expect(pipe).toBeTruthy();
  });
});
