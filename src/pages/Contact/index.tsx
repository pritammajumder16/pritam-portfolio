/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from "react";
import Input from "../../components/Ui/Input";
import Textarea from "../../components/Ui/Textarea";
import Button from "../../components/Ui/Button";
import emailjs from "@emailjs/browser";
import { credentials } from "../../constants/credentials";
const Contact = () => {
  const [form, setForm] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = (
    _e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement
    >
  ) => {};
  const handleBlur = (
    _e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement
    >
  ) => {};
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        credentials.EMAILJS_SERVICE_ID,
        credentials.EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Pritam Majumder",
          from_email: form.email,
          to_email: "pritam.majumder@416@gmail.com",
          message: form.message,
        },
        credentials.EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        //show success message
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <span className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
          Get in touch
        </span>
        <form action="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Enter name"
            required
            label="Name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Enter email"
            required
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <Textarea
            name="message"
            placeholder="Let me know how I can help you!"
            required
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <Button
            type="submit"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
