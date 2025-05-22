import { create } from 'zustand';
import { propertyService } from '../services/propertyService';
import { mediaService } from '../services/mediaService';

const usePropertyStore = create((set, get) => ({
  // State
  properties: [],
  userProperties: [],
  currentProperty: null,
  propertyMedia: [],
  filters: {
    skip: 0,
    limit: 12,
    min_price: null,
    max_price: null,
    city: null,
    status: null,
    property_type: null,
    bedrooms: null,
    bathrooms: null,
    min_area: null,
    state: null,
    zip_code: null,
  },
  isLoading: false,
  error: null,
  
  // Actions
  getAllProperties: async (additionalFilters = {}) => {
    try {
      set({ isLoading: true, error: null });
      const filters = { ...get().filters, ...additionalFilters };
      // Remove null or undefined values
      Object.keys(filters).forEach(key => {
        if (filters[key] === null || filters[key] === undefined) {
          delete filters[key];
        }
      });
      
      const data = await propertyService.getAllProperties(filters);
      set({
        properties: data,
        isLoading: false,
      });
      return data;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Failed to fetch properties'
      });
      return [];
    }
  },
  
  getUserProperties: async () => {
    try {
      set({ isLoading: true, error: null });
      const data = await propertyService.getUserProperties();
      set({
        userProperties: data,
        isLoading: false,
      });
      return data;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Failed to fetch your properties'
      });
      return [];
    }
  },
  
  getPropertyById: async (id) => {
    try {
      set({ isLoading: true, error: null });
      const property = await propertyService.getPropertyById(id);
      
      // Also fetch media for the property
      const media = await mediaService.getPropertyMedia(id);
      
      set({
        currentProperty: property,
        propertyMedia: media,
        isLoading: false,
      });
      return property;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Failed to fetch property details'
      });
      return null;
    }
  },
  
  createProperty: async (propertyData) => {
    try {
      set({ isLoading: true, error: null });
      const newProperty = await propertyService.createProperty(propertyData);
      set(state => ({
        userProperties: [...state.userProperties, newProperty],
        isLoading: false,
      }));
      return newProperty;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Failed to create property'
      });
      return null;
    }
  },
  
  updateProperty: async (id, propertyData) => {
    try {
      set({ isLoading: true, error: null });
      const updatedProperty = await propertyService.updateProperty(id, propertyData);
      
      // Update in both properties and userProperties arrays
      set(state => ({
        userProperties: state.userProperties.map(prop => 
          prop.id === id ? updatedProperty : prop
        ),
        properties: state.properties.map(prop => 
          prop.id === id ? updatedProperty : prop
        ),
        currentProperty: state.currentProperty?.id === id ? updatedProperty : state.currentProperty,
        isLoading: false,
      }));
      
      return updatedProperty;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Failed to update property'
      });
      return null;
    }
  },
  
  deleteProperty: async (id) => {
    try {
      set({ isLoading: true, error: null });
      await propertyService.deleteProperty(id);
      
      // Remove from both properties and userProperties arrays
      set(state => ({
        userProperties: state.userProperties.filter(prop => prop.id !== id),
        properties: state.properties.filter(prop => prop.id !== id),
        currentProperty: state.currentProperty?.id === id ? null : state.currentProperty,
        isLoading: false,
      }));
      
      return true;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Failed to delete property'
      });
      return false;
    }
  },
  
  uploadPropertyMedia: async (formData) => {
    try {
      set({ isLoading: true, error: null });
      const newMedia = await mediaService.uploadMedia(formData);
      
      // Add new media to propertyMedia array
      set(state => ({
        propertyMedia: [...state.propertyMedia, newMedia],
        isLoading: false,
      }));
      
      return newMedia;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Failed to upload media'
      });
      return null;
    }
  },
  
  deletePropertyMedia: async (mediaId) => {
    try {
      set({ isLoading: true, error: null });
      await mediaService.deleteMedia(mediaId);
      
      // Remove media from propertyMedia array
      set(state => ({
        propertyMedia: state.propertyMedia.filter(media => media.id !== mediaId),
        isLoading: false,
      }));
      
      return true;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Failed to delete media'
      });
      return false;
    }
  },
  
  setFilters: (newFilters) => {
    set(state => ({
      filters: {
        ...state.filters,
        ...newFilters
      }
    }));
  },
  
  clearCurrentProperty: () => {
    set({
      currentProperty: null,
      propertyMedia: [],
    });
  },
  
  clearError: () => set({ error: null }),
}));

export default usePropertyStore; 