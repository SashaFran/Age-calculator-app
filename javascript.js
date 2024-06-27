/** @format */

const comprobacion = (day, month, year) => {
  const textoRojo = 'red'
  const textoGris = '#787878'
  const bordeRojo = '1px solid red'
  const bordeGris = '1px solid #787878'

  let cantidadDias = 0
  let validacionDia = 0
  let validacionMes = 0
  let validacionAnio = 0

  // VALIDACIÓN DÍA
  if (!day) {
    document.getElementById('errorDay').innerHTML = `This field is required`
    validacionDia = 1
  } else if (day <= 0 || day > 31) {
    document.getElementById('errorDay').innerHTML = `Must be a valid day`
    validacionDia = 1
  } else {
    document.getElementById('errorDay').innerHTML = ``
  }

  if (validacionDia == 1) {
    document.getElementById('flabelday').style.color = textoRojo
    document.getElementById('fday').style.border = bordeRojo
  } else {
    document.getElementById('flabelday').style.color = textoGris
    document.getElementById('fday').style.border = bordeGris
  }

  // VALIDACIÓN MES
  if (!month) {
    document.getElementById('errorMonth').innerHTML = `This field is required`
    validacionMes = 1
  } else if (month <= 0 || month > 12) {
    document.getElementById('errorMonth').innerHTML = `Must be a valid month`
    validacionMes = 1
  } else {
    document.getElementById('errorMonth').innerHTML = ``
  }

  if (validacionMes == 1) {
    document.getElementById('flabelmonth').style.color = textoRojo
    document.getElementById('fmonth').style.border = bordeRojo
  } else {
    document.getElementById('flabelmonth').style.color = textoGris
    document.getElementById('fmonth').style.border = bordeGris
  }

  // VALIDACIÓN AÑO
  const anioActual = new Date().getFullYear()

  if (!year) {
    document.getElementById('errorYear').innerHTML = `This field is required`
    validacionAnio = 1
  } else if (year < anioActual) {
    document.getElementById(
      'errorYear'
    ).innerHTML = `Must be in the future or the present year`
    validacionAnio = 1
  } else {
    document.getElementById('errorYear').innerHTML = ``
  }

  if (validacionAnio == 1) {
    document.getElementById('flabelyear').style.color = textoRojo
    document.getElementById('fyear').style.border = bordeRojo
  } else {
    document.getElementById('flabelyear').style.color = textoGris
    document.getElementById('fyear').style.border = bordeGris
  }

  // VALIDACIÓN DÍAS DEL MES
  if (month == 2) {
    cantidadDias = 28
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    cantidadDias = 30
  } else {
    cantidadDias = 31
  }

  if (day > cantidadDias) {
    document.getElementById('errorDay').innerHTML = `Must be a valid date`
    document.getElementById('flabelday').style.color = textoRojo
    document.getElementById('fday').style.border = bordeRojo
    document.getElementById('flabelmonth').style.color = textoRojo
    document.getElementById('fmonth').style.border = bordeRojo
    document.getElementById('flabelyear').style.color = textoRojo
    document.getElementById('fyear').style.border = bordeRojo
    validacionDia = 1
  }

  return validacionDia + validacionMes + validacionAnio
}

function pulsaBoton() {
  const day = document.getElementById('fday').value
  const month = document.getElementById('fmonth').value
  const year = document.getElementById('fyear').value

  const dateInput = new Date(year, month - 1, day)
  const dateNow = new Date()

  let tiempoPasado = Math.abs(dateNow.getTime() - dateInput.getTime())

  const segs = 1000
  const mins = segs * 60
  const hours = mins * 60
  const days = hours * 24
  const months = days * 30.416666666666668
  const years = days * 365.25

  if (comprobacion(day, month, year) == 0) {
    // cálculo
    let anos = Math.floor(tiempoPasado / years)
    tiempoPasado = tiempoPasado - anos * years

    let meses = Math.floor(tiempoPasado / months)
    tiempoPasado = tiempoPasado - meses * months

    let dias = Math.floor(tiempoPasado / days)

    document.getElementById('years').innerHTML = anos
    document.getElementById('months').innerHTML = meses
    document.getElementById('days').innerHTML = dias
  }
}
