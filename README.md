# Personal Blog Site

A simple, modern, and interactive blog site built with vanilla HTML, CSS, and JavaScript. This site uses markdown for content management and requires no complex frameworks.

## Features

- 🎨 Modern, colorful, and responsive design
- 📝 Markdown support for blog posts and pages
- 🚀 Fast and lightweight
- 📱 Mobile-friendly
- 🔍 Simple content management
- ⚡ No framework dependencies

## Directory Structure

```
.
├── index.html              # Landing page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── blog/
│   ├── template.html      # Blog post template
│   └── posts.json         # Blog posts metadata
├── content/
│   ├── blog/             # Blog post markdown files
│   ├── about.md          # About page content
│   └── faq.md            # FAQ page content
└── README.md
```

## How to Add a New Blog Post

1. Create a new markdown file in `content/blog/` with your post content
2. Add the post metadata to `blog/posts.json`
3. Follow the markdown format from the example post

## Running the Site

You can serve the site using any static file server. For development, you can use Python's built-in server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Writing Posts

Posts are written in markdown format. Here's a basic template:

```markdown
# Post Title

*Published on [Date]*

Your content here...

## Subheadings

- Bullet points
- More points

1. Numbered lists
2. More numbers

## Code Examples

\```javascript
// Your code here
\```
```

## Customization

- Edit `css/style.css` to change the site's appearance
- Modify `index.html` to update the landing page
- Update social media links in the footer
- Customize the color scheme by editing the CSS variables in `:root`

## Dependencies

- [Marked.js](https://marked.js.org/) for markdown parsing
- [Font Awesome](https://fontawesome.com/) for icons

## License

MIT License

