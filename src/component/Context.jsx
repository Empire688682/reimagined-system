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

  function Spin() {
    return <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"/>
  };

  return (
    <AppContext.Provider value={{
      route,
      allPropts,
    }}>
      {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};


