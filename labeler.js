var numberValue = 1;
var current_term = 0;
var value = "";
const array = ['a','b','c'];
console.log(current_term);
console.log(array[current_term]);


// CreateDrgElement()
function AfterChecking() {
    if (current_term == array.length) {
        current_term = 0;
        numberValue = 0;
    }
    numberValue += 1;
    current_term+=1;
    console.log(current_term);
    console.log(array[current_term]);
}

function hideNshow() {
    var x = document.getElementById("showTerms");
    var e = document.getElementById("hideButton");
    if (x.style.display === "none") {
        
    x.style.display = "block";
    e.innerHTML = "hide terms";
    } else {
      x.style.display = "none";
      e.innerHTML = "look at terms";
    }
  }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var currentBoxNumber = 0;
$(document).on("keypress", "input[type=textarea]", function(event){
    textboxes = $("input.drag");
    currentBoxNumber = textboxes.index(event.target);
    if(event.which == 13){
        event.preventDefault();
        var inputVal = $(this).val();
        var inputName = $(this).attr("name");
        if (inputVal == array[currentBoxNumber]) {
            CorrectOn();
            sleep(2000).then(() => {
                CorrectOff()
            });
            AfterChecking();

        } else {
            WrongOn();
            sleep(2000).then(() => {
                WrongOff()
            });
            AfterChecking();
        }
        textboxes = $("input.drag");
        currentBoxNumber = textboxes.index(event.target);
        if (textboxes[currentBoxNumber + 1] != null) {
            nextBox = textboxes[currentBoxNumber + 1];
            nextBox.focus();
            nextBox.select();
            return false;
        } else {
            currentBoxNumber = -1;
            current_term = 0;
            numberValue = 0;
            nextBox = textboxes[currentBoxNumber + 1];
            nextBox.focus();
            nextBox.select();
            return false;
        }
    }
});

var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

function CorrectOn() {
    document.getElementById("correct").style.display = "block";
}

function CorrectOff() {
    document.getElementById("correct").style.display = "none";
}

function WrongOn() {
    document.getElementById("wrong").style.display = "block";
}

function WrongOff() {
    document.getElementById("wrong").style.display = "none";
}

function checkAnswer() {
    var inputVal = $(this).val();
    if (inputVal == array[current_term]) {
        window.alert(numberValue + ". " + inputVal + " is correct");
        on()
        AfterChecking();

    } else {
        window.alert(numberValue + ". " + inputVal + " is wrong");
        off()
        AfterChecking();
    }
    document.getElementById("checker").value = "";

};

function getter() {
    array.length = 0;
    $('input[name^=titles]').each(function(){
    array.push($(this).val());
    });
    console.log(array);

    hideNshow();
    for (let i = 0; i < array.length; i++) {
        CreateDrgElement();
    }
    return false;
}

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var element1 = document.getElementById("ClassDisplay");
    element1.classList.toggle("dark-display");
}

$(document).keydown(function(e) {
    if (e.keyCode == 82 && e.metaKey) {
        // e.preventDefault();
    }
});

$(".draggable").draggable()
  .click(function() {
    $(this).draggable( {disabled: false});
}).dblclick(function() {
    $(this).draggable({ disabled: true });
});

let _number = 1;
function CreateDrgElement() {
    var registry =  "<div class='draggable'>" + _number+". " + '<input type="textarea" placeholder="Answer here..." class="drag"' +"/>" + "</div>"
    $("#draggables").append(registry);
    $('#draggables').children().last().draggable();
                $(registry).draggable();
    $("#entry").val("");
    _number += 1;
    return false; //also stops refreshing
}

number = 4;
function myFunction () {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const newLine = document.createElement("br")
    const numberLabel = document.createElement("strong")
    numberLabel.innerText = number+". ";
    input.setAttribute("type", "text");
    div.setAttribute("id", "inputStyle");
    input.setAttribute("name", "titles[]")
   
    document.getElementById("terms").appendChild(div);
    document.getElementById("inputStyle").appendChild(numberLabel);
    document.getElementById("inputStyle").appendChild(input);
    document.getElementById("inputStyle").appendChild(newLine);
    number = number+1;
}

$(document).ready(function() {
    var tabs = $("#container-1").tabs();
    var tabCounter = tabs.find('ul').first().children().length;
    
    $('#add_tab').click( function(){
        var e = prompt('enter a name');
        var ul = tabs.find( "ul" );
        $( '<li><a href="#fragment-' + ++tabCounter + '">'+e+'</a></li>' ).appendTo( ul );
        $( '<div id="fragment-' + tabCounter + '">'+ s1 +'</div>' ).appendTo( tabs );
        tabs.tabs( "refresh" );
        tabs.tabs('select', tabCounter - 1);
    });
}); 