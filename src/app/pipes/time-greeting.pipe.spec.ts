import { TimeGreetingPipe } from './time-greeting.pipe';

describe('TimeGreetingPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeGreetingPipe();
    expect(pipe).toBeTruthy();
  });
});
