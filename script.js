import quotes from "./quotes.js"

const btn = document.getElementById('generateBtn')
const quoteText = document.getElementById('quoteText')
const quoteAuthor = document.getElementById('quoteAuthor')
const handleClick =()=>{
    const randomNumber = Math.floor(Math.random()* quotes.length)
    const quote = quotes[randomNumber]
    quoteText.innerText = `"${quote.text}"`
    quoteAuthor.innerText = `- ${quote.author}`
}
handleClick()



btn.addEventListener('click',handleClick)