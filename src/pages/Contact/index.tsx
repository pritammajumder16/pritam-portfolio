import { Suspense, useState } from "react";
import Input from "../../components/Ui/Input";
import Textarea from "../../components/Ui/Textarea";
import Button from "../../components/Ui/Button";
import emailjs from "@emailjs/browser";
import { credentials } from "../../constants/credentials";
import { Canvas } from "@react-three/fiber";
import { Loader3d } from "../../components/Ui";
import { FoxModel } from "../../components/models";
import { FoxActions } from "../../types/types";
import useAlert from "../../hooks/useAlert";
import Alert from "../../components/Shared/Alert";
import RevealOnScroll from "../../components/Ui/RevealOnScroll";
import Socials from "../../components/Shared/Socials";
const Contact = () => {
  const [form, setForm] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<FoxActions>("idle");
  const { alert, showAlert } = useAlert();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {
    setCurrentAnimation("walk");
  };
  const handleBlur = () => {
    setCurrentAnimation("idle");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentAnimation("hit");
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
        setTimeout(() => {
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, 3000);
        //show success message
        showAlert({ text: "Message sent successfully", type: "success" });
      })
      .catch(() => {
        setCurrentAnimation("idle");
        showAlert({ text: "I didn't receive your message", type: "danger" });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <section>
      <section className="relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:px-16 sm:pt-16  !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
        {alert.show && <Alert {...alert} />}
        <div className="flex-1 min-w-[50%] flex flex-col">
          <RevealOnScroll>
            <span className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins text-black-400 dark:text-gray-100">
              Get in touch
            </span>
          </RevealOnScroll>
          <form
            className="w-full flex flex-col gap-7  mt-10"
            onSubmit={handleSubmit}
          >
            {" "}
            <RevealOnScroll className="w-full">
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
            </RevealOnScroll>
            <RevealOnScroll className="w-full">
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
            </RevealOnScroll>
            <RevealOnScroll className="w-full">
              <Textarea
                name="message"
                placeholder="Let me know how I can help you!"
                label="Message"
                required
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
            </RevealOnScroll>
            <RevealOnScroll className="w-full">
              <Button
                type="submit"
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send message"}
              </Button>
            </RevealOnScroll>
          </form>
        </div>

        <div className="lg:w-1/2 w-full lg:h-auto md:h-[450px] h-[300px]">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
          >
            <Suspense fallback={<Loader3d />}>
              <directionalLight intensity={2.5} position={[0, 0, 1]} />
              <ambientLight intensity={0.5} />
              <FoxModel
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.625, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>

      <RevealOnScroll>
        <Socials />
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
