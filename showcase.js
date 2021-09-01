//rive animation object
const SHOWCASE_ANIM = new rive.Rive({   

    src: /*'https://public.rive.app/community/runtime-files/831-1627-buoy.riv',*/ 'https://public.rive.app/community/runtime-files/831-1637-buoy.riv',
    canvas: document.getElementById('animation-canvas'),
    autoplay: false,
    animations: ["showcase", "showcaseMAC"]
});


//elements
const SHOWCASE_INFO = document.getElementById("timestamp");
const NEXT_STEP_BTN = document.getElementById("next-step");
const NEXT_STEP_BTN_SVG = document.getElementById("next-arrow");
const REPLAY_BTN_SVG = document.getElementById("replay-arrow")
//globals
var iterations = 0;
var animationToPlay = "";
var timeStampArr = [];
var nextButtonStatus = true;

//platform check
var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;

if (isMac) {
    animationToPlay = "showcaseMAC";
    timeStampArr = TIMESTAMPS_MAC;
}

else {
    animationToPlay = "showcase";
    timeStampArr = TIMESTAMPS_WIN;
}

const toggleNextBtn = () => {
    
    nextButtonStatus = !nextButtonStatus;
    NEXT_STEP_BTN.disabled = nextButtonStatus;

    if (nextButtonStatus){
        NEXT_STEP_BTN_SVG.setAttribute("stroke", "#DBDB93") //TODO: maybe use fade css class
        NEXT_STEP_BTN_SVG.style.cursor = "pointer";
    }

    else {

        NEXT_STEP_BTN_SVG.setAttribute("stroke", "#DBA993"); //TODO: maybe use fade css class
        NEXT_STEP_BTN_SVG.style.cursor = "not-allowed";
    }

}

//handles next step in animation functionality
const playNextStep = () => {
    
    toggleNextBtn();

    SHOWCASE_INFO.textContent = timeStampArr[iterations].textEN; //TODO: get language that corresponds with elementNodeReference.lang
    SHOWCASE_ANIM.play(animationToPlay);
    
    setTimeout(() => {
        toggleNextBtn()
        SHOWCASE_ANIM.pause(animationToPlay); 
        iterations++; 
        NEXT_STEP_BTN.disabled = false;
    },  timeStampArr[iterations].time)
}

//handles next btn input and disable
function next() {

    if (!SHOWCASE_ANIM.isPlaying && iterations < timeStampArr.length)
    {
        playNextStep();

        //style for replay
        if (iterations >= timeStampArr.length-1) 
        {
            NEXT_STEP_BTN_SVG.classList = "d-none";
            REPLAY_BTN_SVG.classList = "";
        }
    }

    else if (iterations >= timeStampArr.length)
    {   
        //unstyle replay
        NEXT_STEP_BTN_SVG.classList = "";
        REPLAY_BTN_SVG.classList = "d-none";
        //reset animation
        iterations = 0;
        SHOWCASE_ANIM.scrub(animationToPlay, .5);
        SHOWCASE_INFO.textContent = "";
        //playNextStep();
    }
    
}

//initial call to display animation's first frame (instead of weird static image / thumbnail) on load
SHOWCASE_ANIM.scrub(animationToPlay, .5)