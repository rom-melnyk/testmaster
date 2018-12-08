# TestMester

TestMaster helps managing tests.



# Architecture

- [DB structure](./docs/DB_STRUCTURE.md)
- [config.json](docs/CONFIG.md)

## Server architecture

Server is a Express.js application. It serves static resources from the `client-compiled/` folder and provides the CRUD API.

The app requires MySQL server to be up-and-running.

## Client architecture

Client app is an Angular 6 app. The NG-CLI task compiles it into `client-compiled/` wherefrom it's served by Express.js app.



# Dev process

## Setup

1. Make sure the MySQL server is installed.
1. Create the database. Check the [DB manual file](docs/WORK_WITH_DB.md).
1. Clone the project and run `npm install` in the project folder to install dependencies.
1. Create `server/config.json` (see [appropriate doc](docs/CONFIG.md)).  
   Make sure field values correspond to what you entered right before.
1. Apply DB changes:
   - `npm run sqlz -- db:create` at the very beginning of the project,
   - `npm run sqlz -- db:migrate` to apply DB updates (this should be done at the very beginning as well).  
      `npm run sqlz -- db:migrate:undo` to undo last migration.

## Run

1. Run server: `npm run server`
1. Run client watch-and-compile: `npm run client:dev`
1. Visit [http://localhost:8080](http://localhost:8080).

## Utils

- NG command: `npm run ng`. Add some params after `--` if you need more, e.g., `npm run ng -- e2e`.
- [Sequelize-CLI](http://docs.sequelizejs.com/manual/tutorial/migrations.html): `npm run sqlz` (see "Setup / Apply DB changes" chapter for some examples).



# Credits

**Author:** Roman Melnyk ([site](http://melnyk.site)).  
The app is developed for integration with ThePeopleGroup software development process.
