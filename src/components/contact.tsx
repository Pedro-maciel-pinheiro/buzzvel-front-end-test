import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type FormData = {
  email: string;
  mensagem: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await new Promise((res) => setTimeout(res, 1000));
      setStatusMessage("Your message has been sent!");
      setFormData({ email: "", mensagem: "" });
    } catch (err) {
      console.error("Form submission error", err);
      setStatusMessage("There was an error sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-darkorange mt-2 flex h-auto w-full flex-col items-center justify-center rounded-sm"
      aria-labelledby="contact-heading"
    >
      <header className="flex flex-col items-center justify-center gap-8 p-4 md:p-0 text-center">
        <h1
          id="contact-heading"
          className="text-3xl font-bold text-white lg:text-5xl"
        >
          Ready for your next project?
        </h1>
        <p className="text-xl text-gray-100 max-w-xl">
          Let's talk about how we can help. Send us a message and we'll get
          back to you shortly.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-md space-y-4 p-4 md:p-0"
        aria-busy={loading}
        aria-describedby="form-status"
      >
        <div>
          <Label htmlFor="email" className="my-2 font-semibold text-white">
            Email address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="border-gray-500 bg-white"
            required
            aria-required="true"
            aria-label="Email address"
          />
        </div>

        <div>
          <Label htmlFor="mensagem" className="my-2 font-semibold text-white">
            Your Message
          </Label>
          <Textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            className="border-gray-500 bg-white"
            rows={5}
            required
            aria-required="true"
            aria-label="Message"
          />
        </div>

        <div className="flex w-full items-center justify-center">
          <Button
            type="submit"
            disabled={loading}
            className="bg-darkblue h-12 w-50 cursor-pointer rounded-sm"
            aria-disabled={loading}
          >
            {loading ? "Sending..." : "Request Demo"}
          </Button>
        </div>

        <p
          id="form-status"
          className="mt-2 text-center text-white"
          aria-live="polite"
        >
          {statusMessage}
        </p>
      </form>
    </section>
  );
};

export default ContactForm;
