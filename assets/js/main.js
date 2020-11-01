document.addEventListener("DOMContentLoaded", () => {
  console.log("chargé");

  //   document.addEventListener("click", () => {
  //     console.log("click !!");
  //   });

  document.querySelector("#login").addEventListener("click", () => {
    // console.log("OK");
    document.querySelector(".show-modal").classList.toggle("modal");
  });

  document.querySelector("#close-modal").addEventListener("click", () => {
    // console.log("OK");
    document.querySelector(".show-modal").classList.toggle("modal");
  });

  document
    .querySelector("#contact-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        password: document.querySelector("#password").value,
        email: document.querySelector("#email").value,
        description: document.querySelector("#description").value,
      };
      console.log(data);

      const response = await axios.post(
        "https://tripadvisor-form.herokuapp.com/form",
        data
      );
      console.log(response);
      if (response.status === 200) {
        alert("Un mail vous a été envoyé");
      } else {
        alert("Une erreur est survenue");
      }
    });
});
