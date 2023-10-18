const ReuseableForm = ({ classNames, buttonText }) => {
  //classNames should be an object with a className string for:
  //form, labels, inputs, errors, and submitButton

  //buttonText should be a string that will be the text within the submit button

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  //Add whatever other actions need to happen when form is submitted
  const onSubmit = () => {
    handleSubmit();
  };

  return (
    <form className={classNames.form} onSubmit={onSubmit}>
      <label className={classNames.labels}>
        Name (* Required)
        <input
          className={classNames.inputs}
          placeholder="Your name"
          type="text"
          aria-label="Your name should be inputted here."
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 2,
              message: "Minimum length is 8 characters",
            },
            maxLength: {
              value: 30,
              message: "Maximum length is 30 characters",
            },
          })}
        />
      </label>
      {errors.name && (
        <span className={classNames.errors}>{errors.name.message}</span>
      )}
      <label className={classNames.labels}>
        Email (* Required)
        <input
          className={classNames.inputs}
          placeholder="Your email"
          type="text"
          aria-label="Your email should be inputted here."
          {...register("email", {
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
          })}
        />
      </label>
      {errors.email && (
        <span className={classNames.errors}>{errors.email.message}</span>
      )}
      <label className={classNames.labels}>
        Subject (* Required)
        <input
          className={classNames.inputs}
          placeholder="Subject"
          type="text"
          aria-label="The subject of your email should be inputted here."
          {...register("subject", {
            required: "This field is required",
            minLength: {
              value: 2,
              message: "Minimum length is 8 characters",
            },
            maxLength: {
              value: 100,
              message: "Maximum length is 100 characters",
              //The max length of 100 is a suggestion, it can easily be removed if other's feel necessary.
            },
          })}
        />
      </label>
      {errors.subject && (
        <span className={classNames.errors}>{errors.subject.message}</span>
      )}
      <label className={classNames.labels}>
        Message (* Required)
        <textarea
          className={classNames.inputs}
          placeholder="Message"
          type="text"
          aria-label="The content of your email should be inputted here."
          {...register("message", {
            required: "This field is required",
            minLength: {
              value: 2,
              message: "Minimum length is 8 characters",
            },
          })}
        />
      </label>
      {errors.message && (
        <span className={classNames.errors}>{errors.message.message}</span>
      )}

      <button
        className={classNames.submitButton}
        type="submit"
        aria-label="Submit"
        disabled={!isValid}
      >
        {buttonText}
      </button>
    </form>
  );
};
