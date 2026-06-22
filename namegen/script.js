((i, j) => {
    const cBtn = document.querySelector('#copyBtn')
    j = prompt("какой ты RYTP хочеш? ");
    const content = `<h1>#ники@futurepooqs #название@futurepooqs<br>${j} ${i}</h1>`
    const result = `#ники@futurepooqs #название@futurepooqs\n${j} ${i}`
    const outputContainer = document.createElement('div')
    outputContainer.innerHTML = content
    cBtn.parentNode.insertBefore(outputContainer, cBtn);
    cBtn.addEventListener('click', async () => {
        await navigator.clipboard.writeText(result)
        cBtn.textContent = 'Скопировано!'
    })
})(" RYTP", "")
