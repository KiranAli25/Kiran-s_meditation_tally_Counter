
let h2 = document.getElementById("chant");
let audio= new Audio("Record (online-voice-recorder.com).mp3");
let count = 0;
let saveButton = document.getElementById("history");
let resetButton = document.getElementById("history");

function counting() {
    count = count+ 1; // Increment count by 1
    h2.innerHTML = count; // Update the content of the h2 element

    if (count === 100) {
        alert("Count reached 100!");
        audio.play();
    }

    if (count === 1000) {
        alert("Count reached 1000!");
        audio.play();}
    }

    function reset() {
        count = 0; // Reset count to 0
        h2.innerHTML = count; // Update the content of the h2 element
            alert("Reset Done!");
    }

    function save(){
        let countString= count + " - "
        saveButton.innerHTML += countString;
    }

    function resetP(){
        his= "Previous Chants: "
        resetButton.innerHTML = his;
        alert("your progress history has been reset");
    }