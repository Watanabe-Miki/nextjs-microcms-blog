import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from "microcms-js-sdk";

export type CategoryType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  tag: string;
};

export type TagType = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};


export type BlogType = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage
  category?: CategoryType
  tag?: TagType[]
} & MicroCMSContentId & MicroCMSDate;
