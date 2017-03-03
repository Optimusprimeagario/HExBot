/* All the shortcuts for the Cleaning victim logs, access and clean, and to clear you own logs.
Prompt will be added soon for users to pick there own shortcut;
Only "bug" is that it, sometimes it shows Bot window even if "Pop up bot window after instruction" is uncheck. 
here is a tampermonkey script for the cloudflare error that is shows 

setInterval(function() {
    window.location.reload(true);
}, 60 * 1000);

(function() {
    "use strict";
    setTimeout(function() {
        if (document.title === "legacy.hackerexperience.com | 502: Bad gateway") {
            window.location.reload(true);
        } else if (document.title === "Attention Required! | Cloudflare") {
            history.back();
        }
    }, 3000);
})();
*/
document.addEventListener("keydown", function(e) {
    var key = e.keyCode || e.which;
    switch (key) {
        case 111: // Divison Key: /;
            function cleanOWNLogss() {
                controllers.functions.executeSequence("cleaners", "cleanOwnLogs");
            };
            cleanOWNLogss();
            console.log("Cleaning our Logs... ");
            break;
        case 106: // Multiplication Key: *;
            function cleanVictim() {
                controllers.functions.executeSequence("cleaners", "cleanTargetLogs");
            };
            cleanVictim();
            console.log("Cleaning Victim Logs ... ");
            break;
        case 109: // Subtract Key -;
            function AandClean() {
                controllers.functions.executeSequence("cleaners", "accessTargetAndCleanLogs");
            }
            AandClean();
            console.log("Accessing and cleaning... ");
            break;
		case 107: // Addtion Key: +;
			window.location.replace("https://legacy.hackerexperience.com/internet?view=logout");
			break;
        default: break;
    };
});

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
document.getElementById("he2").remove();
