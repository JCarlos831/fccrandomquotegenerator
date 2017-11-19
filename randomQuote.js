/*global $*/
$(document).ready(function(){
    function newQuote(){
        
        var quotes = ["Hello, World!", "Hello, Sea!", "Hello, Sky!"];
        var author = ["-Author1", "-Author2", "-Author3"];
        
        var randomNumber = Math.floor((Math.random()*quotes.length));
        var randomQuote = quotes[randomNumber];
        var randomAuthor = author[randomNumber];
        
    }
    
});