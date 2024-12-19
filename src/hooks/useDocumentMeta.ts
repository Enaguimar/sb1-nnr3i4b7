import { useEffect } from 'react';

interface DocumentMeta {
  title: string;
  description: string;
  keywords?: string;
}

export function useDocumentMeta({ title, description, keywords }: DocumentMeta) {
  useEffect(() => {
    // Update title
    document.title = `${title} | Kastillikos Pyrofantasía`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
  }, [title, description, keywords]);
}