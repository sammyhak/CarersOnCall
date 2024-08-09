import React, { useEffect } from 'react';
import { useSEO } from './SEOcontext';

const SEOManager = () => {
  const { seoData } = useSEO();

  useEffect(() => {
    document.title = seoData.title;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = seoData.description;
      document.head.appendChild(newMetaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoData.keywords);
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = seoData.keywords;
      document.head.appendChild(newMetaKeywords);
    }
  }, [seoData]);

  return null; // This component does not need to render anything
};

export default SEOManager;
