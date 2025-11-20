// queries/getContactMe.ts
import datoCMSClient from './datoCMSClient';
import { ContactMe } from '../types';

const GET_CONTACT_ME = `
  query {
    contactme {
      profilepicture {
        url
      }
      name
      title
      summary
      companyuniversity
      linkedinlink
      email
      phonenumber
    }
  }
`;

export async function getContactMe(): Promise<ContactMe> {
  const response = await datoCMSClient.request<{ contactme: any }>(GET_CONTACT_ME);
  const raw = response.contactme;

  return {
    name: raw.name,
    title: raw.title,
    summary: raw.summary,
    companyUniversity: raw.companyuniversity,
    linkedinLink: raw.linkedinlink,
    email: raw.email,
    phoneNumber: raw.phonenumber,
    profilePicture: {
      url: raw.profilepicture?.url,
    },
  };
}
