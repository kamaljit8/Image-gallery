// Kamaljit Kaur 200537971



// This allows us to make the functionality work henever the page is Loaded

document.addEventListener("DOMContentLoaded", function () {
   
    // Declaration of variables
var mn_img = document.querySelector("#main-img");
var child_img = document.querySelectorAll(".child-img");

// The loop is used to iterate through all images
child_img.forEach(function(child){
// The  Event click is used to achieve the final result
child.addEventListener("click", function(){
    var thumbnail = child.getAttribute("src");
    mn_img.setAttribute("src", thumbnail);
});
});
});