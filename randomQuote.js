/*global $*/
$(document).ready(function(){
    
    function newQuote(){
        
        var quotes = ["No matter how hard it gets, stick your chest out, keep your head up and handle it.", "Everyday women and men become legends.", "Being happy is the goal, but greatness is my mission.", "Reach for the stars so if you fall you land on the clouds"];
        var author = ["-Tupac Shakur", "-Common", "-Childish Gambino", "-Kanye West"];
        
        var randomNumber = Math.floor((Math.random()*quotes.length));
        var randomQuote = quotes[randomNumber];
        var randomAuthor = author[randomNumber];
        
        $(".quote").text(randomQuote);
        $(".author").text(randomAuthor);
    }
        $("#quoteButton").on("click", function(){
            newQuote();
        });
});