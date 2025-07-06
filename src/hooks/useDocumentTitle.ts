import { useEffect } from 'react';

interface MetaData {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

export const useMetaData = (metaData: MetaData) => {
  useEffect(() => {
    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const updateOGMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // 기본 메타 태그 업데이트
    if (metaData.title) {
      document.title = metaData.title;
    }
    
    if (metaData.description) {
      updateMetaTag('description', metaData.description);
    }
    
    if (metaData.keywords) {
      updateMetaTag('keywords', metaData.keywords);
    }

    // Open Graph 메타 태그 업데이트
    if (metaData.ogTitle) {
      updateOGMetaTag('og:title', metaData.ogTitle);
    }
    
    if (metaData.ogDescription) {
      updateOGMetaTag('og:description', metaData.ogDescription);
    }
    
    if (metaData.ogImage) {
      updateOGMetaTag('og:image', metaData.ogImage);
    }

  }, [metaData]);
}; 