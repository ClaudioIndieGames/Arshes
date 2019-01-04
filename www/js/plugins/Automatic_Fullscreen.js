// Automatic Fullscreen for Standalone
// by orlando (rpgmakerweb.com forums)
// Date: 11/22/2015
//=============================================================================
/*:
* @plugindesc Automatically enters fullscreen if running as a standalone version. The web version will continue to launch windowed/regularly.
* @author orlando (rpgmakerweb.com forums)
*/

(function() {
if (Utils.isNwjs()) {
Graphics._requestFullScreen();
}
})();