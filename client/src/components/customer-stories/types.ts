export interface Asset {
  _ref: string;
}

export interface Image {
  asset: Asset;
}

export interface Company {
  name: string;
  logo: {
    monochrome: string;
  };
}

export interface Author {
  name: string;
  position: string;
  company: Company;
  image: Image;
}

export interface Metric {
  data: string;
  description: string;
}

export interface RichTextChild {
  _key: string;
  _type: string;
  marks: string[];
  text: string;
}

export interface RichTextBlock {
  _key: string;
  _type: string;
  children: RichTextChild[];
  markDefs: any[];
  style: string;
}

export interface DocumentLink {
  link?: string;
  title?: string;
  openGraphImage?: Image;
  customerData?: {
    name?: string;
  };
}

export interface Quote {
  _id: string;
  author: Author;
  metrics: Metric[];
  quoteRichText: RichTextBlock[];
  documentLink: DocumentLink | null;
}
