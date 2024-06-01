const quotes = [
  {
    quote: "문제는 내가 문제삼지 않으면 문제가 되지 않는다.",
    author: "1월의 신상헌",
  },
  {
    quote: "나는 이 목표를 이루는 방법을 지금은 모르지만 반드시 찾을 것이다.",
    author: "2월의 신상헌",
  },
  {
    quote: "성공은 작은 변화를 쌓아 올릴 때 찾아 온다.",
    author: "3월의 신상헌-1",
  },
  {
    quote: "걱정하지 말고 집중하라.",
    author: "3월의 신상헌-2",
  },
  {
    quote: "성공은 실패가 주는 패배감을 진정으로 두려워하지 않을 때 찾아온다.",
    author: "이승건-1",
  },
  {
    quote: "성장하는 게 중요한 거지 내 아이디어일 필요는 없다..",
    author: "이승건-2",
  },
  {
    quote: "오로지 성장에만 집중하자. 아이디어에 고착되지 말고.",
    author: "이승건-3",
  },
  {
    quote: "버티는 거보다 성장이 더 중요하다.",
    author: "이승건-4",
  },
  {
    quote: "장기적인 동기부여가 필요하다.",
    author: "이승건-5",
  },
  {
    quote: "1학기 목표(토스)는 WebDevAbility.",
    author: "5월의 신상헌",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
