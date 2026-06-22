((i, j) => {
    const cBtn = document.querySelector('#copyBtn')
    j = prompt("какой ты RYTP хочеш? ");
    document.write(`<h1>#ники@futurepooqs #название@futurepooqs<br>${j} ${i}</h1>`);
    cBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(`#ники@futurepooqs #название@futurepooqs\n${j} ${i}`)
        alert('Скопировано!')
        //cBtn.innerHTML = "<button id="copyBtn">Скопировано!</button>"
    })
})(" RYTP", "")
