# primefaces-template
Este proyecto fue generado con:
<br>
[![npm version](https://badge.fury.io/js/primeng.svg)](https://badge.fury.io/js/primeng)
[![Angular CLI](https://badgen.net/badge/angular/15.1.2/red)](https://badge.fury.io/js/primeng)
[![Primeng](https://badgen.net/badge/primeng/15.2.0/red)](https://badge.fury.io/js/primeng)

# Template para uso de primeng
Este template fue creado para usar el framework de primeng con angular 15

# Instalacion

Instalar Angular CLI globalmente:

```
npm install -g @angular/cli
```

Crear proyecto:

```
ng new [PROJECT NAME]
```

Instalar primeng:

```
npm install primeng --save
npm install primeicons --save
npm install @angular/animations --save
```

Agrege los estilos en el archivo angular.json:

```
...
"styles": [
    "node_modules/primeicons/primeicons.css",
    "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    ...
]
```

Agrege los componentes que necesite en el archivo app.module.ts:

```
imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    PasswordModule
  ]
```

Corra la aplicacion:

```
cd [PROJECT NAME]
ng serve -o
```

### Website

Visite [PrimeNG Website](https://www.primefaces.org/primeng/) para mas documentacion

[![Love Angular badge](https://img.shields.io/badge/angular-love-blue?logo=angular&angular=love)](https://www.github.com/angular/angular)

