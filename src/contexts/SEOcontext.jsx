import React, { createContext, useContext, useState } from 'react';

const SEOContext = createContext();

export const SEOProvider = ({ children }) => {
  const [seoData, setSeoData] = useState({
    title: 'Carer OnCall Services',
    description: 'A Home Care Services Agency',
    keywords: 'Care, Services, Home Care, Agency, Carer, Carers',
  });

  return (
    <SEOContext.Provider value={{ seoData, setSeoData }}>
      {children}
    </SEOContext.Provider>
  );
};

export const useSEO = () => useContext(SEOContext);
