# Bootcamp App

![build status](https://github.com/FactoriaF5Code/rc2-5.5-proyecto-de-repaso/actions/workflows/maven-build.yml/badge.svg)


## Hecho con React + JS, Springboot + Java


### Cómo lanzar el proyecto

### Cómo lanzar la base de datos en local con Docker 

```
docker run --rm --name postgres-container -e POSTGRES_
USER=bootcamp_admin -e POSTGRES_PASSWORD=bootcamp_password -e POSTGRES_DB=bootcamp_db -p 5432:5432 -d postgres:latest
```