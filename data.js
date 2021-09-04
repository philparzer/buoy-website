//stores time-textXX objects used in showcase animation
//time: ms until next pause
//textXX: description of current step in animation, XX = language code
////////////////////////////////////////////////////////////////////////////////////////////////////

const TIMESTAMPS_WIN = [
    {time:2440, en:"first, set the timer", de:"stell die zeit ein" /*TODO: fr, ru, de text keys*/},
    {time:3000, en:"in the tag manager \u2014 go create some tags"},
    {time:1000, en:"resolve any tags you don't need anymore"},
    {time:3300, en:"choose a tag fit for your task"},
    {time:1300, en:"now, set your focus"},
    {time:2100, en:"if your apps don't show up, bring them to the front"},
    {time:2300, en:"pick your focus and exception apps"}, 
    {time:2700, en:"start buoy"}, 
    {time:1700, en:"now, it's just you and your task"},
    {time:1650, en:"if you do get distracted"},
    {time:2100, en:"you have 10 seconds to get back on track"}, 
    {time:3350, en:"stay focused"},
    {time:2950, en:"until time's up"},
    {time:3000, en:"but there's more: check out your stats, search for tags"},
    {textEN: "that's it, give it a try"}
]
const TIMESTAMPS_MAC = [
    {time:2440, en:"set the timer"},
    {time:3000, en:"create a tag"},
    {time:1000, en:"get rid of tags you don't need anymore"},
    {time:3300, en:"add a tag"},
    {time:1300, en:"set your focus"},
    {time:2100, en:"make sure all apps you want to use are open"},
    {time:2300, en:"Start buoy"}, 
    {time:2700, en:"You are allowed to use your focus and exception apps"}, 
    {time:1700, en:"Focus"},
    {time:1650, en:"If you do get distracted"},
    {time:2100, en:"You have 10s to get back on track"}, 
    {time:3350, en:"Stay focused"},
    {time:2950, en:"Time's up"},
    {time:3000, en:"But there's more: check your stats, search for tags"}
]

const TEXT_HREFS = {
    about: {en: ['about', '#'], de: ['mehr', '#'], ru: ['о\xa0сети', '#'], fr: ['TODOFR', '#']},
    privacy: {en: ['privacy', '#'], de: ['datenschutz', '#'], ru: ['TODORU', '#'], fr: ['TODOFR', '#']},
    licence: {en: ['licence', '#'], de: ['lizenz', '#'], ru: ['TODORU', '#'], fr:['TODOFR', '#']}
}