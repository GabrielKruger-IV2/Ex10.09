$("#btnC").click(function(){
   var valorConvert =  $("#convert").val()


   var c5 = valorConvert/0.05
   var c10 = valorConvert/0.1
   var c25 = valorConvert/0.25
   var c50 = valorConvert/0.5
   var c1 = valorConvert/1

   $("#c5").val(c5)
   $("#c10").val(c10)
   $("#c25").val(c25)
   $("#c50").val(c50)
   $("#c1").val(c1)
})