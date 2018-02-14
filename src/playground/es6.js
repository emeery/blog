//var AppRoot = document.getElementById('app');
//ReactDOM.render();
// 
console.log('corriendo');
// alcance
let use = 'use';
const use2 = 'use';
// funcion flecha

const square = function(a){return a*a;};
function square2(a){return a*a;}

const cuadrado = (a) => {return a*a;}
const cuadrado2 = (x) => x * x;
console.log(cuadrado(9) ); // 81

// test 
const primerNombre = (n) => {return n.split(' ')[0]; } // Gerardo
const primerNombre2 = (n) => n.split(' ')[0]; // Gerardo
console.log(primerNombre2('Gerardo Bautista')); 

// const usuario = {
//     nombre: 'Gerardo',
//     ciudades: ['Distrito Federal', 'Oaxaca', 'Veracruz'],
//     imprimirCiudad() {
//         return this.ciudades.map((c) =>
//      this.nombre + 'visitó' + c);
//         //return mensajeCiudad;
//     }
// };
// console.log(usuario.imprimirCiudad());


// return this.numeros.map(()=>{})
const arregloMultiplicacion = {
    numeros: [1, 2, 3],
    multiplicador: 8,
    multiply() {
        return this.numeros.map((n) => n*this.multiplicador);
    }
}
console.log(arregloMultiplicacion.multiply());
// arreglo.map termina en ;
const arregloMultiplicacion2 = {
    arreglo: [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10 ],
    multiplicador: 10,
    multiplicar(){ return this.arreglo.map((a) => a*this.multiplicador); }
}



// forEach

// const usuario = {
//     nombre: 'Gerardo',
//     ciudades: ['Distrito Federal', 'Oaxaca', 'Veracruz'],
//     imprimirCiudad: function() {
//         this.ciudades.forEach((c) => {
//             console.log(this.nombre + ' vive en '+ c);
//         });
//     }
// };
// usuario.imprimirCiudad();




console.log('corriendo');
// jsx - javascript xml
// var plantilla = <p>this is JSX from app.js</p>

  // if statements, ternary operator, logical and operator
const usuario = { titulo:'Tus notas.', subtitulo:'sub',opciones:['Uno','Dos']}
const plantilla = (<div>
    <h2>{usuario.titulo ? usuario.titulo : 'No hay titulo'}</h2>
    <h3>{usuario.subtitulo && <p>{usuario.subtitulo}</p>}</h3>
    <h4>{usuario.opciones.length >=0 ? 'Estas son las opciones':'Sin opciones'}</h4>
    <ol><li>One</li><li>Two</li></ol>
    </div>);

  // plantilla
const user = {edad:18,direccion:'molina'};
function getLocation(locacion){
    if(locacion){
        return locacion;
    } else {return 'locacion desconocida';}} 
const plantillaJSX = (<div>
    <h1>{user.name ? user.name : 'Anonimo'}</h1>
    {(user.edad && user.edad >= 18) && <p>Edad: {user.edad}</p>}
    <p>Direccion:{getLocation(user.direccion)}</p>
    </div>);