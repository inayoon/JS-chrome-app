const quotes = [

  {
    quote: "You should never regret anything in life. If it’s good, it’s wonderful. If it’s bad, it is experience.",
    copyright: "Lifehack",
  },
  {
    quote: "Falling down is an accident, staying down is a choice.",
    copyright: "Lifehack",
  },
  {
    quote: "Always believe that something wonderful is about to happen.",
    copyright: "Lifehack",
  },
  {
    quote: "Don’t be afraid to give up the good and go for great.",
    copyright: "Lifehack",
  },
  {
    quote: "Never apologize for having high standards, people who really want to be in your life will rise to meet them.",
    copyright: "Lifehack",
  },
  {
    quote: "If it doesn’t challenge you, it won’t change you.",
    copyright: "Lifehack",
  },
  {
    quote: "A hill is just another opportunity to leave your competition behind.",
    copyright: "Lifehack",
  },
  {
    quote: "Stop being afraid of what could go wrong and think of what could go right.",
    copyright: "Lifehack",
  },
  {
    quote: "Never give up on a dream just because of the time it will take to accomplish it, time will pass anyway.",
    copyright: "Lifehack",
  },
  {
    quote: "Don’t fear failure. Fear being in the exact same place next year as you are today.",
    copyright: "Lifehack",
  }
];

const quote = document.querySelector("#quote span:first-child");
const copyright = document.querySelector("#quote span:last-child");

const todaysQuote = quotes [Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
copyright.innerText = todaysQuote.copyright;