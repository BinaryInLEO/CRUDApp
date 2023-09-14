# CRUDApp
# cd in server. Type "npm install" to install dependencies
# spin up docker containing postgres
# docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
# docker ps -a
# docker exec -it <PSQL-Container-ID> bash
# psql -U postgres
# CREATE DATABASE inventory
# 
# after spinning up the docker container cd out of server
# cd into client. Type "npm install" and then "npm start"




