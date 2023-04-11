# Working with Legacy Systems Workshop


## Prerequisites

- Docker desktop installed
- VS Code or your favourite editor
- Some knowledge of docker, volumes and networking
- Some knowledge of SQL, Java, node, React and Javascript


# Summary

We're going to use docker compose and persistent volumes to show how the accretion of techniques for deploying a set of services means that you're always going to be chasing your own tail.

# Who is this for?

Anyone who doesn't live in the world where they think they know everything.

Aimed at developers, DevOps and architects and all those who have deployed and supported software in production. Anyone who has supported production code at any in time either written by themselves or by somebody else.

You'll need a familiarity with Docker, with relational databases, with python and java and Docker compose. Some troubleshooting of web applications is desirable.


# What will you learn?

- You'll learn that you're not alone.
- You'll learn that legacy is laid down in layers.
- You'll learn that even simple systems go wrong, quickly.
- You'll learn how hard it is to catch up with mistakes you made before

# How will you learn?

By trying out the exercises and talking to each other about the next steps you might take.





Docker compose resource:

https://github.com/docker/awesome-compose


IoT Backends:

https://github.com/Agile-IoT/awesome-open-iot



https://github.com/dog-gateway/dog


https://dog-gateway.github.io/rest-api.html


## Connecting to the MariDB instance from the Command Line

$ docker run -it --network some-network --rm mariadb mariadb -hsome-mariadb -uexample-user -p

$ docker run -it --network legacy-systems-thinking-workshop_private --rm mariadb mariadb -hlocalhost -uroot -port 9929 -p

For example this works:

$ docker run -it --network legacy-systems-thinking-workshop_private --rm mariadb:10.6.4-focal mariadb -h mareena-db -uroot -p

OR with database:

$ docker run -it --network legacy-systems-thinking-workshop_private --rm mariadb:10.6.4-focal mariadb -h mareena-db -D mareena_1 -uroot -p

OR with local mysql client (might need to modify docker compose to export port)

$ mysql -h 127.0.0.1 -u root --protocol tcp -P 3306 -p

# Open bash on the database server

You must use docker ps to find the running container id:

$ docker ps

and then start a BASH shell on it:

$ docker exec -it 39f5d29e001e /bin/bash

Then you can run database scripts:

HAVE TO DO THIS MANUALLY FOR THE MOMENT

# Docker Tips - clearing down all images and volumes

$ docker ps -a -q
$ docker rm -f $(docker ps -a -q)
$ docker volume rm `docker volume ls|awk '{print $2}'`


## Docker

How to connect from n8n in a docker container to our embedded docker compose mysql? Expose the port to the host and then use this in the host connection from n8n:

host.docker.internal




# DDD things to consider

What model do you see?

https://thedomaindrivendesign.io/anemic-model-x-rich-model/

How are the test?


# Power of Plugins (in VSCode)

Warnings and refactoring support from default plugins

- SonarLint

