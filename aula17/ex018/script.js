let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if(l.idexof(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
 
    if(isNumero(num.value) && !inlista(num.value,valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert("Valor invalido ou ja encontrado")
    }
num.value = ''
num.focus()
}

function finalizar(){
    if(valores.length == 0 ){
        window.alert("Adicione valores antes de finalizar")
    }else{
        let tot = valores.length
        res.innerHTML = " "
        res.innerHTML += `<p> Ao total temos ${tot} números cadastrados.</p>`
    }
}