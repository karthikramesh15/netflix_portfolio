// src/queries/getPhotography.ts
import datoCMSClient from './datoCMSClient';
import { Photography } from '../types';

const GET_PHOTOGRAPHY = `
  query {
    allPhotographies {
      id
      photos {
        url
        alt
      }
    }
  }
`;

export async function getPhotography(): Promise<Photography[]> {
  try {
    const response = await datoCMSClient.request<{ allPhotographies: Photography[] }>(GET_PHOTOGRAPHY);

    console.log("RAW DATA FROM DATOCMS:", response);

    return response.allPhotographies ?? [];
  } catch (error) {
    console.error('❌ Error fetching photography data:', error);
    throw error;
  }
}
