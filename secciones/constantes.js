/**
 * CONSTANTES GENERALES.
 */
export const multiplicador = 2.5; //Indice para calcular los montos.
export const porcentajePreferencial = 500; //Porcentaje preferencial.

/**
 * CONSTANTES PARA LOS BOTONES Y FORMUALRIOS.
 */
export const borrarBtnMensura = document.getElementById("borrar-btn");
export const volverBtnMensura = document.getElementById("volver-btn");
export const calcularBtnMensura = document.getElementById("calcular-btn");
export const calcularBtnValuaciones = document.getElementById(
  "calcular-btnValuaciones"
);
export const tablaValuaciones = document.getElementById("tablaValuaciones");
export const tablaMensura = document.getElementById("tablaMensura");
export const formularioValuaciones = document.getElementById(
  "formularioValuaciones"
);
export const formularioMensura = document.getElementById("formularioMensura");

/**
 * CONSTANTES MENSURA
 */
export const modulos = [
  { rango: [0, 5], valor: 750 * multiplicador },
  { rango: [6, 20], valor: 625 * multiplicador },
  { rango: [21, 50], valor: 550 * multiplicador },
  { rango: [51, Infinity], valor: 500 * multiplicador },
];

/**
 * CONSTANTES VALORES MODULARES.
 */
const precioDdjj = 200 * multiplicador;
const precioUnidadFuncional = 500 * multiplicador;
const precioCementerio = 100 * multiplicador;
const precioParcelario = 1500 * multiplicador;
const precioEstudio = 700 * multiplicador;
const precioValoresFiscal = 600 * multiplicador;
const precioValuacionFiscal = 500 * multiplicador;
const precioReceptividadGanadera = 500 * multiplicador;
const precioVir = 700 * multiplicador;

export const valoresMensura = [
  precioDdjj,
  precioUnidadFuncional,
  precioCementerio,
  precioParcelario,
  precioEstudio,
];

export const valoresValuaciones = [
  precioDdjj,
  precioValoresFiscal,
  precioValuacionFiscal,
  precioReceptividadGanadera,
  precioVir,
];
