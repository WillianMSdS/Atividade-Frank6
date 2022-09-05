function maior() {
    var n1 = Number(document.getElementsByTagName('input')[0].value)
    var n2 = Number(document.getElementsByTagName('input')[1].value)
    var n3 = Number(document.getElementsByTagName('input')[2].value)

    if (n1 > n2 && n1 > n3) {
        document.querySelector('p').innerHTML = `${n1}`
    }
    if (n2 > n1 && n2 > n3) {
        document.querySelector('p').innerHTML = `${n2}`
    }
    else {
        document.querySelector('p').innerHTML = `${n3}`
    }
}  
