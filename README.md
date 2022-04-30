# Piupiuwer Api
A twitter-like social network api. This REST api was created with the intention of training and experimenting with backend concepts, specially prisma ORM.
Stack used:
- Node.js
- Express
- Prisma
- PostgreSQL

## Features
- User registration
- Authentication with jwt token
- Create Users and "Pius" (~Tweets)
- Follow Users, Like and Favorite Pius
- Swagger api documentation.

## Database Relationship
The Api was made with the following entity relationship in mind:
![Entity Relationship piupiuwer](https://user-images.githubusercontent.com/85271074/166118222-6a27bc17-0c3d-405b-90dc-389f82acf888.svg)

## Api
Documentation can be found on `/docs` path.
It is also possible to use applications, like Insomnia. Just import the `insomnia-requests.json` file.

## How to Run Locally
- Clone the repository
- Set up your database on `src/.env`
```
DATABASE_URL="postgresql://container:mypass@localhost:5432/myDatabase?schema=public"
```
- To start the api locally run:
```
yarn dev
```

## Prisma Functionalities
Interesting functionalities offered by Prisma:
- To create new migrations after changing models in `prisma/schema.prisma`:
```
yarn prisma migrate dev
```

- To check for new changes on `prisma/schema.prisma` and update database entities:
```
yarn prisma generate
```

- To quickly check up on database data:
```
yarn prisma studio
```

## Plans
- Set up Domain Driven Design on api.
- Finish Swagger docs.
