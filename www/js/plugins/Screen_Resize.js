//=============================================================================
// Screen_Resize.js
//=============================================================================

var zoom = 816;

var new_screen = new_screen || {};
new_screen.resolution = new_screen.resolution || {};

new_screen.resize = function() {
    
    new_screen.w = window.screen.width * window.devicePixelRatio;
    
    new_screen.h = window.screen.height * window.devicePixelRatio;

    SceneManager._screenWidth = zoom;
    SceneManager._screenHeight = Math.round((new_screen.h * zoom)/new_screen.w); //748
    SceneManager._boxWidth = zoom;
    SceneManager._boxHeight = Math.round((new_screen.h * zoom)/new_screen.w);
    window.resizeBy(new_screen.w,new_screen.h);
};

new_screen.resize();

//=============================================================================
// End of File
//=============================================================================