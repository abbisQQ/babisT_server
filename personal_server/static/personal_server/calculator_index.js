$(document).ready(function(){
  var text = "";
  var displayText="";
  var first="";
  var second="";
  var sign ="";
  
  
   $("#AC").click(function(){
  text = "";
  displayText="";
  first="";
  second="";
  sign ="";
  $('p').text(displayText);
  });
  
  
  $("#dot").click(function(){
    if(!displayText.includes('.')){
    displayText+="."
    text=displayText;
   $('p').text(displayText);
    }
  });
  
  
    $("#one").click(function(){
        $('p').text(displayText+'1');
        text+='1'
        if(text.length<10){
          displayText=text;
        }else{
          displayText="....."
        }});
  
  
  $("#two").click(function(){
        $('p').text(displayText+'2');
        text+='2'
        if(text.length<10){
          displayText=text;
        }else{
          displayText="....."
        }
        
    });
  
  $("#three").click(function(){
        $('p').text(displayText+'3');
        text+='3'
        if(text.length<10){
          displayText=text;
        }else{
          displayText="....."
        }
        
    });
  
  $("#four").click(function(){
        $('p').text(displayText+'4');
        text+='4'
        if(text.length<10){
          displayText=text;
        }else{
          displayText="....."
        }
        
    });
  
  
  $("#five").click(function(){
        $('p').text(displayText+'5');
        text+='5'
        if(text.length<10){
          displayText=text;
        }else{
          displayText="....."
        }
        
    });
  
  
  $("#six").click(function(){
        $('p').text(displayText+'6');
        text+='6'
        if(text.length<10){
          displayText=text;
        }else{
          displayText="....."
        }
        
    });
  
  $("#seven").click(function(){
        $('p').text(displayText+'7');
        text+='7'
        if(text.length<10){
          displayText=text;
        }else{
          displayText="....."
        }
        
    });
  
  
  $("#eight").click(function(){
        $('p').text(displayText+'8');
        text+='8'
        if(text.length<10){
          displayText=text;
        }else{
          displayText="....."
        }
        
    });
  
  
  $("#nine").click(function(){
        $('p').text(displayText+'9');
        text+='9'
        if(text.length<10){
          displayText=text;
        }else{
          displayText="....."
        }
        
    });
  
  
  $("#zero").click(function(){
        $('p').text(displayText+'0');
        text+='0'
        if(text.length<10){
          displayText=text;
        }else{
          displayText="....."
        }
        
    });
  
  $("#plus").click(function(){
        if(sign==""){
        sign="+"
        }
        if(first==""&text!=""){
          first=text
          text=""
          displayText=""
          console.log("one")
        }else if(second=="" &text!=""){
          second=text
          text=""
          displayText=""
          console.log("two")
        }
        
         if(first!=""&second!=""&sign=="*"){
          displayText = (parseFloat(first)*parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="+"
         }else if(first!=""&second!=""&sign=="+"){
          displayText = (parseFloat(first)+parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="+"
         }else if(first!=""&second!=""&sign=="-"){
          displayText = (parseFloat(first)-parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="+"
         } else if(first!=""&second!=""&sign=="/"){
          displayText = (parseFloat(first)/parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="+"
         }
    
    });
  
  
  
  
  
   $("#multiply").click(function(){
         if(sign==""){
            sign="*"
        }
        if(first==""&text!=""){
          first=text
          text=""
          displayText=""
          console.log("one")
        }else if(second=="" &text!=""){
          second=text
          text=""
          displayText=""
          console.log("two")
        }
        
        if(first!=""&second!=""&sign=="*"){
          displayText = (parseFloat(first)*parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="*"
         }else if(first!=""&second!=""&sign=="+"){
          displayText = (parseFloat(first)+parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="*"
         }else if(first!=""&second!=""&sign=="-"){
          displayText = (parseFloat(first)-parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="*"
         } else if(first!=""&second!=""&sign=="/"){
          displayText = (parseFloat(first)/parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="*"
         }
    });
  
  
  
  $("#minus").click(function(){
        if(sign==""){
            sign="-"
        }
        if(first==""&text!=""){
          first=text
          text=""
          displayText=""
          console.log("one")
        }else if(second=="" &text!=""){
          second=text
          text=""
          displayText=""
          console.log("two")
        }
        
       if(first!=""&second!=""&sign=="*"){
          displayText = (parseFloat(first)*parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="-"
         }else if(first!=""&second!=""&sign=="+"){
          displayText = (parseFloat(first)+parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="-"
         }else if(first!=""&second!=""&sign=="-"){
          displayText = (parseFloat(first)-parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="-"
         } else if(first!=""&second!=""&sign=="/"){
          displayText = (parseFloat(first)/parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="-"
         }
    
    
    });
  
  
  
  $("#divide").click(function(){
    if(sign==''){    
    sign="/"
    }
        if(first==""&text!=""){
          first=text
          text=""
          displayText=""
          console.log("one")
        }else if(second=="" &text!=""){
          second=text
          text=""
          displayText=""
          console.log("two")
        }
        
        if(first!=""&second!=""&sign=="*"){
          displayText = (parseFloat(first)*parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="/"
         }else if(first!=""&second!=""&sign=="+"){
          displayText = (parseFloat(first)+parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="/"
         }else if(first!=""&second!=""&sign=="-"){
          displayText = (parseFloat(first)-parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="/"
         } else if(first!=""&second!=""&sign=="/"){
          displayText = (parseFloat(first)/parseFloat(second)).toString();
          first=displayText
          $('p').text(displayText);
          displayText=""
          second=""
          console.log("three")
          sign="/"
         }
    
    
    });
  
   $("#equals").click(function(){
     
    if(first!=""&second=="" &text!=""){
          second=text
          text=""
          displayText=""
          console.log("two")
        } 
     
    
     
    if(first!=""&second!=""){
      switch(sign){
        case "+":
           displayText = (parseFloat(first)+parseFloat(second)).toString();
           break;
        case "-":
           displayText = (parseFloat(first)-parseFloat(second)).toString();
           break;
        case "*":
           displayText = (parseFloat(first)*parseFloat(second)).toString();
           break;
        case "/":
           displayText = (parseFloat(first)/parseFloat(second)).toString();
           break;
        default:
          
      }
     
      
      
       first=displayText
       $('p').text(displayText);
       displayText=""
       second=""
       sign=""
       console.log("three")
       
    }
   });
  
  
  
  
  
});