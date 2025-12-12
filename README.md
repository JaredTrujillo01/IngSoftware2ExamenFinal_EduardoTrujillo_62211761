# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Ejecucion
ejecutar en terminal 1 por uno los siguientes comandos
- npm i
- npm run dev

# Explicacion

En esta refactorización apliqué el patrón Factory Method para quitar por completo la dependencia que tenía la UI con las clases concretas de los movimientos. Antes, el componente MovementList.jsx tenía que saber exactamente qué clase instanciar (Deposit, Withdrawal, Payment, etc.), y eso generaba bastante acoplamiento.

Con el cambio, la UI ahora solo trabaja con la abstracción Movement y delega toda la responsabilidad de creación al archivo MovementFactory.js. Esto ayuda bastante porque la lógica de instanciar cada tipo quedó centralizada en un solo lugar, lo que mejora la cohesión y hace que el código sea más fácil de mantener y extender sin romper nada en la interfaz.

# Pasos para Agregar un Nuevo Tipo sin Tocar la UI (OCP)

Seguir el principio de apertura/cierre fue más sencillo con la fábrica. Para agregar un nuevo tipo, el proceso queda así:

Crear una nueva clase en src/models/
Por ejemplo Chargeback.js, extendiendo de Movement y definiendo los métodos que necesita la UI:
getNetAmount(), getColor(), getIcon() y getTypeName().

Registrar la clase en la fábrica
Solo se agrega un nuevo caso en createMovement dentro de MovementFactory.js, indicando cómo construir el nuevo tipo.

Listo, sin tocar la UI
No es necesario modificar MovementList.jsx.
La fábrica se encarga de devolver la instancia correcta y la UI simplemente la usa como cualquier otro movimiento.
Para probarlo, basta con agregar un objeto con type: 'chargeback' en src/data/movements.js.

Con esto, el sistema demuestra ser extensible sin romper código existente, cumpliendo OCP como se pide.

