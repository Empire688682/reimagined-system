"use client";
import Login from '@/component/Auth/Login';
import { useGlobalContext } from '@/component/Context';
import React, { useEffect } from 'react';

const Page = () => {
  const {route, userToken} = useGlobalContext();

  useEffect(() => {
      if (userToken) {
        route.push("/");
      }
    }, [userToken, route]);

  return (
    <div>
      <Login />
    </div>
  )
}

export default Page
