console.log("connected");


// keyup event by keyboard typing
document
  .getElementById("text-area")
  .addEventListener("keyup", function (event) {
    console.log("text-area selected");
    console.log(event.key);
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);

    if (event.key === "Enter") {
      // traverse
      const reviewContainer = document.getElementById("review");
      const para = document.createElement("p");
      //   manipulate
      para.innerText = event.target.value;
      reviewContainer.appendChild(para);
    }
  });
