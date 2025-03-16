import React from 'react';
import BookingHero from '../component/BookingHero/BookingHero';
import BookingTopLocation from '../component/BookingTopLocation/BookingTopLocation';
import Footer from '../component/Footer/Footer';

const Page = () => {
  return (
    <div>
      <BookingHero/>
      <BookingTopLocation/>
      {/*Footer*/}
      <Footer/>
    </div>
  )
}

export default Page
