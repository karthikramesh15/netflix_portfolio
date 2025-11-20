// getDatoCmsToken.ts
export const getDatoCmsToken = (): string => {
  const token = process.env.REACT_APP_DATOCMS_API_TOKEN;

  if (!token) {
    throw new Error("❌ Missing REACT_APP_DATOCMS_API_TOKEN in .env.local");
  }

  return token;
};
