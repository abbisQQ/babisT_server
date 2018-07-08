$(document).ready(function(){
            
 var randomNum, randomQuote="No quotes you forgot to click the button :P", randomAuthor="";
 
  function getQuote(){
 
    var quotes = ["I am an inventor of music.","Youth is wasted on the young.","Knowing is not enough; we must apply. Willing is not enough; we must do.","In order to succeed, we must first believe that we can.","Always do your best. What you plant now, you will harvest later.","Keep your eyes on the stars, and your feet on the ground.","Quality is not an act, it is a habit.","Failure will never overtake me if my determination to succeed is strong enough."] 
 
  
   var authors = ["Igor Stravinsky"," George Bernard Shaw","Johann Wolfgang von Goethe","Nikos Kazantzakis"," Og Mandino","Theodore Roosevelt","Aristotle","Og Mandino"]

  
    randomNum = Math.floor((Math.random()*quotes.length));        
  
    randomQuote = quotes[randomNum];
    
    randomAuthor = authors[randomNum];  
  
    
   $(".quote").text(randomQuote);
   $(".authors").text(randomAuthor);
    
    }
$("#newQuote").on("click", function(){
  getQuote();
});    

  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+randomQuote + " "+ randomAuthor);
   
});    
  
});