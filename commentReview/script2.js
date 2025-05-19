console.log("connected 2");

// target the text-area input field and add event listener to it
document
  .getElementById("text-area")
  .addEventListener("keyup", function (event) {
    // which key is pressing that's checking
    if (event.key === "Enter") {
      event.preventDefault();
      console.log(event);
      console.log(event.target);
      console.log(event.key);

    //   traverse and manipulate the dom by creating new elements
      const textAreaValue = document.getElementById("text-area").value;
      console.log(textAreaValue);
      const reviewContainer = document.getElementById("review-container");
      const para = document.createElement("p");
      para.innerText = textAreaValue;
      reviewContainer.appendChild(para);

    //   clear the text-area input field
      document.getElementById("text-area").value = "";
    }
  });
