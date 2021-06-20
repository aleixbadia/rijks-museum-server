# Rijk Museum - Server

Welcome to the Rijk Museum Art Gallery

## Description

This is the server side of the Rijk Museum project. It has three main functionalities: pre-fetch the Rijk-API so that we can cache the results, allow us to have an authentification system and also manage a favourite art objects list.

## Server Routes

| HTTP Method | URL                       | Request Body          | Description                                                           |
| ----------- | ------------------------- | --------------------- | --------------------------------------------------------------------- |
| POST        | `/auth/signup`            | { username, password} | Creates user with encrypted password and a new session with it        |
| POST        | `/auth/login`             | {username, password}  | Creates a new session with the user                                   |
| GET         | `/auth/logout`            | (empty)               | Deletes session of the current user                                   |
| GET         | `/auth/me`                | (empty)               | Returns the current user                                              |
| POST        | `/user/addToFavs`         | {artObjNum}           | Adds an art object to the list of favourites of the current user      |
| POST        | `/user/deleteFromFavs`    | {artObjNum}           | Deletes an art object from the list of favourites of the current user |
| GET         | `/artObj/getAllArtObj`    | (empty)               | Returns all the art objects in the database                           |
| GET         | `/artObj/getByObjNum/:id` | (empty)               | Returns one art objects of the database                               |
| GET         | `/artObj/getAllFavs`      | (empty)               | Returns all art objects in the favourites list of the current user    |

## Models & schemas

### Users model

```typescript
{
  username: {
    type: String,
    unique: true
  },
  password: String,
  favArtObj: [String]
}
```

### Art object model

```typescript
{
	links: {
    self: String,
    web: String,
  },
  id: String,
  objectNumber: String,
  title: String,
  hasImage: Boolean,
  principalOrFirstMaker: String,
  longTitle: String,
  showImage: Boolean,
  permitDownload: Boolean,
  webImage: {
    guid: String,
    offsetPercentageX: Number,
    offsetPercentageY: Number,
    width: Number,
    height: Number,
    url: String,
  },
  headerImage: {
    guid: String,
    offsetPercentageX: Number,
    offsetPercentageY: Number,
    width: Number,
    height: Number,
    url: String,
  },
  productionPlaces: [String],
  description: String,
}
```

## Git

Url to repository and to deployed project

[Repository Link](https://github.com/aleixbadia/rijks-museum-server)

