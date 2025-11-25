export type DirectusBlock = {
  id: string;
  // DEV : manque Quoteblock
  type: 'image' | 'header' | 'paragraph' | 'embed';
  data: any;
};

// Structured Data Types
export type PageStructuredDataType = {
  url: string;
  title: string;
};

export type ServiceStructuredDataType = {
  serviceType: string;
  description: string;
};

export type ArticleStructuredDataType = {
  name: string;
  url: string;
  image: string;
  description: string;
  // datePublished: string; DEV: no date for now
};

export type StructureDataType = {
  page: PageStructuredDataType;
  services?: ServiceStructuredDataType[];
  articles?: ArticleStructuredDataType[];
};
