//recargar la pagina al hacer click en inicio

const reload = document.getElementById('reload')
reload.addEventListener('click', (eve)=>{
    eve.preventDefault()
    location.reload()
})

//controla el boton de ir hacia arriba

    //analiza el scroll para hacer visible el boton
window.onscroll = function(){
    
    if(document.documentElement.scrollTop > 100){
        document.querySelector('#scroll-up').classList.add('display-up');
    }else{
        document.querySelector('#scroll-up').classList.remove('display-up');
    }
}

//boton arriba
Subir_o_Bajar('#scroll-up', 0)

//boton ir a servisios
Subir_o_Bajar('#servicio-link', 625)

//boton ir a nosotros
Subir_o_Bajar('#nosotros-link', 2616)

//boton ir a contactos
Subir_o_Bajar("#contact-link", 9999999999999999999)


//logica de subir o bajar
function Subir_o_Bajar(referecia, distacia){
    document.querySelector(referecia).addEventListener('click', function(){
        window.scrollTo({
            top: distacia,
            behavior: 'smooth'
        })
    })
}


//alerta del formulario

const form = document.querySelector('#form')

form.addEventListener('submit', (eve)=>{
    eve.preventDefault()
    swal("Good job!", "El formulario a sido enviado!", "success");
    setTimeout(()=>{
        window.location.reload()
        form.reset()
    },3000)
})