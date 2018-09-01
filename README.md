# TestMester

TestMaster helps managing tests.



# Architecture

## DB structure

- test\_cases
   - id,
   - title,
   - description
- test\_suites
   - id,
   - title,
   - description,
   - test\_cases
- test\_plans
- regression\_cycles
- test\_results

## Server architecture

Server is a Express.js application. It serves static resources from the `compiled/` folder and provides the CRUD API.

## Client architecture

Client app is an Angular 6 app.



# Credits

**Author:** Roman Melnyk [site](http://melnyk.site).  
The app is developed for integration with ThePeopleGroup software development process.

