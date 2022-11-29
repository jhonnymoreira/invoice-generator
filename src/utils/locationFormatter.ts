export const locationFormatter = {
  format(options: { country: string; state: string }) {
    const { country, state } = options;
    return `${state} - ${country}`;
  },
};
