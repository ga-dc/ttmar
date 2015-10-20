// first link
var linka = $("a").eq(0);
linka.on("click",function(){
 $("body").css("background","red");
});

//second link
document.getElementById("second_paragraph").addEventListener("click",function(){
 $(".second_paragraph").attr("style","display:inline");

});


//third link

document.getElementById("first_chorus").addEventListener("click",function(){
 event.preventDefault();
 $(".first_chorus").attr("style","display:inline");
});

//fourth link
document.getElementById("third_paragraph").addEventListener("click",function(){
 event.preventDefault();
 $(".third_paragraph").attr("style","display:inline");

});

//fifth link
$("#fourth_paragraph").on("click",function(){
 event.preventDefault();
 $(".fourth_paragraph").attr("style","display:inline");

});


//sixth link
$("#second_chorus").on("click",function(){
 event.preventDefault();
 $(".second_chorus").attr("style","display:inline");

});
