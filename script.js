function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = String(data.getHours()).padStart(2, '0')
    let min = String(data.getMinutes()).padStart(2, '0')
    let sec = String(data.getSeconds()).padStart(2, '0')

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia! Agora são ${hora}:${min}:${sec}.`    
        img.src = 'foto-manha.jpg'
        window.document.body.style.background = 'rgb(252, 195, 142)'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde! Agora são ${hora}:${min}:${sec}.`
        img.src = 'foto-tarde.jpg'
        window.document.body.style.background = 'rgba(88, 41, 10, 0.61)'
    } else {
        msg.innerHTML = `Boa noite! Agora são ${hora}:${min}:${sec}.`
        img.src = 'foto-noite.jpg'
        window.document.body.style.background = 'rgb(58, 45, 71)'
    }
}

setInterval(carregar, 1000)
