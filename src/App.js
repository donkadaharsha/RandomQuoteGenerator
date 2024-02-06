import React, { useState } from 'react';
import './index.css';

function Generate_new() {
  const [quote, setQuote] = useState("Click to generate random quotes");

function randomQuote(){
  var randomDecimal = Math.random();
console.log(randomDecimal);
var randomNumber = Math.floor(randomDecimal * 49);
var quotes_array = [
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The best way to predict the future is to create it. - Peter Drucker",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "Life is really simple, but we insist on making it complicated. - Confucius",
  "Don't count the days, make the days count. - Muhammad Ali",
  
  "Money often costs too much. - Ralph Waldo Emerson",
  "A wise person should have money in their head, but not in their heart. - Jonathan Swift",
  "It's not the employer who pays the wages. Employers only handle the money. It's the customer who pays the wages. - Henry Ford",
  "The lack of money is the root of all evil. - Mark Twain",
  "A budget is telling your money where to go instead of wondering where it went. - Dave Ramsey",
  
  "The quality of your life is the quality of your relationships. - Tony Robbins",
  "A successful marriage requires falling in love many times, always with the same person. - Mignon McLaughlin",
  "The best thing to hold onto in life is each other. - Audrey Hepburn",
  "To love and be loved is to feel the sun from both sides. - David Viscott",
  "The purpose of our lives is to be happy. - Dalai Lama",
  
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "The only way to do great work is to love what you do. - Steve Jobs",
  
  "Positivity, confidence, and persistence are key in life, so never give up on yourself. - Khalid",
  "Your attitude determines your direction. - Unknown",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Your positive action combined with positive thinking results in success. - Shiv Khera",
  "Life is too important to be taken seriously. - Oscar Wilde",
  
  "The best way to predict your future is to create it. - Peter Drucker",
  "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "Life is what happens when you're busy making other plans. - John Lennon",
  
  "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
  "Happiness is not something you postpone for the future; it is something you design for the present. - Jim Rohn",
  "Success is not just about making money. It's about making a difference. - Unknown",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The best revenge is massive success. - Frank Sinatra",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  
  "Be kind whenever possible. It is always possible. - Dalai Lama",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
  "Happiness is not something you postpone for the future; it is something you design for the present. - Jim Rohn",
  "Success is not just about making money. It's about making a difference. - Unknown",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
];




setQuote(
  quotes_array[randomNumber]
);
}
return(
       
      <div>
       
        <button className="new-qt-btn" onClick={randomQuote}>{quote}</button>
      </div>
)
}

function App() {
  return (
    <>
    <Generate_new></Generate_new>
    </>
  );
}

export default App;
