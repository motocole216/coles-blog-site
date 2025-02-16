const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('.'));

// Handle blog posts JSON
app.get('/blog/posts.json', (req, res) => {
    try {
        const postsData = fs.readFileSync(path.join(__dirname, 'blog/posts.json'));
        res.json(JSON.parse(postsData));
    } catch (error) {
        console.error('Error reading posts.json:', error);
        res.status(500).json({ error: 'Failed to load blog posts' });
    }
});

// Handle markdown content
app.get('/content/blog/:post.md', (req, res) => {
    const postPath = path.join(__dirname, 'content/blog', `${req.params.post}.md`);
    if (fs.existsSync(postPath)) {
        res.sendFile(postPath);
    } else {
        res.status(404).send('Blog post not found');
    }
});

// Handle all other routes
app.get('*', (req, res) => {
    // If it's a blog post request
    if (req.path.startsWith('/blog/') && !req.path.endsWith('.json')) {
        const templatePath = path.join(__dirname, 'blog/template.html');
        if (fs.existsSync(templatePath)) {
            res.sendFile(templatePath);
        } else {
            res.status(404).send('Blog template not found');
        }
        return;
    }
    
    // For all other routes, serve index.html
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 