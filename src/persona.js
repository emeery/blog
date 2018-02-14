const esAdulto = (edad) => { if(edad >= 18){return 'es adulto';
} else {return 'eres un peque'} }

const esAdulto2 = (e) => e >= 18; 
const esSeñor = (edad) => edad >= 65;
export { esAdulto, esAdulto2, esSeñor as default };