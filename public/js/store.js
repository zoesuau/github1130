console.log("hiiiiiiii")
    

$(".map_text a").on("click", function () {
    console.log("hiii")
   
    $(this).parent().siblings().hide()
    $(this).parent().parent().find(".map_text").hide()
 $(this).parent().parent().find(".embed-container").show()
    console.log("hi0ii")
})



