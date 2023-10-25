import { useForm } from "react-hook-form";
import Button from "./Button";
import * as inputRules from "./InputRules";
import Label from "./Label";
import SingleLineTextInput from "./SingleLineTextInput";
import TextboxInput from "./TextboxInput";

//Change this object to have the inputs name and the type of data it takes.
type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface Props {
  formClassname: string;
  errorClassname: string;
  buttonText: string;
}

const Form: React.FC<Props> = ({
  formClassname,
  errorClassname,
  buttonText,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>();

  //Checks to make sure that all FormData has the correct type, edit as needed.
  const onSubmit = handleSubmit((data) => console.log(data));

  //Object of TailWindCSS classes
  const formClasses = {
    inNeedOfClass: `Fill in this object with TailWindCSS classes such as formContainer: "w-[1000px] etc etc"`,
  };

  //All inputs will need their id & name attributes changed to fit your needs.
  //Make sure the names match up with whatever you put in the FormFields object.
  return (
    <form className={formClassname} onSubmit={onSubmit}>
      <div className={formClasses.inNeedOfClass}>
        <Label
          labelClassname={formClasses.inNeedOfClass}
          labelText="Insert label here"
        >
          <>
            <SingleLineTextInput
              inputClassname={formClasses.inNeedOfClass}
              placeholder="Insert placeholder here"
              inputId="name"
              ariaLabel="Your aria-label should be inputted here."
              type="text"
              name="name"
              register={register}
              rules={inputRules.nameRules}
            />
            {/*Errors can be moved around as required.*/}
            {errors.name?.message && (
              <span className={errorClassname}>{errors.name?.message}</span>
            )}
          </>
        </Label>

        <Label
          labelClassname={formClasses.inNeedOfClass}
          labelText="Insert label here"
        >
          <>
            <SingleLineTextInput
              inputClassname={formClasses.inNeedOfClass}
              placeholder="Insert placeholder here"
              inputId="email"
              ariaLabel="Your aria-label should be inputted here."
              type="text"
              name="email"
              register={register}
              rules={inputRules.emailRules}
            />
            {/*Errors can be moved around as required.*/}
            {errors.email?.message && (
              <span className={errorClassname}>{errors.email?.message}</span>
            )}
          </>
        </Label>
      </div>
      <Label
        labelClassname={formClasses.inNeedOfClass}
        labelText="Insert label here"
      >
        <>
          <SingleLineTextInput
            inputClassname={formClasses.inNeedOfClass}
            placeholder="Insert placeholder here"
            inputId="subject"
            ariaLabel="Your aria-label should be inputted here."
            type="text"
            name="subject"
            register={register}
            rules={inputRules.subjectRules}
          />
          {/*Errors can be moved around as required.*/}
          {errors.subject?.message && (
            <span className={errorClassname}>{errors.subject?.message}</span>
          )}
        </>
      </Label>

      <Label
        labelClassname={formClasses.inNeedOfClass}
        labelText="Insert label here"
      >
        <>
          <TextboxInput
            textboxClassname={formClasses.inNeedOfClass}
            placeholder="Insert placeholder here"
            ariaLabel="Your aria-label should be inputted here."
            id="message"
            rows={10}
            cols={100}
            name="message"
            rules={inputRules.messageRules}
            register={register}
          />
          {/*Errors can be moved around as required.*/}
          {errors.message?.message && (
            <span className={errorClassname}>{errors.message?.message}</span>
          )}
        </>
      </Label>

      <Button
        buttonClassname={formClasses.inNeedOfClass}
        type="submit"
        ariaLabel="Submit"
        onClick={onSubmit}
      >
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;
