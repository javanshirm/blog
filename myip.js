var jsonip = " ";var jsonhostname = " "var jsoncountry = " ";var jsonorg = " ";var jsontimezone = " ";
function getIPInfo() {
    document.write(`<h2>IP：`+jsonip+`</h2>`);
    if(jsonhostname != " ") {
        document.write(`<h2>HSTNME：`+jsonhostname+`</h2>`);
    }
    document.write(`<h2>country：`+jsoncountry+`</h2>`);
    document.write(`<h2>org：`+jsonorg+`</h2>`);
}
function getIP(json) {
    jsonip = json.ip;jsoncountry = json.country;jsonorg = json.org;if(json.hostname) jsonhostname = json.hostname;
}
