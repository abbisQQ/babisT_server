//Run the JQuery code
$(document).ready(function(){
  
  //when the search is clicked do the following
  $('#search').click(function(){
    //get search input
    var searchTerm = $("#searchTerm").val();    
      //API url with searchTerm
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?"; 
      
  
      $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType: "json",
      success: function(data){
       
       $('#output').html("");
        
       for(var i=0; i<data[1].length;i++){
         
         $('#output').append("<li class='myLists'><a  href= "+data[3][i] + ">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>")
         
       }
      },
      error:function(errorMessage){
        alert("Error");
      }
      
    });
   
  });
  
  
});