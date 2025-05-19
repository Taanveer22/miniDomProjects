console.log("connected");

document
  .querySelector("#submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    console.log("submit btn clicked");

    const textAreaValue = document.querySelector("#text-area").value;
    console.log(textAreaValue);

    const reviewContainer = document.querySelector("#review-container");
    const li = document.createElement("li");
    li.innerText = textAreaValue;
    reviewContainer.appendChild(li);

    document.getElementById('text-area').value = "";
  });
