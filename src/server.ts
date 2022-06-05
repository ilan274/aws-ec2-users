import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_request, response) => {
  return response
    .status(200)
    .json({ message: 'Hello  World!' });
});

app.post('/', (request, response) => {
  return response.status(200).json({
    message: 'Success',
    data: request.body,
  });
});

app.listen(PORT, () =>
  console.log(`Running on port ${PORT}`)
);
