let writeEle = document.body.querySelector(".box");

let number = 22;

let list = ["dog","fish","cat","shark","cat","dog"];

for (let i = 0; i<list.length; i++){
    if (list[i] == "dog"){
        let ele = document.createElement("div");
        ele.innerHTML="bork bork";
        writeEle.appendChild(ele);
    }
    else if (list[i] == "cat"){
        let ele = document.createElement("div");
        ele.innerHTML="I am a cat";
        writeEle.appendChild(ele);
    }
    else{
        let ele = document.createElement("div");
        ele.innerHTML="Not dog or cat";
        writeEle.appendChild(ele);
    }
}

let button = document.getElementById("mix");
button.addEventListener("click", function(){
    writeEle.innerHTML = "";
    list.sort(function (a,b){return .5 - Math.random()})
    for (let x = 0; x<list.length; x++){
        if (list[x] == "dog"){
            let ele = document.createElement("div");
            ele.innerHTML="bork bork";
            writeEle.appendChild(ele);
        }
        else if (list[x] == "cat"){
            let ele = document.createElement("div");
            ele.innerHTML="I am a cat";
            writeEle.appendChild(ele);
        }
        else{
            let ele = document.createElement("div");
            ele.innerHTML="Not dog or cat";
            writeEle.appendChild(ele);
        }
    }
})