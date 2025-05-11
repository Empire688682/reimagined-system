import CompleteResetPwd from '@/component/Auth/CompleteResetPwd'
import React from 'react';
import { Suspense } from 'react';

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CompleteResetPwd />
      </Suspense>
    </div>
  )
}

export default Page
