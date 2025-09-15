# GitHub Pages Deployment Guide

## Quick Deployment Steps

1. **Create GitHub Repository**

   ```bash
   # On GitHub, create a new repository (e.g., 'hieubike-landing')
   # Make it public for GitHub Pages to work with free account
   ```

2. **Upload Files**

   - Upload the entire `hieubike-landing` folder contents to the repository
   - Make sure `index.html` is in the root directory

3. **Enable GitHub Pages**

   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

4. **Access Your Site**
   - Your site will be available at: `https://username.github.io/repository-name`
   - Example: `https://james1108nguyen.github.io/hieubike-landing`

## Alternative: Custom Domain

If you have a custom domain:

1. **Add CNAME file**

   ```
   yourdomain.com
   ```

2. **Configure DNS**
   - Add CNAME record pointing to `username.github.io`
   - Or use A records pointing to GitHub IPs

## File Structure Check

Ensure your repository has this structure:

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── images/
└── README.md
```

## Testing Before Deployment

1. **Test locally** by opening `index.html` in a browser
2. **Check responsive design** using browser dev tools
3. **Verify all links** work properly
4. **Test contact buttons** (phone/Zalo links)

## Performance Optimization

Before deployment, consider:

1. **Minify CSS/JS** (optional)
2. **Optimize images** (compress, convert to WebP)
3. **Add actual favicon**
4. **Test page speed** with Google PageSpeed Insights

## SEO Configuration

1. **Update meta tags** with actual domain
2. **Submit to Google Search Console**
3. **Create sitemap.xml** if needed
4. **Verify structured data**

## Maintenance

- **Monitor site** for any issues
- **Update contact information** as needed
- **Add Google Analytics** for tracking
- **Regular backups** of the repository

---

**Result**: Professional landing page ready for client preview at a custom GitHub Pages URL.
