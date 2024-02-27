import contactFormSchema from "~/schemas/contactFormSchema";

export const handleContactForm = (
  contactForm?: HTMLFormElement,
  messageElement?: HTMLParagraphElement
) => {
  if (!contactForm || !messageElement) return;

  const updateMessage = (message: string, type: "error" | "success") => {
    messageElement.classList.add(type);
    messageElement.textContent = message;
    setTimeout(() => {
      messageElement.textContent = "";
      messageElement.classList.remove(type);
    }, 3000);
  };

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const { name, email } = Object.fromEntries(formData);

    const validation = contactFormSchema.safeParse({ name, email });
    if (!validation.success) {
      return updateMessage(validation.error.errors[0].message, "error");
    }

    try {
      const res = await fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) throw new Error("Response was not OK");

      contactForm.reset();

      return updateMessage(
        "Thanks for reaching out. I'll be in touch soon.",
        "success"
      );
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        return updateMessage(error.message, "error");
      }
      return updateMessage(
        "Something went wrong. Please try again later",
        "error"
      );
    }
  });
};
