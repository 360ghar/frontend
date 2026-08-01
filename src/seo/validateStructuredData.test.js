import { describe, expect, it } from 'vitest';

import {
  validateSchema,
  validateAllStructuredData,
  generateValidationReport,
} from './validateStructuredData';
import {
  generatePersonStructuredData,
  generateEventStructuredData,
  generatePodcastStructuredData,
  generateCourseStructuredData,
  generateQAPageStructuredData,
  generateSpeakableStructuredData,
  generatePropertyFaqStructuredData,
  generateLocalityFaqStructuredData,
  generateReviewStructuredData,
  generateArticleStructuredData,
  generateJobPostingStructuredData,
} from './structuredData';

describe('Structured Data Validation', () => {
  describe('validateSchema', () => {
    it('validates Organization schema correctly', () => {
      const schema = {
        '@type': 'Organization',
        name: '360Ghar',
        url: 'https://360ghar.com',
        logo: { '@type': 'ImageObject', url: 'https://360ghar.com/logo.png' },
      };

      const result = validateSchema(schema, 'TestOrganization');
      expect(result.isValid).toBe(true);
      expect(result.errors.length).toBe(0);
    });

    it('detects missing required properties', () => {
      const schema = {
        '@type': 'Organization',
        // Missing required 'name'
      };

      const result = validateSchema(schema, 'TestOrganization');
      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors.some(e => e.message.includes('name'))).toBe(true);
    });

    it('validates a complete JobPosting with Google-required fields', () => {
      const schema = {
        '@type': 'JobPosting',
        title: 'Software Developer Intern',
        description: 'Build and maintain web applications.',
        datePosted: '2026-06-15',
        validThrough: '2026-08-30',
        employmentType: 'INTERN',
        hiringOrganization: {
          '@type': 'Organization',
          name: '360Ghar',
          url: 'https://360ghar.com',
          description: 'India\'s VR-First Way to Find a Home.',
          logo: { '@type': 'ImageObject', url: 'https://360ghar.com/logo.png' },
        },
        jobLocation: {
          '@type': 'Place',
          name: '360Ghar Office',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Sector 50, Gurugram',
            addressLocality: 'Gurugram',
            addressRegion: 'Haryana',
            postalCode: '122001',
            addressCountry: 'IN',
          },
        },
        baseSalary: {
          '@type': 'MonetaryAmount',
          currency: 'INR',
          value: {
            '@type': 'QuantitativeValue',
            value: 15000,
            unitText: 'MONTH',
          },
        },
      };

      const result = validateSchema(schema, 'TestJobPosting');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
    });

    it('flags a JobPosting missing Google-required fields (title, baseSalary, etc.)', () => {
      const schema = {
        '@type': 'JobPosting',
        description: 'Missing title, dates, salary and more',
      };

      const result = validateSchema(schema, 'TestJobPosting');
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.message.includes('title'))).toBe(true);
      expect(result.errors.some(e => e.message.includes('baseSalary'))).toBe(true);
      expect(result.errors.some(e => e.message.includes('datePosted'))).toBe(true);
      expect(result.errors.some(e => e.message.includes('validThrough'))).toBe(true);
      expect(result.errors.some(e => e.message.includes('hiringOrganization'))).toBe(true);
      expect(result.errors.some(e => e.message.includes('jobLocation'))).toBe(true);
    });

    it('warns when jobLocation.address lacks streetAddress/postalCode (GSC "Missing field" warnings)', () => {
      const schema = {
        '@type': 'JobPosting',
        title: 'Content Creator Intern',
        description: 'Create engaging real estate content.',
        datePosted: '2026-06-01',
        validThrough: '2026-08-30',
        employmentType: 'INTERN',
        hiringOrganization: {
          '@type': 'Organization',
          name: '360Ghar',
          url: 'https://360ghar.com',
          logo: { '@type': 'ImageObject', url: 'https://360ghar.com/logo.png' },
        },
        jobLocation: {
          '@type': 'Place',
          name: '360Ghar Office',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Gurugram',
            addressRegion: 'Haryana',
            addressCountry: 'IN',
          },
        },
        baseSalary: {
          '@type': 'MonetaryAmount',
          currency: 'INR',
          value: {
            '@type': 'QuantitativeValue',
            value: 15000,
            unitText: 'MONTH',
          },
        },
      };

      const result = validateSchema(schema, 'TestJobPosting');
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings.some(w => w.message.includes('streetAddress'))).toBe(true);
      expect(result.warnings.some(w => w.message.includes('postalCode'))).toBe(true);
    });

    it('validates Event schema with all required fields', () => {
      const schema = {
        '@type': 'Event',
        name: 'Property Expo',
        startDate: '2026-06-15T10:00:00+05:30',
        endDate: '2026-06-15T18:00:00+05:30',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        image: 'https://360ghar.com/og-image-home.jpg',
        location: {
          '@type': 'Place',
          name: '360Ghar Office',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
          },
        },
      };

      const result = validateSchema(schema, 'TestEvent');
      expect(result.isValid).toBe(true);
    });

    it('detects invalid date formats', () => {
      const schema = {
        '@type': 'Event',
        name: 'Property Expo',
        startDate: 'invalid-date',
        location: {
          '@type': 'Place',
          name: 'Test Location',
        },
      };

      const result = validateSchema(schema, 'TestEvent');
      expect(result.errors.some(e => e.message.includes('date'))).toBe(true);
    });

    it('validates Person schema for E-E-A-T', () => {
      const schema = generatePersonStructuredData({
        name: 'John Doe',
        jobTitle: 'CEO',
        expertise: ['Real Estate', 'Technology'],
      });

      const result = validateSchema(schema, 'TestPerson');
      expect(result.isValid).toBe(true);
    });

    it('validates Course schema', () => {
      const schema = generateCourseStructuredData({
        name: 'Real Estate Investment Course',
        description: 'Learn property investment',
        teaches: ['Market Analysis', 'Investment Strategies'],
      });

      const result = validateSchema(schema, 'TestCourse');
      expect(result.isValid).toBe(true);
    });

    it('validates QAPage schema', () => {
      const schema = generateQAPageStructuredData({
        question: 'What are property rates in DLF Phase 3?',
        answer: 'Rates range from ₹18,000-25,000 per sq ft',
        upvoteCount: 42,
      });

      expect(schema.mainEntity.text).toBe('What are property rates in DLF Phase 3?');
      expect(schema.mainEntity.author).toBeDefined();
      expect(schema.mainEntity.author.url).toBeDefined();
      expect(schema.mainEntity.datePublished).toBeDefined();
      expect(schema.mainEntity.acceptedAnswer.author.url).toBeDefined();
      expect(schema.mainEntity.acceptedAnswer.dateCreated).toContain('T');

      const result = validateSchema(schema, 'TestQAPage');
      expect(result.isValid).toBe(true);
    });

    it('validates Speakable schema for voice search', () => {
      const schema = generateSpeakableStructuredData({
        cssSelectors: ['.speakable-summary', '.speakable-highlights'],
      });

      const result = validateSchema(schema, 'TestSpeakable');
      expect(result.isValid).toBe(true);
    });

    it('validates Review schema', () => {
      const schema = generateReviewStructuredData({
        reviewBody: 'Excellent service!',
        ratingValue: '5',
        authorName: 'Rahul S.',
        itemReviewed: '360Ghar Services',
      });

      const result = validateSchema(schema, 'TestReview');
      expect(result.isValid).toBe(true);
    });

    it('validates Article schema', () => {
      const schema = generateArticleStructuredData({
        headline: 'Gurugram Real Estate Trends 2026',
        description: 'Market analysis and predictions',
        publishedAt: new Date().toISOString(),
      });

      const result = validateSchema(schema, 'TestArticle');
      expect(result.isValid).toBe(true);
    });

    it('detects invalid rating values', () => {
      const schema = {
        '@type': 'AggregateRating',
        ratingValue: '6', // Invalid: must be 1-5
        reviewCount: '100',
      };

      const result = validateSchema(schema, 'TestRating');
      expect(result.errors.some(e => e.message.includes('Rating'))).toBe(true);
    });

    it('flags required properties explicitly set to undefined (the || undefined class)', () => {
      const schema = {
        '@type': 'JobPosting',
        title: undefined,
        description: 'A posting whose title was conditionally dropped',
        datePosted: '2026-06-01',
        validThrough: '2026-08-30',
        employmentType: 'INTERN',
        hiringOrganization: { '@type': 'Organization', name: '360Ghar' },
        jobLocation: { '@type': 'Place' },
        baseSalary: { '@type': 'MonetaryAmount' },
      };

      const result = validateSchema(schema, 'TestJobPosting');
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.message.includes('title'))).toBe(true);
    });

    it('propagates nested validation errors into isValid', () => {
      const schema = {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the price?',
            // Missing acceptedAnswer -> nested error must flip isValid
          },
        ],
      };

      const result = validateSchema(schema, 'TestFAQ');
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.message.includes('acceptedAnswer'))).toBe(true);
    });

    it('requires Product to have offers, aggregateRating or review', () => {
      const schema = {
        '@type': 'Product',
        name: '2 BHK Apartment',
        image: 'https://360ghar.com/og-image-home.jpg',
        // No offers / aggregateRating / review
      };

      const result = validateSchema(schema, 'TestProduct');
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.message.includes('offers'))).toBe(true);
    });

    it('requires price, priceCurrency and availability on Product offers', () => {
      const schema = {
        '@type': 'Product',
        name: '2 BHK Apartment',
        image: 'https://360ghar.com/og-image-home.jpg',
        offers: {
          '@type': 'Offer',
          price: 7500000,
          // Missing priceCurrency and availability
        },
      };

      const result = validateSchema(schema, 'TestProduct');
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.message.includes('priceCurrency'))).toBe(true);
      expect(result.errors.some(e => e.message.includes('availability'))).toBe(true);
    });

    it('flags an Event missing eventStatus', () => {
      const schema = {
        '@type': 'Event',
        name: 'Property Auction',
        startDate: '2026-07-01T10:00:00+05:30',
        endDate: '2026-07-01T18:00:00+05:30',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        image: 'https://360ghar.com/og-image-home.jpg',
        location: { '@type': 'Place', name: 'Gurugram' },
        // Missing eventStatus
      };

      const result = validateSchema(schema, 'TestEvent');
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.message.includes('eventStatus'))).toBe(true);
    });

    it('warns when VideoObject lacks contentUrl/embedUrl', () => {
      const schema = {
        '@type': 'VideoObject',
        name: '360° Virtual Tour',
        description: 'Immersive tour',
        thumbnailUrl: 'https://360ghar.com/og-image-home.jpg',
        uploadDate: '2026-06-01',
      };

      const result = validateSchema(schema, 'TestVideo');
      expect(result.isValid).toBe(true);
      expect(result.warnings.some(w => w.message.includes('contentUrl'))).toBe(true);
    });

    it('validates validThrough as a date', () => {
      const schema = {
        '@type': 'JobPosting',
        title: 'Test Intern',
        description: 'Test',
        datePosted: '2026-06-01',
        validThrough: 'not-a-date',
        employmentType: 'INTERN',
        hiringOrganization: { '@type': 'Organization', name: '360Ghar' },
        jobLocation: { '@type': 'Place' },
        baseSalary: { '@type': 'MonetaryAmount' },
      };

      const result = validateSchema(schema, 'TestJobPosting');
      expect(result.errors.some(e => e.message.includes('validThrough'))).toBe(true);
    });

    it('validates FAQ schema with property-specific questions', () => {
      const schema = generatePropertyFaqStructuredData({
        propertyType: 'Apartment',
        location: 'Gurgaon',
      });

      const result = validateSchema(schema, 'TestPropertyFAQ');
      expect(result.isValid).toBe(true);
      expect(schema.mainEntity.length).toBeGreaterThan(0);
    });

    it('validates FAQ schema with locality-specific questions', () => {
      const schema = generateLocalityFaqStructuredData({
        localityName: 'DLF Phase 1',
        city: 'Gurgaon',
      });

      const result = validateSchema(schema, 'TestLocalityFAQ');
      expect(result.isValid).toBe(true);
      expect(schema.mainEntity.length).toBeGreaterThan(0);
    });
  });

  describe('generatePersonStructuredData', () => {
    it('generates complete Person schema with all fields', () => {
      const schema = generatePersonStructuredData({
        name: 'Jane Smith',
        jobTitle: 'Founder & CEO',
        image: 'https://360ghar.com/team/jane.jpg',
        bio: 'Industry veteran with 15 years experience',
        linkedin: 'https://linkedin.com/in/janesmith',
        twitter: 'https://twitter.com/janesmith',
        expertise: ['Real Estate', 'PropTech', 'Investment'],
      });

      expect(schema['@type']).toBe('Person');
      expect(schema.name).toBe('Jane Smith');
      expect(schema.jobTitle).toBe('Founder & CEO');
      expect(schema.knowsAbout).toHaveLength(3);
    });

    it('handles minimal Person schema', () => {
      const schema = generatePersonStructuredData({ name: 'Test User' });
      expect(schema['@type']).toBe('Person');
      expect(schema.name).toBe('Test User');
    });
  });

  describe('generateEventStructuredData', () => {
    it('generates complete Event schema', () => {
      const schema = generateEventStructuredData({
        name: 'Gurugram Property Expo 2026',
        description: 'Annual property exhibition',
        startDate: '2026-07-01T10:00:00+05:30',
        endDate: '2026-07-01T18:00:00+05:30',
        location: {
          name: '360Ghar Office',
          streetAddress: 'Sector 43',
          addressLocality: 'Gurgaon',
        },
        price: 0,
      });

      expect(schema['@type']).toBe('Event');
      expect(schema.eventStatus).toContain('EventScheduled');
      expect(schema.offers.price).toBe('0');
    });
  });

  describe('generateCourseStructuredData', () => {
    it('generates complete Course schema', () => {
      const schema = generateCourseStructuredData({
        name: 'Property Investment Masterclass',
        description: 'Master real estate investing',
        educationalLevel: 'Advanced',
        duration: 'PT12H',
        teaches: ['Market Analysis', 'Tax Planning', 'Legal'],
        price: 2999,
      });

      expect(schema['@type']).toBe('Course');
      expect(schema.provider.name).toBe('360Ghar Academy');
      expect(schema.teaches).toHaveLength(3);
    });
  });

  describe('validateAllStructuredData', () => {
    it('validates all realEstateStructuredData schemas', () => {
      const results = validateAllStructuredData();
      expect(results.realEstateStructuredData).toBeDefined();
      
      // Check that we have results for all schemas
      const schemaKeys = Object.keys(results.realEstateStructuredData);
      expect(schemaKeys.length).toBeGreaterThan(5);
    });
  });

  describe('generateValidationReport', () => {
    it('generates readable validation report', () => {
      const results = validateAllStructuredData();
      const report = generateValidationReport(results);
      
      expect(report).toContain('Structured Data Validation Report');
      expect(report).toContain('realEstateStructuredData');
      expect(report).toContain('Summary');
    });
  });

  describe('New Schema Types Coverage', () => {
    it('includes Person schema for E-E-A-T', () => {
      const schema = generatePersonStructuredData({
        name: 'Founder Name',
        jobTitle: 'CEO',
      });
      expect(schema['@type']).toBe('Person');
    });

    it('includes Event schema for expos/webinars', () => {
      const schema = generateEventStructuredData({
        name: 'Test Event',
        startDate: '2026-06-15T10:00:00+05:30',
        location: { name: 'Test Location' },
      });
      expect(schema['@type']).toBe('Event');
    });

    it('includes Podcast schema for audio content', () => {
      const schema = generatePodcastStructuredData({
        name: 'Real Estate Insights',
        description: 'Property podcast',
      });
      expect(schema['@type']).toBe('PodcastSeries');
    });

    it('includes Course schema for education', () => {
      const schema = generateCourseStructuredData({
        name: 'Investment Course',
        description: 'Learn investing',
      });
      expect(schema['@type']).toBe('Course');
    });

    it('includes QAPage schema for community', () => {
      const schema = generateQAPageStructuredData({
        question: 'Test question?',
        answer: 'Test answer',
      });
      expect(schema['@type']).toBe('QAPage');
      expect(schema.mainEntity.author).toBeDefined();
      expect(schema.mainEntity.text).toBe('Test question?');
      expect(schema.mainEntity.datePublished).toBeDefined();
    });

    it('includes Speakable schema for voice search', () => {
      const schema = generateSpeakableStructuredData({});
      expect(schema['@type']).toBe('SpeakableSpecification');
      expect(schema.cssSelector).toBeDefined();
    });

    it('includes Property FAQ schema', () => {
      const schema = generatePropertyFaqStructuredData({
        propertyType: 'Villa',
        location: 'Sohna Road',
      });
      expect(schema['@type']).toBe('FAQPage');
      expect(schema.mainEntity.length).toBeGreaterThan(0);
    });

    it('includes Locality FAQ schema', () => {
      const schema = generateLocalityFaqStructuredData({
        localityName: 'Sector 49',
        city: 'Gurgaon',
      });
      expect(schema['@type']).toBe('FAQPage');
      expect(schema.mainEntity.length).toBeGreaterThan(0);
    });

    it('includes Review schema', () => {
      const schema = generateReviewStructuredData({
        reviewBody: 'Great experience',
        ratingValue: '5',
        authorName: 'Test User',
      });
      expect(schema['@type']).toBe('Review');
    });

    it('includes Article schema', () => {
      const schema = generateArticleStructuredData({
        headline: 'Test Article',
        description: 'Test description',
      });
      expect(schema['@type']).toBe('Article');
    });

    it('includes JobPosting schema with Google-required fields', () => {
      const schema = generateJobPostingStructuredData({
        title: 'Content Creator Intern',
        description: 'Create engaging real estate content.',
        datePosted: '2026-06-01',
      });
      expect(schema['@type']).toBe('JobPosting');
      expect(schema.title).toBe('Content Creator Intern');
      expect(schema.datePosted).toBe('2026-06-01');
      expect(schema.validThrough).toBeTruthy();
      expect(schema.jobLocation.address.streetAddress).toBe('Sector 50, Gurugram');
      expect(schema.jobLocation.address.postalCode).toBe('122001');
      expect(schema.baseSalary['@type']).toBe('MonetaryAmount');
    });
  });
});
