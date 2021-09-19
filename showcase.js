//rive animation object
const SHOWCASE_ANIM = new rive.Rive({   

    src: /*'https://public.rive.app/community/runtime-files/831-1627-buoy.riv',*/ 'https://public.rive.app/community/runtime-files/831-1637-buoy.riv',
    canvas: document.getElementById('animation-canvas'),
    autoplay: false,
    animations: ["showcase", "showcaseMAC"]
});

const SHOWCASE_ANIM_SMALL = new rive.Rive({   

    src: /*'https://public.rive.app/community/runtime-files/831-1627-buoy.riv',*/ 'https://public.rive.app/community/runtime-files/831-1637-buoy.riv',
    canvas: document.getElementById('animation-canvas-small'),
    autoplay: false,
    animations: ["showcase", "showcaseMAC"]
});

//elements first + small breakpoints
const SHOWCASE_INFO = document.getElementById("timestamp");
const SHOWCASE_INFO_SMALL = document.getElementById("timestamp-small");

const NEXT_STEP_BTN = document.getElementById("next-step");
const NEXT_STEP_BTN_SMALL  = document.getElementById("next-step-small");

const NEXT_STEP_BTN_SVG = document.getElementById("next-arrow");
const NEXT_STEP_BTN_SVG_SMALL  = document.getElementById("next-arrow-small");

const REPLAY_BTN_SVG = document.getElementById("replay-arrow");
const REPLAY_BTN_SVG_SMALL  = document.getElementById("replay-arrow-small");

const EN_BTN = document.getElementById("en-button");
const RU_BTN = document.getElementById("ru-button");
const DE_BTN = document.getElementById("de-button");
const FR_BTN = document.getElementById("fr-button");
const EN_BTN_SMALL = document.getElementById("en-button-small");
const RU_BTN_SMALL = document.getElementById("ru-button-small");
const DE_BTN_SMALL = document.getElementById("de-button-small");
const FR_BTN_SMALL= document.getElementById("fr-button-small");

const ABOUT = document.getElementById("about");
const PRIVACY = document.getElementById("privacy");
const LICENCE = document.getElementById("licence");
const LANG_BTNS = [EN_BTN, RU_BTN, DE_BTN, FR_BTN, EN_BTN_SMALL, RU_BTN_SMALL, DE_BTN_SMALL,FR_BTN_SMALL]
const TEXT_ELES = [ABOUT, PRIVACY, LICENCE]


//globals
var iterations = 0;
var animationToPlay = "";
var timeStampArr = [];
var nextButtonStatus = true;

//platform check
var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0; //button that lets user switch to mac?

if (isMac) {
    animationToPlay = "showcaseMAC";
    timeStampArr = TIMESTAMPS_MAC;
}

else {
    animationToPlay = "showcase";
    timeStampArr = TIMESTAMPS_WIN;
}

console.log(animationToPlay)

const toggleNextBtn = () => {
    
    nextButtonStatus = !nextButtonStatus;
    try {NEXT_STEP_BTN.disabled = nextButtonStatus;} catch{}
    try {NEXT_STEP_BTN_SMALL.disabled = nextButtonStatus;} catch{}

    if (nextButtonStatus){
        try {
            NEXT_STEP_BTN_SVG.setAttribute("stroke", "#DBDB93");
            NEXT_STEP_BTN_SVG.style.cursor = "pointer";
        }
        catch{}
        try {
            NEXT_STEP_BTN_SVG_SMALL.setAttribute("stroke", "#DBDB93");
            NEXT_STEP_BTN_SVG_SMALL.style.cursor = "pointer";
        }
        catch{}

    }

    else {
        try {
            NEXT_STEP_BTN_SVG.setAttribute("stroke", "#DBA993");
            NEXT_STEP_BTN_SVG.style.cursor = "not-allowed";
        } catch{}
        try {
            NEXT_STEP_BTN_SVG_SMALL.setAttribute("stroke", "#DBA993");
            NEXT_STEP_BTN_SVG_SMALL.style.cursor = "not-allowed";
        }catch{}
        
    }

}

//handles next step in animation functionality
const playNextStep = () => {
    
    toggleNextBtn();
    console.log(document.documentElement.lang)
    SHOWCASE_INFO.textContent = timeStampArr[iterations][document.documentElement.lang]; //TODO: get language that corresponds with elementNodeReference.lang
    SHOWCASE_INFO_SMALL.textContent = timeStampArr[iterations][document.documentElement.lang];
    SHOWCASE_ANIM.play(animationToPlay);
    SHOWCASE_ANIM_SMALL.play(animationToPlay);
    
    setTimeout(() => {
        toggleNextBtn()
        SHOWCASE_ANIM.pause(animationToPlay);
        SHOWCASE_ANIM_SMALL.pause(animationToPlay); 
        iterations++; 
        try{NEXT_STEP_BTN.disabled = false;} catch{}
        try{NEXT_STEP_BTN_SMALL.disabled =false;} catch{}
    },  timeStampArr[iterations].time)
}

//handles next btn input and disable
function next() {

    document.getElementById("play-arrow-wrapper-small").classList ="";
    document.getElementById("play-arrow-wrapper").classList ="";

    if (!SHOWCASE_ANIM.isPlaying && iterations < timeStampArr.length)
    {
        playNextStep();

        //style for replay
        if (iterations >= timeStampArr.length-1) 
        {
            try{NEXT_STEP_BTN_SVG.classList = "d-none";} catch{}
            try {NEXT_STEP_BTN_SVG_SMALL.classList ="d-none";} catch{}
            REPLAY_BTN_SVG.classList = "";
            REPLAY_BTN_SVG_SMALL.classList = "";
        }
    }

    else if (iterations >= timeStampArr.length)
    {   
        //unstyle replay
        try {NEXT_STEP_BTN_SVG.classList = "";} catch{}
        try {NEXT_STEP_BTN_SVG_SMALL.classList = "";} catch{}
        try {REPLAY_BTN_SVG.classList = "d-none";}catch{}
        try {REPLAY_BTN_SVG_SMALL.classList = "d-none";}catch{}
        //reset animation
        iterations = 0;
        SHOWCASE_ANIM.scrub(animationToPlay, .5);
        SHOWCASE_ANIM_SMALL.scrub(animationToPlay, .5);
        SHOWCASE_INFO.textContent = "";
        SHOWCASE_INFO_SMALL.textContent ="";
    }
    
}

//initial call to display animation's first frame (instead of weird static image / thumbnail) on load
SHOWCASE_ANIM.scrub(animationToPlay, .5)
SHOWCASE_ANIM_SMALL.scrub(animationToPlay, .5);
        


