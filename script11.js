var yourBrowser = "Chrome";
var ieLog = "We don't support IE browser!";
var webKitLog = "We support your browser = ";
var otherLog = "We hope your specific browser works fine";

var switchResult;
switch (yourBrowser) {

    case "IE":
        switchResult = ieLog;
        break;

    case "Chrome":
    case "Firefox":
    case "Opera":
    case "Safari":
        switchResult = webKitLog + yourBrowser;
        break;

    default:
        switchResult = otherLog;

}

console.log('SWITCH SOLUTION: ', switchResult);
