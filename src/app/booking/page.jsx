import React from 'react';
import BookingTopLocation from '@/component/BookingTopLocation/BookingTopLocation';
import BookingFAQ from '@/component/BookingFAQ/BookingFAQ';
import BookingHero from '@/component/BookingHero/BookingHero';

const Page = () => {
  return (
    <div>
      <BookingHero/>
      <BookingTopLocation/>
      <BookingFAQ/>
    </div>
  )
}

export default Page
