// Listen for 'Enter' key to trigger search
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        search();
    }
});

// Display the currently selected search engine
function displaySE() {
    const currentSE = document.getElementById("SE");
    const seId = currentSE[currentSE.selectedIndex].id;
    alert(`You are now searching on ${seId}`);
    return currentSE[currentSE.selectedIndex].value;
}

// Toggle display of the settings menu
function toggleSettings() {
    const settingsDiv = document.getElementById("settings");
    settingsDiv.style.display = settingsDiv.style.display === "none" ? "block" : "none";
}

// Perform the search based on user input
function search() {
    const searchbox = document.getElementById("input");
    const url = searchbox.value.trim();
    const engineval = document.getElementById("SE");
    const searchEngine = engineval[engineval.selectedIndex].value;

    // Redirect based on whether the input is a URL or a search term
    if (url.includes("://")) {
        window.location.href = url;
    } else if (url.includes(".")) {
        window.location.href = `https://${url}`;
    } else {
        window.location.href = `${searchEngine}${url}`;
    }

    // Clear the input field after searching
    searchbox.value = "";
}
