//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//  STEUERSÄTZE  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// UMSATZSTEUER

var umsatzsteuer_steuersatz = 15;    //Prozent (ohne Einheit)

// EINKOMMENSSTEUER

var einkommenssteuer_steuerklasse_A_supremum = 50;     //Humbucks
var einkommenssteuer_steuerklasse_A_steuersatz = 20;    //Prozent (ohne Einheit)

var einkommenssteuer_steuerklasse_B_supremum = 150;;    //Humbucks
var einkommenssteuer_steuerklasse_B_steuersatz = 30;    //Prozent (ohne Einheit)

var einkommenssteuer_steuerklasse_C_steuersatz = 50;    //Prozent (ohne Einheit)



var unternehmenListe = [
    {label: '- Unternehmen auswählen -', value: '-'},
    {label: 'All Smooth - Smoothies', value: 'All Smooth - Smoothies'},
    {label: 'Arcade', value: 'Arcade'},
    {label: 'Bank', value: 'Bank'},
    {label: 'Bloß', value: 'Bloß'},
    {label: 'Bobby Speed Parcours', value: 'Bobby Speed Parcours'},    
    {label: 'Boutique Alma', value: 'Boutique Alma'},
    {label: 'Bowl me over', value: 'Bowl me over'},
    {label: 'Burger & Co', value: 'Burger & Co'},
    {label: 'Bürgerbüro', value: 'Bürgerbüro'},
    {label: 'C and C Games', value: 'C and C Games'},
    {label: 'Café Running through times', value: 'Café Running through times'},
    {label: 'Candy Shop', value: 'Candy Shop'},
    {label: 'CC Media', value: 'CC Media'},
    {label: 'Chickpea Château', value: 'Chickpea Château'},
    {label: 'Churros', value: 'Churros'},
    {label: 'Concept Store', value: 'Concept Store'},
    {label: 'Crazy M-Club', value: 'Crazy M-Club'},
    {label: 'Crochet it up', value: 'Crochet it up'},
    {label: 'Der krasse Crêpe', value: 'Der krasse Crêpe'},
    {label: 'Detektivbüro', value: 'Detektivbüro'},
    {label: 'Die Gastronomie + Kino', value: 'Die Gastronomie + Kino'},
    {label: 'Ding Dogs', value: 'Ding Dogs'},
    {label: 'Einbilde', value: 'Einbilde'},
    {label: 'Eisbildung', value: 'Eisbildung'},
    {label: 'Feuerwehr', value: 'Feuerwehr'},
    {label: 'Finanzamt / Finanzministerium', value: 'Finanzamt / Finanzministerium'},
    {label: 'Flashlight', value: 'Flashlight'},
    {label: 'Friseur Salong', value: 'Friseur Salong'},
    {label: 'Fun Fit', value: 'Fun Fit'},
    {label: 'Galeria', value: 'Galeria'},
    {label: 'Game Street', value: 'Game Street'},
    {label: 'Gericht / Justitzministerium', value: 'Gericht / Justitzministerium'},
    {label: 'Goetzebys', value: 'Goetzebys'},
    {label: 'Hall of Wraps', value: 'Hall of Wraps'},
    {label: 'Home of Fred', value: 'Home of Fred'},
    {label: 'Hot Dogs', value: 'Hot Dogs'},
    {label: 'Human-ist-in', value: 'Human-ist-in'},
    {label: 'Humbooknews', value: 'Humbooknews'},
    {label: 'United News', value: 'United News'},
    {label: 'Humboldt Kirmes', value: 'Humboldt Kirmes'},
    {label: 'Humboldt school of music', value: 'Humboldt school of music'},
    {label: 'Humboldt Times', value: 'Humboldt Times'},
    {label: 'Humboldtroom', value: 'Humboldtroom'},
    {label: 'Humboldts Burger Bude', value: 'Humboldts Burger Bude'},
    {label: 'Humway Sandwiches', value: 'Humway Sandwiches'},
    {label: 'JuBe - t', value: 'JuBe - t'},
    {label: 'Kino', value: 'Kino'},
    {label: 'Klimaaktivismus', value: 'Klimaaktivismus'},
    {label: 'Lesecafé', value: 'Lesecafé'},
    {label: 'Logistik', value: 'Logistik'},
    {label: 'M&M yogurts', value: 'M&M yogurts'},
    {label: 'Malanga Bar', value: 'Malanga Bar'},
    {label: 'Merchandise', value: 'Merchandise'},
    {label: 'Milky Milkshakes', value: 'Milky Milkshakes'},
    {label: 'Ministerien', value: 'Ministerien'},
    {label: 'Mondo della frutta und Super Bowl', value: 'Mondo della frutta und Super Bowl'},
    {label: 'Pancake World', value: 'Pancake World'},
    {label: 'Parlament', value: 'Parlament'},
    {label: 'Photo Booth', value: 'Photo Booth'},
    {label: 'Pizzeria', value: 'Pizzeria'},
    {label: 'Polizei und Staatsanwaltschaft', value: 'Polizei und Staatsanwaltschaft'},
    {label: 'Pommes for all', value: 'Pommes for all'},
    {label: 'Post', value: 'Post'},
    {label: 'Sandwich the best', value: 'Sandwich the best'},
    {label: 'Schmuckmanufaktur', value: 'Schmuckmanufaktur'},
    {label: 'Second Hand Bücher und Spiele', value: 'Second Hand Bücher und Spiele'},
    {label: 'Snackspot / Shake in off', value: 'Snackspot / Shake in off'},
    {label: 'Splash King', value: 'Splash King'},
    {label: 'Sportschule', value: 'Sportschule'},
    {label: 'Sprachschule', value: 'Sprachschule'},
    {label: 'Streitschlichter', value: 'Streitschlichter'},
    {label: 'Sweet Waffs', value: 'Sweet Waffs'},
    {label: 'Tattoo', value: 'Tattoo'},
    {label: 'The Box', value: 'The Box'},
    {label: 'Theater de la Anna', value: 'Theater de la Anna'},
    {label: 'Tischkikker Club', value: 'Tischkikker Club'},
    {label: 'Tischtennis', value: 'Tischtennis'},
    {label: 'Warenlager', value: 'Warenlager'},
    {label: 'Wollfühlen', value: 'Wollfühlen'},
]



var unternehmenListe = [
    {label: '- Unternehmen auswählen -', value: '-'},
    {label: 'All Smooth - Smoothies', value: 'All Smooth - Smoothies'},
    {label: 'Arcade', value: 'Arcade'},
    {label: 'Bank', value: 'Bank'},
    {label: 'Bloß', value: 'Bloß'},
    {label: 'Bobby Speed Parcours', value: 'Bobby Speed Parcours'},    
    {label: 'Boutique Alma', value: 'Boutique Alma'},
    {label: 'Bowl me over', value: 'Bowl me over'},
    {label: 'Burger & Co', value: 'Burger & Co'},
    {label: 'Bürgerbüro', value: 'Bürgerbüro'},
    {label: 'C and C Games', value: 'C and C Games'},
    {label: 'Café Running through times', value: 'Café Running through times'},
    {label: 'Candy Shop', value: 'Candy Shop'},
    {label: 'CC Media', value: 'CC Media'},
    {label: 'Chickpea Château', value: 'Chickpea Château'},
    {label: 'Churros', value: 'Churros'},
    {label: 'Concept Store', value: 'Concept Store'},
    {label: 'Crazy M-Club', value: 'Crazy M-Club'},
    {label: 'Crochet it up', value: 'Crochet it up'},
    {label: 'Der krasse Crêpe', value: 'Der krasse Crêpe'},
    {label: 'Detektivbüro', value: 'Detektivbüro'},
    {label: 'Die Gastronomie + Kino', value: 'Die Gastronomie + Kino'},
    {label: 'Ding Dogs', value: 'Ding Dogs'},
    {label: 'Einbilde', value: 'Einbilde'},
    {label: 'Eisbildung', value: 'Eisbildung'},
    {label: 'Feuerwehr', value: 'Feuerwehr'},
    {label: 'Finanzamt / Finanzministerium', value: 'Finanzamt / Finanzministerium'},
    {label: 'Flashlight', value: 'Flashlight'},
    {label: 'Friseur Salong', value: 'Friseur Salong'},
    {label: 'Fun Fit', value: 'Fun Fit'},
    {label: 'Galeria', value: 'Galeria'},
    {label: 'Game Street', value: 'Game Street'},
    {label: 'Gericht / Justitzministerium', value: 'Gericht / Justitzministerium'},
    {label: 'Goetzebys', value: 'Goetzebys'},
    {label: 'Hall of Wraps', value: 'Hall of Wraps'},
    {label: 'Home of Fred', value: 'Home of Fred'},
    {label: 'Hot Dogs', value: 'Hot Dogs'},
    {label: 'Human-ist-in', value: 'Human-ist-in'},
    {label: 'Humbooknews', value: 'Humbooknews'},
    {label: 'United News', value: 'United News'},
    {label: 'Humboldt Kirmes', value: 'Humboldt Kirmes'},
    {label: 'Humboldt school of music', value: 'Humboldt school of music'},
    {label: 'Humboldt Times', value: 'Humboldt Times'},
    {label: 'Humboldtroom', value: 'Humboldtroom'},
    {label: 'Humboldts Burger Bude', value: 'Humboldts Burger Bude'},
    {label: 'Humway Sandwiches', value: 'Humway Sandwiches'},
    {label: 'JuBe - t', value: 'JuBe - t'},
    {label: 'Kino', value: 'Kino'},
    {label: 'Klimaaktivismus', value: 'Klimaaktivismus'},
    {label: 'Lesecafé', value: 'Lesecafé'},
    {label: 'Logistik', value: 'Logistik'},
    {label: 'M&M yogurts', value: 'M&M yogurts'},
    {label: 'Malanga Bar', value: 'Malanga Bar'},
    {label: 'Merchandise', value: 'Merchandise'},
    {label: 'Milky Milkshakes', value: 'Milky Milkshakes'},
    {label: 'Ministerien', value: 'Ministerien'},
    {label: 'Mondo della frutta und Super Bowl', value: 'Mondo della frutta und Super Bowl'},
    {label: 'Pancake World', value: 'Pancake World'},
    {label: 'Parlament', value: 'Parlament'},
    {label: 'Photo Booth', value: 'Photo Booth'},
    {label: 'Pizzeria', value: 'Pizzeria'},
    {label: 'Polizei und Staatsanwaltschaft', value: 'Polizei und Staatsanwaltschaft'},
    {label: 'Pommes for all', value: 'Pommes for all'},
    {label: 'Post', value: 'Post'},
    {label: 'Sandwich the best', value: 'Sandwich the best'},
    {label: 'Schmuckmanufaktur', value: 'Schmuckmanufaktur'},
    {label: 'Second Hand Bücher und Spiele', value: 'Second Hand Bücher und Spiele'},
    {label: 'Snackspot / Shake in off', value: 'Snackspot / Shake in off'},
    {label: 'Splash King', value: 'Splash King'},
    {label: 'Sportschule', value: 'Sportschule'},
    {label: 'Sprachschule', value: 'Sprachschule'},
    {label: 'Streitschlichter', value: 'Streitschlichter'},
    {label: 'Sweet Waffs', value: 'Sweet Waffs'},
    {label: 'Tattoo', value: 'Tattoo'},
    {label: 'The Box', value: 'The Box'},
    {label: 'Theater de la Anna', value: 'Theater de la Anna'},
    {label: 'Tischkikker Club', value: 'Tischkikker Club'},
    {label: 'Tischtennis', value: 'Tischtennis'},
    {label: 'Warenlager', value: 'Warenlager'},
    {label: 'Wollfühlen', value: 'Wollfühlen'},
    {label: 'Staat', value: 'Staat'},
    {label: 'Etwas anderes', value: 'Etwas anderes'},
]

var klassenListe = [
    { label: "- Klasse auswählen -", value: "-"},
    { label: "5a", value: "5a"},
    { label: "5b", value: "5b"},
    { label: "5c", value: "5c"},
    { label: "5d", value: "5d"},
    { label: "6a", value: "6a"},
    { label: "6b", value: "6b"},
    { label: "6c", value: "6c"},
    { label: "6d", value: "6d"},
    { label: "7a", value: "7a"},
    { label: "7b", value: "7b"},
    { label: "7c", value: "7c"},
    { label: "7d", value: "7d"},
    { label: "8a", value: "8a"},
    { label: "8b", value: "8b"},
    { label: "8c", value: "8c"},
    { label: "8d", value: "8d"},
    { label: "9a", value: "9a"},
    { label: "9b", value: "9b"},
    { label: "9c", value: "9c"},
    { label: "9d", value: "9d"},
    { label: "10a", value: "10a"},
    { label: "10b", value: "10b"},
    { label: "10c", value: "10c"},
    { label: "10d", value: "10d"},
    { label: "JS1", value: "JS1"},
    { label: "JS2", value: "JS2"},
    { label: "Etwas anderes", value: "Etwas anderes"},

]



document.addEventListener('DOMContentLoaded', function() {

    reload();
    reloadUmsatzSteuerSatz();
    gewinneGesamtUnternehmenBerechnen();
    unternehmenListeAktualisieren();
    klasseListeAktualisieren("klasse-liste");


    
});


var angestellterforumlare = 1; //Benötigt für ID von angestellterformular. Zählt bei jedem neuem Formlar hoch.


function reload() {


    for (let i = 0; i <= angestellterforumlare; i++) {
        try {

            if(document.getElementById("klasse-liste-angestellter-" + (i + 1)).innerHTML == "") {
                klasseListeAktualisieren("klasse-liste-angestellter-" + (i + 1));
            }
            //

        } catch {}
    
    }

    for (let i = 0; i <= angestellterforumlare; i++) {
        try {


            if(parseInt(document.getElementById("kartencontainer-angestellter-" + (i + 1)).style.height, 10) < 100) {
                document.getElementById("kartencontainer-angestellter-" + (i + 1)).style.height = document.getElementById("kartencontainer-angestellter-" + (i + 1)).scrollHeight + 10 +"px";
                document.getElementById("kartencontainer-angestellter-" + (i + 1)).style.transition = "all 1s ease";
            }

        } catch {}
    
    }
    
}


function unternehmenListeAktualisieren() {
    let auswahlListeElement = document.getElementById("unternehmen-liste");
    auswahlListeElement.innerHTML = "";

    for (let i = 0; i< unternehmenListe.length; i++) {
        let optionElement = document.createElement("option");
        optionElement.text = unternehmenListe[i].label;
        optionElement.value = unternehmenListe[i].value;
        auswahlListeElement.add(optionElement);
    }
}


function klasseListeAktualisieren(ID) {
    let auswahlListeElement = document.getElementById(ID);
    auswahlListeElement.innerHTML = "";

    for (let i = 0; i< klassenListe.length; i++) {
        let optionElement = document.createElement("option");
        optionElement.text = klassenListe[i].label;
        optionElement.value = klassenListe[i].value;
        auswahlListeElement.add(optionElement);
    }
}


function angestellterFormularHinzufügen() {

    let angestellterFormularGesamtkontainer = document.getElementById("angestellte-formular-gesamt-kontainer");

    // REPLACE ALL \ WITH \\
    // REPLACE ALL 1 WITH ` + forumlarID + `

    angestellterforumlare = angestellterforumlare+1;

    forumlarID = angestellterforumlare;

    let neuerHTML =
    `<div id="kartencontainer-angestellter-` + forumlarID + `" class="angestellter-kartencontainer" style="height: 0px; transition: all 1s ease 0s;">

    <div class="karten-abstand-1"></div>

    <div class="karte">
        <ul>
            <div class="karten-abstand-3"></div>
            <li>
                <div class="titel-2 remove info status"
                    data-infofunction='infoAlert("Bitte füllen Sie dieses Formular über Ihren Angestellten aus.\\n\\nBitte stellen Sie sicher, dass alle Felder korrekt ausgefüllt wurden.\\n\\nDrücken Sie das Minus-Symbol, um das Formular zu löschen.")'
                    data-removefunction='karteEntfernen("kartencontainer-angestellter-` + forumlarID + `"), setTimeout("gewinneGesamtUnternehmenBerechnen()", 1010)'
                    data-statusfunction='infoAlert("Bitte füllen Sie dieses Formular über Ihren Angestellten aus.\\n\\nBitte stellen Sie sicher, dass alle Felder korrekt ausgefüllt wurden.\\n\\nDrücken Sie das Minus-Symbol, um das Formular zu löschen.")'
                    data-statusid='formular-angestellter-` + forumlarID + `'
                    data-statusdefault='warning'
                ><span style="width: 100%" onclick="" id="formular-display-nummer-angestellter-` + forumlarID + `">
                    Steuerberechnung Angestellter 1
                </span></div>
            </li>
            <div class="karten-abstand-2"></div>
            <div class="karten-überschrift-2">PERSÖNLICHE INFORMATIONEN</div>
            <li>   
                <div class="karte inner">
                <ul>
                    <li>
                        <div class="status"
                            data-statusfunction='infoAlert("Bitte geben Sie den Vornamen Ihres Angestellten ein.")'
                            data-statusid='status-vorname-angestellter-` + forumlarID + `'
                            data-statusdefault='warning'
                            data-statusfamilie='angestellter-` + forumlarID + `'
                        ><input id="input-vorname-angestellter-` + forumlarID + `" class="input-1" style="width: 100%; margin-right: 5px;"
                            placeholder="Vorname"
                            onblur='inputEingabeÜberprüfen("input-vorname-angestellter-` + forumlarID + `", "Text", "status-vorname-angestellter-` + forumlarID + `", true), formularFamilieÜberprüfen("angestellter-` + forumlarID + `", "formular-angestellter-` + forumlarID + `"), gewinneGesamtUnternehmenBerechnen()'
                            oninput='inputEingabeÜberprüfen("input-vorname-angestellter-` + forumlarID + `", "Text", "status-vorname-angestellter-` + forumlarID + `"), formularFamilieÜberprüfen("angestellter-` + forumlarID + `", "formular-angestellter-` + forumlarID + `"), gewinneGesamtUnternehmenBerechnen()'
                        ></div>
                    </li>
                    <div class="hr-1"></div>
                    <li>
                        <div class="status"
                            data-statusfunction='infoAlert("Bitte geben Sie den Nachnamen Ihres Angestellten ein.")'
                            data-statusid='status-nachname-angestellter-` + forumlarID + `'
                            data-statusdefault='warning'
                            data-statusfamilie='angestellter-` + forumlarID + `'
                        ><input  id="input-nachname-angestellter-` + forumlarID + `" class="input-1" style="width: 100%; margin-right: 5px;"
                            placeholder="Nachname"
                            onblur='inputEingabeÜberprüfen("input-nachname-angestellter-` + forumlarID + `", "Text", "status-nachname-angestellter-` + forumlarID + `", true), formularFamilieÜberprüfen("angestellter-` + forumlarID + `", "formular-angestellter-` + forumlarID + `"), gewinneGesamtUnternehmenBerechnen()'
                            oninput='inputEingabeÜberprüfen("input-nachname-angestellter-` + forumlarID + `", "Text", "status-nachname-angestellter-` + forumlarID + `"), formularFamilieÜberprüfen("angestellter-` + forumlarID + `", "formular-angestellter-` + forumlarID + `"), gewinneGesamtUnternehmenBerechnen()'
                        ></div>
                    </li>
                    <div class="hr-1"></div>
                    <li>
                        <div class="status"
                            data-statusfunction='infoAlert("Bitte geben Sie die Klasse an, in der sich Ihr Angestellter befindet.")'
                            data-statusid='status-klasse-angestellter-` + forumlarID + `'
                            data-statusdefault='warning'
                            data-statusfamilie='angestellter-` + forumlarID + `'
                        ><select id="klasse-liste-angestellter-` + forumlarID + `" class="select-1" style="width: 100%; margin-right: 5px;"
                            onblur='inputEingabeÜberprüfen("klasse-liste-angestellter-` + forumlarID + `", "Liste", "status-klasse-angestellter-` + forumlarID + `"), formularFamilieÜberprüfen("angestellter-` + forumlarID + `", "formular-angestellter-` + forumlarID + `"), gewinneGesamtUnternehmenBerechnen()'
                            oninput='inputEingabeÜberprüfen("klasse-liste-angestellter-` + forumlarID + `", "Liste", "status-klasse-angestellter-` + forumlarID + `"), formularFamilieÜberprüfen("angestellter-` + forumlarID + `", "formular-angestellter-` + forumlarID + `"), gewinneGesamtUnternehmenBerechnen()'
                        ></select></div>
                    </li>
                </ul>
                </div>
            </li>
            <div class="karten-abstand-2"></div>
            <div class="karten-überschrift-2">GEHALT</div>
            <li>   
                <div class="karte inner">
                <ul>
                    <li>
                        <div class="status hbicon1"
                            data-statusfunction='infoAlert("Bitte geben Sie den Stundenlohn Ihres Angestellten an.")'
                            data-statusid='status-stundenlohn-angestellter-` + forumlarID + `'
                            data-statusdefault='warning'
                            data-statusfamilie='angestellter-` + forumlarID + `'
                        ><input id="input-stundenlohn-angestellter-` + forumlarID + `" class="input-1" style="width: 100%; margin-right: 5px;"
                            placeholder="Stundenlohn"
                            onblur='inputEingabeÜberprüfen("input-stundenlohn-angestellter-` + forumlarID + `", "Betrag", "status-stundenlohn-angestellter-` + forumlarID + `", true), formularFamilieÜberprüfen("angestellter-` + forumlarID + `", "formular-angestellter-` + forumlarID + `"), angestellterSteuernBerechnen(` + forumlarID + `), gewinneGesamtUnternehmenBerechnen()'
                            oninput='inputEingabeÜberprüfen("input-stundenlohn-angestellter-` + forumlarID + `", "Betrag", "status-stundenlohn-angestellter-` + forumlarID + `"), formularFamilieÜberprüfen("angestellter-` + forumlarID + `", "formular-angestellter-` + forumlarID + `"), angestellterSteuernBerechnen(` + forumlarID + `), gewinneGesamtUnternehmenBerechnen()'
                        ></div>
                    </li>
                    <div class="hr-1"></div>
                    <li>
                        <div class="status"
                            data-statusfunction='infoAlert("Bitte geben Sie den Bruttotageslohn Ihres Angestellten an.")'
                            data-statusid='status-arbeitszeit-angestellter-` + forumlarID + `'
                            data-statusdefault='warning'
                            data-statusfamilie='angestellter-` + forumlarID + `'
                        ><select id="input-arbeitszeit-angestellter-` + forumlarID + `" class="select-1" style="width: 100%; margin-right: 5px;"
                            onblur='inputEingabeÜberprüfen("input-arbeitszeit-angestellter-` + forumlarID + `", "Liste", "status-arbeitszeit-angestellter-` + forumlarID + `", true), formularFamilieÜberprüfen("angestellter-` + forumlarID + `", "formular-angestellter-` + forumlarID + `"), angestellterSteuernBerechnen(` + forumlarID + `), gewinneGesamtUnternehmenBerechnen()'
                            oninput='inputEingabeÜberprüfen("input-arbeitszeit-angestellter-` + forumlarID + `", "Liste", "status-arbeitszeit-angestellter-` + forumlarID + `"), formularFamilieÜberprüfen("angestellter-` + forumlarID + `", "formular-angestellter-` + forumlarID + `"), angestellterSteuernBerechnen(` + forumlarID + `), gewinneGesamtUnternehmenBerechnen()'
                        >
                            <option value="-"   >- Arbeitsdauer auswählen -</option>
                            <option value="0"   >0 Std.</option>
                            <option value="0.25">0 Std. 15 Min</option>
                            <option value="0.5" >0 Std. 30 Min</option>
                            <option value="0.75">0 Std. 45 Min</option>
                            <option value="1"   >1 Std.</option>
                            <option value="1.25">1 Std. 15 Min</option>
                            <option value="1.5" >1 Std. 30 Min</option>
                            <option value="1.75">1 Std. 45 Min</option>
                            <option value="2"   >2 Std.</option>
                            <option value="2.25">2 Std. 15 Min</option>
                            <option value="2.5" >2 Std. 30 Min</option>
                            <option value="2.75">2 Std. 45 Min</option>
                            <option value="3"   >3 Std.</option>
                            <option value="3.25">3 Std. 15 Min</option>
                            <option value="3.5" >3 Std. 30 Min</option>
                            <option value="3.75">3 Std. 45 Min</option>
                            <option value="4"   >4 Std.</option>
                            <option value="4.25">4 Std. 15 Min</option>
                            <option value="4.5" >4 Std. 30 Min</option>
                            <option value="4.75">4 Std. 45 Min</option>
                            <option value="5"   >5 Std.</option>
                            <option value="5.25">5 Std. 15 Min</option>
                            <option value="5.5" >5 Std. 30 Min</option>
                            <option value="5.75">5 Std. 45 Min</option>
                            <option value="6"   >6 Std.</option>
                        </select>
                        </div>
                    </li>
                </ul>
                </div>
            </li>

            <div class="karten-abstand-1"></div>

            <div class="hr-1"></div>

            <div class="karten-abstand-1"></div>
            <div class="karten-überschrift-2">EINKOMMENSSTEUER</div>
            <div class="karte inner">
                <div class="text-1"
                ><span style="width: 100%" onclick="">
                    Steuergruppe
                </span><span class="html-info-text-2" id="steuergruppe-angestellter-` + forumlarID + `">--</span>
                </div>
            </div>
            <div class="karten-abstand-1"></div>
            <div class="hr-1"></div>
            <div class="karten-abstand-1"></div>
            <div class="karten-überschrift-2">ERGEBNIS</div>
            <div class="karte inner">
                <div class="text-1"
                ><span style="width: 100%; font-weight: 600;" onclick="">
                    Bruttogehalt
                </span><div class="html-info-text-2" style="display: flex; align-items: center;"><span id="bruttogehalt-angestellter-` + forumlarID + `" style="font-weight: 600;">--</span><span class="hbicon1"></span></div>
                </div>
            </div>
            <div class="karte inner">
                <div class="text-1"
                ><span style="width: 100%; font-weight: 600;" onclick="">
                    Einkommenssteuer
                </span><div class="html-info-text-2" style="display: flex; align-items: center;"><span id="steuern-angestellter-` + forumlarID + `" style="font-weight: 600;">--</span><span class="hbicon1"></span></div>
                </div>
            </div>
            <div class="karte inner">
                <div class="text-1"
                ><span style="width: 100%; font-weight: 600;" onclick="">
                    Nettogehalt für Angestellten
                </span><div class="html-info-text-2" style="display: flex; align-items: center;"><span id="auszahlung-angestellter-` + forumlarID + `" style="font-weight: 600;">--</span><span class="hbicon1"></span></div>
            </div>
            </div>
            <div class="karten-abstand-3"></div>
        </ul>
    </div>
</div>`;

    const neuesElement = document.createElement("div");

    neuesElement.innerHTML = neuerHTML

    angestellterFormularGesamtkontainer.appendChild(neuesElement);

    hbicon1_zu_HTML();
    text_zu_HTML();
    info_zu_HTML();
    link_zu_HTML();
    link2_zu_HTML();
    dropdown_zu_HTML();
    remove_zu_HTML();
    status_zu_HTML();
    boolean_zu_HTML();
    reload();
    reloadAngestellterFormularIndex();
}


function angestellterSteuernBerechnen(ID) {

    console.log(document.getElementById("input-stundenlohn-angestellter-" + ID).value);
    let stundenlohn = document.getElementById("input-stundenlohn-angestellter-" + ID).value;
    let arbeitsdauer = document.getElementById("input-arbeitszeit-angestellter-" + ID).value;
    let tageslohn = Math.ceil(stundenlohn * arbeitsdauer);

    let steuergruppe = document.getElementById("steuergruppe-angestellter-" + ID);
    let steuern = document.getElementById("steuern-angestellter-" + ID);
    let netto = document.getElementById("auszahlung-angestellter-" + ID);
    let bruttogehalt = document.getElementById("bruttogehalt-angestellter-" + ID);

    if(!isNaN(tageslohn) && stundenlohn !== "") {
        bruttogehalt.innerHTML = tageslohn;

        if(stundenlohn <= einkommenssteuer_steuerklasse_A_supremum) {
            steuergruppe.innerHTML = "A (" + einkommenssteuer_steuerklasse_A_steuersatz + "%)";
            steuern.innerHTML = Math.floor(tageslohn*einkommenssteuer_steuerklasse_A_steuersatz*0.01);
            netto.innerHTML = Math.floor(tageslohn*(100-einkommenssteuer_steuerklasse_A_steuersatz)*0.01);
        }
        else if(stundenlohn <= einkommenssteuer_steuerklasse_B_supremum) {
            steuergruppe.innerHTML = "B (" + einkommenssteuer_steuerklasse_B_steuersatz + "%)";
            steuern.innerHTML = Math.floor(tageslohn*einkommenssteuer_steuerklasse_B_steuersatz*0.01);
            netto.innerHTML = Math.floor(tageslohn*(100-einkommenssteuer_steuerklasse_B_steuersatz)*0.01);
        }
        else {
            steuergruppe.innerHTML = "C (" + einkommenssteuer_steuerklasse_C_steuersatz + "%)";
            steuern.innerHTML = Math.floor(tageslohn*einkommenssteuer_steuerklasse_C_steuersatz*0.01);
            netto.innerHTML = Math.floor(tageslohn*(100-einkommenssteuer_steuerklasse_C_steuersatz)*0.01);
        }
    }
    else {
        steuergruppe.innerHTML = "--";
        steuern.innerHTML = "--";
        netto.innerHTML = "--";
        bruttogehalt = "--";
    }

    
}


function reloadAngestellterFormularIndex() {

    let angestellteFormulareArray = [];

    for (let i = 0; i < angestellterforumlare; i++) {

        if(document.getElementById("kartencontainer-angestellter-" + (i+1)) !== null) {
            angestellteFormulareArray.push(i+1);
        }
    }

    console.log(angestellteFormulareArray);

    for (let i = 0; i < angestellteFormulareArray.length; i++) {

        let text = document.getElementById("formular-display-nummer-angestellter-" + angestellteFormulareArray[i]);
        text.innerHTML = "Steuerberechnung Angestellter " + (i+1);
    }
}


function gewinneGesamtUnternehmenBerechnen() {

    
    let angestellteFormulareArray = [];

    let tagesumsatz = document.getElementById("input-umsatz-unternehmen");
    let tagesausgaben = document.getElementById("input-ausgaben-unternehmen");

    let umsatz = document.getElementById("umsatz-gewinnberechnung");
    let ausgaben = document.getElementById("ausgaben-gewinnberechnung")

    if(formularFamilieÜberprüfen("gewinnberechnung-ausgaben-umsatz")) {
        
        umsatz.innerHTML = tagesumsatz.value;
        ausgaben.innerHTML = "-" + tagesausgaben.value;

    }
    else {

        umsatz.innerHTML = "--";
        ausgaben.innerHTML = "--";
    }

    
    for (let i = 0; i < angestellterforumlare; i++) {

        if(document.getElementById("kartencontainer-angestellter-" + (i+1)) !== null) {
            angestellteFormulareArray.push(i+1);
        }
    }

    let gewinnberechnungSteuernLöhneAbzüge = document.getElementById("gewinnberechnung-steuern-löhne-abzüge");
    gewinnberechnungSteuernLöhneAbzüge.innerHTML = '';

    let angestellteLöhneAbzug = 0;


    if(formularFamilieÜberprüfen("gewinnberechnung-ausgaben-umsatz")) {
        
        var umsatzsteuern = Math.floor((tagesumsatz.value*umsatzsteuer_steuersatz*0.01));
    }
    else {

        var umsatzsteuern = "-";
    }


    document.getElementById("umsatzsteuern").innerHTML = umsatzsteuern;



    for (let i = 0; i < angestellteFormulareArray.length; i++) {

        try {
            if(document.getElementById("formular-angestellter-" + angestellteFormulareArray[i]).classList.contains("correct")) {

                let neuesElement = document.createElement("div");
                let bruttogehalt = document.getElementById("bruttogehalt-angestellter-" + angestellteFormulareArray[i]).innerHTML;

                neuesElement.innerHTML = `
                    
                    <div class="hr-1"></div>
                    <li>
                        <div class="text-1"
                        ><span style="width: 100%" onclick="">
                            Lohn Angestellter ` + (i+1) + `
                        </span><div class="html-info-text-2" style="display: flex; align-items: center;"><span id="auszahlung-angestellter-` + (i+1) + `">` + (bruttogehalt*-1) + `</span><span class="hbicon1"></span></div>
                    </li>
        
                `
                gewinnberechnungSteuernLöhneAbzüge.appendChild(neuesElement);
                
                angestellteLöhneAbzug = (parseInt(angestellteLöhneAbzug) + parseInt(bruttogehalt));

            }
        }
        catch (error) {
            console.log(error);
        }
            
        
    }

    let endergebnisGewinn = document.getElementById("gewinn-endergebnis");


    if(formularFamilieÜberprüfen("gewinnberechnung-ausgaben-umsatz")) {
        
        endergebnisGewinn.innerHTML = tagesumsatz.value - tagesausgaben.value - angestellteLöhneAbzug - umsatzsteuern;

        console.log(tagesumsatz.value);
        console.log(tagesausgaben.value);
        console.log(angestellteLöhneAbzug);
        console.log(umsatzsteuern);

        document.getElementById("bruttogewinn-endergebnis").innerHTML = tagesumsatz.value - tagesausgaben.value - angestellteLöhneAbzug;


    }
    else {

        endergebnisGewinn.innerHTML = "--";
        document.getElementById("bruttogewinn-endergebnis").innerHTML = "--";
    }


    
    if(formularFamilieÜberprüfen("gewinnberechnung-ausgaben-umsatz-stundenlohn")) {
        
        let arbeitsdauer = document.getElementById("input-arbeitszeit-unternehmer").value;
        let stundenlohn = document.getElementById("stundenlohn-unternehmer");
        let steuergruppe = document.getElementById("steuergruppe-unternehmer");
        let bruttogehalt = document.getElementById("bruttogehalt-unternehmer");
        let einkommenssteuern = document.getElementById("steuern-unternehmer");
        let nettogehalt = document.getElementById("nettogehalt-unternehmer");

        stundenlohn.innerHTML = Math.max(Math.floor(endergebnisGewinn.innerHTML / arbeitsdauer), 0);
        bruttogehalt.innerHTML = endergebnisGewinn.innerHTML;

        if(stundenlohn.innerHTML <= einkommenssteuer_steuerklasse_A_supremum) {
            steuergruppe.innerHTML = "A (" + einkommenssteuer_steuerklasse_A_steuersatz + "%)";
            einkommenssteuern.innerHTML = Math.max(Math.floor(bruttogehalt.innerHTML*einkommenssteuer_steuerklasse_A_steuersatz*0.01), 0);
            nettogehalt.innerHTML = Math.floor(bruttogehalt.innerHTML-einkommenssteuern.innerHTML);
        }
        else if(stundenlohn.innerHTML <= einkommenssteuer_steuerklasse_B_supremum) {
            steuergruppe.innerHTML = "B (" + einkommenssteuer_steuerklasse_B_steuersatz + "%)";
            einkommenssteuern.innerHTML = Math.max(Math.floor(bruttogehalt.innerHTML*einkommenssteuer_steuerklasse_B_steuersatz*0.01), 0);
            nettogehalt.innerHTML = Math.floor(bruttogehalt.innerHTML-einkommenssteuern.innerHTML);
        }
        else {
            steuergruppe.innerHTML = "C (" + einkommenssteuer_steuerklasse_C_steuersatz + "%)";
            einkommenssteuern.innerHTML = Math.max(Math.floor(bruttogehalt.innerHTML*einkommenssteuer_steuerklasse_C_steuersatz*0.01), 0);
            nettogehalt.innerHTML = Math.floor(bruttogehalt.innerHTML-einkommenssteuern.innerHTML);
        }


    }
    else {

        let stundenlohn = document.getElementById("stundenlohn-unternehmer");
        let steuergruppe = document.getElementById("steuergruppe-unternehmer");
        let bruttogehalt = document.getElementById("bruttogehalt-unternehmer");
        let einkommenssteuern = document.getElementById("steuern-unternehmer");
        let nettogehalt = document.getElementById("nettogehalt-unternehmer");

        stundenlohn.innerHTML = "--";
        steuergruppe.innerHTML = "--";
        bruttogehalt.innerHTML = "--";
        einkommenssteuern.innerHTML = "--";
        nettogehalt.innerHTML = "--";

        
    }


    hbicon1_zu_HTML();

    reloadÜbersicht();

}


function reloadUmsatzSteuerSatz() {

    document.getElementById("umsatzsteuersatz").innerHTML = umsatzsteuer_steuersatz + "%";
}

var angestellteBruttoGehaltPublic = [];
var angestellteNettoGehaltPublic = [];
var angestellteSteuernPublic = [];
var angestellteStundenlohnPublic = [];
var angestellteArbeitsdauerPublic = [];
var angestellteVornamePublic = [];
var angestellteNachnamePublic = [];
var angestellteKlassePublic = [];
var angestellteSteuergruppePublic = [];
var angestellteSteuersatzPublic = [];
var angestellteUnternehmenPublic = [];

function reloadÜbersicht() {

    if(formularFamilieÜberprüfen("gewinnberechnung-ausgaben-umsatz-stundenlohn") && formularFamilieÜberprüfen("status-allgemein")) {
        
        let einkommenssteuerInsgesamt = document.getElementById("einkommenssteuer-angestellte-insgesamt");
        let umsatzsteuerInsgesamt = document.getElementById("umsatzsteuer-unternehmen-insgesamt");
        let einkommenssteuerUnternehmerInsgesamt = document.getElementById("einkommenssteuer-unternehmer-insgesamt");
        let steuernInsgesamt = document.getElementById("steuern-insgesamt");

        let angestellteFormulareArray = [];

        let angestellteBruttoGehalt = [];
        let angestellteNettoGehalt = [];
        let angestellteSteuern = [];
        let angestellteStundenlohn = [];
        let angestellteArbeitsdauer = [];
        let angestellteVorname = [];
        let angestellteNachname = [];
        let angestellteKlasse = [];
        let angestellteSteuergruppe = [];
        let angestellteSteuersatz = [];
        let angestellteUnternehmen = [];
        
        for (let i = 0; i < angestellterforumlare; i++) {

            if(document.getElementById("kartencontainer-angestellter-" + (i+1)) !== null) {

                if(document.getElementById("formular-angestellter-" + (i+1)).classList.contains("correct")) {
                    angestellteFormulareArray.push(i+1);
                }
            }
        }

        console.log(angestellteFormulareArray);

        for (let i = 0; i < angestellteFormulareArray.length; i++) {

            angestellteVorname.push(document.getElementById("input-vorname-angestellter-" + angestellteFormulareArray[i]).value);
            angestellteNachname.push(document.getElementById("input-nachname-angestellter-" + angestellteFormulareArray[i]).value);
            angestellteKlasse.push(document.getElementById("klasse-liste-angestellter-" + angestellteFormulareArray[i]).value);
            angestellteUnternehmen.push(document.getElementById("unternehmen-liste").value);
            angestellteStundenlohn.push(parseInt(document.getElementById("input-stundenlohn-angestellter-" + angestellteFormulareArray[i]).value));
            angestellteArbeitsdauer.push(parseFloat(document.getElementById("input-arbeitszeit-angestellter-" + angestellteFormulareArray[i]).value));
            angestellteBruttoGehalt.push(parseInt(document.getElementById("bruttogehalt-angestellter-" + angestellteFormulareArray[i]).innerHTML));
            angestellteSteuergruppe.push(document.getElementById("steuergruppe-angestellter-" + angestellteFormulareArray[i]).innerHTML[0]);
            angestellteSteuersatz.push(parseFloat(document.getElementById("steuergruppe-angestellter-" + angestellteFormulareArray[i]).innerHTML.substring(3, 5)*0.01));
            angestellteSteuern.push(parseInt(document.getElementById("steuern-angestellter-" + angestellteFormulareArray[i]).innerHTML));
            angestellteNettoGehalt.push(parseInt(document.getElementById("auszahlung-angestellter-" + angestellteFormulareArray[i]).innerHTML));
        }

        console.log(angestellteVorname);
        console.log(angestellteNachname);
        console.log(angestellteKlasse);
        console.log(angestellteUnternehmen)
        console.log(angestellteStundenlohn);
        console.log(angestellteArbeitsdauer);
        console.log(angestellteBruttoGehalt);
        console.log(angestellteSteuergruppe);
        console.log(angestellteSteuersatz);
        console.log(angestellteSteuern);
        console.log(angestellteNettoGehalt);

        angestellteVornamePublic = angestellteVorname;
        angestellteNachnamePublic = angestellteNachname;
        angestellteKlassePublic = angestellteKlasse;
        angestellteUnternehmenPublic = angestellteUnternehmen;
        angestellteStundenlohnPublic = angestellteStundenlohn;
        angestellteArbeitsdauerPublic = angestellteArbeitsdauer;
        angestellteBruttoGehaltPublic = angestellteBruttoGehalt;
        angestellteSteuergruppePublic = angestellteSteuergruppe;
        angestellteSteuersatzPublic = angestellteSteuersatz;
        angestellteSteuernPublic = angestellteSteuern;
        angestellteNettoGehaltPublic = angestellteNettoGehalt;

        


        let steuerninsgesamtsumme = 0;

        document.getElementById("angestellte-übersicht").innerHTML = "";

        for (let i = 0; i < angestellteSteuern.length; i++) {
            steuerninsgesamtsumme += angestellteSteuern[i];

            

            let neuesElement = document.createElement("div");

            neuesElement.innerHTML = `
            
            <div class="karte inner">
                <div id="dropdown-menü-übersicht-angestellter-` + (i+1) + `-text" class="text-1 dropdown"
                    data-linkfunction=''
                    data-infofunction='infoAlert("Lorem Ipsum")'
                    data-infotextfunction='dropwdown_menu_aktion("dropdown-menü-übersicht-angestellter-` + (i+1) + `")'
                    data-dropdownfunction='dropwdown_menu_aktion("dropdown-menü-übersicht-angestellter-` + (i+1) + `")'
                    data-removefunction=''
                    data-statusfunction=''
                    data-statusdefault=''
                    data-statusid=''
                    data-booleanid=''
                    data-booleanfunction=''
                ><span style="width: 100%; cursor: pointer; font-weight: 600;" onclick='dropwdown_menu_aktion("dropdown-menü-übersicht-angestellter-` + (i+1) + `")'>
                    Lohnabrechnung Angestellter ` + angestellteFormulareArray[i] + `: ` + angestellteVorname[i] + ` ` + angestellteNachname[i] + `
                </span></div>
                
                <ul id="dropdown-menü-übersicht-angestellter-` + (i+1) + `" class="dropdown-menu close">
            
                    <div class="hr-1"></div>
            
                    <div class="text-1"
                    ><span style="width: 100%">
                        Stundenlohn
                    </span><div class="html-info-text-2" style="display: flex; align-items: center;"><span id="einkommenssteuer-unternehmer-insgesamt">` + angestellteStundenlohn[i] + `</span><span class="hbicon1"></span></div>
                </div>

                    <div class="hr-1"></div>
            
                    <div class="text-1"
                    ><span style="width: 100%">
                        Arbeitsdauer
                    </span><div class="html-info-text-2" style="display: flex; align-items: center;"><span id="einkommenssteuer-unternehmer-insgesamt">` + angestellteArbeitsdauer[i] + ` h</span></div>
                </div>

                    <div class="hr-1"></div>

                    <div class="text-1"
                    ><span style="width: 100%">
                        Bruttogehalt
                    </span><div class="html-info-text-2" style="display: flex; align-items: center;"><span id="steuern-insgesamt">` + angestellteBruttoGehalt[i] + `</span><span class="hbicon1"></span></div>
                </div>
            
                    <div class="hr-1"></div>
            
                    <div class="text-1"
                    ><span style="width: 100%">
                        Einkommenssteuer
                    </span><div class="html-info-text-2" style="display: flex; align-items: center;"><span id="steuern-insgesamt">` + angestellteSteuern[i] + `</span><span class="hbicon1"></span></div>
                </div>
            
                    <div class="hr-1"></div>
            
                    <div class="text-1"
                    ><span style="width: 100%; font-weight: 600;">
                        Nettogehalt
                    </span><div class="html-info-text-2" style="display: flex; align-items: center;"><span id="steuern-insgesamt" style="font-weight: 600;">` + angestellteNettoGehalt[i] + `</span><span class="hbicon1"></span></div>
                </div>
                    
                    <div class="hr-1"></div>
            
                    <li>
                        <div class="text-1 text"
                            data-linkfunction=''
                            data-infofunction=''
                            data-infotextfunction=''
                            data-dropdownfunction=''
                            data-removefunction=''
                            data-statusfunction=''
                            data-statusdefault=''
                            data-statusid=''
                            data-booleanid=''
                            data-booleanfunction=''
                        ><span style="width: 100%; color: #0278FC; cursor: pointer;" onclick='angestellterExport(` + i + `)'>
                            Lohnabrechnung Teilen 
                        </span><span style='color: #8a898e; font-size: 14px; padding-right: 9px;'>.pdf</span></div>
                    </li>
                    
                </ul>
            </div>

            <div class="karten-abstand-3"></div>
            
            `

            document.getElementById("angestellte-übersicht").appendChild(neuesElement);

        }

        dropdown_zu_HTML();
        hbicon1_zu_HTML();


        einkommenssteuerInsgesamt.innerHTML = steuerninsgesamtsumme;

        umsatzsteuerInsgesamt.innerHTML = parseInt(document.getElementById("umsatzsteuern").innerHTML);
        einkommenssteuerUnternehmerInsgesamt.innerHTML = parseInt(document.getElementById("steuern-unternehmer").innerHTML);

        steuernInsgesamt.innerHTML = parseInt(einkommenssteuerInsgesamt.innerHTML) + parseInt(umsatzsteuerInsgesamt.innerHTML) + parseInt(einkommenssteuerUnternehmerInsgesamt.innerHTML);

        document.getElementById("warnung-einreichen-und-exportieren").style.display = "none"; //WARNING AUSBLENDEN
        document.getElementById("warnung-übersicht").style.display = "none"; //WARNING AUSBLENDEN



    }
    else {

        let einkommenssteuerInsgesamt = document.getElementById("einkommenssteuer-angestellte-insgesamt");
        let umsatzsteuerInsgesamt = document.getElementById("umsatzsteuer-unternehmen-insgesamt");
        let einkommenssteuerUnternehmerInsgesamt = document.getElementById("einkommenssteuer-unternehmer-insgesamt");
        let steuernInsgesamt = document.getElementById("steuern-insgesamt");

        einkommenssteuerInsgesamt.innerHTML = "--";
        umsatzsteuerInsgesamt.innerHTML = "--";
        einkommenssteuerUnternehmerInsgesamt.innerHTML = "--";
        steuernInsgesamt.innerHTML = "--";
        document.getElementById("angestellte-übersicht").innerHTML = "";

        document.getElementById("warnung-einreichen-und-exportieren").style.display = "block"; //WARNING ANZEIGEN
        document.getElementById("warnung-übersicht").style.display = "block"; //WARNING ANZEIGEN


    }
    

}


function angestellterExport(i) {

    document.getElementById("formulare-exportieren").innerHTML = "";

    let tag = document.getElementById("input-datum").value.substring(0, 2);
    let monat = document.getElementById("input-datum").value.substring(3, 5);
    let jahr = document.getElementById("input-datum").value.substring(6, 10);

    formularPersonErstellen(
        tag + "/" + monat + "/" + jahr,
        angestellteVornamePublic[i],
        angestellteNachnamePublic[i],
        angestellteKlassePublic[i],
        angestellteUnternehmenPublic[i],
        "Angestellter",
        angestellteArbeitsdauerPublic[i],
        angestellteStundenlohnPublic[i],
        angestellteBruttoGehaltPublic[i],
        angestellteSteuergruppePublic[i],
        angestellteSteuersatzPublic[i],
        angestellteSteuernPublic[i],
        angestellteNettoGehaltPublic[i],
        1,
        1
    );

    drucken();
}



function datenSammeln() {

    if(formularFamilieÜberprüfen("gewinnberechnung-ausgaben-umsatz-stundenlohn") && formularFamilieÜberprüfen("status-allgemein")) {

        document.getElementById("formulare-exportieren").innerHTML = "";

        console.log(angestellteVornamePublic);
        console.log(angestellteNachnamePublic);
        console.log(angestellteKlassePublic);
        console.log(angestellteUnternehmenPublic)
        console.log(angestellteStundenlohnPublic);
        console.log(angestellteArbeitsdauerPublic);
        console.log(angestellteBruttoGehaltPublic);
        console.log(angestellteSteuergruppePublic);
        console.log(angestellteSteuersatzPublic);
        console.log(angestellteSteuernPublic);
        console.log(angestellteNettoGehaltPublic);

        let tag = document.getElementById("input-datum").value.substring(0, 2);
        let monat = document.getElementById("input-datum").value.substring(3, 5);
        let jahr = document.getElementById("input-datum").value.substring(6, 10);


        formularTitelbildErstellen(
            document.getElementById("unternehmen-liste").value,
            tag + "/" + monat + "/" + jahr,
            document.getElementById("input-vorname").value + " " + document.getElementById("input-nachname").value,
            document.getElementById("einkommenssteuer-angestellte-insgesamt").innerHTML,
            document.getElementById("umsatzsteuern").innerHTML,
            document.getElementById("einkommenssteuer-unternehmer-insgesamt").innerHTML,
            document.getElementById("steuern-insgesamt").innerHTML,
            1,
            angestellteVornamePublic.length+3
        );
    
        for (let i = 0; i < angestellteVornamePublic.length; i++) {
    
            console.log(
                angestellteVornamePublic[i],
                angestellteNachnamePublic[i],
                angestellteKlassePublic[i],
                angestellteUnternehmenPublic[i],
                angestellteStundenlohnPublic[i],
                angestellteArbeitsdauerPublic[i],
                angestellteBruttoGehaltPublic[i],
                angestellteSteuergruppePublic[i],
                angestellteSteuersatzPublic[i],
                angestellteSteuernPublic[i],
                angestellteNettoGehaltPublic[i]
            )
    
            
            let tag = document.getElementById("input-datum").value.substring(0, 2);
            let monat = document.getElementById("input-datum").value.substring(3, 5);
            let jahr = document.getElementById("input-datum").value.substring(6, 10);

            formularPersonErstellen(
                tag + "/" + monat + "/" + jahr,
                angestellteVornamePublic[i],
                angestellteNachnamePublic[i],
                angestellteKlassePublic[i],
                angestellteUnternehmenPublic[i],
                "Angestellter",
                angestellteArbeitsdauerPublic[i],
                angestellteStundenlohnPublic[i],
                angestellteBruttoGehaltPublic[i],
                angestellteSteuergruppePublic[i],
                angestellteSteuersatzPublic[i],
                angestellteSteuernPublic[i],
                angestellteNettoGehaltPublic[i],
                i+2,
                angestellteVornamePublic.length+3
            );
    
            /*
            steuererklärungPersonAbschicken(
                jahr + "-" + monat + "-" + tag,
                angestellteVornamePublic[i],
                angestellteNachnamePublic[i],
                angestellteKlassePublic[i],
                angestellteUnternehmenPublic[i],
                angestellteStundenlohnPublic[i],
                angestellteArbeitsdauerPublic[i],
                angestellteBruttoGehaltPublic[i],
                angestellteSteuergruppePublic[i],
                angestellteSteuersatzPublic[i],
                angestellteSteuernPublic[i],
                angestellteNettoGehaltPublic[i]
                )
            */
        }

        

        formularPersonErstellen(
            tag + "/" + monat + "/" + jahr,
            document.getElementById("input-vorname").value,
            document.getElementById("input-nachname").value,
            document.getElementById("klasse-liste").value,
            document.getElementById("unternehmen-liste").value,
            "Unternehmensinhaber",
            document.getElementById("input-arbeitszeit-unternehmer").value,
            document.getElementById("stundenlohn-unternehmer").innerHTML,
            document.getElementById("gewinn-endergebnis").innerHTML,

            document.getElementById("steuergruppe-unternehmer").innerHTML[0],
            parseInt(document.getElementById("steuergruppe-unternehmer").innerHTML.substring(3,5))*0.01,


            document.getElementById("steuern-unternehmer").innerHTML,
            document.getElementById("nettogehalt-unternehmer").innerHTML,
            angestellteVornamePublic.length+2,
            angestellteVornamePublic.length+3
        );

        formularUnternehmenErstellen(
            tag + "/" + monat + "/" + jahr,
            document.getElementById("input-vorname").value,
            document.getElementById("input-nachname").value,
            document.getElementById("klasse-liste").value,
            document.getElementById("unternehmen-liste").value,
            document.getElementById("input-umsatz-unternehmen").value,
            document.getElementById("umsatzsteuern").innerHTML,
            document.getElementById("gewinn-endergebnis").innerHTML,
            angestellteVornamePublic.length+3,
            angestellteVornamePublic.length+3
        );

        drucken();


    }

    



    else {

        infoAlert("Formular kann nicht abgegeben oder exportiert werden!\n\nStelle sicher, dass alle Formulare korrekt und vollständig ausgefüllt wurden! Falsch ausgefüllte Felder sind mit einem roten Symbol markiert.")
    }

    

}

linesTXTexport = ""

function addLineToTXTexport(text) {
    linesTXTexport = linesTXTexport + text + "\n";
}

function datenSammeln2() {

    linesTXTexport = "";

    if(formularFamilieÜberprüfen("gewinnberechnung-ausgaben-umsatz-stundenlohn") && formularFamilieÜberprüfen("status-allgemein")) {

        document.getElementById("formulare-exportieren").innerHTML = "";

        console.log(angestellteVornamePublic);
        console.log(angestellteNachnamePublic);
        console.log(angestellteKlassePublic);
        console.log(angestellteUnternehmenPublic)
        console.log(angestellteStundenlohnPublic);
        console.log(angestellteArbeitsdauerPublic);
        console.log(angestellteBruttoGehaltPublic);
        console.log(angestellteSteuergruppePublic);
        console.log(angestellteSteuersatzPublic);
        console.log(angestellteSteuernPublic);
        console.log(angestellteNettoGehaltPublic);

        let tag = document.getElementById("input-datum").value.substring(0, 2);
        let monat = document.getElementById("input-datum").value.substring(3, 5);
        let jahr = document.getElementById("input-datum").value.substring(6, 10);
        addLineToTXTexport("Steuererklärung Unternehmen: " +  document.getElementById("unternehmen-liste").value);
        addLineToTXTexport("Für den " + tag + "/" + monat + "/" + jahr);
        addLineToTXTexport("Erstellt am " + formatiereDatum());
        addLineToTXTexport("");
        addLineToTXTexport("════════════════════════════════════════════════════");
        addLineToTXTexport("");
        addLineToTXTexport("Übersicht");
        addLineToTXTexport("");
        addLineToTXTexport("Inhaber:");
        addLineToTXTexport(document.getElementById("input-vorname").value + " " + document.getElementById("input-nachname").value)
        addLineToTXTexport("");
        addLineToTXTexport("Einkommenssteuer aller Angestellten:");
        addLineToTXTexport(document.getElementById("umsatzsteuern").innerHTML + " HB");
        addLineToTXTexport("");
        addLineToTXTexport("Umsatzsteuer:");
        addLineToTXTexport(document.getElementById("umsatzsteuern").innerHTML + " HB");
        addLineToTXTexport("");
        addLineToTXTexport("Einkommenssteuer des Inhabers:");
        addLineToTXTexport(document.getElementById("einkommenssteuer-unternehmer-insgesamt").innerHTML + " HB");
        addLineToTXTexport("");
        addLineToTXTexport("");
        addLineToTXTexport("----------------------------------------------------");
        addLineToTXTexport("ZU ZAHLENDE STEUERN INSGESAMT:");
        addLineToTXTexport(document.getElementById("steuern-insgesamt").innerHTML + " HB");
        addLineToTXTexport("----------------------------------------------------");
        addLineToTXTexport("");
        


    
        for (let i = 0; i < angestellteVornamePublic.length; i++) {

            addLineToTXTexport("════════════════════════════════════════════════════");
            addLineToTXTexport("");
            addLineToTXTexport("Steuererklärung Angestellter " + (i+1) + ": " + angestellteVornamePublic[i] + " " + angestellteNachnamePublic[i]);
            addLineToTXTexport("");
            addLineToTXTexport("Vorname:");
            addLineToTXTexport(angestellteVornamePublic[i]);
            addLineToTXTexport("");
            addLineToTXTexport("Nachname:");
            addLineToTXTexport(angestellteNachnamePublic[i]);
            addLineToTXTexport("");
            addLineToTXTexport("Klasse:");
            addLineToTXTexport(angestellteKlassePublic[i]);
            addLineToTXTexport("");
            addLineToTXTexport("Unterhemen:");
            addLineToTXTexport(angestellteUnternehmenPublic[i]);
            addLineToTXTexport("");
            addLineToTXTexport("Rolle:");
            addLineToTXTexport("Angestellter");
            addLineToTXTexport("");
            addLineToTXTexport("Arbeitsdauer:");
            addLineToTXTexport(angestellteArbeitsdauerPublic[i] + " h");
            addLineToTXTexport("");
            addLineToTXTexport("Stundenlohn:");
            addLineToTXTexport(angestellteStundenlohnPublic[i] + " HB");
            addLineToTXTexport("");
            addLineToTXTexport("Steuergruppe:");
            addLineToTXTexport(angestellteSteuergruppePublic[i]);
            addLineToTXTexport("");
            addLineToTXTexport("Steuersatz:");
            addLineToTXTexport((angestellteSteuersatzPublic[i]*100) + " %");
            addLineToTXTexport("");
            addLineToTXTexport("Bruttotageslohn:");
            addLineToTXTexport(angestellteBruttoGehaltPublic[i] + " HB");
            addLineToTXTexport("");
            addLineToTXTexport("Steuern:");
            addLineToTXTexport(angestellteSteuernPublic[i] + " HB");
            addLineToTXTexport("");
            addLineToTXTexport("----------------------------------------------------");
            addLineToTXTexport("NETTOTAGESLOHN " + angestellteVornamePublic[i].toUpperCase() + " " + angestellteNachnamePublic[i].toUpperCase() + ":");
            addLineToTXTexport(angestellteNettoGehaltPublic[i] + " HB");
            addLineToTXTexport("----------------------------------------------------");
            addLineToTXTexport("");

        }

        addLineToTXTexport("════════════════════════════════════════════════════");
        addLineToTXTexport("");
        addLineToTXTexport("Steuererklärung Unternehmensinhaber: " + document.getElementById("input-vorname").value + " " + document.getElementById("input-nachname").value);
        addLineToTXTexport("");
        addLineToTXTexport("Vorname:");
        addLineToTXTexport(document.getElementById("input-vorname").value);
        addLineToTXTexport("");
        addLineToTXTexport("Nachname:");
        addLineToTXTexport(document.getElementById("input-nachname").value);
        addLineToTXTexport("");
        addLineToTXTexport("Klasse:");
        addLineToTXTexport(document.getElementById("klasse-liste").value);
        addLineToTXTexport("");
        addLineToTXTexport("Unterhemen:");
        addLineToTXTexport(document.getElementById("unternehmen-liste").value);
        addLineToTXTexport("");
        addLineToTXTexport("Rolle:");
        addLineToTXTexport("Unternehmensinhaber");
        addLineToTXTexport("");
        addLineToTXTexport("Arbeitsdauer:");
        addLineToTXTexport(document.getElementById("input-arbeitszeit-unternehmer").value + " h");
        addLineToTXTexport("");
        addLineToTXTexport("Stundenlohn:");
        addLineToTXTexport(document.getElementById("stundenlohn-unternehmer").innerHTML + " HB");
        addLineToTXTexport("");
        addLineToTXTexport("Steuergruppe:");
        addLineToTXTexport(document.getElementById("steuergruppe-unternehmer").innerHTML[0]);
        addLineToTXTexport("");
        addLineToTXTexport("Steuersatz:");
        addLineToTXTexport(parseInt(document.getElementById("steuergruppe-unternehmer").innerHTML.substring(3,5)) + " %");
        addLineToTXTexport("");
        addLineToTXTexport("Bruttotageslohn:");
        addLineToTXTexport(document.getElementById("gewinn-endergebnis").innerHTML + " HB");
        addLineToTXTexport("");
        addLineToTXTexport("Steuern:");
        addLineToTXTexport(document.getElementById("steuern-unternehmer").innerHTML + " HB");
        addLineToTXTexport("");
        addLineToTXTexport("----------------------------------------------------");
        addLineToTXTexport("NETTOTAGESLOHN " + document.getElementById("input-vorname").value.toUpperCase() + " " + document.getElementById("input-nachname").value.toUpperCase() + ":");
        addLineToTXTexport(document.getElementById("nettogehalt-unternehmer").innerHTML + " HB");
        addLineToTXTexport("----------------------------------------------------");
        addLineToTXTexport("");
        addLineToTXTexport("════════════════════════════════════════════════════");
        addLineToTXTexport("");
        addLineToTXTexport("Steuererklärung Unternehmen: " +  document.getElementById("unternehmen-liste").value);
        addLineToTXTexport("");
        addLineToTXTexport("Inhaber Vorname:");
        addLineToTXTexport(document.getElementById("input-vorname").value);
        addLineToTXTexport("");
        addLineToTXTexport("Inhaber Nachname:");
        addLineToTXTexport(document.getElementById("input-nachname").value);
        addLineToTXTexport("");
        addLineToTXTexport("Inhaber Klasse:");
        addLineToTXTexport(document.getElementById("klasse-liste").value);
        addLineToTXTexport("");
        addLineToTXTexport("Umsatz:");
        addLineToTXTexport(document.getElementById("input-umsatz-unternehmen").value + " HB");
        addLineToTXTexport("");
        addLineToTXTexport("Ausgaben (inkl. Löhne):");
        addLineToTXTexport((document.getElementById("input-umsatz-unternehmen").value - (parseInt(document.getElementById("gewinn-endergebnis").innerHTML) + parseInt(document.getElementById("umsatzsteuern").innerHTML))) + " HB");
        addLineToTXTexport("");
        addLineToTXTexport("Bruttogewinn:");
        addLineToTXTexport((parseInt(document.getElementById("gewinn-endergebnis").innerHTML) + parseInt(document.getElementById("umsatzsteuern").innerHTML)) + " HB");
        addLineToTXTexport("");
        addLineToTXTexport("Umsatzsteuersatz:");
        addLineToTXTexport(15 + " %");
        addLineToTXTexport("");
        addLineToTXTexport("Steuern:");
        addLineToTXTexport(document.getElementById("umsatzsteuern").innerHTML + " HB");
        addLineToTXTexport("");
        addLineToTXTexport("----------------------------------------------------");
        addLineToTXTexport("NETTOTAGESGEWINN:");
        addLineToTXTexport(document.getElementById("gewinn-endergebnis").innerHTML + " HB");
        addLineToTXTexport("----------------------------------------------------");

        saveTextToFile(linesTXTexport, "Steuererklärung " + document.getElementById("unternehmen-liste").value + " " + formatiereDatum().substring(0, 10).replace(/\//g, '.') + ".txt");


    }



    else {

        infoAlert("Formular kann nicht abgegeben oder exportiert werden!\n\nStelle sicher, dass alle Formulare korrekt und vollständig ausgefüllt wurden! Falsch ausgefüllte Felder sind mit einem roten Symbol markiert.")
    }

}


function steuererklärungPersonAbschicken(
    datum,
    vorname,
    nachname,
    klasse,
    unternehmen,
    stundenlohn,
    arbeitsdauer,
    bruttotageslohn,
    steuergruppe,
    steuersatz,
    steuern,
    nettotageslohn) {

    document.getElementById("data-feld-1").value = datum;
    document.getElementById("data-feld-2").value = vorname;
    document.getElementById("data-feld-3").value = nachname;
    document.getElementById("data-feld-4").value = klasse;
    document.getElementById("data-feld-5").value = unternehmen;
    document.getElementById("data-feld-6").value = stundenlohn;
    document.getElementById("data-feld-7").value = arbeitsdauer;
    document.getElementById("data-feld-8").value = bruttotageslohn;
    document.getElementById("data-feld-9").value = steuergruppe;
    document.getElementById("data-feld-10").value = steuersatz;
    document.getElementById("data-feld-11").value = steuern;
    document.getElementById("data-feld-12").value = nettotageslohn;

    const form = document.getElementById('data-felder');
    
    const formData = new FormData(form);

    fetch('steuerrechner.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Hier kannst du die Antwort vom PHP-Skript verarbeiten
        infoAlert("Formular erfolgreich abgegeben")

    })
    .catch(error => {
        console.error('Fehler beim Senden der Daten: ', error);
        infoAlert('Fehler beim Senden der Daten: ', error)
    });

}

function addTitle1(ID, Titeltext) {

    let formular = document.getElementById(ID);

    let element = document.createElement("div");

    element.innerHTML = `
        <span class="exportform-title-1">` + Titeltext + `</span>
    
    `;

    formular.appendChild(element);

}

function addTitle2(ID, Titeltext) {

    let formular = document.getElementById(ID);

    let element = document.createElement("div");

    element.innerHTML = `
        <span class="exportform-title-2">` + Titeltext + `</span>
    
    `;

    formular.appendChild(element);

}

function addTitleWithText(ID, Titeltext, Titeltext2) {

    let formular = document.getElementById(ID);

    let element = document.createElement("div");

    element.innerHTML = `
    <div style="display: flex;">
        <span class="exportform-title-1" style="width: 100%;">` + Titeltext + `</span><span class="exportform-text-2">` + Titeltext2 + `</span>
    </div>
    `;

    formular.appendChild(element);

}

function addTitle2WithText(ID, Titeltext, Titeltext2) {

    let formular = document.getElementById(ID);

    let element = document.createElement("div");

    element.innerHTML = `
    <div style="display: flex;">
        <span class="exportform-title-2" style="width: 100%;">` + Titeltext + `</span><span class="exportform-text-1">` + Titeltext2 + `</span>
    </div>
    `;

    formular.appendChild(element);

}

function addTextWithText(ID, Titeltext, Titeltext2) {

    let formular = document.getElementById(ID);

    let element = document.createElement("div");

    element.innerHTML = `
    <div style="display: flex;">
        <span class="exportform-text-1" style="width: 100%;">` + Titeltext + `</span><span class="exportform-text-1">` + Titeltext2 + `</span>
    </div>
    `;

    formular.appendChild(element);

}

function addTextWithTextWithHB(ID, Titeltext, Titeltext2) {

    let formular = document.getElementById(ID);

    let element = document.createElement("div");

    element.innerHTML = `
    <div style="display: flex;">
        <span class="exportform-text-1" style="width: 100%;">` + Titeltext + `</span><span class="exportform-text-1">` + Titeltext2 + `</span><img src='images/hb_icon_small.svg' style='width: 20.5px; margin-left: 5px;'>
    </div>
    `;

    formular.appendChild(element);

}

function addTitleWithTitleWithHB(ID, Titeltext, Titeltext2) {

    let formular = document.getElementById(ID);

    let element = document.createElement("div");

    element.innerHTML = `
    <div style="display: flex;">
        <span class="exportform-title-1" style="width: 100%;">` + Titeltext + `</span><span class="exportform-title-1">` + Titeltext2 + `</span><img src='images/hb_icon_small.svg' style='width: 25.6px; margin-left: 5px;'>
    </div>
    `;

    formular.appendChild(element);

}

function addSpacing(ID, space) {

    let formular = document.getElementById(ID);

    let element = document.createElement("div");

    element.style.height = space*1.28 + "px";

    formular.appendChild(element);
}

function addDivider(ID) {

    let formular = document.getElementById(ID);

    let element = document.createElement("div");

    element.style.height = "1px";
    element.style.backgroundColor = "#dbdbdb";

    formular.appendChild(element);
}

function addTextWithCheckbox(ID, Titeltext) {

    let formular = document.getElementById(ID);

    let element = document.createElement("div");

    element.innerHTML = `
    <div style="display: flex;">
        <span class="exportform-text-1" style="width: 100%;">` + Titeltext + `</span><img src='images/checkbox.svg' style='width: 20.5px; margin-left: 5px;'>
    </div>
    `;

    formular.appendChild(element);

}



function formularPersonErstellen(datum, vorname, nachname, klasse, unternehmen, rolle, arbeitsdauer, stundenlohn, bruttotageslohn, steuergruppe, steuersatz, steuern, nettotageslohn, seite, seiten) {


    function formatiereDatum() {
        const jetzt = new Date();
        
        const zweistellig = (zahl) => (zahl < 10 ? "0" + zahl : zahl.toString());
        
        const tag = jetzt.getDate();
        const monat = jetzt.getMonth() + 1;
        const jahr = jetzt.getFullYear();
        const stunden = jetzt.getHours();
        const minuten = jetzt.getMinutes();
        
        const datumTTMMJJJJ = `${zweistellig(tag)}/${zweistellig(monat)}/${jahr}`;
        const datumSSMM = `${zweistellig(stunden)}:${zweistellig(minuten)}`;
        
        return `${datumTTMMJJJJ} ${datumSSMM}`;
    }
    

    let formularid = "formular-export-" + (Math.random() + 1).toString(36).substring(5);

    let formularelement = document.createElement("div");
    formularelement.id = formularid;
    formularelement.style.backgroundColor = "white";
    formularelement.style.padding = "10px";
    formularelement.style.height = "290mm";
    formularelement.style.width = "210mm";
    formularelement.style.margin = "10px";
    formularelement.style.pageBreakAfter = "always";
    formularelement.style.position = "relative";


    document.getElementById("formulare-exportieren").appendChild(formularelement);



    addTitleWithText(formularid, "Steuererklärung " + rolle, "Für den " + datum);

    addTitle2WithText(formularid, vorname + " " + nachname, "Erstellt am " + formatiereDatum());



    addSpacing(formularid, 45);

    addTitle1(formularid, "Persönliche Informationen");

    addSpacing(formularid, 15);

    addTextWithText(formularid, "Vorname", vorname);
    addTextWithText(formularid, "Nachname", nachname);
    addTextWithText(formularid, "Klasse", klasse);
    addTextWithText(formularid, "Unternehmen", unternehmen);
    addTextWithText(formularid, "Rolle", rolle);

    addSpacing(formularid, 15);
    addDivider(formularid);
    addSpacing(formularid, 20);

    addTitle1(formularid, "Gehalt");

    addSpacing(formularid, 15);

    addTextWithText(formularid, "Arbeitsdauer", arbeitsdauer + " h");
    addTextWithTextWithHB(formularid, "Stundenlohn", stundenlohn);
    addTextWithTextWithHB(formularid, "Bruttotageslohn", bruttotageslohn);

    addSpacing(formularid, 15);
    addDivider(formularid);
    addSpacing(formularid, 20);

    addTitle1(formularid, "Einkommenssteuer");

    addSpacing(formularid, 5);


    addTextWithText(formularid, "Steuergruppe", steuergruppe);
    addTextWithText(formularid, "Steuersatz", parseFloat(steuersatz)*100 + " %");
    addTextWithTextWithHB(formularid, "Einkommenssteuer", steuern);
    
    addSpacing(formularid, 15);
    addDivider(formularid);
    addSpacing(formularid, 45);

    addTitle2(formularid, "Lohnabrechnung");

    addSpacing(formularid, 15);


    addTitleWithTitleWithHB(formularid, "Bruttotageslohn", bruttotageslohn);
    addTitleWithTitleWithHB(formularid, "Steuern", steuern);
    addTitleWithTitleWithHB(formularid, "Nettotageslohn", nettotageslohn);

}


function formularUnternehmenErstellen(datum, vorname, nachname, klasse, unternehmen, umsatz, steuern, nettogewinn, seite, seiten) {


    function formatiereDatum() {
        const jetzt = new Date();
        
        const zweistellig = (zahl) => (zahl < 10 ? "0" + zahl : zahl.toString());
        
        const tag = jetzt.getDate();
        const monat = jetzt.getMonth() + 1;
        const jahr = jetzt.getFullYear();
        const stunden = jetzt.getHours();
        const minuten = jetzt.getMinutes();
        
        const datumTTMMJJJJ = `${zweistellig(tag)}/${zweistellig(monat)}/${jahr}`;
        const datumSSMM = `${zweistellig(stunden)}:${zweistellig(minuten)}`;
        
        return `${datumTTMMJJJJ} ${datumSSMM}`;
    }
    

    let formularid = "formular-export-" + (Math.random() + 1).toString(36).substring(5);

    let formularelement = document.createElement("div");
    formularelement.id = formularid;
    formularelement.style.backgroundColor = "white";
    formularelement.style.padding = "10px";
    formularelement.style.height = "290mm";
    formularelement.style.width = "210mm";
    formularelement.style.margin = "10px";
    formularelement.style.pageBreakAfter = "always";
    formularelement.style.position = "relative";


    document.getElementById("formulare-exportieren").appendChild(formularelement);



    addTitleWithText(formularid, "Steuererklärung Unternehmen", "Für den " + datum);

    addTitle2WithText(formularid, unternehmen, "Erstellt am " + formatiereDatum());



    addSpacing(formularid, 45);

    addTitle1(formularid, "Unternehmensinhaber");

    addSpacing(formularid, 15);

    addTextWithText(formularid, "Vorname", vorname);
    addTextWithText(formularid, "Nachname", nachname);
    addTextWithText(formularid, "Klasse", klasse);

    addSpacing(formularid, 15);
    addDivider(formularid);
    addSpacing(formularid, 20);

    addTitle1(formularid, "Finanzdaten");

    addSpacing(formularid, 15);

    addTextWithTextWithHB(formularid, "Umsatz", umsatz);
    addTextWithTextWithHB(formularid, "Ausgaben (inkl. Löhne)", umsatz - parseInt(nettogewinn) - parseInt(steuern));
    addTextWithTextWithHB(formularid, "Bruttogewinn", parseInt(nettogewinn) + parseInt(steuern));

    addSpacing(formularid, 15);
    addDivider(formularid);
    addSpacing(formularid, 20);

    addTitle1(formularid, "Umsatzsteuer");

    addSpacing(formularid, 5);


    addTextWithText(formularid, "Steuersatz", "15 %");
    addTextWithTextWithHB(formularid, "Umsatzsteuern", steuern);
    
    addSpacing(formularid, 15);
    addDivider(formularid);
    addSpacing(formularid, 45);

    addTitle2(formularid, "Lohnabrechnung");

    addSpacing(formularid, 15);


    addTitleWithTitleWithHB(formularid, "Bruttogewinn", parseInt(nettogewinn) + parseInt(steuern));
    addTitleWithTitleWithHB(formularid, "Steuern", steuern);
    addTitleWithTitleWithHB(formularid, "Nettogewinn", nettogewinn);

}

function formatiereDatum() {
    const jetzt = new Date();
    
    const zweistellig = (zahl) => (zahl < 10 ? "0" + zahl : zahl.toString());
    
    const tag = jetzt.getDate();
    const monat = jetzt.getMonth() + 1;
    const jahr = jetzt.getFullYear();
    const stunden = jetzt.getHours();
    const minuten = jetzt.getMinutes();
    
    const datumTTMMJJJJ = `${zweistellig(tag)}/${zweistellig(monat)}/${jahr}`;
    const datumSSMM = `${zweistellig(stunden)}:${zweistellig(minuten)}`;
    
    return `${datumTTMMJJJJ} ${datumSSMM}`;
}

function formularTitelbildErstellen(unternehmen, datum, name, einkommenssteuerAllerAngestellten, umsatzsteuer, einkommenssteuerDesInhabers, steuernInsgesamt, seite, seiten) {


    
    

    let formularid = "formular-export-" + (Math.random() + 1).toString(36).substring(5);

    let formularelement = document.createElement("div");
    formularelement.id = formularid;
    formularelement.style.backgroundColor = "white";
    formularelement.style.padding = "10px";
    formularelement.style.height = "290mm";
    formularelement.style.width = "210mm";
    formularelement.style.margin = "10px";
    formularelement.style.pageBreakAfter = "always";
    formularelement.style.position = "relative";
    


    document.getElementById("formulare-exportieren").appendChild(formularelement);



    addTitleWithText(formularid, "Steuererklärung Unternehmen", "Für den " + datum);

    addTitle2WithText(formularid, unternehmen, "Erstellt am " + formatiereDatum());



    addSpacing(formularid, 80);

    addTitle1(formularid, "Übersicht");

    addSpacing(formularid, 15);

    addTextWithText(formularid, "Inhaber", name);
    addTextWithTextWithHB(formularid, "Einkommenssteuer aller Angestellten", einkommenssteuerAllerAngestellten);
    addTextWithTextWithHB(formularid, "Umsatzsteuer", umsatzsteuer);
    addTextWithTextWithHB(formularid, "Einkommenssteuer des Inhabers", einkommenssteuerDesInhabers);

    addSpacing(formularid, 40);
    addDivider(formularid);
    addSpacing(formularid, 40);

    addTitleWithTitleWithHB(formularid, "Steuern Insgesamt", steuernInsgesamt);
    addSpacing(formularid, 10);
    addTextWithCheckbox(formularid, "Steuern gezahlt")

}



function drucken() {
    var element = document.getElementById("formulare-exportieren");
    if (element) {
        printThis({
            loadCSS: "css/css.css", // Optional, Pfad zur CSS-Datei
            importCSS: true, // Optional, CSS in den Druck übernehmen
            importStyle: true, // Optional, inline-Stile in den Druck übernehmen
            //pageTitle: "Test1",
        });
    }
}



function fillDocument() {
    fillText("input-vorname","Max")
    fillText("input-nachname","Mustermann")
    fillText("klasse-liste", "JS1")
    fillText("input-datum","18/09/2023")
    fillText("unternehmen-liste","Staat")
    setStatus("formular-allgemein", "correct")
    setStatus("status-vorname","correct");
    setStatus("status-nachname","correct");
    setStatus("status-klasse","correct");
    setStatus("status-datum","correct");
    setStatus("status-name-unternehmen","correct");
    
    fillText("input-vorname-angestellter-1","Hans")
    fillText("input-nachname-angestellter-1","Meier")
    fillText("klasse-liste-angestellter-1","JS1")
    fillText("input-stundenlohn-angestellter-1", "75")
    fillText("input-arbeitszeit-angestellter-1","3.5")
    formularFamilieÜberprüfen("angestellter-1", "formular-angestellter-1")
    angestellterSteuernBerechnen(1)
    gewinneGesamtUnternehmenBerechnen()
    setStatus("formular-angestellter-1", "correct")
    setStatus("status-vorname-angestellter-1","correct");
    setStatus("status-nachname-angestellter-1","correct");
    setStatus("status-klasse-angestellter-1","correct");
    setStatus("status-stundenlohn-angestellter-1","correct");
    setStatus("status-arbeitszeit-angestellter-1","correct");


    fillText("input-umsatz-unternehmen", "1000")
    fillText("input-ausgaben-unternehmen", "250")
    fillText("input-arbeitszeit-unternehmer", "4")
    inputEingabeÜberprüfen("input-arbeitszeit-angestellter-1", "Liste", "status-arbeitszeit-angestellter-1", true)
    setStatus("status-arbeitszeit-unternehmer", "correct")
    setStatus("gewinnberecchnung-unternehmen-status", "correct")
    inputEingabeÜberprüfen("input-umsatz-unternehmen", "Betrag", "status-umsatz-unternehmen", true)
    inputEingabeÜberprüfen("input-ausgaben-unternehmen", "Betrag", "status-ausgaben-unternehmen", true)
    formularFamilieÜberprüfen("gewinnberechnung-ausgaben-umsatz-stundenlohn", "gewinnberecchnung-unternehmen-status")
    gewinneGesamtUnternehmenBerechnen()
    setStatus("status-umsatz-unternehmen","correct");
    setStatus("status-ausgaben-unternehmen","correct");
    setStatus("status-arbeitszeit-unternehmer","correct");

    reloadÜbersicht()
}


function fillText(Id, text) {
    var element = document.getElementById(Id);
    element.value = text;
}



function saveTextToFile(text, fileName) {
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
}

