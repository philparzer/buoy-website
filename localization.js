//handles localization on button click
//TODO: deprecated?

const switchButton = (langparam) => {

    
    LANG_BTNS.forEach(element => element.classList = "col-10 language-links")
    
    switch(langparam)
    {
        case 'en':
            EN_BTN.classList = "col-10 language-links doc-language";
            EN_BTN_SMALL.classList = "col-10 language-links doc-language";
            break;
        case 'ru':
            RU_BTN.classList = "col-10 language-links doc-language";
            RU_BTN_SMALL.classList = "col-10 language-links doc-language";
            break;
        case 'de':
            DE_BTN.classList = "col-10 language-links doc-language";
            DE_BTN_SMALL.classList = "col-10 language-links doc-language";
            break;
        case 'fr':
            FR_BTN.classList = "col-10 language-links doc-language";
            FR_BTN_SMALL.classList = "col-10 language-links doc-language";
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