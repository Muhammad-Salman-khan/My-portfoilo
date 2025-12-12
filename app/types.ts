export type Datatype = {
  id: number;
  documentId: string;
  title: string;
  image?: string;
  url: string;
  date: string;
  description: string;
  category: string;
  feature: boolean;
};
export type Post = {
  id: string;
  title: string;
  document: string;
  body: string;
  excerpt: string;
  image?: string;
  slug: string;
  date: string;
};
export type StrapiResponse<T> = {
  data: T[];
};
export type StrapiSinglePostResponse<T> = {
  data: T[];
};
export type StrapiProject = {
  id: number;
  documentId: string;
  title: string;
  image: string;
  url: string;
  date: string;
  description: string;
  category: string;
  feature: boolean;
};
export type StrapiPost = {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  body: string;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
};
export type StrapiPostDetail = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image?: {
    id: string;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    formats: {
      // ✅ Formats belongs INSIDE image
      thumbnail?: { url: string; width: number; height: number };
      small?: { url: string; width: number; height: number };
      medium?: { url: string; width: number; height: number };
      large?: { url: string; width: number; height: number };
    };
  };
};
