import { FormEvent, useRef, useState } from "react";
import { sendEmail } from "@/services";
import { toast } from "react-toastify";

export const useContact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [isLoading, setIsLoading] = useState(false);

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };

  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    try {
      await sendEmail(formRef.current!);
      toast("Thanks for your message 😃", {
        type: "success",
      });

      formRef.current?.reset();

      setTimeout(() => {
        setCurrentAnimation("idle");
      }, 4000);
    } catch (err) {
      console.log("error", err);
      setCurrentAnimation("idle");
      toast("Failed to send message 😢", {
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    formRef,
    currentAnimation,
    handleBlur,
    handleFocus,
    handleSubmit,
  };
};
