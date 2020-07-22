import React, { useContext, useLayoutEffect, useEffect } from 'react';
import TitleContext from '../../contexts/TitleContext';
import { API } from 'aws-amplify';

export default function Home() {
  const { setTitle } = useContext(TitleContext);

  useLayoutEffect(() => {
    setTitle('Home');
  }, [setTitle]);

  useEffect(() => {
    API.get('games', '/games').then(console.log);
  }, []);

  return <h1>Home</h1>;
}
