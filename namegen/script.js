const cBtn = document.querySelector('#copyBtn')
function lul(i, j) {
    j = prompt("какой ты RYTP хочеш? ");
    document.write("<h1>#ники@futurepooqs #название@futurepooqs<br>", j, i, "</h1>");
    cBtn.addEventListener('click', () => {
        navigator.clipboard.writeText("#ники@futurepooqs #название@futurepooqs ", j, i)
        cBtn.innerHTML = "<button id="copyBtn">Скопировано!</button>"
    }
}
lul(" RYTP", "");
