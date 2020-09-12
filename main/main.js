/* variables para controlar la aparicion con el scroll */
const servicio1 = document.getElementById('servicio1')
const servicio2 = document.getElementById('servicio2')
const servicio3 = document.getElementById('servicio3')
const servicio4 = document.getElementById('servicio4')
const form_container = document.getElementById('form-translate')
const mision = document.getElementById('mision')
const origenes = document.getElementById('origenes')
const valores = document.getElementById('valores')
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
        }if(scroll > 700){
            translate(servicio2)
        }if(scroll > 900){
            translate(servicio3)
        }if(scroll > 1200){
            translate(servicio4)
        }if(scroll > 1800){
            translate(form_container)
        }if(scroll > 2400){
            translate(origenes)
            translate(mision)
            translate(valores)
        }
    }

//funcion para el transition

function translate(variable){
    variable.style.transform = 'translateX(0%)'
    variable.style.opacity = '1'
}


//boton arriba
Subir_o_Bajar('#scroll-up', 0)

//scroll cambiado a html y css para mejorar el responsive

/* //boton ir a servisios
Subir_o_Bajar('#servicio-link', 625)

//boton ir a contactos
Subir_o_Bajar("#contact-link", 9999999999999999999)

if(window.outerWidth < 1050){
    
    //boton ir a nosotros movil
    Subir_o_Bajar('#nosotros-link', 3441)

}else{

    //boton ir a nosotros escritorio
    Subir_o_Bajar('#nosotros-link', 2616)

} */

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