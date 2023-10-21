
const express = require("express");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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"
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());

// Route to serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/api/message", async (req, res) => {
  const message = req.body.message;

  let response;
  if (message.toLowerCase() === "what is your name ") {
    response = "My name is Salisu Ali and you can call me SalisComputerist";
  }
  
 else if(message === " who is salisu Ali ") {
  console.log("its working just fine");
    response = " SalisU Ali also known as saliscomputerist is really good boy and he always enjoy to study he was born in zaria.";
    
  } else {
    response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      temperature: 0,
      max_tokens: 1000
    });
    response = response.data.choices[0].text;
  }

  res.json({ response });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});


/*


//this is the code i can use for the index.html

const express = require("express");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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"
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());

// Route to serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Route to serve the index.html file directly
app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/api/message", async (req, res) => {
  const message = req.body.message;

  let response;
  if (message === "what is your name") {
    response = "My name is Salisu Ali and you can call me SalisComputerist.";
  } else {
    response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      temperature: 0,
      max_tokens: 1000
    });
    response = response.data.choices[0].text;
  }

  res.json({ response });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
*/