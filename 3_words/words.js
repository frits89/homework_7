var text = document.getElementById("text");
var button = document.getElementById("button");
var LongestWords = document.getElementById("LongestWords");

button.addEventListener("click",function(){
    var line = text.value;
    var Splitline = line.split(' ');

    function compare(a, b) {
        if (a.length > b.length) {
            return -1;
        }
        else if (a.length < b.length) {
            return 1;
        }
        else{
            return 0;
        }
    }
    var result = Splitline.sort(compare);
    LongestWords.innerText=result[0] + ';' + result[1] + ';' + result[2] + ';';
});