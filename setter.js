var number = 4;

function myFunction () {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const newLine = document.createElement("br")
    const numberLabel = document.createElement("strong")
    numberLabel.innerText = number+". ";
    input.setAttribute("type", "text");
    div.setAttribute("id", "inputStyle");
  
    document.getElementById("terms").appendChild(div);
    document.getElementById("inputStyle").appendChild(numberLabel);
    document.getElementById("inputStyle").appendChild(input);
    document.getElementById("inputStyle").appendChild(newLine);
    number = number+1;
}
  
function getter() {
    var clones = $("input:text").clone();
    [...clones].forEach(item => 
        array.push(item.value));
    array.forEach(term => console.log(term));
    return true;
}

