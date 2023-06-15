document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };

    console.log(data);

    const response = await axios.post(
      "https://site--form-back--8bd4m7bpgzgn.code.run/form",
      data
    );
    console.log(response);
  });
});
