import { describe, expect, it } from 'vitest';
import { extractError } from './apiError';

describe('extractError', () => {
  it('prefers nested error.message envelope', () => {
    const err = {
      response: {
        data: {
          error: { code: 'PROPERTY_NOT_FOUND', message: 'Property not found' },
          detail: 'ignored',
        },
      },
    };
    expect(extractError(err)).toBe('Property not found');
  });

  it('falls back to error.code', () => {
    const err = {
      response: { data: { error: { code: 'TOKEN_INVALID' } } },
    };
    expect(extractError(err)).toBe('TOKEN_INVALID');
  });

  it('falls back to FastAPI detail string', () => {
    const err = { response: { data: { detail: 'Not authenticated' } } };
    expect(extractError(err)).toBe('Not authenticated');
  });

  it('joins detail validation array', () => {
    const err = {
      response: {
        data: {
          detail: [{ msg: 'Field required' }, { msg: 'Invalid purpose' }],
        },
      },
    };
    expect(extractError(err)).toBe('Field required, Invalid purpose');
  });

  it('uses fallback when empty', () => {
    expect(extractError({}, 'fallback')).toBe('fallback');
  });
});
