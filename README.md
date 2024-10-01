# Setup 

This project using `pnpm` to manage `npm` dependency, this repo is used to demonstrate about micro-frontend a.k.a microservices in frontend.
In this you will see 2 project  :
    -   `host` folder is used for main container a.k.a host for other applications
    -   `todo-app` is called regular frontend app or remote app that will be used in container app.
    You can also add more app 

## How to run
-   Run `pnpm run dev:hosts` to run host container
-   Run `pnpm run build:remotes` to build remote apps. To enable hot reload you should change build method to `vite build --watch`
-   Run `pnpm run serve:remotes` to run all remote after build
