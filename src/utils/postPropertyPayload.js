/**
 * Map the public post-property lead form values to a backend PropertyCreate body.
 * Backend requires: title, property_type, purpose, base_price (+ optional owner/location).
 */

export function parseBudgetToPrice(raw) {
  if (raw == null || raw === '') return 0;
  if (typeof raw === 'number' && Number.isFinite(raw)) {
    return Math.min(Math.max(raw, 0), 1e8);
  }
  if (typeof raw !== 'string') return 0;
  const digits = raw.replace(/,/g, '').match(/\d+(\.\d+)?/g);
  if (!digits?.length) return 0;
  return Math.min(Number(digits[0]), 1e8);
}

/**
 * @param {object} values form values from PostProperty formik
 * @returns {Record<string, unknown>} PropertyCreate-compatible payload
 */
export function mapPostPropertyToCreate(values) {
  const purpose = values.listing_type || 'rent';
  const propertyType =
    values.property_type === 'other' ? 'apartment' : values.property_type;
  const basePrice = parseBudgetToPrice(values.budget_range);
  const areaSqft = parseBudgetToPrice(values.property_size) || undefined;
  const contactPhone = values.phone
    ? String(values.phone).startsWith('+')
      ? String(values.phone)
      : `+91${values.phone}`
    : undefined;

  const leadNotes = [
    values.property_description?.trim?.() || values.property_description,
    values.budget_range ? `Budget: ${values.budget_range}` : null,
    values.property_size ? `Size: ${values.property_size}` : null,
    values.full_name || values.email || contactPhone
      ? `Owner contact: ${values.full_name || ''} / ${values.email || ''} / ${contactPhone || ''}`
      : null,
  ]
    .filter(Boolean)
    .join('\n');

  const payload = {
    title: `${propertyType} - ${values.property_location}`.slice(0, 200),
    description: leadNotes || undefined,
    property_type: propertyType,
    purpose,
    base_price: basePrice,
    full_address: values.property_location,
    city: values.property_location,
    owner_name: values.full_name || undefined,
    owner_contact: contactPhone,
  };

  if (areaSqft) payload.area_sqft = areaSqft;
  if (purpose === 'rent' && basePrice) payload.monthly_rent = basePrice;
  if (purpose === 'short_stay' && basePrice) payload.daily_rate = basePrice;

  return payload;
}

/** Keys that must never appear on a PropertyCreate body (legacy lead form). */
export const FORBIDDEN_PROPERTY_CREATE_KEYS = [
  'listing_type',
  'form_type',
  'contact_name',
  'contact_email',
  'contact_phone',
  'location',
  'budget_range',
  'property_size',
  'property_location',
];
