const fs = require('fs');
const path = require('path');
const express = require('express');
var cors = require('cors');

const apiKey = "sk-"; // replace this with your OpenAI API key
const { Configuration, OpenAIApi } = require("openai");

// setup OpenAI configuration
const configuration = new Configuration({apiKey: apiKey});
const openai = new OpenAIApi(configuration);

// read system.txt file
// let systemMessage = fs.readFileSync(path.join(__dirname, './system.txt'), 'utf8');
const systemMessage = fs.readFileSync('../frontend/system.txt', 'utf-8'); // replace 'frontend' with your actual directory name


// setup express app
const app = express();

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// POST method route
app.post('/tarsumy', async function (req, res) {
    const messages = [
        {role: "system", content: systemMessage},
        {role: "user", content: req.body.message},
    ];

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.3,
        top_p: 0.9,
        max_tokens: 256,
        frequency_penalty: 0.3,
        messages: messages,
    });

    let tarsumy = completion.data.choices[0].message['content']
    console.log(tarsumy);
    res.json({"assistant": tarsumy});
});

app.listen(5500, () => {
    console.log('Server is running on port 5500');
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
