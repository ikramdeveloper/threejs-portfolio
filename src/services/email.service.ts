import { sendForm } from "@emailjs/browser";
import { constants } from "@/config";

const { serviceId, templateId, publicKey } = constants.emailjs;

export const sendEmail = async (form: HTMLFormElement) => {
  await sendForm(serviceId, templateId, form, publicKey);
};
