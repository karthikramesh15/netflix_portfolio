import datoCMSClient from './datoCMSClient';
import { Certification } from '../types';

const GET_CERTIFICATIONS = `
  query Certifications {
    allAllcertifications {
      title
      issuer
      issueddate
      link
      iconname
    }
  }
`;

export async function getCertifications(): Promise<Certification[]> {
  const data = await datoCMSClient.request<{
    allAllcertifications: Certification[];
  }>(GET_CERTIFICATIONS);

  return data.allAllcertifications || [];
}
