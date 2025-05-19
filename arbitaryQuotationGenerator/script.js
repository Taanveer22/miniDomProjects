console.log("connected js");

// array of objects
const quotesArray = [
  {
    quotation: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quotation: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quotation: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quotation:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quotation: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quotation: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quotation:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    quotation: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    quotation:
      "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quotation: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quotation: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    quotation: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    quotation: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    quotation:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quotation:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  { quotation: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  {
    quotation:
      "The same boiling water that softens the potato hardens the egg. It's about what you're made of, not the circumstances.",
    author: "Unknown",
  },
  {
    quotation: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    quotation: "We can't help everyone, but everyone can help someone.",
    author: "Ronald Reagan",
  },
  {
    quotation: "When you have a dream, you've got to grab it and never let go.",
    author: "Carol Burnett",
  },
  {
    quotation: "Nothing is impossible. The word itself says 'I'm possible!'",
    author: "Audrey Hepburn",
  },
  {
    quotation: "There is nothing impossible to they who will try.",
    author: "Alexander the Great",
  },
  {
    quotation: "The bad news is time flies. The good news is you're the pilot.",
    author: "Michael Altshuler",
  },
  {
    quotation:
      "Life has got all those twists and turns. You've got to hold on tight and off you go.",
    author: "Nicole Kidman",
  },
  {
    quotation:
      "Keep your face always toward the sunshine, and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    quotation:
      "Be courageous. Challenge orthodoxy. Stand up for what you believe in.",
    author: "Naveen Jain",
  },
  {
    quotation:
      "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it.",
    author: "Drew Barrymore",
  },
  {
    quotation:
      "Success is stumbling from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quotation:
      "Just when the caterpillar thought the world was ending, he turned into a butterfly.",
    author: "Proverb",
  },
  {
    quotation: "Why fit in when you were born to stand out?",
    author: "Dr. Seuss",
  },
  {
    quotation:
      "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    quotation:
      "You define your own life. Don't let other people write your script.",
    author: "Oprah Winfrey",
  },
  {
    quotation:
      "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
    author: "Mandy Hale",
  },
  {
    quotation:
      "You can be everything. You can be the infinite amount of things that people are.",
    author: "Kesha",
  },
  {
    quotation:
      "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
    author: "Ralph Waldo Emerson",
  },
  {
    quotation:
      "The meaning of life is to find your gift. The purpose of life is to give it away.",
    author: "Pablo Picasso",
  },
  { quotation: "Belief creates the actual fact.", author: "William James" },
  {
    quotation:
      "I have learned over the years that when one's mind is made up, this diminishes fear.",
    author: "Rosa Parks",
  },
  {
    quotation: "I would rather die of passion than of boredom.",
    author: "Vincent van Gogh",
  },
  {
    quotation:
      "If you're not stubborn, you'll give up on experiments too soon. And if you're not flexible, you'll pound your head against the wall and you won't see a different solution to a problem you're trying to solve.",
    author: "Jeff Bezos",
  },
  {
    quotation: "You'll never find a rainbow if you're looking down.",
    author: "Charlie Chaplin",
  },
  {
    quotation:
      "No one is to blame for your future situation but yourself. If you want to be successful, then become successful.",
    author: "Jaymin Shah",
  },
  {
    quotation:
      "For every reason it's not possible, there are hundreds of people who have faced the same circumstances and succeeded.",
    author: "Jack Canfield",
  },
  {
    quotation:
      "Things work out best for those who make the best of how things work out.",
    author: "John Wooden",
  },
  {
    quotation:
      "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    author: "Jim Rohn",
  },
  {
    quotation:
      "All our dreams can come true if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    quotation:
      "Good things come to people who wait, but better things come to those who go out and get them.",
    author: "Anonymous",
  },
  {
    quotation:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quotation: "What you do today can improve all your tomorrows.",
    author: "Ralph Marston",
  },
  {
    quotation: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quotation: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quotation:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quotation:
      "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau",
  },
  {
    quotation: "When you give joy to other people, you get more joy in return.",
    author: "Eleanor Roosevelt",
  },
  {
    quotation:
      "You can't use up creativity. The more you use, the more you have.",
    author: "Maya Angelou",
  },
  {
    quotation: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    quotation:
      "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  {
    quotation: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quotation: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quotation:
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    quotation: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  { quotation: "We become what we think about.", author: "Earl Nightingale" },
  {
    quotation: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  { quotation: "An unexamined life is not worth living.", author: "Socrates" },
  {
    quotation: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    quotation:
      "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quotation: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quotation: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quotation:
      "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    quotation: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quotation:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    quotation: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth",
  },
  {
    quotation:
      "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone",
  },
  {
    quotation:
      "Life isn't about getting and having, it's about giving and being.",
    author: "Kevin Kruse",
  },
  {
    quotation: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll",
  },
  {
    quotation: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  { quotation: "An unexamined life is not worth living.", author: "Socrates" },
  {
    quotation: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    quotation:
      "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quotation: "Winning isn't everything, but wanting to win is.",
    author: "Vince Lombardi",
  },
  {
    quotation:
      "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
  {
    quotation:
      "Every child is an artist. The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso",
  },
  {
    quotation:
      "You can never cross the ocean until you have the courage to lose sight of the shore.",
    author: "Christopher Columbus",
  },
  {
    quotation:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    quotation: "Either you run the day, or the day runs you.",
    author: "Jim Rohn",
  },
  {
    quotation:
      "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
  },
  {
    quotation:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    quotation:
      "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quotation: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quotation:
      "People often say that motivation doesn't last. Well, neither does bathing—that's why we recommend it daily.",
    author: "Zig Ziglar",
  },
  {
    quotation: "Life shrinks or expands in proportion to one's courage.",
    author: "Anais Nin",
  },
  {
    quotation:
      "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
    author: "Vincent Van Gogh",
  },
  {
    quotation:
      "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
    author: "Aristotle",
  },
  {
    quotation:
      "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    author: "Jesus",
  },
  {
    quotation:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quotation:
      "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau",
  },
  {
    quotation:
      "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
    author: "Erma Bombeck",
  },
  {
    quotation:
      "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
    author: "Booker T. Washington",
  },
  {
    quotation:
      "Certain things catch your eye, but pursue only those that capture the heart.",
    author: "Ancient Indian Proverb",
  },
  {
    quotation: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
];

console.log(quotesArray);
console.log(quotesArray.length);

// add event listener to the submit button
document
  .getElementById("btn-quotation")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);

    const quotation = document.getElementById("quotation");
    const author = document.getElementById("author");

    // let randomIndex = Math.random() * quotesArray.length;
    let randomIndex = Math.floor(Math.random() * quotesArray.length);
    console.log(randomIndex);
    console.log(quotesArray[randomIndex]);

    quotation.innerText = quotesArray[randomIndex].quotation;
    author.innerText = quotesArray[randomIndex].author;
  });
