let servicio1 = document.getElementById('servicio1')
let servicio2 = document.getElementById('servicio2')
let servicio3 = document.getElementById('servicio3')
let servicio4 = document.getElementById('servicio4')
//recargar la pagina al hacer click en inicio

const reload = document.getElementById('reload')
reload.addEventListener('click', (eve)=>{
    eve.preventDefault()
    location.reload()
})

//controla el boton de ir hacia arriba

    //analiza el scroll para hacer visible el boton
window.onscroll = function(){
    let scroll = document.documentElement.scrollTop;
    
    console.log(scroll)
    if(scroll > 100){
        document.querySelector('#scroll-up').classList.add('display-up');
    }else{
        document.querySelector('#scroll-up').classList.remove('display-up');
    };


    if(scroll > 300){
        translate(servicio1)
        console.log('funciona 1');
    }if(scroll > 700){
        translate(servicio2)
        console.log('funciona 2');
    }if(scroll > 1000){
        translate(servicio3)
        console.log('funciona 3');
    }if(scroll > 1500){
        translate(servicio4)
        console.log('funciona 4');
    }
}

//funcion para el transition

function translate(variable){
    variable.style.transform = 'translateX(0%)'
    variable.style.opacity = '1'
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