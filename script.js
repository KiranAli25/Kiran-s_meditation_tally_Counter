
let h2 = document.getElementById("chant");
let audio= new Audio("Record (online-voice-recorder.com).mp3");
let byeMessage = new Audio("Record 1 (online-voice-recorder.com).mp3")
let count = 0;

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

    function save(){

    }

    function reset() {
        count = 0; // Reset count to 0
        h2.innerHTML = count; // Update the content of the h2 element
        byeMessage.play();
        alert("Bye bye! See you next time!");
    }