import * as main from "./main.js";
window.onload = () => {
    console.log("window.onload called");
    // 1 - do preload here - load fonts, images, additional sounds, etc...
    const frizReg = new FontFace('Friz Quadrata Regular', 'url(../fonts/Friz-Quadrata-Font/Regular.ttf)');
    frizReg.load().then(function (loadedFont) {
        document.fonts.add(loadedFont)
        text.style.fontFamily = '"Friz Quadrata Regular"';
    }).catch(function (error) {
        console.log('Failed to load font: ' + error)
    })



    // 2 - start up app
    main.init();


}
