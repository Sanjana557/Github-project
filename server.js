

const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve static files

// Simulated database
let repositories = [
    { name: "user/repo1", autoReview: false },
    { name: "user/repo2", autoReview: true },
    { name: "user/repo3", autoReview: false }
];

// API to update Auto Review status
app.post('/api/update-auto-review', (req, res) => {
    const { repoIndex, autoReview } = req.body;
    if (repositories[repoIndex] !== undefined) {
        repositories[repoIndex].autoReview = autoReview;
        console.log(`Updated: ${repositories[repoIndex].name} -> Auto Review: ${autoReview}`);
        res.status(200).send({ message: "Auto Review updated successfully!" });
    } else {
        res.status(400).send({ error: "Invalid repository index" });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
