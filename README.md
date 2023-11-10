# TrailerplanRaceNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




ng g environments

sudo apt-get --yes install nginx
sudo apt-get update

sudo apt-get update
sudo apt-get install nginx
sudo systemctl start nginx  to start th nginx service
sudo systemctl enable nginx to start the service nginx automatically

Synchronizing state of nginx.service with SysV service script with /lib/systemd/systemd-sysv-install.
Executing: /lib/systemd/systemd-sysv-install enable nginx

bsui@yoda:trailerplan-race-ng(main)$ systemctl status nginx
● nginx.service - A high performance web server and a reverse proxy server
Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
Active: active (running) since Fri 2023-11-10 15:25:25 CET; 8min ago
Docs: man:nginx(8)
Main PID: 30557 (nginx)
Tasks: 13 (limit: 37938)
Memory: 12.4M
CGroup: /system.slice/nginx.service
├─30557 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
├─30558 nginx: worker process
├─30559 nginx: worker process
├─30560 nginx: worker process
├─30561 nginx: worker process
├─30562 nginx: worker process
├─30563 nginx: worker process
├─30564 nginx: worker process
├─30565 nginx: worker process
├─30566 nginx: worker process
├─30567 nginx: worker process
├─30568 nginx: worker process
└─30569 nginx: worker process

nov. 10 15:25:25 yoda systemd[1]: Starting A high performance web server and a reverse proxy server...
nov. 10 15:25:25 yoda systemd[1]: Started A high performance web server and a reverse proxy server.

nginx -v
nginx version: nginx/1.18.0 (Ubuntu)


bsui@yoda:trailerplan-race-ng(main)$ npm install @angular/material @angular/cdk @angular/animations --save

up to date, audited 1208 packages in 2s

142 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities

```shell
user@host:trailerplan-race-ng(main)$ npm init @angular trailerplan-event-ng
user@host:trailerplan-race-ng(main)$ npm install json-server --save-dev
user@host:trailerplan-race-ng(main)$ npm install @angular/material @angular/cdk @angular/animations --save  

user@host:trailerplan-race-ng(main)$ ng add @angular/material
Skipping installation: Package already installed
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? No
? Include the Angular animations module? Include and enable animations
UPDATE package.json (1474 bytes)
✔ Packages installed successfully.
UPDATE src/app/app.module.ts (423 bytes)
UPDATE angular.json (3677 bytes)
UPDATE src/index.html (562 bytes)
UPDATE src/styles.css (181 bytes)
```

install json-server, talwind css, tailwind settings
```shell
user@host:trailerplan-race-ng(main)$ npm i json-server --save-dev
user@host:trailerplan-race-ng(main)$ npm install -D tailwindcss postcss autoprefixer
user@host:trailerplan-race-ng(main)$ npx tailwindcss init
```

generate and update the main components :
```shell
user@host:trailerplan-race-ng(main)$ ng g c components/mainpage
user@host:trailerplan-race-ng(main)$ ng g c components/footer
user@host:trailerplan-race-ng(main)$ ng g c components/header
```

ng g m modules/general/home
ng g c modules/general/home

ng g m modules/general/contact --routing  --module=app
ng g m modules/general/login --routing  --module=app
ng g m modules/general/signup --routing  --module=app
ng g m modules/general/about --routing  --module=app
ng g m components/header --routing  --module=app
ng g m components/footer --routing  --module=app



