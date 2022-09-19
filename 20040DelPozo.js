document.title ="Rentabilidad"

let saludo = {
    bienvenida:"Bienvenido! Siga las instrucciones  para poder realizar su cálculo",

}

Swal.fire(saludo.bienvenida)


const btnGuardar=document.querySelector("[type='button']"),
p=document.querySelector(".Guardar");
btnGuardar.addEventListener("click",()=>{
   const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Producto guardado'
  })
})



const btnProdu3=document.querySelector("[type='button']"),
p3=document.querySelector(".Aceptar")
btnProdu3.addEventListener("click", guardarProdu3)
function guardarProdu3(){
    const produ3= document.getElementById('produ3')
    sessionStorage.setItem("Producto 3",produ3.value)


}

function costo(){
   const costo1=document.getElementById('costo')
   sessionStorage.setItem("costo",costo1.value)
    return costo1;
}
const btnCosto= document.querySelector("[id=botonCosto]")
btnCosto.addEventListener("click", costo)
btnCosto.addEventListener("click",()=>{
    const Toast = Swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 3000,
     timerProgressBar: true,
     didOpen: (toast) => {
       toast.addEventListener('mouseenter', Swal.stopTimer)
       toast.addEventListener('mouseleave', Swal.resumeTimer)
     }
   })
   
   Toast.fire({
     icon: 'success',
     title: 'costo guardado'
   })
 })


function precioVenta(){
  const   Venta= document.getElementById('venta')
  sessionStorage.setItem("precio venta",Venta.value)
  return Venta;
}
const btnVenta= document.querySelector("[id=botonVenta]")
btnVenta.addEventListener("click", precioVenta)
btnVenta.addEventListener("click",()=>{
    const Toast = Swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 3000,
     timerProgressBar: true,
     didOpen: (toast) => {
       toast.addEventListener('mouseenter', Swal.stopTimer)
       toast.addEventListener('mouseleave', Swal.resumeTimer)
     }
   })
   
   Toast.fire({
     icon: 'success',
     title: 'precio venta guardado'
   })
 })


  function rentabilidad(precioCosto ,precioVenta){
    precioCosto =parseFloat( sessionStorage.getItem("costo")) 
    precioVenta= parseFloat( sessionStorage.getItem("precio venta"))
    precioCosto > precioVenta ? 
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Atencion! ' + "Tu rentabilidad es de :$"+(precioVenta - precioCosto) +  ' subir precios urgente',
      footer: '<a href="">Why do I have this issue?</a>'
    })
    
          : Swal.fire("Tu rentabilidad es de: $"+(precioVenta - precioCosto))
  }

btnVenta.addEventListener("click",rentabilidad)


const productos = []
function crearProducto(){
for(let i = 0; i < sessionStorage.length; i++){
    let clave= sessionStorage.key(i)
const enJSON= JSON.stringify(sessionStorage.getItem(clave))
    console.log(enJSON);
}}

crearProducto()

const URL="productos.json";

fetch(URL)
  .then((response) => response.json())
  .then(Consejos =>{
      Consejos.forEach((Consejos) => {
          const h2 = document.createElement("h2");
         
          const li = document.createElement("li");
          li.innerHTML=`<li>${Consejos.title}</li>
          <p>${Consejos.body}</p>`
         
        lista.append(li)
      });
  })
