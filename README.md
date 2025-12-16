# Pragma Catbreeds App 🐱

Aplicación móvil desarrollada con **Ionic + Angular** que consume la API pública de **TheCatAPI** para mostrar un listado de razas de gatos y su detalle.

Esta app fue desarrollada como parte de una **prueba técnica para la posición de Desarrollador Mobile Ionic**.

---

## 🚀 Tecnologías utilizadas

* **Ionic Framework 7**
* **Angular 20**
* **Capacitor 5**
* **TypeScript**
* **SCSS**
* **TheCatAPI**

---

## 📱 Funcionalidades

* Consumo de la API de TheCatAPI
* Listado de razas de gatos
* Buscador por nombre de la raza
* Pantalla de detalle con:

  * Imagen fija
  * Origen
  * Inteligencia
  * Adaptabilidad
  * Descripción
* Navegación entre pantallas
* Diseño responsive y enfocado a mobile

---

## 🔧 Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

* **Node.js** `v20.x` (LTS recomendado)
* **npm** `v10+`
* **Ionic CLI**

  ```bash
  npm install -g @ionic/cli
  ```
* **Angular CLI**

  ```bash
  npm install -g @angular/cli@20
  ```

---

## ▶️ Pasos para ejecutar la aplicación (Web)

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/jeffreeytaylor/pragma-catbreeds-app.git
   ```

2. Ingresar al proyecto:

   ```bash
   cd pragma-catbreeds-app
   ```

3. Instalar dependencias:

   ```bash
   npm install
   ```

4. Ejecutar la aplicación:

   ```bash
   ionic serve
   ```

5. Abrir en el navegador:

   ```
   http://localhost:8100
   ```

---

## 📲 Ejecutar en Android (opcional)

> ⚠️ Requiere tener **Android Studio** instalado y configurado.

1. Construir la aplicación:

   ```bash
   ionic build
   ```

2. Sincronizar con Android:

   ```bash
   npx cap sync android
   ```

3. Abrir el proyecto en Android Studio:

   ```bash
   npx cap open android
   ```

4. Ejecutar la app desde Android Studio en un emulador o dispositivo físico.

---

## 🔑 API utilizada

* **Endpoint:**
  `https://api.thecatapi.com/v1/breeds`

* **Documentación oficial:**
  [https://developers.thecatapi.com/](https://developers.thecatapi.com/)

La API Key se envía mediante el header `x-api-key` según lo indicado en la documentación.

---

## ✍️ Autor

**Jeffreey Taylor**
Desarrollador Mobile / Frontend
