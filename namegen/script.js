((i, j) => {
    const cBtn = document.querySelector('#copyBtn')
    j = prompt("какой ты RYTP хочеш? ");
    document.write(`<h1>#ники@futurepooqs #название@futurepooqs<br>${j} ${i}</h1>`);
    let result = `#ники@futurepooqs #название@futurepooqs\n${j} ${i}`
    cBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(result)
        alert('Скопировано!')
        //cBtn.innerHTML = "<button id="copyBtn">Скопировано!</button>"
    })
})(" RYTP", "")
