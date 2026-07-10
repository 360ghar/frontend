import { describe, expect, it } from 'vitest';
import {
  FORBIDDEN_PROPERTY_CREATE_KEYS,
  mapPostPropertyToCreate,
  parseBudgetToPrice,
} from './postPropertyPayload';

describe('parseBudgetToPrice', () => {
  it('parses first number from free-text budget', () => {
    expect(parseBudgetToPrice('₹25,000 - 40,000')).toBe(25000);
  });

  it('returns 0 for empty', () => {
    expect(parseBudgetToPrice('')).toBe(0);
    expect(parseBudgetToPrice(null)).toBe(0);
  });
});

describe('mapPostPropertyToCreate', () => {
  it('emits PropertyCreate fields and omits lead-only keys', () => {
    const payload = mapPostPropertyToCreate({
      full_name: 'Riya Sharma',
      email: 'riya@example.com',
      phone: '9876543210',
      property_type: 'apartment',
      property_location: 'Sector 45, Gurugram',
      property_size: '1200',
      budget_range: '35000',
      listing_type: 'rent',
      property_description: 'Sunny 2BHK',
    });

    expect(payload.purpose).toBe('rent');
    expect(payload.property_type).toBe('apartment');
    expect(payload.base_price).toBe(35000);
    expect(payload.monthly_rent).toBe(35000);
    expect(payload.full_address).toBe('Sector 45, Gurugram');
    expect(payload.owner_name).toBe('Riya Sharma');
    expect(payload.owner_contact).toBe('+919876543210');
    expect(payload.title).toContain('apartment');

    for (const key of FORBIDDEN_PROPERTY_CREATE_KEYS) {
      expect(payload).not.toHaveProperty(key);
    }
  });

  it('maps other property_type to apartment', () => {
    const payload = mapPostPropertyToCreate({
      property_type: 'other',
      property_location: 'Noida',
      listing_type: 'buy',
      budget_range: '1',
    });
    expect(payload.property_type).toBe('apartment');
    expect(payload.purpose).toBe('buy');
    expect(payload.monthly_rent).toBeUndefined();
  });
});
