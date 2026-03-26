import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries, MicroCMSImage, MicroCMSDate } from 'microcms-js-sdk';

// Initialize microCMS client
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

// Types based on microCMS schema
export type News = {
  id: string;
  title: string;
  category: string;
  publishedAtDate: string;
} & MicroCMSDate;

export type Event = {
  id: string;
  title: string;
  date: string;
  location?: string;
  description?: string;
  link?: string;
  imageUrl?: MicroCMSImage;
} & MicroCMSDate;

export type Project = {
  id: string;
  title: string;
  desc: string;
  img: MicroCMSImage;
  color: string;
  colorText: string;
} & MicroCMSDate;

// Fetchers
export const getNewsList = async (queries?: MicroCMSQueries) => {
  return await client.getList<News>({
    endpoint: 'news',
    queries,
  });
};

export const getEventList = async (queries?: MicroCMSQueries) => {
  return await client.getList<Event>({
    endpoint: 'events',
    queries,
  });
};

export const getProjectList = async (queries?: MicroCMSQueries) => {
  return await client.getList<Project>({
    endpoint: 'projects',
    queries,
  });
};
