# Práctica 8: Comma separated values (CSV) with AJAX

## Requisitos:
* Despliegue la aplicación en Heroku usando Express.JS
* Use SASS para generar el CSS.
* Use Gulp para la gestión de las tareas.
* Se debe usar locaStorage para almacenar las últimas entradas (ya hecho en la versión inicial).
* Se usa Underscore para los templates en el cliente y ejs para los templates en el servidor.
* El requisito de practicar un request AJAX usando jQuery: El navegador/cliente lee la cadena con los datos de entrada y se los envía usando AJAX al servidor, el cual calcula y devuelve en JSON la tabla (el array de arrays) que finalmente es insertada en la página por el cliente/navegador.
* Aisle el cálculo de la tabla en un modulo Node.js
* El volcado de la salida en el cliente debe hacerse usando underscore evitando concatenación de cadenas.
* Utilice tantas características de ECMA6 como le sea posible.
* Añada botones/enlaces/menu de selección que permitan cargar un fichero específico de una lista de ficheros en la texarea de entrada como en el ejemplo en crguezl/expressloadfileontotextarea.
* Añada una zona de Drag-and-Drop a la que se pueda arrastrar el fichero a analizar. Véa el ejemplo draganddrop.html en la sección Ficheros.
* Añada un botón de lectura de fichero <input type="file" /> para cargar la entrada desde fichero.


## Enlaces

* [Página web de la práctica]()

* [Página web donde residen todas las prácticas](http://alu0100698688.github.io/web/)

* [Campus de la asignatura](https://campusvirtual.ull.es/1516/course/view.php?id=178)

* [Descripción de la práctica en el campus](https://casianorodriguezleon.gitbooks.io/pl1516/content/practicas/practicaajaxcsv.html)

* [Enlace a las pruebas]()

## [Ver despliegue en Heroku](https://estefi-csv-ajax.herokuapp.com)


## jQuery.get( url [, data ] [, success ] [, dataType ] )
* url
  * Type: String
  * A string containing the URL to which the request is sent.
* data
  * Type: PlainObject or String
  * A plain object or string that is sent to the server with the request.
* success
  * Type: Function( PlainObject data, String textStatus, jqXHR jqXHR )
  * A callback function that is executed if the request succeeds.
    Required if `dataType` is provided, but you can use `null` or `jQuery.noop` as a placeholder.
* dataType
  * Type: String
  * The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).

## jQuery.get( [settings ] )
* settings
  * Type: PlainObject
  * A set of key/value pairs that configure the Ajax request.
  * All properties except for `url` are optional.
  * A default can be set for any option with `$.ajaxSetup()`.

This is a shorthand Ajax function, which is equivalent to:

```javascript
$.ajax({
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
```

The success callback function is passed the returned data, which will be an XML root element, text string, JavaScript file, or JSON object, depending on the MIME type of the response. It is also passed the text status of the response.
