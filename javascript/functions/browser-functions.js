
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

async function getWebPageContent(url, format) {
    url = 'https://cors-anywhere.herokuapp.com/' + url;
    // fetch este o functie a browserului care ne da continutul unei adrese de pe internet (URL)
    const response = await fetch(url);
    // ?
    if (response.status >= 300) {
        throw new Error(`Eroare: ${response.status}`);
    }
    if (format === 'json') {
        return response.json();
    }
    // cerem continutul ca text
    return response.text();
}

function parseTitleFromPageContent(content) {
    // folosim o expresie regulata pentru a identifica o portiune de text care ne intereseaza
    return /<title>([^<]+)/i.exec(content)[1].trim();
}

function setElementLoadingState(element, loading, loadingText) {
    if (loading) {
        element.oldInnerText = element.innerText;
        element.innerText = loadingText || 'Se incarca...';
        element.disabled = true;
    } else {
        element.innerText = element.oldInnerText;
        element.disabled = false;
    }
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
    setElementLoadingState(button, true)

    var url = askUser('Introdu o adresă web (care începe cu http):');
    var content = await getWebPageContent(url);
    var title = parseTitleFromPageContent(content);

    setElementTextById('remote-url-el', url + ': ');
    setElementTextById('remote-url-title-el', title);

    setElementLoadingState(button, false)
}

async function askAndSearchVideo(button) {
    setElementLoadingState(button, true)

    var q = askUser('Titlu video:');
    var url = 'https://www.imdb.com/find?ref_=nv_sr_fn&s=tt&q=' + encodeURIComponent(q);
    var content = await getWebPageContent(url);
    var result;
    var reg = /<td class="result_text"> <a href="(\/title\/[\w\d]+\/\?ref_=fn_tt_tt_\d+)" >([^<]+)/g;
    var list = document.getElementById('movie-list');
    list.innerHTML = '';
    let count = 0;
    while ((result = reg.exec(content))) {
        var link = 'https://www.imdb.com' + result[1];
        var title = result[2];
        var a = document.createElement('a');
        a.innerText = title;
        a.href = link;
        a.target = '_blank';
        var li = document.createElement('li');
        li.append(a);
        list.append(li);
        count++;
        if (count > 5) {
            break;
        }
    }

    setElementLoadingState(button, false)
}
