import api from './api';

export const propertyService = {
  // Get all properties with optional filters (admin also uses this endpoint with auth)
  getAllProperties: async (filters = {}) => {
    const response = await api.get('/properties', { params: filters });
    return response.data;
  },

  // Get properties belonging to the current user
  getUserProperties: async (params = {}) => {
    const response = await api.get('/properties/me', { params });
    return response.data;
  },

  // Get property by ID
  getPropertyById: async (id) => {
    const response = await api.get(`/properties/${id}`);
    return response.data;
  },

  // Create new property
  createProperty: async (propertyData) => {
    const response = await api.post('/properties', propertyData);
    return response.data;
  },

  // Update property
  updateProperty: async (id, propertyData) => {
    const response = await api.put(`/properties/${id}`, propertyData);
    return response.data;
  },

  // Delete property
  deleteProperty: async (id) => {
    const response = await api.delete(`/properties/${id}`);
    return response.data;
  },
};

export default propertyService;
