import { describe, expect, it } from 'vitest';

import {
  realEstateStructuredData,
  generateJobPostingStructuredData,
  generateVideoStructuredData,
  generateBlogStructuredData,
} from './structuredData';

const ORGANIZATION_LOGO_URL = 'https://360ghar.com/assets/images/logo/logo.png';

describe('realEstateStructuredData.website', () => {
  it('uses the live property search route for SearchAction', () => {
    expect(realEstateStructuredData.website.potentialAction.target.urlTemplate)
      .toBe('https://360ghar.com/properties?q={search_term_string}&city=gurgaon');
  });
});

describe('generateJobPostingStructuredData', () => {
  it('emits all Google-required JobPosting fields by default', () => {
    const schema = generateJobPostingStructuredData({
      title: 'Content Creator Intern',
      description: 'Create engaging real estate content.',
      datePosted: '2026-06-01',
    });

    expect(schema['@type']).toBe('JobPosting');
    expect(schema.title).toBe('Content Creator Intern');
    expect(schema.description).toBe('Create engaging real estate content.');
    expect(schema.datePosted).toBe('2026-06-01');
    expect(schema.validThrough).toBeTruthy();
    expect(schema.employmentType).toBe('FULL_TIME');
    expect(schema.hiringOrganization).toMatchObject({ '@type': 'Organization', name: '360Ghar' });
    expect(schema.baseSalary['@type']).toBe('MonetaryAmount');
    expect(schema.baseSalary.currency).toBe('INR');
    expect(schema.baseSalary.value.unitText).toBe('YEAR');
  });

  it('emits a complete PostalAddress with streetAddress and postalCode (GSC "Missing field" fixes)', () => {
    const schema = generateJobPostingStructuredData({
      title: 'Software Developer Intern',
      description: 'Build and maintain web applications.',
      datePosted: '2026-06-15',
    });

    expect(schema.jobLocation.address).toMatchObject({
      '@type': 'PostalAddress',
      streetAddress: 'Sector 50, Gurugram',
      addressLocality: 'Gurgaon',
      addressRegion: 'Haryana',
      postalCode: '122001',
      addressCountry: 'IN',
    });
  });

  it('passes through custom location fields including streetAddress/postalCode', () => {
    const schema = generateJobPostingStructuredData({
      title: 'Real Estate Agent',
      description: 'Facilitate property transactions.',
      datePosted: '2026-06-08',
      location: {
        streetAddress: 'Tower B, DLF Cyber City',
        addressLocality: 'Gurugram',
        addressRegion: 'Haryana',
        postalCode: '122002',
        addressCountry: 'IN',
      },
    });

    expect(schema.jobLocation.address.streetAddress).toBe('Tower B, DLF Cyber City');
    expect(schema.jobLocation.address.postalCode).toBe('122002');
    expect(schema.jobLocation.address.addressLocality).toBe('Gurugram');
  });
});

describe('realEstateStructuredData.organization', () => {
  it('includes the full streetAddress for the organization', () => {
    expect(realEstateStructuredData.organization.address.streetAddress).toBe('Sector 50, Gurugram');
  });
});

describe('realEstateStructuredData.realEstateListing', () => {
  it('does not fabricate an ItemList count (no numberOfItems without itemListElement)', () => {
    expect(realEstateStructuredData.realEstateListing).not.toHaveProperty('numberOfItems');
  });
});

describe('generateVideoStructuredData', () => {
  it('omits uploadDate/duration when not provided and uses the real logo URL', () => {
    const schema = generateVideoStructuredData({
      title: '3 BHK Virtual Tour in Sector 50',
      description: 'Immersive 360° walkthrough',
      contentUrl: 'https://360ghar.com/videos/sector-50-3bhk.mp4',
    });

    expect(schema.uploadDate).toBeUndefined();
    expect(schema.duration).toBeUndefined();
    expect(schema.publisher.logo.url).toBe(ORGANIZATION_LOGO_URL);
  });
});

describe('generateBlogStructuredData', () => {
  it('uses the real logo asset URL for publisher.logo', () => {
    const schema = generateBlogStructuredData({ title: 'Gurugram Real Estate Guide' });

    expect(schema.publisher.logo.url).toBe(ORGANIZATION_LOGO_URL);
  });
});

