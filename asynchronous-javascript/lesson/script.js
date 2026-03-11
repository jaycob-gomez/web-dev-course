const message1 = "start";
const message2 = "processing...";
const message3 = "end";

console.log(message1);

setTimeout(() => {
  console.log(message2);
}, 2000);

console.log(message3);

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() > 0.5; // Randomly succeed or fail
      success ? resolve("fetched data") : reject("failed to fetch data");
    }, 2000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Async Await is a cleaner way of writing async code to make it look more like synchronous code

async function loadData() {
  // This is typically where you would use fetch()
  console.log("Fetching Data...");

  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => resolve("Data successfully loaded"), 3000);
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function fetchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    const user = await response.json();
    console.log("User:", user);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}
fetchUser();
loadData();
console.log("End of script");
