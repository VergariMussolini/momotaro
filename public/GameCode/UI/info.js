const SetupInfo = () =>{
    //Close Info Button\\
        CloseInfoButton = new NewButton( 0, 0, 0, 0, CloseMark);
    //------------\\

};

const DrawInfo = () =>{

    // main frame \\
        image(ConfigFrame, windowWidth/2-400, windowHeight/2-150);
    //------------\\

    //Info Config\\
        CloseInfoButton.x = windowWidth/2 + 335;
        CloseInfoButton.y = windowHeight/2 - 137;
        CloseInfoButton.w = 50;
        CloseInfoButton.h = 50;
        CloseInfoButton.hovered(()=>{
            tint(190, 190, 59);
        });
        CloseInfoButton.draw();
        noTint();
    //---------------\\

    textSize(30);
    BetterText('Gabriel Vergari', windowWidth/2-160, windowHeight/2-120);
    BetterText('Vasco Soares', windowWidth/2+184, windowHeight/2-120);
    //ANO
    textSize(12);
    BetterText('2020', windowWidth/2-160, windowHeight/2-95);
    BetterText('2020', windowWidth/2+184, windowHeight/2-95);

    //Gabriel
    textSize(20);
    BetterText('● Junior JavaScript dev', windowWidth/2-160, windowHeight/2-75);
    BetterText('● Junior Lua dev', windowWidth/2-160, windowHeight/2-45);
    BetterText('● Junior UI Programmer', windowWidth/2-160, windowHeight/2-15);
    BetterText('email:', windowWidth/2-160, windowHeight/2+50);
    BetterText('gabrielvergari@hotmail.com', windowWidth/2-160, windowHeight/2+80);
    //Vasco
    
    BetterText('● Junior JavaScript dev', windowWidth/2+184, windowHeight/2-75);
    BetterText('● Senior Lua dev', windowWidth/2+184, windowHeight/2-45);
    BetterText('● Senior UI Programmer', windowWidth/2+184, windowHeight/2-15);
    BetterText('email:', windowWidth/2+184, windowHeight/2+50);
    BetterText('vasco.soares.2001@gmail.com', windowWidth/2+184, windowHeight/2+80);


};

const InfoMousePressed = () =>{
    CloseInfoButton.pressed(()=>{InfoWindowOpen = false});
};
