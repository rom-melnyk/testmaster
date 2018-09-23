# `server/config.json` structure

The file contains sensitive info so it's not under version control.  
Create it manually before starting the server.

```json
{
  "database": {
    "host": "...",
    "database": "...",
    "user": "...",
    "password": "...",
    "port": ...,
    "dialect": "mysql"
  },
  attachmentsDir: "/tmp/attachments"
}
```
