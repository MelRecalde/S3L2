/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/
const changeTitle = function () {
    const titleOfThePage = document.getElementsByTagName("h1")[0];
    titleOfThePage.innerText = "THIS IS THE TITLE"
}
changeTitle()

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/
const addClassToTitle = function () {
    const classOfTheTitle = document.querySelector("h1");
    classOfTheTitle.classList.add("myHeading")
}
addClassToTitle()

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
    const paragraph = document.querySelector("div>p")
    paragraph.innerText = "This is a paragraph"
}
changePcontent()

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
    const anchor = document.getElementsByTagName("a")[0]
    anchor.setAttribute("href", "https://www.google.com")
}
changeUrls()

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
    const newItem = document.createElement("li")
    newItem.innerText = "New Item"
    const secList = document.getElementById("secondList")
    secList.appendChild(newItem)
}

addToTheSecond()

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {
    const newP = document.createElement("p")
    newP.innerText = "Enjoy the journey"
    const firstDiv = document.querySelector("div")
    firstDiv.appendChild(newP)
}

addParagraph()

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
    const firstList = document.getElementById("firstList")
    firstList.classList.add("firstList")
}
hideFirstUl()

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
    const list = document.querySelectorAll("ul")
    for (let index = 0; index < list.length; index++) {
        const element = list[index]
        //element.setAttribute("style", "background-color: green")
        element.style.backgroundColor = "green"
    }
}
paintItGreen()

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () {
    const titleOfThePage = document.querySelector("h1")[0];
    titleOfThePage.textContent
    const sliced = titleOfThePage.slice(-1)
}
makeItClickable()
/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function () { }

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () { }

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () { }

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () { }

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () { }