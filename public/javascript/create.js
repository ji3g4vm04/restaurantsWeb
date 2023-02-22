const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.elements.name.value;
  const name_en = form.elements.name_en.value;
  const category = form.elements.category.value;
  const location = form.elements.location.value;
  const phone = form.elements.phone.value;
  const google_map = form.elements.google_map.value;
  const rating = form.elements.rating.value;
  const description = form.elements.description.value.trim();
  const image = form.elements.image.value;

  const data = {
    name,
    name_en,
    category,
    image,
    google_map,
    location,
    phone,
    rating,
    description,
    image,
  };

  fetch("/create", {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  })
    .then((res) => {
      res.json();
    })
    .catch((err) => {
      console.error("Error", error);
    })
    .then((res) => {
      console.log("Success", res);
      location.href = "/";
    });
});
