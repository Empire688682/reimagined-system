import React from 'react';
import BookingTopLocation from '@/component/BookingTopLocation/BookingTopLocation';
import BookingFAQ from '@/component/BookingFAQ/BookingFAQ';
import BookingHero from '@/component/BookingHero/BookingHero';
import ContactPage from '@/component/ContactPage/ContactPage';

const Page = () => {
  return (
    <div>
      <BookingHero/>
      <BookingTopLocation/>
      <BookingFAQ/>
      {/*Footer*/}
      <ContactPage />
    </div>
  )
}

export default Page
