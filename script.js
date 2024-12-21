

document.addEventListener("DOMContentLoaded", () => {
    const repoList = document.getElementById("repo-list");

    // Simulated repo data
    const repositories = [
        { name: "user/repo1", autoReview: false },
        { name: "user/repo2", autoReview: true },
        { name: "user/repo3", autoReview: false }
    ];

   
    repositories.forEach((repo, index) => {
        const repoDiv = document.createElement("div");
        repoDiv.className = "repo-item";
        repoDiv.innerHTML = `
            <span>${repo.name}</span>
            <label>
                <input type="checkbox" ${repo.autoReview ? "checked" : ""} 
                    onchange="toggleAutoReview(${index}, this.checked)">
                Auto Review
            </label>
        `;
        repoList.appendChild(repoDiv);
    });
});


function toggleAutoReview(index, isChecked) {
    console.log(`Repo ${index + 1}: Auto Review ${isChecked ? "enabled" : "disabled"}`);

   
    fetch("/api/update-auto-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repoIndex: index, autoReview: isChecked })
    });
}

// Logout function
function logout() {
    localStorage.clear();
    window.location.href = 'index.html';
}
