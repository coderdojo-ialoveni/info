
//========== FUNCTIONS ===========

function askUser(question) {
    // prompt este o functie din Browser care ceaza o fereastra de dialog.
    return prompt(question);
}

function setDocumentTitle(doc, title) {
    doc.title = title;
}

function setElementBackColor(element, color) {
    // se schimba stilul CSS al unui element
    element.style.backgroundColor = color;
}

function setElementTextById(id, text) {
    // se cauta elementul dupa ID dupa care i se schimba textul intern
    document.getElementById(id).innerText = text;
}

async function getWebPageContent(url) {
    // fetch este o functie a browserului care ne da continutul unei adrese de pe internet (URL)
    const response = await fetch(url);
    // ?
    if (response.status >= 300) {
        throw new Error(`Eroare: ${response.status}`);
    }
    // cerem continutul ca text
    return response.text();
}

function parseTitleFromPageContent(content) {
    // folosim o expresie regulata pentru a identifica o portiune de text care ne intereseaza
    return /<title>([^<]+)/i.exec(content)[1].trim();
}

//========= INTERACT FUNCTIONS ===========

function askAndChangeDocumentTitle() {
    var title = askUser('Care e titlul nou?');
    setDocumentTitle(document, title);
}

function askAndChangeDocumentBackColor() {
    var color = askUser('Care e noua culoare de fundal?');
    setElementBackColor(document.body, color);
}

async function askAndChangeDocumentTitleFromUrl(button) {
    var buttonText = button.innerText;
    button.innerText = 'Se lucrează...';
    button.disabled = true;

    var url = askUser('Introdu o adresă web (care începe cu http):');
    var content = await getWebPageContent('https://cors-anywhere.herokuapp.com/' + url);
    var title = parseTitleFromPageContent(content);

    setElementTextById('remote-url-el', url + ': ');
    setElementTextById('remote-url-title-el', title);

    button.innerText = buttonText;
    button.disabled = false;
}
