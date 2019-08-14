function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora sao ${hora} horas.`
    if(hora >=0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = 'rgba(216, 213, 9, 0.555)'

    }else if (hora >=12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = 'orange'
    }else{
        img.src = 'noite.png'
        document.body.style.background = 'darkblue'
    }

}