export const cleanPhoneSsnMaskedValue = (rawString: string) => {
  // const phoneRegex = /[^\d]/g;
  return rawString.replace( /[^\d]/g, '');
};
