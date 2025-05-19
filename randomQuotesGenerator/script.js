console.log("connected");

// array of objects
const quotesArray = [
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    writer: "Franklin D. Roosevelt",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    writer: "Albert Einstein",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    writer: "Winston Churchill",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    writer: "Ralph Waldo Emerson",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    writer: "John Lennon",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    writer: "Oscar Wilde",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    writer: "Dalai Lama",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    writer: "Confucius",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    writer: "Steve Jobs",
  },
  {
    quote: "If you judge people, you have no time to love them.",
    writer: "Mother Teresa",
  },
];

document.getElementById("btn-new-quote").addEventListener("click", function () {
  console.log("btn new quote clicked");

  //   traverse dom
  const p = document.getElementById("quote");

  const h2 = document.getElementById("writer");

  //   get the random index number
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  console.log(randomIndex);

  console.log(quotesArray);
  console.log(quotesArray[randomIndex]);

  //   manipulate dom
  p.innerText = quotesArray[randomIndex].quote;
  h2.innerText = quotesArray[randomIndex].writer;
});
