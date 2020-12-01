const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HR70aFTmz52bZhtDwxUPvrNhVY8aYXB0iFgplDF6EypeDUzMfthzUqg4ROPsJlG1lxneSWbBXOmdvxzg3IfovXQ00kIkojV35');

// API

// App config
const app = express();

// -Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// -API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create',async (request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved boom for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })

    response.status(201).send({
        clientSecret: paymentIntent.clientSecret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-f1bbe/us-central1/api