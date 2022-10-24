const Horas = horas
const Minutos = minutos 
const Segundos = segundos

const relogioVirtual = setInterval(() =>{
    let dateDay = new Date()
    let h = dateDay.getHours()
    let m = dateDay.getMinutes()
    let s = dateDay.getSeconds()

    if(h < 10 ){
        h = '0' + h
    }
    if(m < 10 ){
        m = '0' + m
    }
    if(s < 10 ){
        s = '0' + s
    }

    Horas.textContent = h
    Minutos.textContent = m
    Segundos.textContent = s
})