import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
      console.log("Login Response:", data);

      if (!data?.token) {
        console.error("Token not found in response");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    },

    onError: (error) => {
      console.error("Login failed:", error.response?.data);
    },
  });
};
