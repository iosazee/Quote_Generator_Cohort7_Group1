//Pseudocode: What we need to do. To build a random quote generator, we need multiple quotes.
// We need multiple quotes stored as strings in an array as shown below:
var quotes = [
    "No one is born hating another person because of the color of his skin, or his background, or his religion.People must learn to hate, and if they can learn to hate, they can be taught to love, for love comes more naturally to the human heart than hate. -Nelson Mandela",
    "Education is the most powerful weapon which you can use to change the world. -Nelson Mandela",
    "It always seems impossible until it's done. -Nelson Mandela",
    "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart. -Nelson Mandela"
    ]
    
    
//Each time the generate random quote button in the html file gets pressed, the function, newQuote needs to be called.
function newQuote() {
    //this function needs to generate a random whole number, when called. To do that, we use the math.floor method as follows
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteParagraph").innerHTML = quotes[randomNumber];
}
