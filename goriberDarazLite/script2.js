console.log("connected 2");
// click event by mouse click
document.getElementById("submit-btn").addEventListener("click", function () {
  console.log("submit btn clicked");

  // traverse
  const textAreaValue = document.getElementById("text-area").value;
  console.log(textAreaValue);
  const reviewContainer = document.getElementById("review");
  const para = document.createElement("p");
  
  //manipulate
  para.innerText = textAreaValue;
  reviewContainer.appendChild(para);
});
