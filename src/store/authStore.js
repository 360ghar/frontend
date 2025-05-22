import { create } from 'zustand';
import { authService } from '../services/authService';

const useAuthStore = create((set, get) => ({
  // State
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  isAuthenticated: !!localStorage.getItem('token'),
  isLoading: false,
  error: null,
  
  // Actions
  login: async (email, password) => {
    try {
      set({ isLoading: true, error: null });
      const data = await authService.login(email, password);
      
      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
        
        // After getting token, fetch user profile
        const userProfile = await authService.getCurrentUser();
        localStorage.setItem('user', JSON.stringify(userProfile));
        
        set({
          token: data.access_token,
          user: userProfile,
          isAuthenticated: true,
          isLoading: false,
        });
        
        return true;
      }
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Failed to login'
      });
      return false;
    }
  },
  
  register: async (userData) => {
    try {
      set({ isLoading: true, error: null });
      await authService.register(userData);
      set({ isLoading: false });
      
      // Login after successful registration
      return get().login(userData.email, userData.password);
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Registration failed'
      });
      return false;
    }
  },
  
  logout: () => {
    authService.logout();
    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  },
  
  updateProfile: async (userData) => {
    try {
      set({ isLoading: true, error: null });
      const updatedUser = await authService.updateCurrentUser(userData);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      set({
        user: updatedUser,
        isLoading: false,
      });
      return true;
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.detail || 'Failed to update profile'
      });
      return false;
    }
  },
  
  clearError: () => set({ error: null }),
}));

export default useAuthStore; 