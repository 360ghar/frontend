import React from 'react';
import { Formik, Form, Field } from 'formik';
import { usePropertyStore } from '../../store';

const PropertyFilter = ({ onFilter }) => {
  const { setFilters, getAllProperties } = usePropertyStore();

  const propertyTypes = [
    { value: '', label: 'Any Type' },
    { value: 'HOUSE', label: 'House' },
    { value: 'APARTMENT', label: 'Apartment' },
    { value: 'CONDO', label: 'Condo' },
    { value: 'TOWNHOUSE', label: 'Townhouse' },
    { value: 'LAND', label: 'Land' },
    { value: 'COMMERCIAL', label: 'Commercial' },
  ];

  const statusOptions = [
    { value: '', label: 'Any Status' },
    { value: 'FOR_SALE', label: 'For Sale' },
    { value: 'FOR_RENT', label: 'For Rent' },
    { value: 'PENDING', label: 'Pending' },
    { value: 'SOLD', label: 'Sold' },
  ];

  const bedroomOptions = [
    { value: '', label: 'Any' },
    { value: '1', label: '1+' },
    { value: '2', label: '2+' },
    { value: '3', label: '3+' },
    { value: '4', label: '4+' },
    { value: '5', label: '5+' },
  ];

  const bathroomOptions = [
    { value: '', label: 'Any' },
    { value: '1', label: '1+' },
    { value: '2', label: '2+' },
    { value: '3', label: '3+' },
    { value: '4', label: '4+' },
  ];

  const handleSubmit = async (values) => {
    // Filter out empty values
    const filters = Object.fromEntries(
      Object.entries(values).filter(([_, v]) => v !== '')
    );
    
    // Convert string numbers to numbers
    if (filters.min_price) filters.min_price = Number(filters.min_price);
    if (filters.max_price) filters.max_price = Number(filters.max_price);
    if (filters.bedrooms) filters.bedrooms = Number(filters.bedrooms);
    if (filters.bathrooms) filters.bathrooms = Number(filters.bathrooms);
    if (filters.min_area) filters.min_area = Number(filters.min_area);
    
    // Update store filters
    setFilters(filters);
    
    // Fetch properties with new filters
    await getAllProperties(filters);
    
    // Call onFilter callback if provided
    if (onFilter) {
      onFilter(filters);
    }
  };

  return (
    <div className="property-filter">
      <Formik
        initialValues={{
          city: '',
          state: '',
          min_price: '',
          max_price: '',
          property_type: '',
          status: '',
          bedrooms: '',
          bathrooms: '',
          min_area: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ resetForm }) => (
          <Form>
            <div className="row g-3">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <Field
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder="City"
                  />
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <Field
                    type="text"
                    name="state"
                    className="form-control"
                    placeholder="State"
                  />
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="property_type">Property Type</label>
                  <Field as="select" name="property_type" className="form-select">
                    {propertyTypes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <Field as="select" name="status" className="form-select">
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="min_price">Min Price</label>
                  <Field
                    type="number"
                    name="min_price"
                    className="form-control"
                    placeholder="Min Price"
                  />
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="max_price">Max Price</label>
                  <Field
                    type="number"
                    name="max_price"
                    className="form-control"
                    placeholder="Max Price"
                  />
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="bedrooms">Bedrooms</label>
                  <Field as="select" name="bedrooms" className="form-select">
                    {bedroomOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="bathrooms">Bathrooms</label>
                  <Field as="select" name="bathrooms" className="form-select">
                    {bathroomOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="min_area">Min Area (sqft)</label>
                  <Field
                    type="number"
                    name="min_area"
                    className="form-control"
                    placeholder="Min Area"
                  />
                </div>
              </div>
              
              <div className="col-12 mt-4">
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary flex-grow-1">
                    Filter Properties
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      resetForm();
                      handleSubmit();
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PropertyFilter; 