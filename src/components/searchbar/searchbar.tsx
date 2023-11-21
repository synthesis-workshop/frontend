import { Button } from "../button";
import { Form } from "../reusable-form/Form";
import { SingleLineTextInput } from "../reusable-form/SingleLineTextInput";

export const Searchbar = ({ props: SingleLineTextInputProps }) => {
  return (
    <div>
      <Form formClassname="searchbar__form">
        <SingleLineTextInput
          placeholder="hello"
          inputClassname="searchbar__input"
          type="text"
          ariaLabel="input"
          inputId="5s4dsdkjflkjd"
          name="name"
          register="reg"
          rules=""
        />
      </Form>
      <Button />
    </div>
  );
};
