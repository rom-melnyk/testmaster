# Deployment


## Main principles

1. The application responses to the [testmaster.melnyk.site](testmaster.melnyk.site) URL (both HTTP and HTTPS).
1. The server entry point is the NGINX set up in following way:  
   - redirect all the HTTP and HTTPS (`:80` and `:443`) on `testmaster.melnyk.site` to `localhost:9000`;
   - be in charge of HTTPS business (check certs).
1. The server app runs on port `:9000`.


## NGINX config (``)

1. Install NGINX: [link](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/).
1. Config in `/etc/nginx/nginx.conf`
    ```
    TBD
    ```


## Server app config

Follow the classic ExpressJS app config listening to `:9000`. No HTTPS business should be done at app side.
