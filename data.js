//stores time-textXX objects used in showcase animation
    //time: ms until next pause
    //textXX: description of current step in animation, XX = language code
//stores text-href object for localization of static text-content
////////////////////////////////////////////////////////////////////////////////////////////////////

const TIMESTAMPS_WIN = [
    {time:2440, en:"first, set the timer", ru: "TODO:", de:"stell die zeit ein", fr: "TODO:"},
    {time:3000, en:"in the tag manager \u2014 go create some tags", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:1000, en:"resolve any tags you don't need anymore", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:3300, en:"choose a tag fit for your task", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:1300, en:"now, set your focus", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:2100, en:"if your apps don't show up, bring them to the front", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:2300, en:"pick your focus and exception apps", ru: "TODO:", de:"TODO:", fr: "TODO:"}, 
    {time:2700, en:"start buoy", ru: "TODO:", de:"TODO:", fr: "TODO:"}, 
    {time:1700, en:"now, it's just you and your task", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:1650, en:"if you do get distracted", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:2100, en:"you have 10 seconds to get back on track", ru: "TODO:", de:"TODO:", fr: "TODO:"}, 
    {time:3350, en:"stay focused", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:2950, en:"until time's up", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:3000, en:"but there's more: check out your stats, search for tags", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {textEN: "that's it, give it a try", ru: "TODO:", de:"TODO:", fr: "TODO:"}
]
const TIMESTAMPS_MAC = [
    {time:2440, en:"set the timer", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:3000, en:"create a tag", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:1000, en:"get rid of tags you don't need anymore", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:3300, en:"add a tag", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:1300, en:"set your focus", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:2100, en:"make sure all apps you want to use are open", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:2300, en:"Start buoy", ru: "TODO:", de:"TODO:", fr: "TODO:"}, 
    {time:2700, en:"You are allowed to use your focus and exception apps", ru: "TODO:", de:"TODO:", fr: "TODO:"}, 
    {time:1700, en:"Focus", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:1650, en:"If you do get distracted", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:2100, en:"You have 10s to get back on track", ru: "TODO:", de:"TODO:", fr: "TODO:"}, 
    {time:3350, en:"Stay focused", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:2950, en:"Time's up", ru: "TODO:", de:"TODO:", fr: "TODO:"},
    {time:3000, en:"But there's more: check your stats, search for tags", ru: "TODO:", de:"TODO:", fr: "TODO:"}
]

const TEXT_HREFS = {
    about: {en: ['about', '#'], de: ['TODO:DE', '#'], ru: ['о\xa0сети', '#'], fr: ['TODO:FR', '#']},
    privacy: {en: ['privacy', '#'], de: ['TODO:DE', '#'], ru: ['TODO:RU', '#'], fr: ['TODO:FR', '#']},
    licence: {en: ['licence', '#'], de: ['TODO:DE', '#'], ru: ['TODO:RU', '#'], fr:['TODO:FR', '#']}
}