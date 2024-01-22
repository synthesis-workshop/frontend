import { UseFormGetFieldState, useForm } from "react-hook-form";
import { Button } from "../button";
import { Form } from "./form";

export default {
  title: "Components/SearchBar",
  parameters: {
    docs: {
      description: {
        component: `Search bar component for episodes page`,
      },
    },
  },
};

const searchInputRules = {
  required: "This field is required",
};

type FormFields = {
  searchInput: string;
};

const Template = () => {
  const formClasses = {
    form: "flex flex-col w-80 md:flex-row md:w-[625px] md:h-14 xl:w-[794px]",
    input: `w-full py-4 px-5 mb-3 border-solid border-2px border-2 border-opacity-40 border-formBorder 
      rounded-lg text-primary font-text 
      md:w-4/5 md:mr-5 md:mb-0`,
  };

  const { handleSubmit, register } = useForm<FormFields>();

  //This onSubmit will need to be changed by the person who is doing the episode view
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Form className={formClasses.form}>
      <Form.SingleLineTextInput
        className={formClasses.input}
        placeholder="Search for any topic"
        inputId="searchInput"
        ariaLabel="Your search terms should be inputted here"
        type="text"
        name="searchInput"
        register={register}
        rules={searchInputRules}
      />
      <Button onClick={onSubmit}>Search</Button>
    </Form>
  );
};

export const SearchBarComponent = Template.bind({});
