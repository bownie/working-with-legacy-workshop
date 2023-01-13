#!/bin/bash

# build the mareena database with initial data
#
/usr/bin/mariadb --user=root --password=`cat /run/secrets/db-password` -D mareena_1 < build.sql