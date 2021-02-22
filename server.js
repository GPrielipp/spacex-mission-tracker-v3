const express = require('express');
const axios = require('axios');
const { graphqlHTTP } = require('express-graphql');

const PORT = process.env.PORT || 5000;
const app = express();

const schema = require('./schema');

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
