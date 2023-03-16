import reverse from '../src/index.js';
import { test, expect } from '@jest/globals';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});