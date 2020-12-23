console.log('Loaded service worker!');

self.addEventListener('push', ev => {
  console.log("goted data worker", ev)
  const data = ev.data;
  self.registration.showNotification(data.title, {
    body: 'Hello, World!',
    icon: 'http://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png'
  });
});
