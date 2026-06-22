((i, j) => {
    j = prompt("какой ты RYTP хочеш? ");
    const content = `<h1>#ники@futurepooqs #название@futurepooqs<br>${j} ${i}</h1>`
    const outputContainer = document.createElement('div')
    outputContainer.innerHTML = content
    document.body.append(outputContainer)
})(" RYTP", "")
