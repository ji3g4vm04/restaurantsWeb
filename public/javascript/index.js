const restaurants = document.querySelector(".restaurants");

const deleteRestaurant = (e) => {
  e.preventDefault();
  if (e.target.matches("#delete")) {
    if (confirm("確定要刪除這間餐廳嗎？")) {
      const id = e.target.dataset.id;
      console.log(e.target.dataset.id);
      fetch(`/${id}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};

restaurants.addEventListener("click", deleteRestaurant);
