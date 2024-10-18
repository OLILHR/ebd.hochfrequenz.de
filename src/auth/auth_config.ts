const config = {
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
};

export default config as {
  domain: string;
  clientId: string;
};
