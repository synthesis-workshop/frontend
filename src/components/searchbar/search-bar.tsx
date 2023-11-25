import { Button } from "../button";
import { Form } from "../reusable-form/Form";
import { SingleLineTextInput } from "../reusable-form/SingleLineTextInput";

export const Searchbar = () => {
  return (
    <Form formClassname="searchbar__form">
      <div className="flex flex-row gap-5 lg:flex-row  max-[375px]:flex-col sm:gap-3">
        <SingleLineTextInput
          placeholder="Search for any topic"
          inputClassname="border-gray-400 border-2 rounded-lg py-4 px-5 h-[52px] w-full"
          type="text"
          ariaLabel="input"
          inputId="5s4dsdkjflkjd"
          name="searchInput"
          rules=""
          register="searchInput"
        />
        <Button className="px-8 py-2 h-[52px]" size="default" variant="primary">
          Search
        </Button>
      </div>
    </Form>
  );
};
