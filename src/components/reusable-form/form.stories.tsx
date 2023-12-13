import { useForm } from "react-hook-form";
import { Button } from "./Button";
import {
  emailRules,
  messageRules,
  nameRules,
  subjectRules,
} from "./InputRules";
import { Label } from "./Label";
import { SingleLineTextInput } from "./SingleLineTextInput";
import { TextboxInput } from "./TextboxInput";

import { Form } from "./Form";

export default {
  title: "Components/ContactForm",
  parameters: {
    docs: {
      description: {
        component: `Form component using react-hook-form. 
          Subcomponents include: Label, SingleLineTextInput, TextboxInput, Button.`,
      },
    },
  },
};

const Template = () => {
  //Object of TailWindCSS classes
  const formClasses = {
    form: "flex bg-primary p-10 gap-10 flex-col w-max font-text max-w-pageContent ",
    formContainer: "flex w-full gap-10 items-start width-full",
    formLabelTypeOne:
      "w-full flex flex-col justify-center items-start gap-2 text-base tracking-tight text-white",
    formInputTypeOne: `w-auto px-5 py-4 justify-center items-start gap-2.5 self-stretch 
    rounded-lg border-2 border-solid border-formBorder bg-formBackground `,
    formLabelTypeTwo: `w-full flex flex-col justify-center items-start gap-2 text-base 
    tracking-tight text-white `,
    formInputTypeTwo: `w-full px-5 py-4 justify-center items-start gap-2.5 self-stretch rounded-lg border-2 border-solid 
      border-formBorder bg-formBackground `,
    formInputTypeThree: `w-50% h-44 px-5 py-4 justify-center items-start gap-2.5 
    self-stretch rounded-lg border-2 border-solid border-formBorder bg-formBackground `,
    formSubmitButton: `flex h-14 px-8 py-2.5 justify-center items-center gap-5 rounded-lg border-2 border-solid 
    border-white text-white text-lg font-medium hover:duration-500 hover:bg-formBackground hover:cursor-pointer `,
    errorClassname: "text-red text-xs ",
  };

  //Change this object to have the inputs name and the type of data it takes.
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

  //onSubmit function for testing purposes only.
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Form formClassname={formClasses.form}>
      <>
        <div className={formClasses.formContainer}>
          <Label
            labelClassname={formClasses.formLabelTypeOne}
            labelText="Name (* Required)"
          >
            <>
              <SingleLineTextInput
                inputClassname={formClasses.formInputTypeOne}
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
            </>
          </Label>

          <Label
            labelClassname={formClasses.formLabelTypeOne}
            labelText="Email (* Required)"
          >
            <>
              <SingleLineTextInput
                inputClassname={formClasses.formInputTypeOne}
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
            </>
          </Label>
        </div>
        <Label
          labelClassname={formClasses.formLabelTypeTwo}
          labelText="Subject (* Required)"
        >
          <>
            <SingleLineTextInput
              inputClassname={formClasses.formInputTypeTwo}
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
          </>
        </Label>

        <Label
          labelClassname={formClasses.formLabelTypeTwo}
          labelText="Message (* Required)"
        >
          <>
            <TextboxInput
              textboxClassname={formClasses.formInputTypeThree}
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
          </>
        </Label>

        <Button
          buttonClassname={formClasses.formSubmitButton}
          type="submit"
          ariaLabel="Submit"
          onClick={onSubmit}
        >
          Send Message
        </Button>
      </>
    </Form>
  );
};

export const FormComponent = Template.bind({});
FormComponent.args = {};
