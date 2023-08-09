fetch("https://fakestoreapi.com/users/1")
  .then((res) => res.json())
  .then((user) => {
    console.log(user);
    const city = user.address.city;
    const street = user.address.street;
    const number = user.address.number;

    const phone = user.phone;

    const fullAddress = `City: ${city}, Street: ${street}, Number: ${number}`;

    document
      .querySelector(".address")
      .insertAdjacentHTML("beforeend", fullAddress);

    document
      .querySelector("#phone-number")
      .insertAdjacentHTML("beforeend", `Phone Number: ${phone}`);
  })
  .catch((err) => console.log(err.message));
