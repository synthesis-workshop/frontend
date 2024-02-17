import { useForm } from "react-hook-form";
import { Button } from "../button";
import { Form } from "./form";

export default {
  title: "Components/Form",
  parameters: {
    docs: {
      description: {
        component: `Form component using react-hook-form`,
      },
    },
  },
};

const nameRules = {
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

const emailRules = {
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

const subjectRules = {
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

const messageRules = {
  required: "This field is required",
  minLength: {
    value: 8,
    message: "Minimum length is 8 characters",
  },
};

const Template = () => {
  //Object of TailWindCSS classes
  const formClasses = {
    form: `flex bg-primary p-10 gap-10 flex-col w-max font-text rounded-xl justify-center 
    xl:max-w-xlPageContent
    lg:max-w-lgPageContent  
    md:max-w-mdPageContent md:p-10 
    sm:max-w-smPageContent sm:w-full sm:gap-6 sm:py-6 sm:px-4 `,
    formContainer: `flex w-full items-start width-full flex-col gap-6 
      md:gap-10 md:flex-row `,
    formLabelTypeOne:
      "w-full flex flex-col justify-center items-start gap-2 text-base tracking-tight text-white ",
    formInputTypeOne: `w-auto px-5 py-4 justify-center items-start gap-2.5 self-stretch 
    rounded-lg border-2 border-solid border-formBorder bg-formBackground `,
    formLabelTypeTwo: `w-full flex flex-col justify-center items-start gap-2 text-base 
    tracking-tight text-white `,
    formInputTypeTwo: `w-full px-5 py-4 justify-center items-start gap-2.5 self-stretch rounded-lg border-2 border-solid 
      border-formBorder bg-formBackground `,
    formInputTypeThree: `w-50% h-44 px-5 py-4 justify-center items-start gap-2.5 
    self-stretch rounded-lg border-2 border-solid border-formBorder bg-formBackground `,
    errorClassname: "text-red text-xs ",
  };

  //Change this object to have the input's name and the type of data the input takes.
  type FormFields = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit = handleSubmit(() => {
    alert("Submitted!");
  });

  return (
    <Form className={formClasses.form} onSubmit={onSubmit}>
      <div className={formClasses.formContainer}>
        <Form.Label
          className={formClasses.formLabelTypeOne}
          labelText="Name (* Required)"
        >
          <Form.SingleLineTextInput
            className={formClasses.formInputTypeOne}
            wrapperClassName="contents"
            placeholder="Your Name"
            inputId="name"
            ariaLabel="Your name should be inputted here."
            type="text"
            name="name"
            register={register}
            rules={nameRules}
          />
          {errors.name?.message && (
            <span className={formClasses.errorClassname}>
              {errors.name?.message}
            </span>
          )}
        </Form.Label>

        <Form.Label
          className={formClasses.formLabelTypeOne}
          labelText="Email (* Required)"
        >
          <Form.SingleLineTextInput
            className={formClasses.formInputTypeOne}
            wrapperClassName="contents"
            placeholder="Your Email"
            inputId="email"
            ariaLabel="Your Email address should be inputted here."
            type="text"
            name="email"
            register={register}
            rules={emailRules}
          />
          {errors.email?.message && (
            <span className={formClasses.errorClassname}>
              {errors.email?.message}
            </span>
          )}
        </Form.Label>
      </div>
      <Form.Label
        className={formClasses.formLabelTypeTwo}
        labelText="Subject (* Required)"
      >
        <Form.SingleLineTextInput
          className={formClasses.formInputTypeTwo}
          wrapperClassName="contents"
          placeholder="Subject"
          inputId="subject"
          ariaLabel="Your email's subject line should be inputted here."
          type="text"
          name="subject"
          register={register}
          rules={subjectRules}
        />
        {errors.subject?.message && (
          <span className={formClasses.errorClassname}>
            {errors.subject?.message}
          </span>
        )}
      </Form.Label>
      <Form.Label
        className={formClasses.formLabelTypeTwo}
        labelText="Message (* Required)"
      >
        <Form.TextboxInput
          className={formClasses.formInputTypeThree}
          placeholder="Message"
          ariaLabel="The content of your email should be inputted here."
          id="message"
          rows={10}
          cols={100}
          name="message"
          rules={messageRules}
          register={register}
        />
        {errors.message?.message && (
          <span className={formClasses.errorClassname}>
            {errors.message?.message}
          </span>
        )}
      </Form.Label>
      <Button className="mx-auto" variant="secondary" type="submit">
        Send Message
      </Button>
    </Form>
  );
};

export const FormComponent = Template.bind({});
