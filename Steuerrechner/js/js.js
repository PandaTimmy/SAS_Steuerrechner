document.addEventListener('DOMContentLoaded', function() {

    text_zu_HTML();
    hbicon1_zu_HTML();
    info_zu_HTML();
    link_zu_HTML();
    link2_zu_HTML();
    dropdown_zu_HTML();
    remove_zu_HTML();
    status_zu_HTML();
    boolean_zu_HTML();

    //setTimeout(function () {
    //    window.scrollTo(0, 0);
    //  }, 250);
});



function infoAlert(infotext) {
    alert(infotext);
    console.log("alert:" + infotext);
}


function loremIpsum() {
    console.log(loremIpsum);
}

function link_zu_HTML() {
    let elemente = document.querySelectorAll(".link");

    elemente.forEach(function(element) {

        let linkfunction = element.dataset.linkfunction;

        element.innerHTML = element.innerHTML + "<img src='images/link.svg' style='width: 24px; cursor: pointer;' onclick='" + linkfunction + "'>";

        element.style.display = "flex";
        element.style.justifyContent = "space-between";
        element.style.alignItems = "center";
        
        element.classList.remove("link");
    });
}

function link2_zu_HTML() {
    let elemente = document.querySelectorAll(".link2");

    elemente.forEach(function(element) {

        let linkfunction = element.dataset.linkfunction;

        element.innerHTML = element.innerHTML + "<img src='images/link_grey.svg' style='width: 24px; cursor: pointer;' onclick='" + linkfunction + "'>";

        element.style.display = "flex";
        element.style.justifyContent = "space-between";
        element.style.alignItems = "center";
        
        element.classList.remove("link2");
    });
}

function info_zu_HTML() {
    let elemente = document.querySelectorAll(".info");

    elemente.forEach(function(element) {

        let infofunction = element.dataset.infofunction;

        element.innerHTML = element.innerHTML + "<img src='images/info.svg' style='width: 24px; cursor: pointer;' onclick='" + infofunction + "'>";
        element.style.display = "flex";
        element.style.justifyContent = "space-between";
        element.style.alignItems = "center";

        element.classList.remove("info");
    });
}

function boolean_zu_HTML() {
    let elemente = document.querySelectorAll(".boolean");

    elemente.forEach(function(element) {

        let booleanfunction = element.dataset.booleanfunction;
        let booleanid = element.dataset.booleanid;

        element.innerHTML = element.innerHTML + "<div id='" + booleanid + "' class='booleanoutside' onclick='" + booleanfunction + "'><div class='booleaninside'></div></div>";


        element.style.display = "flex";
        element.style.justifyContent = "space-between";
        element.style.alignItems = "center";

        element.classList.remove("boolean");
    });
}

function remove_zu_HTML() {
    let elemente = document.querySelectorAll(".remove");

    elemente.forEach(function(element) {

        let removefunction = element.dataset.removefunction;

        element.innerHTML = element.innerHTML + "<img src='images/remove.svg' style='width: 24px; cursor: pointer;' onclick='" + removefunction + "'>";
        element.style.display = "flex";
        element.style.justifyContent = "space-between";
        element.style.alignItems = "center";

        element.classList.remove("remove");
    });
}

function hbicon1_zu_HTML() {
    let elemente = document.querySelectorAll(".hbicon1");

    elemente.forEach(function(element) {

        element.innerHTML = element.innerHTML + "<img src='images/hb.svg' style='width: 24px;'>";
        element.style.display = "flex";
        element.style.justifyContent = "space-between";
        element.style.alignItems = "center";

        element.classList.remove("hbicon1");
    });
}



function status_zu_HTML() {
    let elemente = document.querySelectorAll(".status");

    elemente.forEach(function(element) {

        let statusfunction = element.dataset.statusfunction;
        let statusid = element.dataset.statusid;
        let statusdefault = element.dataset.statusdefault;
        let statusfamilie = element.dataset.statusfamilie;

        let img = "";

        if(statusdefault == "none" || statusdefault == "") {
            img = "<img id='" + statusid + "'src='images/check.svg' style='width: 0px; cursor: pointer;' onclick='" + statusfunction + "' class='none " + statusfamilie + "'>";
        }
        if(statusdefault == "correct") {
            img = "<img id='" + statusid + "'src='images/correct.svg' style='width: 24px; cursor: pointer;' onclick='" + statusfunction + "' class='correct " + statusfamilie + "'>";
        }
        if(statusdefault == "warning") {
            img = "<img id='" + statusid + "'src='images/warning.svg' style='width: 24px; cursor: pointer;' onclick='" + statusfunction + "' class='warning " + statusfamilie + "'>";
        }
        if(statusdefault == "wrong") {
            img = "<img id='" + statusid + "'src='images/wrong.svg' style='width: 24px; cursor: pointer;' onclick='" + statusfunction + "' class='wrong " + statusfamilie + "'>";
        }
        if(statusdefault == "check") {
            img = "<img id='" + statusid + "'src='images/check.svg' style='width: 24px; cursor: pointer;' onclick='" + statusfunction + "' class='selectoptionselected check " + statusfamilie + "'>";
        }

        element.innerHTML = element.innerHTML + img;
        element.style.display = "flex";
        element.style.justifyContent = "space-between";
        element.style.alignItems = "center";

        element.classList.remove("status");
    });
}

function text_zu_HTML() {
    let elemente = document.querySelectorAll(".text");

    elemente.forEach(function(element) {

        let infotextfunction = element.dataset.infotextfunction;

        let texthinzufügen = zeichenkette_zwischen_zeichen("{", "}", element.innerHTML);
        element.innerHTML = zeichenkette_ohne_zeichenkette_zwischen_zeichen("{", "}", element.innerHTML);

        element.innerHTML = element.innerHTML + "<span class='html-info-text-1' onclick='" + infotextfunction + "'>" + texthinzufügen + "</span>";
        element.style.display = "flex";
        element.style.justifyContent = "space-between";
        element.style.alignItems = "center";

        element.classList.remove("text");
    });
}

function dropdown_zu_HTML() {
    let elemente = document.querySelectorAll(".dropdown");

    elemente.forEach(function(element) {

        let dropdownfunction = element.dataset.dropdownfunction;

        element.innerHTML = element.innerHTML + "<img src='images/dropdown up.svg' id='" + element.id + "-arrow' class='dropdown-arrow' style='min-width: 24px; max-width: 24px; cursor: pointer;' onclick='" + dropdownfunction + "'>";
        element.style.display = "flex";
        element.style.justifyContent = "space-between";
        element.style.alignItems = "center";

        element.classList.remove("dropdown");
    });
}

function zeichenkette_zwischen_zeichen(startzeichen, endzeichen, string) {
    let startIndex = string.indexOf(startzeichen);
    let endIndex = string.indexOf(endzeichen);
    ergebnis = string.substring(startIndex + 1, endIndex);
    return ergebnis;
} 

function zeichenkette_ohne_zeichenkette_zwischen_zeichen(startzeichen, endzeichen, string) {
    let startIndex = string.indexOf(startzeichen);
    let endIndex = string.indexOf(endzeichen);
    ergebnis = string.substring(0, startIndex) + string.substring(endIndex + 1);
    return ergebnis;
}


function dropwdown_menu_aktion(ID) {

    dropdown_element = document.getElementById(ID);

    if (dropdown_element.classList.contains("open")) {
        dropdown_element.classList.remove("open");
        dropdown_element.classList.add("close");
        setTimeout(function() {
            dropdown_element.style.maxHeight = "0";
            //dropdown_element.style.margin = "0";
        }, 0);

        document.getElementById(ID + "-text-arrow").style.transform = "rotate(0deg)";
    }
    else {
        dropdown_element.classList.remove("close");
        dropdown_element.classList.add("open");
        setTimeout(function() {
            dropdown_element.style.maxHeight = dropdown_element.scrollHeight + "px";
            //dropdown_element.style.margin = "5em";
        }, 0);

        document.getElementById(ID + "-text-arrow").style.transform = "rotate(180deg)";
    }
}

function setStatus(ID, status) {
    if(status == "warning") {
        document.getElementById(ID).src = "images/warning.svg";
        document.getElementById(ID).style.width = "24px";

        document.getElementById(ID).classList.add("warning")
        document.getElementById(ID).classList.remove("correct")
        document.getElementById(ID).classList.remove("wrong")
        document.getElementById(ID).classList.remove("check")
        document.getElementById(ID).classList.remove("none")
    }
    if(status == "correct") {
        document.getElementById(ID).src = "images/correct.svg";
        document.getElementById(ID).style.width = "24px";
        
        document.getElementById(ID).classList.remove("warning")
        document.getElementById(ID).classList.add("correct")
        document.getElementById(ID).classList.remove("wrong")
        document.getElementById(ID).classList.remove("check")
        document.getElementById(ID).classList.remove("none")
    }
    if(status == "wrong") {
        document.getElementById(ID).src = "images/wrong.svg";
        document.getElementById(ID).style.width = "24px";
        
        document.getElementById(ID).classList.remove("warning")
        document.getElementById(ID).classList.remove("correct")
        document.getElementById(ID).classList.add("wrong")
        document.getElementById(ID).classList.remove("check")
        document.getElementById(ID).classList.remove("none")
    }
    if(status == "check") {
        document.getElementById(ID).src = "images/check.svg";
        document.getElementById(ID).style.width = "24px";
        
        document.getElementById(ID).classList.remove("warning")
        document.getElementById(ID).classList.remove("correct")
        document.getElementById(ID).classList.remove("wrong")
        document.getElementById(ID).classList.add("check")
        document.getElementById(ID).classList.remove("none")
    }
    if(status == "none") {
        document.getElementById(ID).src = "images/check.svg";
        document.getElementById(ID).style.width = "0px";
        
        document.getElementById(ID).classList.remove("warning")
        document.getElementById(ID).classList.remove("correct")
        document.getElementById(ID).classList.remove("wrong")
        document.getElementById(ID).classList.remove("check")
        document.getElementById(ID).classList.add("none")
    }
}

function inputEingabeÜberprüfen(ID, type, statusID, verbessern) {
    let inputfeld = document.getElementById(ID);
    let input = inputfeld.value;

    if(type == "Datum") {

        let heutigesDatum = new Date();
        let heutigerTag = heutigesDatum.getDate();
        let heutigerMonat = heutigesDatum.getMonth();
        let heutigesJahr = heutigesDatum.getFullYear();
        let heutigeMinute = heutigesDatum.getMinutes();
        let heutigeStunde = heutigesDatum.getHours();

        input = input.replace(/\./g, "/");
        input = input.replace(/\-/g, "/");
        input = input.replace(/\_/g, "/");
        input = input.replace(/\ /g, "/");

        input = input.split("/");

        let tag = input[0];
        let monat = input[1];
        let jahr = input[2];

        if(jahr == "") {
            jahr = 2023;
        }

        console.log(jahr);

        if(!isNaN(jahr)) {
            if(jahr.length < 4) {
            jahr = "2" + jahr.toString().padStart(3, "0");
            }
        }
        

        if(tag < 1 || tag > 31 || tag === undefined) {
            tag = NaN;
        }
        if(monat < 1 || monat > 12 || monat === undefined) {
            monat = NaN;
        }
        if(jahr < 100 || jahr > 3000 || jahr === undefined) {
            jahr = NaN;
        }
        

        
        if(!isNaN(tag) && !isNaN(monat) && !isNaN(jahr)) {

            tag = tag.toString().padStart(2, "0");
            monat = monat.toString().padStart(2, "0");

            input = tag + "/" + monat + "/" + jahr;

            if(verbessern) {
                inputfeld.value = input;
            }

            inputfeld.style.color = "#000000";
            setStatus(statusID, "correct");

            return true;
        }
        else {

            if(inputfeld.value == "") {

                inputfeld.style.color = "#000000";
                setStatus(statusID, "warning");
            }
            else {

                inputfeld.style.color = "#ff2d55";
                setStatus(statusID, "wrong");
            }

            return false;
        }

    }

    if(type == "Nummer") {

        if(!isNaN(input) && input !== "") {

            inputfeld.style.color = "#000000";
            setStatus(statusID, "correct");

            inputfeld.value = Math.floor(inputfeld.value);

            return true;

        }
        else {
            if(inputfeld.value == "") {

                inputfeld.style.color = "#000000";
                setStatus(statusID, "warning");
            }
            else {

                inputfeld.style.color = "#ff2d55";
                setStatus(statusID, "wrong");

            }

            return false;
        }
    }

    if(type == "Betrag") {

        if(inputfeld.value > 999999999999999) {
            inputfeld.value = 999999999999999;
        }

        if(!isNaN(input) && input >= 0 && input !== "") {

            inputfeld.style.color = "#000000";
            setStatus(statusID, "correct");
            inputfeld.value = Math.floor(inputfeld.value);

            return true
        }
        else {
            
            if(inputfeld.value == "") {

                inputfeld.style.color = "#000000";
                setStatus(statusID, "warning");
            }
            else {

                inputfeld.style.color = "#ff2d55";
                setStatus(statusID, "wrong");

            }

            return false;
        }
    }

    if(type == "Text") {

        if(input !== "") {

            inputfeld.style.color = "#000000";
            setStatus(statusID, "correct");

            return true
        }
        else {

            inputfeld.style.color = "#000000";
            setStatus(statusID, "warning");

            return false;
        }
    }

    if(type == "Liste") {
        if(inputfeld.value == "-") {
            
            inputfeld.style.color = "#000000";
            setStatus(statusID, "warning");

            return input;
        }
        else {


            inputfeld.style.color = "#000000";
            setStatus(statusID, "correct");

            return true
        }
    }


}



function openCloseSidemenu(ID) {
    sidemenu = document.getElementById(ID);

    if(sidemenu.classList.contains("open"))
    {
        sidemenu.classList.add("close");
        sidemenu.classList.remove("open");
    }
    else
    {
        sidemenu.classList.remove("close");
        sidemenu.classList.add("open");
    }
}



function listSelect(statusID, statusfamilie, minlimit, maxlimit) {

    selection = document.getElementById(statusID);


    if(selection.classList.contains("selectoptionselected")) {
        
        let statusfamilienmitgliederanzahl = document.querySelectorAll("." + statusfamilie + "." + "selectoptionselected").length;

        if(statusfamilienmitgliederanzahl > minlimit) {

            selection.classList.remove("selectoptionselected");
            setStatus(statusID, "none");
        }
    }

    else {

        let statusfamilienmitgliederanzahl = document.querySelectorAll("." + statusfamilie + "." + "selectoptionselected").length;

        if(statusfamilienmitgliederanzahl >= maxlimit) {

            removeFirstSelectionElement = document.querySelector("." + statusfamilie + "." + "selectoptionselected");
            removeFirstSelectionElement.classList.remove("selectoptionselected");
            setStatus(removeFirstSelectionElement.id, "none");
        }

        selection.classList.add("selectoptionselected")

        setStatus(statusID, "check");

    }
}



function switchBoolean(ID) {
    boolean = document.getElementById(ID);

    if(boolean.classList.contains("checked")) {
        boolean.classList.remove("checked");
    }
    else {
        boolean.classList.add("checked");
    }
}



function karteEntfernen(ID) {
    document.getElementById(ID).style.height = "0px";
    document.getElementById(ID).style.transition = "all 1s cubic-bezier(0.165, 0.84, 0.44, 1)"

    setTimeout(function () {
        document.getElementById(ID).parentNode.remove();
        reloadAngestellterFormularIndex();
      }, 1000);
      

}


function formularFamilieÜberprüfen(familie, statusID) {


    if(document.querySelectorAll("." + familie + ".wrong, ." + familie + ".warning").length > 0) {

        try {
            setStatus(statusID, "warning");
        } catch {}
        return false;
    }
    else {

        try {
        setStatus(statusID, "correct");
        } catch {}
        return true;
    }

}

function delay(delay, functions) {

    setTimeout(function () {
        functions();
    }, delay);

}



function divExportieren(ID, rolle) {
    html2canvas(document.getElementById(ID), {scale: 2}).then(function (canvas) {
        dataURL = canvas.toDataURL("image/png", 1);
        console.log(dataURL);

        var link = document.createElement('a');
        link.href = dataURL;
        if (rolle === "unternehmer") {
            link.download = "Steuererklärung_" + dokumentdatum.replace(/\//g, "-") + "_" + dokumentnachname + "_" + dokumentvorname + "_.png";
        }
        if (rolle === "angestellter") {
            link.download = "Steuererklärung_" + dokumentdatum.replace(/\//g, "-") + "_" + dokumentnachname + "_" + dokumentvorname + "_.png";
        }
        link.target = '_blank';
        link.click();
    });
}


function weiterleiten(adresse) {

    window.location.href = adresse;
}