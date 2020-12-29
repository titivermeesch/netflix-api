# Unofficial netflix api

Project is currently not complete, a lot needs to be done.

The main idea is to have an abstract high-level API to interact with Netflix. Since Netflix does not have an official API, the way this server fetches data may change. NetflixAPI works for the netflix version deployed on 20/12/2020


## Getting started

1. Clone the repo
2. npm install
3. npm start (If you get issues with es6 imports, install a higher node version)
4. POST /auth/login

If you are developing and don't want to login every time, you may want to force the values cookies, buildIdentifier and authURL in the cache on serverboot.

## Features

- Login to netflix account
- Search for movies/series
- Basic low-level implementation for pathEvaluator. (High-level API needs to be build)


## REST API

Have a look in the docs to know more about each endpoint.
Each endpoint accepts JSON to return the data you need.
