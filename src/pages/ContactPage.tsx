import { ContactCanvas, ContactForm } from "@/components/contact";
import { useContact } from "@/hooks";

export const ContactPage = () => {
  const { currentAnimation, handleBlur, handleFocus, handleSubmit, isLoading } =
    useContact();

  return (
    <div className="relative flex flex-col lg:flex-row max-container">
      <ContactForm
        handleBlur={handleBlur}
        handleFocus={handleFocus}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <ContactCanvas currentAnimation={currentAnimation} />
    </div>
  );
};
