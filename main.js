"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var address_1 = require("./address");
var mail_1 = require("./mail");
var person_1 = require("./person");
var phone_1 = require("./phone");
// Creo las personas //
var personas = [];
personas.push(new person_1.Person("David", "Perez", 31, "32765590T", "13/02/1975", "azul", "hombre", new address_1.Address("Calle Fuertes", 25, 3, "B", 85003, "Madrid", "Madrid"), new mail_1.Mail("Trabajo", "davidperez@aytomadrid.es"), new phone_1.Phone("Profesional", 632009876), "Nota 1"));
personas.push(new person_1.Person("Ruben", "Lopez", 27, "25768909Z", "05/08/1996", "amarillo", "hombre", new address_1.Address("Plaza de la Concordia", 3, 5, "Derecha", 29005, "Málaga", "Málaga"), new mail_1.Mail("Personal", "rubenlopez@gmail.com"), new phone_1.Phone("Fijo", 951247590), "Nota 2"));
personas.push(new person_1.Person("Hector", "Rubio", 19, "89504333D", "13/12/1954", "naranja", "hombre", new address_1.Address("Avenida José Laguillo", 6, 4, "A", 41003, "Sevilla", "Sevilla"), new mail_1.Mail("Personal", "hectorrubio@hotmail.com"), new phone_1.Phone("Personal", 678521001), "Nota 3"));

console.log('Se crean 3 registros de persona y se muestran en el terminal');
for (var i = 0; i < personas.length; i++) {
    console.log(personas[i]);
}
//Filtro por DNI//
var personaFiltrada = personas.filter(function (a) { return a.dni == "25768909Z"; })[0];
var nuevaDireccion = new address_1.Address("Calle Sombra", 98, 2, "I", 41987, "Sevilla", "Sevilla");
// método pop() para sacar la anterior direccion//
personaFiltrada.direcciones.pop();
// y push() para incluir la nueva.//
personaFiltrada.direcciones.push(nuevaDireccion);
//Misma logica para sobreescribir nuevo email//
var nuevoMail = new mail_1.Mail("Trabajo", "rlopez@gmail.org");
personaFiltrada.mails.pop();
personaFiltrada.mails.push(nuevoMail);
//Misma logica para sobreescribir nuevo email//
var nuevoTelefono = new phone_1.Phone("Trabajo", 600987222);
personaFiltrada.telefonos.pop();
personaFiltrada.telefonos.push(nuevoTelefono);
console.log('Se muestras los 3 registros con los cambios realizados anteriormente');
for (var i = 0; i < personas.length; i++) {
    console.log(personas[i]);
}
