// Firebase config
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

function showNotification(message, success = true) {
  const box = document.getElementById('notification');
  box.innerText = message;
  box.className = 'notification ' + (success ? 'success' : 'error');
  box.style.display = 'block';
  setTimeout(() => {
    box.style.display = 'none';
  }, 3000);
}

function saveNote() {
  const key = document.getElementById("passkey").value.trim();
  const note = document.getElementById("note").value;
  if (!key) return showNotification("Passkey is required", false);

  db.ref("notes/" + key).once('value', (snapshot) => {
    if (snapshot.exists()) {
      showNotification("Passkey already exists, try another", false);
    } else {
      db.ref("notes/" + key).set({ note });
      showNotification("Note saved successfully");
    }
  });
}

function loadNote() {
  const key = document.getElementById("passkey").value.trim();
  if (!key) return showNotification("Passkey is required", false);

  db.ref("notes/" + key).once('value', (snapshot) => {
    if (snapshot.exists()) {
      document.getElementById("note").value = snapshot.val().note;
      showNotification("Note loaded");
    } else {
      showNotification("No note found", false);
    }
  });
}

function deleteNote() {
  const key = document.getElementById("passkey").value.trim();
  if (!key) return showNotification("Passkey is required", false);

  db.ref("notes/" + key).once('value', (snapshot) => {
    if (snapshot.exists()) {
      db.ref("notes/" + key).remove();
      document.getElementById("note").value = "";
      showNotification("Note deleted");
    } else {
      showNotification("No note found to delete", false);
    }
  });
}

// Hamburger Menu
document.getElementById("hamburger")?.addEventListener("click", () => {
  document.getElementById("mobile-links")?.classList.toggle("hidden");
});
