// Placeholder JS file
console.log("Portfolio site loaded!");
// PAGE LOAD EVENT
window.addEventListener("load", () => {
  alert("Welcome to my portfolio!");
});


const body = document.querySelector("body");
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "🌙 Toggle Dark Mode";
darkModeBtn.style.position = "fixed";
darkModeBtn.style.top = "20px";
darkModeBtn.style.right = "20px";
darkModeBtn.style.padding = "10px";
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});


const style = document.createElement("style");
style.textContent = `
.dark-mode {
  background: #222;
  color: white;
}
.dark-mode header, .dark-mode footer {
  background: #111;
}
.dark-mode button {
  background: #555;
  color: #fff;
}
`;
document.head.appendChild(style);

const projectItems = document.querySelectorAll("ul li");
projectItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.background = "#ffe0b2";
  });
  item.addEventListener("mouseout", () => {
    item.style.background = "white";
  });
  item.addEventListener("dblclick", () => {
    item.textContent += " ✅";
  });
});

// KEYBOARD EVENTS
document.addEventListener("keydown", (e) => {
  console.log("Key down:", e.key);
});
document.addEventListener("keyup", (e) => {
  console.log("Key up:", e.key);
});

// FORM EVENTS
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
      alert("Please enter a valid email with @");
      e.preventDefault(); // stop submission
    } else {
      alert("Form submitted successfully!");
    }
  });

  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.style.borderColor = "blue";
    });
    input.addEventListener("blur", () => {
      input.style.borderColor = "#ccc";
    });
  });
}

window.addEventListener("resize", () => {
  console.log("Window resized!");
});
