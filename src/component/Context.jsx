"use client"
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { properties } from './Data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const route = useRouter();
  const [allPropts, setAllPropts] = useState([]);
  const fetchProperties = async () => {
    setAllPropts(properties)
  }

  useEffect(() => {
    fetchProperties()
  }, []);

  const BaseUrl = "https://ayinla.vercel.app";

  return (
    <AppContext.Provider value={{
      route,
      allPropts,
      BaseUrl
    }}>
      {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};


