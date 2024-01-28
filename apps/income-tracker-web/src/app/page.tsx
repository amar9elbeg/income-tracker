'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const checkUserToken = () => {
      const token = localStorage.getItem('user');
      if (!token) {
        router.push('/sign-in');
      }
    };
    checkUserToken();
  }, [router]);

  return <div>Hello world from home page!!</div>;
};

export default HomePage;
