import { create } from "zustand";
import axios from "axios";


const API_URL = "http://localhost:3000/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
user: null,
isAuthenticated: false,
error: null,
isLoading: false,
isCheckingAuth: true,

signup: async (email,password,name) => {
    set({isLoading:true,error:null});
    try {
        const response = await axios.post(`${API_URL}/signup`, {email,password,name});
        set({user:response.data.user,isAuthenticated:true,isLoading:false});
    } catch (error) {
        set({error:error.response.data.message || "Error signing up",isLoading:false});
        throw error;
    }
},

login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { email, password },
        { withCredentials: true } // Include cookies in the request
      );
  
      console.log("Login Response:", response.data); // Debugging: Log the response
  
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
  
      console.log("Updated State:", useAuthStore.getState()); // Debugging: Log the updated state
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message); // Debugging: Log the error
      set({
        error: error.response?.data?.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },


verifyEmail: async (code) => {
    set({isLoading:true,error:null});
    try {
        const response = await axios.post(`${API_URL}/verify-email`, {code});
        set({ user: response.data.user, isAuthenticated: true, isLoading:false });
        return response.data;
    } catch (error) {
        set({error:error.response.data.message || "Error verifying email",isLoading:false});
        throw error;
    }
},

checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/check-auth`, { withCredentials: true });
      const user = response.data.user;
  
      if (user && user.role) {
        set({
          user,
          isAuthenticated: true,
          isCheckingAuth: false,
        });
      } else {
        set({
          user: null,
          isAuthenticated: false,
          isCheckingAuth: false,
        });
      }
    } catch (error) {
      set({
        user: null,
        isAuthenticated: false,
        isCheckingAuth: false,
        error: error.response?.data?.message || "Error checking authentication",
      });
    }
  },


}));