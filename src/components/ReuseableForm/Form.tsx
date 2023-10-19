import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "./Button";
import Label from "./Label";
import SingleLineTextInput from "./SingleLineTextInput";
import TextboxInput from "./TextboxInput";

//Add/remove so that you have the fields and requirements needed.
const schema = yup
  .object({
    name: yup
      .string()
      .min(2, "Minimum length is 2 characters")
      .max(30, "Maximum length is 30 characters")
      .required("This field is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("This field is required"),
    subject: yup
      .string()
      .min(8, "Minimum length is 8 characters")
      .max(100, "Maximum length is 100 characters")
      .required("This field is required"),
    message: yup
      .string()
      .min(100, "Minimum length is 100 characters")
      .required("This field is required"),
  })
  .required();

const Form = ({
  formClassname,
  errorClassname,
}: {
  formClassname: string;
  errorClassname: string;
}) => {
  const {
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema) });

  //Checks to make sure that all FormData has the correct type, edit as needed.
  const onSubmit = handleSubmit((data) => console.log(data));

  //All strings/classNames defined as "test" are placeholders, please replace them with your classNames.
  return (
    <form className={formClassname} onSubmit={onSubmit}>
      <Label labelClassname="test" labelText="Name (* Required)">
        <SingleLineTextInput
          inputClassnames={{ label: "test", input: "test", error: "test" }}
          placeholder="Your Name"
          inputId="name"
          ariaLabel="Your name should be inputted here."
          type="text"
          name="name"
        />
      </Label>
      {/*Errors can be moved around as required.*/}
      {errors.name?.message && (
        <span className={errorClassname}>{errors.name?.message}</span>
      )}

      <Label labelClassname="test" labelText="Email (* Required)">
        <SingleLineTextInput
          inputClassnames={{ label: "test", input: "test", error: "test" }}
          placeholder="Your Email"
          inputId="email"
          ariaLabel="Your Email address should be inputted here."
          type="text"
          name="email"
        />
      </Label>
      {/*Errors can be moved around as required.*/}
      {errors.email?.message && (
        <span className={errorClassname}>{errors.email?.message}</span>
      )}

      <Label labelClassname="test" labelText="Subject (* Required)">
        <SingleLineTextInput
          inputClassnames={{ label: "test", input: "test", error: "test" }}
          placeholder="Subject"
          inputId="subject"
          ariaLabel="Your email's subject line should be inputted here."
          type="text"
          name="subject"
        />
      </Label>
      {/*Errors can be moved around as required.*/}
      {errors.subject?.message && (
        <span className={errorClassname}>{errors.subject?.message}</span>
      )}

      <Label labelClassname="test" labelText="Message (* Required)">
        <TextboxInput
          textboxClassname="test"
          placeholder="Message"
          ariaLabel="The content of your email should be inputted here."
          id="message"
          rows={10}
          cols={100}
          name="message"
        />
      </Label>
      {/*Errors can be moved around as required.*/}
      {errors.message?.message && (
        <span className={errorClassname}>{errors.message?.message}</span>
      )}

      <Button
        buttonClassname="test"
        type="submit"
        ariaLabel="Submit"
        isValid={isValid}
        buttonText="Send Message"
        onClick={() => {
          onSubmit();
        }}
      />
    </form>
  );
};

export default Form;
