import session from 'express-session';
import express from 'express';
import cors from 'cors';
import expressGraphQL from 'express-graphql';
import graphqlM from 'graphql';
import supabaseJS from '@supabase/supabase-js';
import schema from './schema/index.js';
import populateDatabase from './populateDatabase.js';

const { printSchema } = graphqlM;

// We put objects in our database
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const { createClient } = supabaseJS;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
await populateDatabase(supabase);

console.log('Dumping GraphQL schema :\n');
console.log(printSchema(schema));

const { graphqlHTTP } = expressGraphQL;

const buildContext = (req) => {
  // Access the session to fetch the viewer…
  let viewer = null;
  if (req.session && req.session.viewer) {
    viewer = req.session.viewer;
  }

  return { req, viewer, supabase };
};

var app = express();
//var cors = require('cors');
app.use(cors());

app.use(
  session({
    secret: 'A super secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000, secure: false },
  })
);

app.use(
  '/graphql',
  
  graphqlHTTP((req) => ({
    schema,
    context: buildContext(req),
    graphiql: {
      defaultQuery: `
      {
        Trees(orderBy: {field: NAME, direction: DESC}, height:{min:0, max:40}) {
        	id
          name
          lifespan
          is_indoor
          category
          max_height
          plant_url
          color
      	}
        Shrubs {
          name
          max_height
          shrub_type

        }
        Herbs {
          name
          max_height
          calories

        }
        Plants{
          id
          name
        }
      }      
      `,
    },
  }))
);

app.use('/login', (req, res) => {
  req.session.viewer = { username: 'Spyl' };
  res.send('Bienvenue Spyl ! <a href="/graphql">Retourner sur GraphiQL.</a>');
});

app.use('/logout', (req, res) => {
  req.session.destroy();
  res.send('Aurevoir ! <a href="/graphql">Retourner sur GraphiQL.</a>');
});

app.use('/', (_, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send(`
    <a href="/graphql">GraphiQL</a>
    <a href="/login">Login</a>
    <a href="/logout">Logout</a>
  `);
});


app.use('/graphql', (_, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.listen(4000);
console.log('Running index at http://localhost:4000/');
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
