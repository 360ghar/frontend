import api from './api';

export const mediaService = {
  // Get media for a specific property
  getPropertyMedia: async (propertyId, params = {}) => {
    const response = await api.get(`/media/property/${propertyId}`, { params });
    return response.data;
  },
  
  // Upload new media file
  uploadMedia: async (formData) => {
    const response = await api.post('/media/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  
  // Create media with URL
  createMedia: async (mediaData) => {
    const response = await api.post('/media', mediaData);
    return response.data;
  },
  
  // Update media
  updateMedia: async (id, mediaData) => {
    const response = await api.put(`/media/${id}`, mediaData);
    return response.data;
  },
  
  // Delete media
  deleteMedia: async (id) => {
    const response = await api.delete(`/media/${id}`);
    return response.data;
  }
};

export default mediaService; 