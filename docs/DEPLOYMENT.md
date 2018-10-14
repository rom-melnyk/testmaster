# Deployment


## Main principles

1. The application responses to the [testmaster.melnyk.site](testmaster.melnyk.site) URL (both HTTP and HTTPS).
1. The server entry point is the NGINX set up in following way:  
   - redirect all the HTTP and HTTPS (`:80` and `:443`) on `testmaster.melnyk.site` to `localhost:9000`;
   - be in charge of HTTPS business (check certs).
1. The server app runs on port `:9000`. So [http://localhost:9000](http://localhost:9000) **can be used for local testing.**


## NGINX config

1. Install NGINX: [link](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/).
1. NGINX config resides in `/etc/nginx/sites-enabled`.
   1. First, remove the `default` config;
   1. Then copy the `server/testmaster.melnyk.site.nginx.conf` to that folder.
1. Update the `/etc/nginx/sites-enabled/testmaster.melnyk.site.nginx.conf`:  
   `ssl_certificate` and `ssl_certificate_key` should refer to proper files **(they must be accessible!).**
1. Restart the NGINX and check is it's up-and-running:  
   `sudo systemctl restart nginx.service && sudo systemctl status nginx.service`


## Server app config

Follow the classic ExpressJS app config listening to `:9000`. No HTTPS business should be done at app side.
