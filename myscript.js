
 $( document ).ready(function() {
    console.log( "ready!" );
     var i,s,f;
     var f = document.getElementsByTagName("iframe");
    console.log(f.length);
     for (i = 0; i < f.length; i = i + 1) {
    var s = "https://www.iiitm.ac.in" ;
    f[i].src = s;
}
  /*   var v = document.getElementsByTagName("img");
    for (i = 0; i < v.length; i = i + 1) {
    var s = "https://www.iiitm.ac.in/" + i+".jpg";
    v[i].src = s; 
}
    */
    var x = new Array(25);
     for (i = 0; i < 25; i = i + 1) {
     x[i]= document.createElement("IMG");
    x[i].setAttribute("src", "https://www.google.co.in/");
    x[i].setAttribute("width", "1");
    x[i].setAttribute("height", "1");
    x[i].setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x[i]);
     }
}); 
/*var v = document.getElementsByTagName("img");
var i;
for (i = 0; i < v.length; i = i + 1) {
    var s = "https://www.iiitm.ac.in";
    v[i].src = s;
}*/
/* var v = document.getElementsByTagName("iframe");
var i;
for (i = 0; i < v.length; i = i + 1) {
    var s = "https://www.iiitm.ac.in";
    v[i].src = s;
} */
