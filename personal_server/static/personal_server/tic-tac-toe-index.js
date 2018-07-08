$(document).ready(function(){
  var playerTurn=true;
  var array =[1,2,3,4,5,6,7,8,9];
  var aiNumber;
  var oneIsMarked = "";
  var twoIsMarked = "";
  var threeIsMarked = "";
  var fourIsMarked = "";
  var fiveIsMarked = "";
  var sixIsMarked = "";
  var sevenIsMarked = "";
  var eightIsMarked = "";
  var nineIsMarked = "";
  var playerMark="X";
  var aiMark = "O";
  var wins =0;
  var losses=0;
  var draws=0;
  
  
  function reset(){
    playerTurn=true;
    oneIsMarked = "";
    twoIsMarked = "";
    threeIsMarked = "";
    fourIsMarked = "";
    fiveIsMarked = "";
    sixIsMarked = "";
    sevenIsMarked = "";
    eightIsMarked = "";
    nineIsMarked = "";
  $("#one").text("");
  $("#two").text("");
  $("#three").text("");
  $("#four").text("");
  $("#five").text("");
  $("#six").text("");
  $("#seven").text("");
  $("#eight").text("");
  $("#nine").text("");
  }
  
  
  
   $("#0Option").click(function(){
      if(playerMark=="X"){  
        playerMark="0";
        aiMark=  "X";
        reset(); 
      }
  });
  $("#xOption").click(function(){
      if(playerMark=="0"){  
        playerMark="X";
        aiMark="0";
        reset(); 
      } });
      
  
  
  
  
  
  function outcome()
{
  if(oneIsMarked==playerMark&&twoIsMarked==playerMark&&threeIsMarked==playerMark){
     wins++;
     $(".wins").text("wins:" + wins);
     reset();
     }else if(oneIsMarked==aiMark&&twoIsMarked==aiMark&&threeIsMarked==aiMark){
     losses++;  
     $(".losses").text("losses:" + losses);
     reset();  
     }
  
  if(fourIsMarked==playerMark&&fiveIsMarked==playerMark&&sixIsMarked==playerMark){
     wins++;
     $(".wins").text("wins:" + wins);
     reset();
     }else if(fourIsMarked==aiMark&&fiveIsMarked==aiMark&&sixIsMarked==aiMark){
     losses++;  
     $(".losses").text("losses:" + losses);
     reset();  
     }
  
  if(sevenIsMarked==playerMark&&eightIsMarked==playerMark&&nineIsMarked==playerMark){
     wins++;
     $(".wins").text("wins:" + wins);
     reset();
     }else if(sevenIsMarked==aiMark&&eightIsMarked==aiMark&&nineIsMarked==aiMark){
     losses++;  
     $(".losses").text("losses:" + losses);
     reset();  
     }
  
  
  if(oneIsMarked==playerMark&&fourIsMarked==playerMark&&sevenIsMarked==playerMark){
     wins++;
     $(".wins").text("wins:" + wins);
     reset();
     }else if(oneIsMarked==aiMark&&fourIsMarked==aiMark&&sevenIsMarked==aiMark){
     losses++;  
     $(".losses").text("losses:" + losses);
     reset();  
     }
  
   if(twoIsMarked==playerMark&&fiveIsMarked==playerMark&&eightIsMarked==playerMark){
     wins++;
     $(".wins").text("wins:" + wins);
     reset();
     }else if(twoIsMarked==aiMark&&fiveIsMarked==aiMark&&eightIsMarked==aiMark){
     losses++;  
     $(".losses").text("losses:" + losses);
     reset();  
     }
  
  if(threeIsMarked==playerMark&&sixIsMarked==playerMark&&nineIsMarked==playerMark){
     wins++;
     $(".wins").text("wins:" + wins);
     reset();
     }else if(threeIsMarked==aiMark&&sixIsMarked==aiMark&&nineIsMarked==aiMark){
     losses++;  
     $(".losses").text("losses:" + losses);
     reset();  
     }
  if(oneIsMarked==playerMark&&fiveIsMarked==playerMark&&nineIsMarked==playerMark){
     wins++;
     $(".wins").text("wins:" + wins);
     reset();
     }else if(oneIsMarked==aiMark&&fiveIsMarked==aiMark&&nineIsMarked==aiMark){
     losses++;  
     $(".losses").text("losses:" + losses);
     reset();  
     }
  if(sevenIsMarked==playerMark&&fiveIsMarked==playerMark&&threeIsMarked==playerMark){
     wins++;
     $(".wins").text("wins:" + wins);
     reset();
     }else if(sevenIsMarked==aiMark&&fiveIsMarked==aiMark&&threeIsMarked==aiMark){
     losses++;  
     $(".losses").text("losses:" + losses);
     reset();  
     }
  
  
  if(oneIsMarked!=""&&oneIsMarked!=""&&threeIsMarked!=""&&fourIsMarked!=""
     &&fiveIsMarked!=""&&sixIsMarked!=""&&sevenIsMarked!=""&&eightIsMarked!=""&&nineIsMarked!=""){  
  draws++;    
  $(".draws").text("Draws:" + draws); 
  reset();
     }
  
}  
  
  function calculate(whichOne,mark){
    switch(whichOne){
      case "one":
        $("#one").text(mark);
        playerTurn=false;
        oneIsMarked=mark;
        outcome(); 
        break;
      case "two":
        $("#two").text(mark);
        playerTurn=false;
        twoIsMarked=mark;
        outcome(); 
        break;
      case "three":
        $("#three").text(mark);
        playerTurn=false;
        threeIsMarked=mark;
        outcome(); 
        break;
        
      case "four":
        $("#four").text(mark);
        playerTurn=false;
        fourIsMarked=mark;
        outcome(); 
        break;
        
      case "five":
        $("#five").text(mark);
        playerTurn=false;
        fiveIsMarked=mark;
        outcome(); 
        break;
        
      case "six":
        $("#six").text(mark);
        playerTurn=false;
        sixIsMarked=mark;
        outcome(); 
        break;
      case "seven":
        $("#seven").text(mark);
        playerTurn=false;
        sevenIsMarked=mark;
        outcome(); 
        break;
     case "eight":
        $("#eight").text(mark);
        playerTurn=false;
        eightIsMarked=mark;
        outcome(); 
        break;
        
     case "nine":
        $("#nine").text(mark);
        playerTurn=false;
        nineIsMarked=mark;
        outcome(); 
        break;
     
    }
  }
 
  
  function aiStuff(){
    if(playerTurn==false){
    var number = array[Math.floor(Math.random() * array.length)]
    
    switch(number){
        case 1:
        if(oneIsMarked==""){
        //calculate("one",aiMark);
        playerTurn=true;
        oneIsMarked=aiMark;
        outcome(); 
        }else{
        aiStuff(array[Math.floor(Math.random() * array.length)],aiMark);
        }  
        break;
      case 2:
        if(twoIsMarked==""){
        $("#two").text(aiMark);
        playerTurn=true;
        twoIsMarked=aiMark;
        outcome(); 
        }else{
        aiStuff(array[Math.floor(Math.random() * array.length)],aiMark);
        }  
        break;
      case 3:
        if(threeIsMarked==""){
        $("#three").text(aiMark);
        playerTurn=true;
        threeIsMarked=aiMark;
        outcome(); 
        }else{
        aiStuff(array[Math.floor(Math.random() * array.length)],aiMark);
        }  
        break;
        
      case 4:
        if(fourIsMarked==""){
        $("#four").text(aiMark);
        playerTurn=true;
        fourIsMarked=aiMark;
          outcome(); 
        }else{
        aiStuff(array[Math.floor(Math.random() * array.length)],aiMark);
        }  
        break;
        
      case 5:
        if(fiveIsMarked==""){
        $("#five").text(aiMark);
        playerTurn=true;
        fiveIsMarked=aiMark;
          outcome(); 
        }else{
        aiStuff(array[Math.floor(Math.random() * array.length)],aiMark);
        }  
        break;
        
      case 6:
        if(sixIsMarked==""){
        $("#six").text(aiMark);
        playerTurn=true;
        sixIsMarked=aiMark;
          outcome(); 
        }else{
        aiStuff(array[Math.floor(Math.random() * array.length)],aiMark);
        }  
        break;
      case 7:
        if(sevenIsMarked==""){
        $("#seven").text(aiMark);
        playerTurn=true;
        sevenIsMarked=aiMark;
        outcome();   
        }else{
        aiStuff(array[Math.floor(Math.random() * array.length)],aiMark);
        }    
        break;
     case 8:
        if(eightIsMarked==""){
        $("#eight").text(aiMark);
        playerTurn=true;
        eightIsMarked=aiMark;
        }else{
        aiStuff(array[Math.floor(Math.random() * array.length)],aiMark);
        outcome(); 
        }    
        break;
        
     case 9:
        if(nineIsMarked==""){
        $("#nine").text(aiMark);
        playerTurn=true;
        nineIsMarked=aiMark;
        outcome();  
        }else{
        aiStuff(array[Math.floor(Math.random() * array.length)],aiMark);
        }    
        break;
     
    }
    }
    
  }
  
  
  
  
  $("#one").click(function(){
      if(playerTurn==true&&oneIsMarked==""){  
      calculate("one",playerMark);
      aiStuff()
      outcome()
      }
      
  });
  $("#two").click(function(){
      if(playerTurn==true&&twoIsMarked==""){  
      calculate("two",playerMark);
      aiStuff()
      outcome()
      }
  });
  $("#three").click(function(){
      if(playerTurn==true&&threeIsMarked==""){  
      calculate("three",playerMark);
      aiStuff()
      outcome()
      }
  });
  $("#four").click(function(){
      if(playerTurn==true&&fourIsMarked=="")  {
      calculate("four",playerMark);
      aiStuff()
      outcome()
      }
  });
  $("#five").click(function(){
      if(playerTurn==true&&fiveIsMarked=="")  {
      calculate("five",playerMark);
      aiStuff()
      outcome()
      }
  });
  $("#six").click(function(){
      if(playerTurn==true&&sixIsMarked=="") { 
      calculate("six",playerMark);
      aiStuff()
      outcome()
      }
  });
  $("#seven").click(function(){
      if(playerTurn==true&&sevenIsMarked==""){  
      calculate("seven",playerMark);
      aiStuff()
      outcome()
      }
  });
  $("#eight").click(function(){
      if(playerTurn==true&&eightIsMarked==""){  
      calculate("eight",playerMark);
      aiStuff()
        outcome()
      }
  });
  $("#nine").click(function(){
      if(playerTurn==true&&nineIsMarked=="")  {
      calculate("nine",playerMark);
      aiStuff()
        outcome()
      }
  });
  
  
  
  
  
  
  
  
  
  
  });