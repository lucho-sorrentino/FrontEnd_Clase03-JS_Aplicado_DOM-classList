//////////////////// EJERCICIOS ClassList ////////////////////

//     ********** Ejercicio 01 **********
// Crear un párrafo. Luego, desde javascript, hacer que se vea rojo.
// document.querySelector("#uno").classList.add("red")

// console.log(document.querySelector("#uno").classList);  //con classList "solo" puedo ver las clases que tiene el elemento.


//     ********** Ejercicio 02 **********
// Crear tres párrafos. Luego, desde javascript, hacer que tengan un fondo verde.
// document.querySelectorAll("p").forEach(e => e.classList.add("fondo-verde"))



//     ********** Ejercicio 03 **********
// Crear 4 párrafos, dos con clase “blanco”. A todos agregarle un fondo celeste, y a los clase blanco además hacer que el texto se vea blanco.
// document.querySelectorAll("p").forEach( e => e.classList.add("celeste") )
// document.querySelectorAll(".blanco").forEach( e => e.classList.add("white-font") )



//     ********** Ejercicio 04 **********
// En base al siguiente listado de notas, mostrar en verde los mayores a 7, amarillo los que están entre 4 y 6 y en rojo del tres para abajo.

// notas = [9,2,7,6,6,4,5,10,3,9.5]

// let semaforo = arreglo => {
//     let verdes = [];
//     let amarillos = []
//     let rojos = []
//     for (let i = 0; i < arreglo.length; i++) {
//         if (arreglo[i] >= 7) {
//             verdes.push(arreglo[i]);
//         } else if (arreglo[i] >= 4 && arreglo[i] <= 6) {
//             amarillos.push(arreglo[i]);          
//         } else {
//             rojos.push(arreglo[i]);           
//         }
//     }
//     document.querySelector(".verde").innerText = verdes
//     document.querySelector(".verde").classList.add("green")
//     document.querySelector(".amarillo").innerText = amarillos
//     document.querySelector(".amarillo").classList.add("yellow")
//     document.querySelector(".rojo").innerText = rojos    
//     document.querySelector(".rojo").classList.add("red")
// }
// semaforo(notas)

// TAMBIEN ASI:

// const semaforo2 = arreglo => {
//     arreglo.forEach(selector)
// }

// const selector = item => {
//     if (item >= 7) {
//         document.write(`<p class = green>${item}</p>`)
//     } else if (item >= 4 && item <= 6) {
//         document.write(`<p class = yellow>${item}</p>`)
//     } else {
//         document.write(`<p class = red>${item}</p>`)
//     }
// }

// semaforo2(notas)




//     ********** Ejercicio 05 **********
// Tenemos el siguiente HTML (ver abajo). Vamos a preguntarle al usuario qué color quiere cambiar y, luego, le vamos a preguntar por cuál. (2 input). En base a eso, nuestro javascript modificará el documento. 
// Ejemplo: si pide cambiar el verde por azul, los textos que antes se veían en verde ahora deberán verse en azul.
// (Nota: Se debe agregar el css correspondiente).

// <p class="red">Lorem ipsum dolor sit amet.</p>
// <p class="green"> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
// <p class="white"> Lorem ipsum dolor sit amet consecteturadipisicing elit. Suscipit!</p>
// <p class="green"> Lorem, ipsum.</p>
// <p class="white"> Lorem, ipsum dolor.</p>
// <p class="green"> Lorem ipsum dolor sit.</p>

// let elegir = parseInt(prompt("¿Qué color desea cambiar? \n1.-Rojo \n2.-Verde \n3.-Blanco")) 
// let cambiar = parseInt(prompt("¿Con qué color desea reemplazarlo? \n1.-Rojo \n2.-Verde \n3.-Blanco")) 

// const cambioEstilo = (preg1, preg2) => {
//     let colorElegido;
//     if (preg2 === 1) {
//         colorElegido = "red"
//     } else if (preg2 === 2) {
//         colorElegido = "green"
//     } else {
//         colorElegido = "white"
//     }

//     if (preg1 === 1) {
//         document.querySelectorAll(".red").forEach( item => item.classList.replace("red", colorElegido))
//     } else if (preg1 === 2) {
//         document.querySelectorAll(".green").forEach( item => item.classList.replace("green", colorElegido))
//     } else {
//         document.querySelectorAll(".white").forEach( item => item.classList.replace("white", colorElegido)) 
//     }
// }

// cambioEstilo(elegir, cambiar)




//     ********** Ejercicio 06 **********
// Pedir al usuario: Una palabra, un color y una cantidad. Generar la cantidad de párrafos que se requiera con esa palabra y ese color.

// let palabra = prompt("Ingrese una palabra cualquiera:");
// let color = prompt("Escriba el color que desea: \nRojo \nVerde \nAmarillo").toLowerCase(); 
// let cantidad = parseInt(prompt("¿Cuántos párrafos deberían crearse con la palabra elegida?"));

// const writeHTMLContent = (word, color, quantity) => {
//     for (let i = 0; i < quantity; i++) {
//         document.write("<p></p>")
//     }
//     document.querySelectorAll("p").forEach(item => item.innerHTML = word)
//     document.querySelectorAll("p").forEach(item => item.classList.add(color))
// }
// writeHTMLContent(palabra, color, cantidad)

// TAMBIEN ASI:

// const writeHTMLContent = (word, color, quantity) => {
//     for (let i=0; i < quantity; i++) {
//         document.write(`<p class = "${color}">${word}</p>`)
//     }
// }
// writeHTMLContent(palabra, color, cantidad)



//     ********** Ejercicio 07 **********
// HTML:
// <p class="nuevo rojo saludo"></p>
// <p class="rojo saludo"></p>
// <p class="campo"></p>
// <p class="nuevo saludo ayuda"></p>
// <p class="nuevo ayuda"></p>

// Primero: crear desde CSS estilos personalizados para cada clase.

// a) Dentro del siguiente HTML, a todos los párrafos que NO tengan la clase “nuevo”, agregarle la clase “antiguo”.
// Párrafos sin clase "nuevo": 2 y 3.

// PENDIENTE!!!!

// function identificar ()

// document.querySelectorAll("p").forEach(item => item.classList.add(antiguo))



// b) A todos los que tienen clase “rojo”, agregarles la clase “transparencia” 




// c) A todos los que tengan clase “saludo” quitarla, y a los que no la tengan, agregarla. 




// d) Remover de los primeros 4 párrafos la clase “ayuda”





// ********** Ejercicio 08 **********
// Dado el siguiente HTML (abajo), poner en color rojo los textos que comiencen con la letra “V”:

/* <span>Viento</span>
<span>Balanza</span>
<span>Zapato</span>
<span>Vertical</span> */

// function revisarSpan () {
//     document.querySelectorAll("span").forEach( item => {         
//         if (item.innerText[0] === "V") {
//             item.classList.add("rojo");
//             }    
//     })    
// }
// revisarSpan()


// const revisarSpan = () => {
//     document.querySelectorAll("span").forEach( item => {
//         if (item.innerText[0] === "V") {
//             item.classList.add("rojo")
//         }    
//         })    
// }

// revisarSpan()
