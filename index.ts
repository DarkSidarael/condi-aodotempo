const form = document.querySelector("#sf > form")
const input : HTMLInputElement |null = document.querySelector('#il')

const sectionInfos = document.querySelector('#tf')

form?.addEventListener('submit', async (event)=>{
    event.preventDefault()

    if(!input || !sectionInfos) return
    const localizacao = input.value

    if(localizacao.length <3) {
        alert('O local precisa ter, pelo menos 3 letras.')
        return
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=bec2ba569e90556198daccbc81bdd692&lang=pt_br&units=metric`);


    const dados = await response.json()

    console.log(dados)

    const infos = {
        temperatura: Math.round(dados.main.temp),
        local: dados.name,
        icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
    }

    sectionInfos.innerHTML = ` <div class='tdata'>
            <h2>${infos.local}</h2>
            
            <span>${infos.temperatura}</span>
            </div> 

            <img src="${infos.icone}">`
})


