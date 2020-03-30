document.querySelectorAll('[wm-folder]').forEach(res => {
    res.onclick = () => {
        const ul = res.nextElementSibling
        const currentDisplay = ul.style.display
        ul.style.display = currentDisplay === 'none' ? 'block' : 'none'
    }
})

// const folderFunction = () => {
//     const ul = document.firstElementChild
//     const currentDisplay = ul.style.display
//     ul.style.display = currentDisplay === 'none' ? 'block' : 'none'
// }