//Objects that define rules for the inputs, edit as you need for your form.
/*Refer to this link (https://react-hook-form.com/get-started#Applyvalidation) to see
what the options for validation settings are. */

export const nameRules = {
  required: "This field is required",
  minLength: {
    value: 2,
    message: "Minimum length is 2 characters",
  },
  maxLength: {
    value: 30,
    message: "Maximum length is 30 characters",
  },
};

export const emailRules = {
  required: "This field is required",
  maxLength: {
    value: 30,
    message: "Maximum length is 30 characters",
  },
  pattern: {
    value:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: "Invalid email format",
  },
};

export const subjectRules = {
  required: "This field is required",
  minLength: {
    value: 3,
    message: "Minimum length is 3 characters",
  },
  maxLength: {
    value: 100,
    message: "Maximum length is 100 characters",
  },
};

export const messageRules = {
  required: "This field is required",
  minLength: {
    value: 8,
    message: "Minimum length is 8 characters",
  },
};
