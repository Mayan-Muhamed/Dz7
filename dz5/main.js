
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const convert = (element, target1, target2,  isTrue) => {
    element.oninput = async () => {
        const getData = await fetch('convert.json')
        const resp = await getData.json()
        if (isTrue) {
            target1.value = (element.value / resp.usdKgs).toFixed(2)
            target2.value = (element.value / resp.eurKgs).toFixed(2)
        } else if(isTrue === null){
            target1.value = (element.value * resp.eurKgs).toFixed(2)
            target2.value = (element.value * resp.usdEur).toFixed(2)
        }else {
            target1.value = (element.value * resp.usdKgs).toFixed(2)
            target2.value = (element.value * resp.eurUsd).toFixed(2)
        }
        if (element.value === ''){
            target1.value = ''
            target2.value = ''
        }
    }
}

convert(som, usd, eur,true)
convert(eur, som,  usd, null)
convert(usd, som, eur,false)
