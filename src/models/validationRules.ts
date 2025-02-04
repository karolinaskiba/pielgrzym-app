export const validationRules = {
  required: (v) => !!v || 'Pole jest wymagane',
  email: (v) => /.+@.+\..+/.test(v) || 'Niepoprawny email',
  minLength: (length) => (v) =>
    (v && v.length >= length) || `Minimum ${length} znaków`,
  maxLength: (length) => (v) =>
    (v && v.length <= length) || `Maksimum ${length} znaków`,
  onlyNumbers: (v) => /^\d+$/.test(v) || 'Dozwolone tylko cyfry',
  phoneNumber: (v: string) =>
    /^\+?[0-9]{9,15}$/.test(v) || 'Invalid phone number format.',
};
