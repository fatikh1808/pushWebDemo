const express = require('express');
const webpush = require('web-push');

const publicVapidKey = "BFGtJEJ9Gt1YE8k6Da3tZHh4WRU1vr-MUNpcGl4SID3JO-DzHty6pILXmq1T6QOzOB3AWSGw05UW8L6Ocg0fsgQ";
const privateVapidKey = "D2zmo9gwSW8uqOYgd7PXU4s75dC4NZaBggmuvS6KSYg";

// Replace with your email
webpush.setVapidDetails('mailto:mr.fotih@mail.ru', publicVapidKey, privateVapidKey);
const app = express();

app.use(require('body-parser').json());

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: 'test' });

  console.log(subscription);

  webpush.sendNotification(subscription, payload)
    .then(response => console.log(response))
    .catch(error => {
    console.error("webpushErrrorrr",error.stack);
  });
});

app.use(require('express-static')('./'));

app.listen(3000);
