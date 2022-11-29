export const addressFormatter = {
  format(options: { address: string; city: string; zipCode: string }) {
    const { address, city, zipCode } = options;
    return `${address}, ${city} (${zipCode})`;
  },
};
