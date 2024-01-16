import { FormComponent } from "../../components/form/form.stories";

export const ContactForm = () => {
  return (
    <div className="mt-20 | mt-24 ">
      <h1 className="font-title text-primary text-4xl mb-6 | md:mb-8 ">
        Contact Us
      </h1>
      <FormComponent />
    </div>
  );
};
