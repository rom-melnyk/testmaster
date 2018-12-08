# Work with database


## Set up the DB

**Mind that MySQL v8.x is NOT SUPPORTED!**

### Install MySQL 5.7+:

#### DEB-bases Linux

1. `sudo apt-get install mysql-server`
1. `sudo mysql_secure_installation` (for Production).
1. Run `sudo systemctl status mysql.service` to check the service health. Use other SystemD commands (`start`, `stop`, etc.) to handle MySQL as service.

#### Windows

1. Download appropriate archive (stick to version 5.7.x) from [official site](https://downloads.mysql.com/archives/community/).
1. Unpack it to `C:\` and go to the `C:\mysql-5.7.xx-winXX\bin`. Your exact folder name might be different.  
   This might require Administrator privileges.
1. Initialize the MySQL daemon: `mysqld --initialize-insecure --console`.  
   This inits the MySQL database with empty password for `root` user (so such approach should never be used for production but it's ok for development).
1. Run the daemon: `mysqld --console`. Make sure the daemon is up-and-running whinlst you are working.

#### MacOS

The setup is pretty same as Windows one (taking into acounting OS differences).  
Run `mysqld --user=$USER --initialize-insecure --console` to initialize the database. Makes usre the `$MYSQL_DIR/data` is writable for current user (or init the daemon with `--datadir=...` referring to a directory which is writable).


### Create the user and the database:

1. `mysql -uroot -p`. Might be without `-p` as well when you initialised the database with empty root password.
1. Perform following commands one by one (replace `%%%` with actual password for `testmaster` user):
   ```sql
   use mysql;
   create user if not exists 'testmaster'@'localhost' identified by '%%%';
   grant all privileges on testmaster.* to 'testmaster'@'localhost' with grant option;
   flush privileges;
   exit;
   ```
1. Run `npm run sqlz -- db:create` to create the database. Make sure `npm install` was run beforehand (this installs Sequelize and other packages).


## Work with DB

- `mysql -u testmaster -p -D testmaster` to open the MySQL CLI.
- `npm run sqlz -- db:create` to create the database via Sequelize.  
   This should be done at the very beginning.
- `npm run sqlz -- db:migrate` to run the Sequelize DB migration.
- `npm run sqlz -- db:migrate:undo --name 001-file-name` to undo it.
