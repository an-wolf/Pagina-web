// Estado de la aplicación(En ejecución, Apagado, No funciona)

const statusApp = document.querySelectorAll(".status");

statusApp.forEach((status) => {
status.innerHTML = "En ejecución";
});