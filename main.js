//Initializig the Speech API

const synth= window.speechSynthesis;

//Element initializing section

const form= document.querySelector('form');
const textarea= 
document.getElementById('maintext');
const voice_select= 
document.getElementById('rate');
const pitch= document.getElementByIdi('pitch');
const reteval= document.getElementById('rate-value');
const pitchval= document.getElementById('pitch-value');


// Retreiving the different voices and  putting them as
// options in our speech selection sections

let voices= [];
cons getVoice= () => {

    //This method retrieves voices and is asynchronously loaded 
     
    voices= synth.getVoices();
    var option_string = "";
    voices.forEach(value=> {
        var option= value.name + '(' + value.lang + " ' data-lang=' " + value.lang + "'>'" + option + "</option>\n";
        option_string += newOption;

    });

    voice_select.innerHTML = option_string;


//If synth.getVoice is loaded asynchroniously, 
//this event get fired when the return object of that function has changed

synth.onvoiceschanged = function() {
    getVoice();
};

const speak= () => {
    //If speach mode is on we dont want to load another speech
if(synth.speaking){
    alert('Already Speaking....');
    return;
}

//If text area is not empty that is if the Input 
//is not empty

if(textarea.value!=='') {

    //Creating an object of SpeechSynthesisUtterence with 
    //the input value that represents a speech request

    const speakText =new SpeechSynthesisUtterance(textarea.value);

    //When the speaking is ended this method is fired

    speakText.onend = e=> {
        console.error('Error Occurred...');

    };

    //Selecting the voices for the speech from the Selecting DOM

    const id= voice_select.selectedIndex;
    const selectedVoice=
    voice_select.selectedOptions[0].getAttribute('dat a-name');

    //checking which voices has been choosen from the selection 

    //and setting the voices to the choosen voice

    voices.forEach(voice => {
        if(voice.name=== selectedVoice) {
            speakText.voice= voice;

        }
    });

    //setting the rate and pitch

    speakText.rate= rate.value;
    speakText.pitch= pitch.value;

    //finally calling the speech function which enables the speech

    synth.speak(speakText);
}
};

//This function updates the rate and pitch value to the 
//value display


rate.addEventListener('change', evt= > rateval.innerHTML= (Number.parseFloat(pitch.value)*10)+"");
pitch.addEventListener('change',evt=>pitchval.innerHTML=(Number.parseFloat(pitch.value)*10)+"");

//Finally assigining the speak button

form.addEventListener('submit',evt=>{
    evt.preventDefault();
    speak();
    textarea.blur();
});