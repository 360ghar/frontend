import api from './api';

export const userService = {
  // Get user by ID
  getUserById: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },
  
  // Get all users (admin only)
  getAllUsers: async (params = {}) => {
    const response = await api.get('/users', { params });
    return response.data;
  },
  
  // Create user (admin only)
  createUser: async (userData) => {
    const response = await api.post('/users', userData);
    return response.data;
  },
  
  // Update user (admin only)
  updateUser: async (id, userData) => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  }
};

export default userService; 