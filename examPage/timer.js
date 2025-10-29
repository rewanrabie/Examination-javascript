var totaltime=1*60;

var timeview=document.getElementsByClassName("timer");

  var timer = setInterval(function () {
    totaltime--;

 var mintutes=Math.floor(totaltime/60);
var secends=totaltime % 60;
 timeview.textcontent(mintutes +":" + (secends <10 ? "0" +secends:secends));


 if(totaltime <= 0){

    endexam(true, );


 }
){

}
