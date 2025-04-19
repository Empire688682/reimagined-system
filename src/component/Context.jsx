"use client"
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { properties } from './Data';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const route = useRouter();
  const [allPropts, setAllPropts] = useState([]);
  const fetchProperties = async () =>{
    setAllPropts(properties)
  }

  useEffect(()=>{
    fetchProperties()
  },[])

  const createAcctUrl = "https://api.ayinlafilms.com/api/v1/auth/initiate-signup/"
  return (
    <AppContext.Provider value={{
      route,
      allPropts,
      createAcctUrl
      }}>
        {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext = () =>{
    return useContext(AppContext);
};


