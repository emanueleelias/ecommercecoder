# BackPacks tienda de mochilas
## _Proyecto e-commerce de venta de mochilas urbanas, de notebook y para viajes._
> Proyecto final E-commerce, Curso React-Js de [CoderHouse](https://www.coderhouse.com/). Año 2021 


## Demo del Proyecto
- [BackPacks Tienda de mochilas](https://backpacks-ecommerce.netlify.app/)

## Contenido
- Este proyecto tiene una única rama, main.
- Proyecto de muestra para el curso y el portafolio de Emanuele Elias Daniel.

## Objetivos y Características
El objetvo del proyecto es crear una E-commerce, donde se venda algun tipo de producto, los productos de la tienda son traidos de una base de datos, en este caso `Firestores` de Firebase. Ademas la tienda debe ser una SPA (Single Page Application), es decir una aplicación de página única, ,donde se puede navegar entre distintas páginas, categorías de productos, etc. sin que la página se recargue.
En la página se va a poder los productos estan filtrados por categorias, se pueden ver las mochilas urbanas, mochilas para notebook y mochilas para viajar, ademas de poder ver todas las mochilas. Siguiendo con el flujo se puede ingresar al detalle de un producto, desde ahi seleccionar la cantidad de productos a comprar y finalizar la compra o seguir comprando. Si se seleccionar finalizar la compra nos dirige al carrito, desde el carrito al finalizar la compra se debe completar un formulario para terminar con la compra.

## Tenología
Este proyecto se está desarrolando en React-js utilizando vite (creador de proyectos):

- [React-Js](https://create-react-app.dev/) - La App fue creada con Create React App.
- Se utilizan librerías externas, las mismas se detallan en complementos.
- yarn como gestor de paquetes.

## Instalación
BackPacks requiere [Node.js](https://nodejs.org/en/) para ejecutarse.
Abra un terminal y utilize los siguientes comandos:

```sh
$ git clone https://github.com/emanueleelias/ecommercecoder.git
$ cd ecommercecoder
$ yarn //Para instalar todas las dependencias que se utilizaron en el proyecto.
$ yarn run dev  //Para iniciar el proyecto.
```

- Por mayor información [Click Aquí.](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository)

## Complementos
Las librerias utilizadas en el proyecto son las siguientes:

- `react-router-dom v6.0.2`: Es una librería que nos permite el enrutamiento y navegabilidad entre los diferentes componentes de nuestra SPA. Más información [aquí.](https://v5.reactrouter.com/web/guides/quick-start)
- `firebase v8.9.1`: Firebase de Google es una plataforma en la nube para facilidar el desarrollo de aplicaciones web y móviles, de todas las herramientas que tiene para ofrecer en este proyecto solo se utiliza la base de datos Firestore. Más información [aquí.](https://firebase.google.com/)
- `react-hook-form v7.20.4`: React Hook Form reduce la cantidad de código que necesita escribir mientras elimina las repeticiones de renderización innecesarias a la hora de trabajar con formularios. Más información [aquí.](https://react-hook-form.com/)
- `react-icons v4.3.1`: Incluye íconos populares para usar en proyectos de React fácilmente, utiliza importaciones de ES6 que permiten incluir solo los íconos que se usan en el proyecto. Más información [aquí.](http://react-icons.github.io/react-icons/)
- `react-table v7.7.0`: Sirve para crear y diseñar potentes experiencias de tablas de datos a la vez que se conserva el 100% de control sobre el marcado y los estilos, utilizada para mostrar la información en el carrito de compras. Más información [aquí.](https://react-table.tanstack.com/)
- `react-toastify v8.1.0`: Dependencia que facilita mostrar mensajes de los llamados toasty. Más información [aquí.](https://fkhadra.github.io/react-toastify/introduction)

## Principales componentes del proyecto

- `Home`: Compomente de bienvenida tipo landing page.
- `AboutUs`: Componente sobre nosotros, donde se detalla de que se trata BackPacks ecommerce.
- `Contact`: Componente con un pequeño formulario de contacto para los usuarios que quieran dejar un mensaje.
- `NavBar`: Es la barra de navegación, ademas en la misma se utiliza el componente `CartWidget`, encargado de representar el carrito de compras y dar acceso al mismo.
- `Footer`: Componente para representar el pie de página del sitio.
- `ItemListContainer`: Es el componente en donde se hace el pedido de los datos a la base de datos y se los muestra en `ItemList` e `Item`.
- `ItemDetailContainer`: Para mostrar la información del item seleccionado `ItemDetail`, en  dónde ingresaremos la cantidad y nos permite la opción de agregar al carrito `ItemCount`.
- `ItemDetailContainer`: Este componente filtra los detalles de un producto seleccionado por id de un producto desde la base de datos y luego los muestra en el componente `ItemDetail`, ademas dentro de ese mismo componente se encuentra el `ItemCount`, el cual muestra los controles para contar cuantos productos se quieren comprar.
- `getFirestone`: Componente con las credenciales necesarias para conectar con la base de datos Firestore de Firebase.
- `CartContext`: Este componente contiene toda la lógica para trabajar con los datos del carrito de compra.
- `Cart`: Devuelve una tabla que esta construida en el `TableCart` con los productos seleccionados para comprar, si no se selecciono ningún producto entonces se muestra el componente `CartClose`, el mismo funciona dinamicamente para cuando no hay productos en el carrito así como para cuando se termino de hacer una compra y se debe mostrar el id de la compra. 
- `CartForm`: Este componente se utiliza para finalizar una compra, completando los datos del comprados y generando una nueva orden de compra con un id de orden.
- `Button`: Es el componente con el boton y sus estilos utilizados a los largo de todo el sitio.
- `Spinner`: Componente utilizado para loading del ItemListContainer y el ItemDetailContainer.

## Imagenes del proyecto
**Inicio**
![home](https://i.ibb.co/qpB8qLt/inicio.gif)

**Productos**
![productos](https://i.ibb.co/528DvbH/Productos.gif)

**Detalles de un producto**
![item](https://i.ibb.co/h8CYTXD/Detalles-Producto.gif)

**Carrito Compra**
![carrito](https://i.ibb.co/4fCvMNX/carrito.gif)

**Contacto**
![contacto](https://i.ibb.co/nCfNS19/Contacto.gif)

**Sobre nosotros**
![Sobre Nosotros](https://i.ibb.co/7vvJVdh/Sobre-Nosotros.gif)

## Licencia
- [EDE](https://www.linkedin.com/in/eliasdanielemanuele/)
Emanuele, Elias Daniel


