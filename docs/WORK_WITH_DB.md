# Work with database


## Set up the DB

**Mind that MySQL v8.x is NOT SUPPORTED!**

### Install MySQL 5.7+:

- `sudo apt-get install mysql-server`
- `sudo mysql_secure_installation` (for Production).


### Create the user and the database:

- `mysql -uroot -p`;
- perform following commands one by one (replace `%%%` with actual password for `testmaster` user):
   ```sql
   use mysql;
   create user if not exists 'testmaster'@'localhost' identified by '%%%';
   grant all privileges on testmaster.* to 'testmaster'@'localhost' with grant option;
   flush privileges;
   exit;
   ```
- `npm run sqlz -- db:create`


## Work with DB

- `mysql -u testmaster -p -D testmaster` to open the MySQL CLI.
- `npm run sqlz -- db:create` to create the database via Sequelize.  
   This should be done at the very beginning.
- `npm run sqlz -- db:migrate` to run the Sequelize DB migration.
- `npm run sqlz -- db:migrate:undo --name 001-file-name` to undo it.
