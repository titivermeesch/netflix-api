# Unofficial netflix api

Project is currently not complete, a lot needs to be done.

The main idea is to have an abstract high-level API to interact with Netflix. Since Netflix does not have an official API, the way this server fetches data may change. NetflixAPI works for the netflix version deployed on 20/12/2020

## Features

- Login to netflix account
- Basic low-level implementation for pathEvaluator. (High-level API needs to be build)

## REST API

- POST /auth/login - login to platform. (Right now server stores cookie, which means that it's not yet possible to be used by more than 1 person).
- GET /viewedItems/ - Get latest viewed items on Netflix (only shows first 20 right now)
- GET /evaluator/ - Gets basic information about a hardcoded serie
