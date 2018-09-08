# TestMester

TestMaster helps managing tests.



# Architecture

- [DB structure](./docs/DB_STRUCTURE.md)
- [creds.json](./docs/CREDS.md)

## Server architecture

Server is a Express.js application. It serves static resources from the `client-compiled/` folder and provides the CRUD API.

## Client architecture

Client app is an Angular 6 app. The NG-CLI task compiles it into `client-compiled/` wherefrom it's served by Express.js app.



# Credits

**Author:** Roman Melnyk ([site](http://melnyk.site)).  
The app is developed for integration with ThePeopleGroup software development process.

