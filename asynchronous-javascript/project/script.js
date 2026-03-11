async function fetchData() {
  const loadingText = document.getElementById("loading");
  const dataText = document.getElementById("data");

  // Show loading message
  loadingText.style.display = "block";
  dataText.textContent = "";

  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => resolve("Data loaded successfully"), 3000);
    });
    loadingText.style.display = "none";
    // Show the data
    dataText.textContent = response;
  } catch (error) {
    loadingText.style.display = "none";
    dataText.textContent = "Error loading data";
  } finally {
    loadingText.style.display = "none";
  }
}
