import {
  abrirVentanaMensura,
  mostrarTotalMensura,
} from "../secciones/funcionesMensura.js";
import { calcular, borrarMensura } from "../secciones/botones.js";
import { cerrarVentana } from "../secciones/funcionesGlobales.js";

const calcularBtnMensura = document.getElementById("calcular-btn");
calcularBtnMensura.addEventListener("click", () => {
  abrirVentanaMensura();
  calcular();
  mostrarTotalMensura();
});

const cerrar = document.getElementById("cerrar");
cerrar.addEventListener("click", () => {
  cerrarVentana();
});

const borrarBtnMensura = document.getElementById("borrar-btn");
borrarBtnMensura.addEventListener("click", () => {
  borrarMensura();
});
