
//rive animation object
const SHOWCASE_ANIM = new rive.Rive({
             
    src: /*'https://public.rive.app/community/runtime-files/831-1627-buoy.riv',*/ 'https://public.rive.app/community/runtime-files/831-1637-buoy.riv',
    canvas: document.getElementById('canvas'),
    autoplay: false,
    animations: ["showcase", "showcaseMAC"]
});

//chooses correct animation timestamps and description text based on whether user on MAC or WIN
const TIMESTAMPS_WIN = [
    {time:2440, text: "Set a timer"},
    {time:3000, text:"Create a tag"},
    {time:1000, text:"Get rid of tags you don't need anymore"},
    {time:3300, text:"Add a tag"},
    {time:1300, text:"Now that you've set your tag, set your focus"},
    {time:2100, text:"You can pick your focus and exceptions out of all windows currently open"},
    {time:2300, text:"Start buoy"}, 
    {time:2700, text:"You are allowed to use your focus and exception apps"}, 
    {time:1700, text:"Focus"},
    {time:1650, text:"If you do get distracted"},
    {time:2100, text:"You have 10s to get back on track"}, 
    {time:3350, text:"Stay focused"},
    {time:2950, text:"Time's up"},
    {time:3000, text:"But there's more: check your stats, search for tags"}
]
const TIMESTAMPS_MAC = [
    {time:2440, text: "Set a timerMACTESTMACTEST"},
    {time:3000, text:"Create a tag"},
    {time:1000, text:"Get rid of tags you don't need anymore"},
    {time:3300, text:"Add a tag"},
    {time:1300, text:"Now that you've set your tag, set your focus"},
    {time:2100, text:"You can pick your focus and exceptions out of all windows currently open"},
    {time:2300, text:"Start buoy"}, 
    {time:2700, text:"You are allowed to use your focus and exception apps"}, 
    {time:1700, text:"Focus"},
    {time:1650, text:"If you do get distracted"},
    {time:2100, text:"You have 10s to get back on track"}, 
    {time:3350, text:"Stay focused"},
    {time:2950, text:"Time's up"},
    {time:3000, text:"But there's more: check your stats, search for tags"}
]
const SHOWCASE_INFO = document.getElementById("timestamp");
const NEXT_STEP_BTN = document.getElementById("next-step");

var iterations = 0;
var animationToPlay = "";
var timeStampArr = [];

//check platform
var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;

if (isMac) {
    animationToPlay = "showcaseMAC";
    timeStampArr = TIMESTAMPS_MAC;
}

else {
    animationToPlay = "showcase";
    timeStampArr = TIMESTAMPS_WIN;
}

//handles next step in animation functionality
const playNextStep = () => {
    
    SHOWCASE_INFO.textContent = timeStampArr[iterations].text;
    SHOWCASE_ANIM.play(animationToPlay);
    NEXT_STEP_BTN.disabled = true;
    setTimeout(() => {
        SHOWCASE_ANIM.pause(animationToPlay); 
        iterations++; NEXT_STEP_BTN.disabled = false;
    },  timeStampArr[iterations].time)
}

//handles next btn input and disable
function next() {

    if (!SHOWCASE_ANIM.isPlaying && iterations < timeStampArr.length)
    {
        playNextStep();
    }

    else if (iterations >= timeStampArr.length)
    {
        console.log("finished");
        iterations = 0;
        SHOWCASE_ANIM.scrub(animationToPlay, .5)
        playNextStep();
    }
    
}

//initial call to display animation's first frame (instead of weird static image / thumbnail) on load
SHOWCASE_ANIM.scrub(animationToPlay, .5)