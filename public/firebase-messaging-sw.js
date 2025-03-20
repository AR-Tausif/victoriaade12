importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyC_FJGMZEnWWLMI4YW0RAVA2Yj2mw2JPvA",
  authDomain: "vouched-13913.firebaseapp.com",
  projectId: "vouched-13913",
  storageBucket: "vouched-13913.firebasestorage.app",
  messagingSenderId: "1070835272861",
  appId: "1:1070835272861:web:c836a63c688f873cb39874",
  measurementId: "G-ZCCEQECCN8",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});