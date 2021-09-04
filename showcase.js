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
const REPLAY_BTN_SVG = document.getElementById("replay-arrow");
const EN_BTN = document.getElementById("en-button");
const RU_BTN = document.getElementById("ru-button");
const DE_BTN = document.getElementById("de-button");
const FR_BTN = document.getElementById("fr-button");
const ABOUT = document.getElementById("about");
const PRIVACY = document.getElementById("privacy");
const LICENCE = document.getElementById("licence");
const LANG_BTNS = [EN_BTN, RU_BTN, DE_BTN, FR_BTN]
const TEXT_ELES = [ABOUT, PRIVACY, LICENCE /*TODO: download + hrefs*/ ]

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
    console.log(document.documentElement.lang)
    SHOWCASE_INFO.textContent = timeStampArr[iterations][document.documentElement.lang]; //TODO: get language that corresponds with elementNodeReference.lang
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


const switchButton = (langparam) => {

    
    LANG_BTNS.forEach(element => element.classList = "col-10 language-links")
    
    switch(langparam)
    {
        case 'en':
            EN_BTN.classList = "col-10 language-links doc-language";
            break;
        case 'ru':
            RU_BTN.classList = "col-10 language-links doc-language";
            break;
        case 'de':
            DE_BTN.classList = "col-10 language-links doc-language";
            break;
        case 'fr':
            FR_BTN.classList = "col-10 language-links doc-language";
            break;
        default: 
            console.log("language error")
    }
}

const switchText = (langparam) => {
    TEXT_ELES.forEach(element => {
        element.textContent = TEXT_HREFS[element.id][langparam][0];
        /*href of element = TEXT_HREFS[element.id][langparam][1];*/
    })
}

const switchLang = (langparam) => {
    
    document.documentElement.setAttribute('lang', langparam);

    switchButton(langparam);
    switchText(langparam);


}