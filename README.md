# findgas-grapql-client

Client in **React** using **Create React App**, **apollo-boost**, **graphql** and browser geolocation for the findgas Graphql API from here:

<https://github.com/acaua/findgas-graphql>

# Downloading and usage instructions

1.  Clone repository

```
git clone https://github.com/acaua/findgas-graphql-client.git
```

2.  cd into server folder

```
cd findgas-graphql-client
```

3.  Install dependencias

```
npm install
```

3.  Create `.env` file and set API server REACT_APP_GRAPHQL_URI enviroment variable

```
REACT_APP_GRAPHQL_URI=http://localhost:4000
```

    The default server url is http://localhost:4000

5.  Start development server

```
npm start
```

6.  (optional) Build app

```
npm run build
```

7. (optional) Deploy app to now <https://zeit.co/now>

   Remember to change REACT_APP_API_SERVER enviroment to a live findgas server (see <https://github.com/acaua/findgas-graphql>)

```
cd build
now
```

8.  (mandatory) Enjoy! 😎
