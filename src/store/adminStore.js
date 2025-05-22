import { create } from 'zustand';
import { userService } from '../services/userService';
import { propertyService } from '../services/propertyService';

const useAdminStore = create((set) => ({
  // State
  users: [],
  allProperties: [],
  isLoading: false,
  error: null,
  
  // Actions
  getAllUsers: async (params = {}) => {
    try {
      set({ isLoading: true, error: null });
      const data = await userService.getAllUsers(params);
      set({
        users: data,
        isLoading: false,
      });
      return data;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Failed to fetch users'
      });
      return [];
    }
  },
  
  getAllProperties: async (params = {}) => {
    try {
      set({ isLoading: true, error: null });
      const data = await propertyService.getAllPropertiesAdmin(params);
      set({
        allProperties: data,
        isLoading: false,
      });
      return data;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Failed to fetch all properties'
      });
      return [];
    }
  },
  
  createUser: async (userData) => {
    try {
      set({ isLoading: true, error: null });
      const newUser = await userService.createUser(userData);
      set(state => ({
        users: [...state.users, newUser],
        isLoading: false,
      }));
      return newUser;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Failed to create user'
      });
      return null;
    }
  },
  
  updateUser: async (id, userData) => {
    try {
      set({ isLoading: true, error: null });
      const updatedUser = await userService.updateUser(id, userData);
      set(state => ({
        users: state.users.map(user => 
          user.id === id ? updatedUser : user
        ),
        isLoading: false,
      }));
      return updatedUser;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Failed to update user'
      });
      return null;
    }
  },
  
  verifyProperty: async (id) => {
    try {
      set({ isLoading: true, error: null });
      const verifiedProperty = await propertyService.verifyProperty(id);
      set(state => ({
        allProperties: state.allProperties.map(prop => 
          prop.id === id ? verifiedProperty : prop
        ),
        isLoading: false,
      }));
      return verifiedProperty;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Failed to verify property'
      });
      return null;
    }
  },
  
  clearError: () => set({ error: null }),
}));

export default useAdminStore; 