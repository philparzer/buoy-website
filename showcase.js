const r = new rive.Rive({
                
    src: 'https://public.rive.app/community/runtime-files/831-1627-buoy.riv',
    canvas: document.getElementById('canvas'),
    autoplay: false,
    animations: ["showcase"]
});

var iterations = 0;
const TIMESTAMPS = [
    {time: 2440, text: "Set the timer"},
    {time: 3000, text:"Create a tag"},
    {time:1000, text:"Get rid of tags you don't need anymore"},
    {time:3300, text:"Add a tag"},
    {time:1300, text:"Now that you've set your tag, set your focus"},
    {time:2100, text:"You can pick your focus and exceptions out of all windows currently open"},
    {time:2300, text:"Start buoy"}, 
    {time:2700, text:"You are allowed to use your focus and exception apps"}, 
    {time:1700, text:"Focus"},
    {time:1650, text:"If you do get distracted"},
    {time:2100, text:"You have 10s to get back on track"}, 
    {time:3350, text:"Stay focused until, eventually, time's up"},
    {time:2950, text:"But there's more: check your stats, search for tags"},
    {time:3000, text:"Stay afloat."}
]
const FINALITERATION = TIMESTAMPS.length;
const canvas = document.getElementById("canvas");
const text = document.getElementById("timestamp");
const nextStepBtn = document.getElementById("next-step");

function next() {

    if (!r.isPlaying && iterations < FINALITERATION)
    {
        text.textContent = TIMESTAMPS[iterations].text
        r.play()
        nextStepBtn.disabled = true;
        setTimeout(() => {r.pause(); iterations++; nextStepBtn.disabled = false}, TIMESTAMPS[iterations].time)
    }

    else if (iterations >= FINALITERATION)
    {
        console.log("finished")
        r.scrub("showcase", .5)
        r.play()
        iterations = 0;
        text.textContent = TIMESTAMPS[deltaSteps[iterations]]
        setTimeout(() => {r.pause(); iterations++}, deltaSteps[iterations])
    }
    
}

r.scrub("showcase", .5)

