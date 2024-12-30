import { Clerk } from "@clerk/clerk-js";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const fileManagerURL = import.meta.env.VITE_FILE_MANAGER_URL;

const clerk = new Clerk(clerkPubKey);
await clerk.load();

const createFileManagerLink = () => {
  const container = document.getElementById("app");

  // Create a new anchor element
  const link = document.createElement("a");

  // Set the href and text content for the link
  link.href = fileManagerURL;
  link.textContent = "File Manager";

  // Optionally, set other attributes (e.g., open in a new tab)
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  // Append the link to the div
  container.appendChild(link);
};

if (clerk.user) {
  document.getElementById("app").innerHTML = `
    <div id="user-button"></div>
  `;

  const userButtonDiv = document.getElementById("user-button");

  clerk.mountUserButton(userButtonDiv);
  createFileManagerLink();
} else {
  document.getElementById("app").innerHTML = `
    <div id="sign-in"></div>
  `;

  const signInDiv = document.getElementById("sign-in");

  clerk.mountSignIn(signInDiv);
}
