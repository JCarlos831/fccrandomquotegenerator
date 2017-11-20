/*global $*/
$(document).ready(function(){
    var randomQuote; 
    var randomNumber; 
    var rapper;
    var quote;
    var author;
    
    function newlyric(){
        
        var hiphopQuotes = ["No idea is original, there's nothing new under the sun, it's never what you do, but how it's done","Much success to you, even if you wish me the opposite","Turnin' nothin' into somethin' is God work and you get nothin' without struggle and hard work","I won't say I'm the baddest, or portray that role, but I'm in the top two, and father's gettin' old","My mama ain't raise no fool because my mama ain't raise me, fool","Climb the ladder to success, escalator style","I'm trying to right my wrongs, but it's funny, them same wrongs helped me write this song","I could let these dream killers kill my self-esteem, or use my arrogance as a steam to power my dreams","No matter how hard it gets, stick your chest out, keep your head up and handle it", "Everyday women and men become legends", "Being happy is the goal, but greatness is my mission", "Reach for the stars so if you fall you land on the clouds"];
        rapper = ["- Nas, 'No idea's original","- Nas, 'Nas is Like'","- Nas, 'Doo Rags'","- Big Daddy Kane, 'Cause I Can Do It Right'","- Sean Price, '60 Bar Dash'", "- The Notorious B.I.G., 'You're Noboby'","- Kanye West, 'Touch the Sky'","- Kanye West, 'Last Call'","- Tupac Shakur, 'Me Against the World'", "- Common, 'Glory'", "- Childish Gambino, 'I'm Alright'", "- Kanye West, 'Homecoming'"];
        
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