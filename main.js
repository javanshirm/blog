var jsonip = " ";var jsonhostname = " ";var jsoncity = " ";var jsonregion = " ";var jsoncountry = " ";var jsonloc = " ";var jsonorg = " ";var jsontimezone = " ";
function getIPInfo() {
    document.write(`<h2>IPv4：`+jsonip+`</h2>`);
    if(jsonhostname != " ") {
        document.write(`<h2>HSTNME：`+jsonhostname+`</h2>`);
    }
    document.write(`<h2>City：`+jsoncity+`</h2>`);
    document.write(`<h2>Region：`+jsonregion+`</h2>`);
    document.write(`<h2>Country：`+jsoncountry+`</h2>`);
    document.write(`<h2>IP Location：`+jsonloc+`</h2>`);
    document.write(`<h2>ISP：`+jsonorg+`</h2>`);
    document.write(`<h2>Time：`+jsontimezone+`</h2>`);
    document.write(`<h2>UserAgent：`+navigator.userAgent+`</h2>`);
}
function getIP(json) {
    jsonip = json.ip;jsoncity = json.city;jsonregion = json.region;jsoncountry = json.country;jsonloc = json.loc;jsonorg = json.org;jsontimezone = json.timezone;if(json.hostname) jsonhostname = json.hostname;
}
