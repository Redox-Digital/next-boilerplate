export type ActionType = { label: string; href: string; secondary?: boolean };

export type CardType = {
  title: string;
  description?: string;
  picto?: string;
  action?: ActionType;
};

export type LogoProps = {
  name: string;
  img: string;
  url?: string;
  showLabel?: boolean;
};

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

export type AccordionEltType = {
  id: string;
  title: string;
  body?: React.ReactNode;
  initOpen?: boolean;
};

export type DirectusFileType = {
  id: string;
  title: string;
  description?: string;
  type: string;
  width: number;
  height: number;
};

export type DirectusGalleryApiType = {
  id: number;
  order: number;
  directus_files_id: DirectusFileType;
};
