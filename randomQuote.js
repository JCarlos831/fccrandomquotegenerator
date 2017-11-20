/*global $*/
$(document).ready(function(){
    var randomQuote; 
    var randomNumber; 
    var rapper;
    var quote;
    var author;
    
    function newlyric(){
        
        var hiphopQuotes = ["I could let these dream killers kill my self-esteem, or use my arrogance as a steam to power my dreams.","No matter how hard it gets, stick your chest out, keep your head up and handle it.", "Everyday women and men become legends.", "Being happy is the goal, but greatness is my mission.", "Reach for the stars so if you fall you land on the clouds"];
        rapper = ["- Kanye West, 'Last Call'","- Tupac Shakur, 'Me Against the World'", "- Common, 'Glory'", "- Childish Gambino, 'I'm Alright'", "- Kanye West, 'Homecoming'"];
        
            randomNumber = Math.floor(Math.random()*hiphopQuotes.length);
            randomQuote = hiphopQuotes[randomNumber];
            rapper = rapper[randomNumber];
        
        $("#quote1").text(randomQuote);
        $("#author1").text(rapper);
    }
        
        $(".tweetQuote1").on("click", function(event){
            event.preventDefault();
            window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent('"' + randomQuote +'"' + rapper));
        });
        
        $(".newQuote1").on("click", function(){
            newlyric();
        });
        
        function getNewQuote(){
          $.ajax({
               url: "https://api.forismatic.com/api/1.0/",
               jsonp: "jsonp",
               dataType: "jsonp",
               data: {
                    method: "getQuote",
                    lang: "en",
                    format: "jsonp"
               },
          success: function(response){
               quote= response.quoteText;
               author= response.quoteAuthor;
               $("#quote2").text(quote);
               if(author){
                    $("#author2").text("-" + author);
               } else {
                    $("#author2").text("- unknown")
               }
          }
     });
     }
     getNewQuote();
     newlyric();

     $(".newQuote2").on("click", function(event){
          event.preventDefault();
          getNewQuote();
     });
     $(".tweetQuote2").on("click", function(event){
          event.preventDefault();
          window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent('"' + quote +'"'+ " - " + author));
     });
});