# TestMester

TestMaster helps managing tests.



# Architecture

## DB structure

- test\_cases
   - id,
   - title,
   - description,
- test\_suites
   - id,
   - title,
   - description,
   - test\_cases (JSON, array),
- test\_plans
   - id,
   - title,
   - description,
   - created\_date,
   - test\_suits (JSON array),
   - test\_cases,
- regression\_cycles  
   **TBD!**
   - id,
   - title,
   - description,
   - created\_date,
   - test\_suits (JSON array),
   - test\_cases,
- test\_results
   - id,
   - test\_case\_id,
   - test\_suite\_id,
   - test\_plan\_id,
   - regression\_cycle\_id,
- comments
   - id,
   - author,
   - date,
   - payload,
   - destination (determining where should the comment go),
   - destination_id,

## Server architecture

Server is a Express.js application. It serves static resources from the `client-compiled/` folder and provides the CRUD API.

## Client architecture

Client app is an Angular 6 app. The NG-CLI task compiles it into `client-compiled/` wherefrom it's served by Express.js app.



# Credits

**Author:** Roman Melnyk ([site](http://melnyk.site)).  
The app is developed for integration with ThePeopleGroup software development process.

