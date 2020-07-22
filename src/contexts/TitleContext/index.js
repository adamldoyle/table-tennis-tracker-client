import React, { useState } from 'react';

const TitleContext = React.createContext({
  title: 'Home',
  setTitle: (title) => title,
});

export default TitleContext;

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState('Home');

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};
