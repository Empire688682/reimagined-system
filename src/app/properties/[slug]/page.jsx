"use client"
import React, { useState } from 'react';
import Footer from '@/component/Footer/Footer';
import { useParams } from 'next/navigation';
import SingleProptsCart from '@/component/SingleProptsCart/SingleProptsCart';

const Page = () => {
    const { slug } = useParams();
    const [data, setData] = useState("");
    console.log(slug);
  return (
    <div>
     <SingleProptsCart data={data} />
      <Footer />
    </div>
  )
}

export default Page
