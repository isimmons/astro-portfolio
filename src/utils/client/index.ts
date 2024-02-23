export const handleClientForm = (form?: HTMLFormElement | null) => {
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        accept: "application/json",
      },
    }).then((res) => res.json());
  });
};
