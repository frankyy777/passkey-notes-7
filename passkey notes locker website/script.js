const firebaseConfig = {
  apiKey: "AIzaSyBgifIRQn7tGkw0nAym-idjWKRa5VX8WwU",
  authDomain: "passkey-notes-6fc0e.firebaseapp.com",
  databaseURL: "https://passkey-notes-6fc0e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "passkey-notes-6fc0e",
  storageBucket: "passkey-notes-6fc0e.appspot.com",
  messagingSenderId: "675522702817",
  appId: "1:675522702817:web:863d391c20d1ffdc06b6a0"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function notify(message, color = "#00d0ff") {
  const box = document.getElementById("notification");
  box.style.display = "block";
  box.style.backgroundColor = color;
  box.textContent = message;
  setTimeout(() => box.style.display = "none", 3000);
}

function saveNote() {
  const key = document.getElementById("passkey").value.trim();
  const note = document.getElementById("note").value.trim();
  if (!key || !note) return notify("Enter both passkey and note", "orange");

  db.ref("notes/" + key).once("value", snapshot => {
    if (snapshot.exists()) return notify("Passkey already exists!", "red");

    db.ref("notes/" + key).set({ note });
    notify("Note saved successfully!", "green");
  });
}

function loadNote() {
  const key = document.getElementById("passkey").value.trim();
  if (!key) return notify("Enter a passkey to load", "orange");

  db.ref("notes/" + key).once("value", snapshot => {
    if (snapshot.exists()) {
      document.getElementById("note").value = snapshot.val().note;
      notify("Note loaded!", "green");
    } else notify("Note not found!", "red");
  });
}

function deleteNote() {
  const key = document.getElementById("passkey").value.trim();
  if (!key) return notify("Enter a passkey to delete", "orange");

  db.ref("notes/" + key).remove().then(() => {
    document.getElementById("note").value = "";
    notify("Note deleted!", "green");
  });
}
