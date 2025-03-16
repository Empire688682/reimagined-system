import React from 'react';
import BookingHero from '../component/BookingHero/BookingHero';
import BookingTopLocation from '../component/BookingTopLocation/BookingTopLocation';
import Footer from '../component/Footer/Footer';
import BookingFAQ from '../component/BookingFAQ/BookingFAQ';

const Page = () => {
  return (
    <div>
      <BookingHero/>
      <BookingTopLocation/>
      <BookingFAQ/>
      {/*Footer*/}
      <Footer/>
    </div>
  )
}

export default Page
