document.querySelectorAll('[wm-nav]').forEach(res => {
    const content = document.getElementById('content')
    
    res.onclick = () => {
        fetch(res.getAttribute('wm-nav'))
            .then(res2 => res2.text())
            .then(html => content.innerHTML = html)
    }
})