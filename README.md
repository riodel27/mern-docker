# MERN Docker Compose Demo

Containerized the api server and react client and created docker-compose to connect them.

---

Run `make build` from root to build containers
Run `make run` from root to run containers with docker-compose

---

**NOTE:** This is a development configuration where the react app is being served by a separate container. We would also want to create a production version where we build a static version of the react site and serve it with something like nginx.
