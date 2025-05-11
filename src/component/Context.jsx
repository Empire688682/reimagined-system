"use client"
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios";
import { toast, } from "react-toastify";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const route = useRouter();
  const [allPropts, setAllPropts] = useState([]);
  //Authenticational States//
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
   const [userToken, setUserToken] = useState("");
  
     useEffect(()=>{
     if(typeof window !== "undefined"){
       const token = localStorage.getItem("AccessToken");
      if(token){
        setUserToken(token);
      }
     }
     },[]);
  
     console.log("userToken:", userToken);

  useEffect(() => {
    handlePropsSearch()
  }, []);

  const BaseUrl = "https://ayinla.vercel.app";
  const ApiUrl = "https://ayinla-api.aweayo.com.ng";


  //Authenticational fuctions//

  // State to manage user input
  const [formData, setFormData] = useState({
    token: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    job_title: "",
  });

  // State to track password validation conditions
  const [formCondition, setFormCondition] = useState({
    length: false,
    character: false,
  });

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Handles input changes and updates form data
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "state" ? { city: "" } : {}), // Reset city when state changes
    }));
  };

  // Validates password conditions whenever the password input changes
  const handleCondition = () => {
    const { password } = formData;
    setFormCondition({
      length: password.length >= 8, // Checks if password is at least 8 characters long
      character: /[!@#$%^&*(),.?":{}|<>]/.test(password), // Checks if password contains a special character
    });
  };

  // Runs password validation whenever password state changes
  useEffect(() => {
    handleCondition();
  }, [formData.password]);

  // Handles form submission for initial account creation with Email only
  const handleInitateSignup = async (e) => {
    e.preventDefault();
    const { email } = formData;

    // Validate required fields
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg("Please enter a valid email address");
      setTimeout(() => setErrorMsg(""), 2000);
      return;
    }

    try {
      setLoading(true);

      // Send the request with the required headers
      const response = await axios.post(`${ApiUrl}/api/v1/auth/initiate-signup`, {
        email: formData.email,
        base_url: BaseUrl + "/signup/complete-signup",
      }, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "ApiKeyAuth",
        },
      });

      // Check if the response status is 204 (No Content)
      if (response.status === 204) {
        console.log("response:", response);
        setFormData({
          token: "",
          email: "",
          password: "",
          first_name: "",
          last_name: "",
          phone_number: "",
          job_title: "",
        })
        toast.success("Please Check your email for comfirmation");

      } else {
        // Handle unexpected response status
        console.log("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error(error.response?.data?.error_code || error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };



  // Handles Signup with google
  const handleGoogleSignup = async () => {
    try {
      const response = await axios.get(`${ApiUrl}/api/v1/auth/google`, {
        url: "http://localhost:3000"
      }, {
        headers: {
          "Content-Type": "aplication/json"
        }
      });
      if (response.status === 200) {
        console.log("response:", response);
        alert("Login with google successful");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error(error.response?.data?.error_code || error.message || "An error occurred");
    }
  }

  // Handles full form submission with additional details
  const handleCompleteSignup = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.first_name.trim() || !formData.last_name.trim() ||
      !formData.phone_number.trim() || !formData.job_title.trim()) {
      setErrorMsg("All fields are required");
      setTimeout(() => setErrorMsg(""), 4000);
      return;
    }
    if (!formCondition.length || !formCondition.character) {
      setErrorMsg("Password must be at least 8 characters long with special character");
      setTimeout(() => setErrorMsg(""), 4000);
      return;
    }

    try {
      // Send the request with the required headers
      const response = await axios.post(`${ApiUrl}/api/v1/auth/complete-signup`, {
        token: formData.token,
        email: formData.email,
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone_number: formData.phone_number,
        job_title: formData.job_title,
        password: formData.password,
        base_url: BaseUrl,
      }, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "ApiKeyAuth",
        },
      });

      // Check if the response status is 204 (No Content)
      if (response.status === 204) {
        console.log("User signup successfully");
        alert("User registered successfully");

        // Move to EmailVerification form
        setFormCategory("EmailVerification");
      } else {
        // Handle unexpected response status
        console.log("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMsg(error.response?.data?.error_code || error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Handles skipping CompleteSignup
  const handleSkipClick = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully", formData);
    window.scrollTo(0, 0)
    toast.success("User registered with half details");
    route.push("/");
  };

  // Handles resending email
  const handleEmailVerification = () => {
    alert(`Resending email successfully to ${formData.email}`)
  }

  const [searchQuery, setSearchQuery] = useState("Lagos");
  const [page, setPage] = useState(0);
  const [searchLoading, setSeachLoading] = useState(false);

  const handlePropsSearch = async () => {
    if (!searchQuery) {
      return
    }
    try {
      setSeachLoading(true);
      const response = await axios.post(`${ApiUrl}/api/v1/search`, {
        query: searchQuery,
        page: page,
        limit: 0
      }, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "ApiKeyAuth",
        },
      }
      );
      if (response.status === 200) {
        setAllPropts(response.data)
      }
    } catch (error) {
      console.error("Error during data fetching:", error);
      alert(error.response?.data?.error_code || error.message || "An error occurred");
    }
    finally{
      setSeachLoading(false)
    }
  };

  const fireSearch = () =>{
    if(!searchQuery){
      return
    }
    handlePropsSearch();
  }

  useEffect(() => {
    handlePropsSearch();
  }, [page]);
  
  return (
    <AppContext.Provider value={{
      route,
      allPropts,
      BaseUrl,
      ApiUrl,
      handleInitateSignup,
      handleCompleteSignup,
      handleGoogleSignup,
      userToken,
      loading,
      handleOnchange,
      formData,
      errorMsg,
      showPassword,
      setShowPassword,
      formCondition,
      handleSkipClick,
      handleEmailVerification,
      searchQuery,
      setSearchQuery,
      page, 
      setPage,
      fireSearch,
      searchLoading
    }}>
      {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};


