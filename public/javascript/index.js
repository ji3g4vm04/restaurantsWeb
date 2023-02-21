const restaurants = document.querySelector(".restaurants");

const deleteRestaurant = (e) => {
  if (e.target.matches("#delete")) {
    e.preventDefault();
    if (confirm("確定要刪除這間餐廳嗎？")) {
      const id = e.target.dataset.id;
      console.log(e.target.dataset.id);
      fetch(`/detail/${id}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((res) => {
          console.log(res);
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};

restaurants.addEventListener("click", deleteRestaurant);
