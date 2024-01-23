const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [
"“Life is too short to waste your time on people who don’t respect, appreciate, and value you.”― Roy T. Bennett, The Light in the Heart",

"“Be mindful. Be grateful. Be positive. Be true. Be kind.”― Roy T. Bennett, The Light in the Heart",
    
"“Respect other people's feelings. It might mean nothing to you, but it could mean everything to them.”― Roy T. Bennett",

"“Don't let the expectations and opinions of other people affect your decisions. It's your life, not theirs. Do what matters most to you; do what makes you feel alive and happy. Don't let the expectations and ideas of others limit who you are. If you let others tell you who you are, you are living their reality — not yours. There is more to life than pleasing people. There is much more to life than following others' prescribed path. There is so much more to life than what you experience right now. You need to decide who you are for yourself. Become a whole being. Adventure.”― Roy T. Bennett",

"“Do one thing every day that scares you.”― Eleanor Roosevelt"

]

button.addEventListener("click", () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
  })