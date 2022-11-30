let btn = document.querySelector("button");
let bodyC = document.querySelector("body")

let colorArr = ["hotpink" , "darkorange" , "deepskyblue" , "lightcoral" ,"darkslategray"];

let i = 0
btn.onclick = function() {

    bodyC.style.backgroundColor = colorArr[i];

    i++;

    if(i == colorArr.length) {

        i=0;
    }

}