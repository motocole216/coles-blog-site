// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Markdown converter
function convertMarkdownToHtml(markdown) {
    return marked.parse(markdown);
}

// Function to fetch and render markdown content
async function loadMarkdownContent(url, targetElement) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdown = await response.text();
        const html = convertMarkdownToHtml(markdown);
        document.querySelector(targetElement).innerHTML = html;
    } catch (error) {
        console.error('Error loading markdown content:', error);
        document.querySelector(targetElement).innerHTML = '<p>Error loading content. Please try again later.</p>';
    }
}

// Function to load blog posts
async function loadBlogPosts() {
    try {
        const response = await fetch('/blog/posts.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const posts = data.posts || [];
        const container = document.getElementById('featured-posts-container');
        
        if (!container) return;

        const postElements = posts.slice(0, 6).map(post => `
            <article class="post-card">
                <div class="post-content">
                    <h3>${post.title}</h3>
                    <p class="post-date">${new Date(post.date).toLocaleDateString()}</p>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="/blog/${post.slug}" class="read-more">Read More →</a>
                </div>
            </article>
        `);

        container.innerHTML = postElements.join('');
    } catch (error) {
        console.error('Error loading blog posts:', error);
        const container = document.getElementById('featured-posts-container');
        if (container) {
            container.innerHTML = '<p>Error loading blog posts. Please try again later.</p>';
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Load blog posts on the home page
    loadBlogPosts();

    // Handle markdown content on other pages
    const currentPath = window.location.pathname;
    if (currentPath.startsWith('/blog/')) {
        const postSlug = currentPath.split('/').pop();
        loadMarkdownContent(`/content/blog/${postSlug}.md`, '#post-content');
    } else if (['/about', '/faq'].includes(currentPath)) {
        loadMarkdownContent(`/content${currentPath}.md`, '#page-content');
    }
}); 