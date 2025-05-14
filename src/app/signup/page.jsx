"use client";
import InitateSignup from '@/component/Auth/InitateSignup';
import { useGlobalContext } from '@/component/Context';
import React, { useEffect } from 'react';

const page = () => {
  const {route, userToken} = useGlobalContext();
    
  useEffect(() => {
    if (userToken) {
      route.push("/");
    }
  }, [userToken, route]);
  
  return (
    <div>
      <InitateSignup />
    </div>
  )
}

export default page
