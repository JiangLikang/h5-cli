export const dva = {
  config: {
    onError(e) {
      console.error('dva onError: ', e.message);
    }
  },
};
