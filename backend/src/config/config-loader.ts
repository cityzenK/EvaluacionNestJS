export const configLoader = () => {
  return {
    port: process.env.PORT,
    apiKey: process.env.API_KEY,
  };
};

export const mongoDb = () => ({
  URI: process.env.MONGO_URI,
});
