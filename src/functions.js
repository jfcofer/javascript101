/**
 * Establece el contenido de texto de un elemento HTML identificado por su ID.
 *
 * @param {string} id - El ID del elemento HTML al que se desea establecer el texto.
 * @param {string} text - El texto que se desea mostrar dentro del elemento.
 * @returns {void}
 * @example
 * // Supongamos que existe un elemento <h1 id="main-title"></h1>
 * setTitle("main-title", "Bienvenidos al sitio web");
 * // El contenido del elemento con id "main-title" será "Bienvenidos al sitio web"
 */

const setTitle = (id, text) => {

    let refTitle = document.getElementById(id);
    if (refTitle) {
        refTitle.textContent = text;
    } else {
        console.warn(`No se encontró un elemento con el ID "${id}".`);
    }

}

/**
 * Agrega una nueva fila a una tabla HTML con los datos proporcionados.
 *
 * @param {Object} data - Un objeto que contiene los datos del framework.
 * @param {string} idBodyTable - El ID del cuerpo de la tabla donde se agregará la fila.
 * @returns {void}
 * @example
 * // Supongamos que tenemos un objeto con los datos del framework
 * const frameworkData = {
 *   frameworkName: "React",
 *   releaseDate: "24 de mayo de 2013",
 *   usersName: "4,500,000",
 *   popularityPercentage: "24%"
 * };
 * addRow(frameworkData, "data-frameworks");
 */

const addRow = (data, idBodyTable) => {

    if (
        !data?.frameworkName?.trim() ||
        !data?.releaseDate?.trim() ||
        !data?.usersName?.trim() ||
        !data?.popularityPercentage?.trim()
) {
        console.warn("El objeto 'data' no tiene las propiedades esperadas.");
        return;
    }

    let template = `
    <tr class="border-b border-blue-gray-100 bg-blue-gray-50">
        <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white py-2">${data.frameworkName}</td>
        <td>${data.releaseDate}</td>
        <td>${data.usersName}</td>
        <td>${data.popularityPercentage}</td>
    </tr>`;

    let refBodyTable = document.getElementById(idBodyTable);
    if (refBodyTable) {
        refBodyTable.insertAdjacentHTML('beforeend', template);
    } else {
        console.warn(`No se encontró un elemento con el ID "${idBodyTable}".`);
    }
}

export { setTitle, addRow };
