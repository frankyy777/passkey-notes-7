const msg = document.getElementById("message");

function show(text, color="lime") {
  msg.textContent = text;
  msg.style.color = color;
  setTimeout(() => msg.textContent=""), 3000;
}

function saveNote() {
  const k = document.getElementById("passkey").value.trim();
  const n = document.getElementById("note").value.trim();
  if (!k||!n) return show("Both fields are required","orange");
  db.ref("notes/"+k).once("value", s => {
    if (s.exists()) show("Passkey exists","red");
    else {
      db.ref("notes/"+k).set(n, () => show("Note saved!"));
    }
  });
}

function loadNote() {
  const k = document.getElementById("passkey").value.trim();
  if (!k) return show("Enter passkey","orange");
  db.ref("notes/"+k).once("value", s => {
    if (s.exists()) {
      document.getElementById("note").value = s.val();
      show("Note loaded!");
    } else show("No note found","red");
  });
}

function deleteNote() {
  const k = document.getElementById("passkey").value.trim();
  if (!k) return show("Enter passkey","orange");
  db.ref("notes/"+k).remove().then(() => {
    document.getElementById("note").value="";
    show("Note deleted");
  });
}
