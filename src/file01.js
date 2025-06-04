/**
 * Agregue "use strict"; al inicio de su archivo JavaScript para activar el modo estricto.
 * El modo estricto ayuda a detectar errores comunes y mejora la seguridad del código.
 * Referencia: https://javascript.info/strict-mode
 */
"use strict";

/**
 * Importe la función setTitle desde el archivo functions.js.
 * Referencia: https://javascript.info/import-export
 */

import { setTitle } from "./functions.js";

/**
 * Establezca la variable local pageTitle con el título de la página.
 * Declare la variable local pageId con el ID del elemento HTML donde se mostrará el título.
 * Referencia: https://javascript.info/variables
 */

let pageTitle = "JavaScript - 101";
let pageId = "title";

// Llama a la función setTitle para establecer el contenido del elemento HTML con el ID especificado
//
setTitle(pageId, pageTitle);
