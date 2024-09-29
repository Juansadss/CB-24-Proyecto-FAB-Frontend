import React from "react";



const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "PIEZA", uid: "name", sortable: true },
  { name: "CATEGORÍA", uid: "role", sortable: true },
  { name: "MOTOR O PIEZA", uid: "team" },
  { name: "TIEMPO (años)", uid: "age", sortable: true },
  { name: "Descripción", uid: "Descripcion" },
  { name: "ESTADO", uid: "status", sortable: true },
  { name: "ACCIONES", uid: "actions" },
];

const statusOptions = [
  { name: "Programado", uid: "Programado" },
  { name: "En Proximo", uid: "Proximo" },
  { name: "En Reparación", uid: "Retrasado" },
];

const data = [
  { pieza: "MOTOR JT8B", categoria: "TURBOFAN", estado: "Programado", descripcion: "Motor de aviación", ubicacion: "Hangar 3" },
  { pieza: "MOTOR JT8D", categoria: "TURBOFAN", estado: "Programado", descripcion: "Motor de aviación", ubicacion: "Hangar 1" },
  { pieza: "MOTOR CF6", categoria: "TURBOFAN", estado: "Proximo", descripcion: "Motor de aviación", ubicacion: "Hangar 2" },
  { pieza: "MOTOR PW4000", categoria: "TURBOFAN", estado: "Retrasado", descripcion: "Motor de aviación", ubicacion: "Hangar 3" },
  { pieza: "MOTOR JT8B", categoria: "TURBOFAN", estado: "Programado", descripcion: "Motor de aviación", ubicacion: "Hangar 3" },
  { pieza: "MOTOR JT8B", categoria: "TURBOFAN", estado: "Programado", descripcion: "Motor de aviación", ubicacion: "Hangar 3" },
  { pieza: "MOTOR JT8B", categoria: "TURBOFAN", estado: "Programado", descripcion: "Motor de aviación", ubicacion: "Hangar 3" },
  { pieza: "MOTOR JT8B", categoria: "TURBOFAN", estado: "Programado", descripcion: "Motor de aviación", ubicacion: "Hangar 3" },
  { pieza: "MOTOR JT8B", categoria: "TURBOFAN", estado: "Programado", descripcion: "Motor de aviación", ubicacion: "Hangar 3" },
  { pieza: "MOTOR JT8B", categoria: "TURBOFAN", estado: "Programado", descripcion: "Motor de aviación", ubicacion: "Hangar 3" },
  { pieza: "MOTOR JT8B", categoria: "TURBOFAN", estado: "Programado", descripcion: "Motor de aviación", ubicacion: "Hangar 3" },
  { pieza: "MOTOR JT8B", categoria: "TURBOFAN", estado: "Programado", descripcion: "Motor de aviación", ubicacion: "Hangar 3" },
  { pieza: "MOTOR JT8B", categoria: "TURBOFAN", estado: "Programado", descripcion: "Motor de aviación", ubicacion: "Hangar 3" },
  
  // Agrega más objetos según sea necesario
];

const pieces = [
  {
    id: 1,
    name: "Motor JT8D",
    role: "Turbofan",
    team: "Motor",
    status: "Programado",
    age: "10",
    Descripcion: "Motor JT8D - Motor turbofan para aviones comerciales",
  },
  {
    id: 2,
    name: "Rotor principal",
    role: "Hélice",
    team: "Pieza",
    status: "Proximo",
    age: "5",
    Descripcion: "Rotor principal - Hélice principal para helicópteros",
  },
  {
    id: 3,
    name: "Turbina PT6",
    role: "Turbohélice",
    team: "Motor",
    status: "Programado",
    age: "8",
    Descripcion: "Turbina PT6 - Motor turbohélice para aviones ligeros",
  },
  {
    id: 4,
    name: "Caja de cambios",
    role: "Transmisión",
    team: "Pieza",
    status: "Retrasado",
    age: "3",
    Descripcion: "Caja de cambios - Transmisión para motores de avión",
  },
  {
    id: 5,
    name: "Fuselaje",
    role: "Estructura",
    team: "Pieza",
    status: "Programado",
    age: "15",
    Descripcion: "Fuselaje - Estructura principal del avión",
  },
  {
    id: 6,
    name: "Turbocompresor",
    role: "Compresor",
    team: "Motor",
    status: "Programado",
    age: "7",
    Descripcion: "Turbocompresor - Compresor para motores a reacción",
  },
  {
    id: 7,
    name: "Ala",
    role: "Estructura",
    team: "Pieza",
    status: "Proximo",
    age: "12",
    Descripcion: "Ala - Parte del avión que proporciona sustentación",
  },
  {
    id: 8,
    name: "Tren de aterrizaje",
    role: "Sistema",
    team: "Pieza",
    status: "Programado",
    age: "6",
    Descripcion: "Tren de aterrizaje - Sistema para el aterrizaje del avión",
  },
  {
    id: 9,
    name: "Sistema de combustible",
    role: "Sistema",
    team: "Pieza",
    status: "Retrasado",
    age: "4",
    Descripcion: "Sistema de combustible - Almacena y suministra combustible",
  },
  {
    id: 10,
    name: "Cabina de mando",
    role: "Estructura",
    team: "Pieza",
    status: "Programado",
    age: "14",
    Descripcion: "Cabina de mando - Área donde se controla el avión",
  },
  {
    id: 11,
    name: "Empenaje",
    role: "Estructura",
    team: "Pieza",
    status: "Programado",
    age: "9",
    Descripcion:
      "Empenaje - Parte trasera del avión que ayuda en la estabilidad",
  },
  {
    id: 12,
    name: "Alerones",
    role: "Control",
    team: "Pieza",
    status: "Proximo",
    age: "11",
    Descripcion: "Alerones - Ayudan en el control y la maniobrabilidad",
  },
  {
    id: 13,
    name: "Flaps",
    role: "Control",
    team: "Pieza",
    status: "Programado",
    age: "5",
    Descripcion:
      "Flaps - Se usan para aumentar la sustentación durante el despegue y aterrizaje",
  },
  {
    id: 14,
    name: "Frenos aerodinámicos",
    role: "Freno",
    team: "Pieza",
    status: "Programado",
    age: "4",
    Descripcion: "Frenos aerodinámicos - Ayudan a frenar el avión en el aire",
  },
  {
    id: 15,
    name: "Puerta de emergencia",
    role: "Acceso",
    team: "Pieza",
    status: "Programado",
    age: "8",
    Descripcion: "Puerta de emergencia - Salida de emergencia para pasajeros",
  },
  {
    id: 16,
    name: "Sistema de comunicaciones",
    role: "Sistema",
    team: "Pieza",
    status: "Proximo",
    age: "6",
    Descripcion:
      "Sistema de comunicaciones - Facilita la comunicación en el avión",
  },
  {
    id: 17,
    name: "Sistema de navegación",
    role: "Sistema",
    team: "Pieza",
    status: "Programado",
    age: "7",
    Descripcion: "Sistema de navegación - Ayuda en la navegación del avión",
  },
  {
    id: 18,
    name: "Sistema de iluminación",
    role: "Sistema",
    team: "Pieza",
    status: "Retrasado",
    age: "3",
    Descripcion: "Sistema de iluminación - Proporciona iluminación en el avión",
  },
  {
    id: 19,
    name: "Cableado eléctrico",
    role: "Eléctrico",
    team: "Pieza",
    status: "Programado",
    age: "5",
    Descripcion:
      "Cableado eléctrico - Conecta los sistemas eléctricos del avión",
  },
  {
    id: 20,
    name: "Instrumentación de vuelo",
    role: "Instrumento",
    team: "Pieza",
    status: "Programado",
    age: "9",
    Descripcion:
      "Instrumentación de vuelo - Instrumentos para la navegación y control del avión",
  },
  // ... puedes agregar más piezas según sea necesario
  {
    id: 1,
    name: 'Piece 1',
    role: 'Role 1',
    status: 'Programado',
    descripcion: 'Descripcion 1',
    ubicacion: 'Ubicacion 1',
    // otros campos que necesites
  },
];

export { columns, pieces, statusOptions, data };
