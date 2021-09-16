//stores time-textXX objects used in showcase animation
    //time: ms until next pause
    //textXX: description of current step in animation, XX = language code
//stores text-href object for localization of static text-content
////////////////////////////////////////////////////////////////////////////////////////////////////

const TIMESTAMPS_WIN = [
    {time:2440, en:"first, set the timer", ru: "сначала заведите таймер", de:"stell die Zeit ein", fr: "d'abord, réglez le minuteur"},
    {time:3000, en:"in the tag manager \u2014 go create some tags", ru:"создайте новую метку в меню", de: "erstelle neue Markierungen im Menü", fr: "créez une nouvelle marque dans le menu"},
    {time:1000, en:"resolve any tags you don't need anymore", ru: "снимите ненужные метки", de: "entferne überflüssige Markierungen", fr:"effacez les marques inutiles"},
    {time:3300, en:"choose a tag fit for your task", ru:"выберите подходящую метку", de:"wähle eine passende Markierung aus", fr: "choisissez la marque qui convient"},
    {time:1300, en:"now, set your focus", ru:"настройте фокус", de: "setz dir ein Ziel", fr: "fixez-vous un but"},
    {time:2100, en:"if your apps don't show up, bring them to the front", ru:"если приложения не высвечиваются, выведите их на передний план", de:"werden Apps nicht angezeigt, bring sie in den Vordergrund ", fr:"si les applis ne surgissent pas, mettez-les au premier plan"},
    {time:2300, en:"pick your focus and exception apps", ru: "выберите фокус и отметьте исключаемые приложения", de:"wähl deinen Fokus und die ausgenommenen Apps aus", fr: "choisissez votre but et les applis négligeables"}, 
    {time:2700, en:"start buoy", ru:"запустите программу «buoy»‎",de:"starte buoy", fr: "démarrez buoy"}, 
    {time:1700, en:"now, it's just you and your task", ru:"теперь можно сосредоточиться на задаче", de:"deiner Arbeit steht jetzt nichts mehr im Weg", fr: "pleins feux sur votre tâche"},
    {time:1650, en:"if you do get distracted", ru:"если Вы рассеяны", de:"wenn du abgelenkt wirst", fr: "si vous vous laissez distraire"},
    {time:2100, en:"you have 10 seconds to get back on track", ru:"у Вас 10 секунд, чтобы снова сосредоточиться", de:"hast du 10 Sekunden, um dich zu konzentrieren ", fr: "vous avez 10 secondes pour vous reconcentrer "},
    {time:3350, en:"stay focused", ru:"сохраняйте концентрацию", de:"bleib fokussiert", fr: "restez concentré(e)"},
    {time:2950, en:"until time's up", ru:"пока не истечёт время", de:"bis die Zeit abläuft ", fr: "jusqu'à ce que le temps soit écoulé"},
    {time:3000, en:"but there's more: check out your stats, search for tags", ru:"но это ещё не всё: взгляните на Вашу статистику и ищите метки ", de:"es gibt noch mehr: schau dir deine Statistik an, such nach Markierungen", fr: "mais ce n'est pas tout: consultez vos statistiques, cherchez des marques"},
    {en: "that's it, go give it a try", ru: "ну вот и всё, а теперь пробуйте сами!", de: "das war alles, probier's mal aus", fr: "voilà, c'est tout, à vous d'essayer buoy!"}
]
const TIMESTAMPS_MAC = [
    {time:2440, en:"first, set the timer", ru: "сначала заведите таймер", de:"stell die Zeit ein", fr: "d'abord, réglez le minuteur"},
    {time:3000, en:"in the tag manager \u2014 go create some tags", ru:"создайте новую метку в меню", de: "erstelle neue Markierungen im Menü", fr: "créez une nouvelle marque dans le menu"},
    {time:1000, en:"resolve any tags you don't need anymore", ru: "снимите ненужные метки", de: "entferne überflüssige Markierungen", fr:"effacez les marques inutiles"},
    {time:3300, en:"choose a tag fit for your task", ru:"выберите подходящую метку", de:"wähle eine passende Markierung aus", fr: "choisissez la marque qui convient"},
    {time:1300, en:"now, set your focus", ru:"настройте фокус", de: "setz dir ein Ziel", fr: "fixez-vous un but"},
    {time:2100, en:"if your apps don't show up, bring them to the front", ru:"если приложения не высвечиваются, выведите их на передний план", de:"werden Apps nicht angezeigt, bring sie in den Vordergrund ", fr:"si les applis ne surgissent pas, mettez-les au premier plan"},
    {time:2300, en:"pick your focus and exception apps", ru: "выберите фокус и отметьте исключаемые приложения", de:"wähl deinen Fokus und die ausgenommenen Apps aus", fr: "choisissez votre but et les applis négligeables"}, 
    {time:2700, en:"start buoy", ru:"запустите программу «buoy»‎",de:"starte buoy", fr: "démarrez buoy"}, 
    {time:1700, en:"now, it's just you and your task", ru:"теперь можно сосредоточиться на задаче", de:"deiner Arbeit steht jetzt nichts mehr im Weg", fr: "pleins feux sur votre tâche"},
    {time:1000, en:"please use MISSION CONTROL to switch between apps", ru: "используйте функцию «MISSION CONTROL», чтобы перемещаться между приложениями", de:"bitte verwenden Sie MISSION CONTROL, um zwischen Apps zu wechseln", fr: "utilisez la fonction MISSION CONTROL pour changer d'application"},
    {time:2500, en:"if you do get distracted", ru:"если Вы рассеяны", de:"wenn du abgelenkt wirst", fr: "si vous vous laissez distraire"},
    {time:2200, en:"you have 10s to get back on track", ru:"у Вас 10 секунд, чтобы снова сосредоточиться", de:"hast du 10 Sekunden, um dich zu konzentrieren ", fr: "vous avez 10 secondes pour vous reconcentrer "},
    {time:4000, en:"stay focused", ru:"сохраняйте концентрацию", de:"bleib fokussiert", fr: "restez concentré(e)"},
    {time:2950, en:"until time's up", ru:"пока не истечёт время", de:"bis die Zeit abläuft ", fr: "jusqu'à ce que le temps soit écoulé"},
    {time:3000, en:"but there's more: check your stats, search for tags", ru:"но это ещё не всё: взгляните на Вашу статистику и ищите метки ", de:"es gibt noch mehr: schau dir deine Statistik an, such nach Markierungen", fr: "mais ce n'est pas tout: consultez vos statistiques, cherchez des marques"},
    {en: "that's it, go give it a try", ru: "ну вот и всё, а теперь пробуйте сами!", de: "das war alles, probier' mal aus", fr: "voilà, c'est tout, à vous d'essayer buoy!"}
]

const TEXT_HREFS = { //deprecated?
    about: {en: ['about', '#'], de: ['Über Uns', '#'], ru: ['о\xa0сети', '#'], fr: ['en savoir plus', '#']},
    privacy: { en: ['privacy', '#'], de: ['DSGVO', '#'], ru: ['защита данных', '#'], fr: ['RGPD', '#']},
    licence: { en: ['licence', '#'], de: ['Lizenz', '#'], ru: ['лицензия', '#'], fr:['licence', '#']}
}