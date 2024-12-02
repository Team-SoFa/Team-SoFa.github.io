import axios from "axios";
import apiClient from "./apiClient"; // apiClient를 올바르게 가져옴

export const getGoogleLoginUrl = async () => {
  try {
    console.log("Base URL:", apiClient.defaults.baseURL);
    const response = await apiClient.get("/login/oauth2/google");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch Google login URL:", error);
    throw error;
  }
};

export const acessToken = async () => {
  try {
    console.log("Base URL:", apiClient.defaults.baseURL);
    const response = await apiClient.get("/login/oauth2/code/google");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch Google login URL:", error);
    throw error;
  }
};
