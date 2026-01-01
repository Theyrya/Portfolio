# Quick Start & Deployment Guide

## 🚀 Getting Started Locally

1. **Open the portfolio**
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (install http-server first: npm install -g http-server)
     http-server
     
     # Using VS Code Live Server extension
     Right-click index.html → Open with Live Server
     ```

2. **Add your project images**
   - See `images/README.md` for detailed instructions
   - Place 5 images per project (1 thumbnail + 4 screenshots)

3. **Customize content**
   - Update personal info in `index.html`
   - Modify project details in `script.js`
   - Adjust colors in `style.css` if desired

## 📤 Deploy to GitHub Pages (FREE)

### Option 1: Using GitHub Website
1. Create a new repository on GitHub
2. Upload all files (index.html, style.css, script.js, images folder)
3. Go to repository **Settings** → **Pages**
4. Under "Source", select **main** branch and **/ (root)** folder
5. Click **Save**
6. Wait 1-2 minutes, then visit: `https://your-username.github.io/repository-name`

### Option 2: Using Git Command Line
```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/your-username/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings
```

## 🚀 Deploy to Vercel (FREE)

### Option 1: Using Vercel Website
1. Go to [vercel.com](https://vercel.com) and sign up
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository (or upload files)
4. Click **Deploy**
5. Your site is live! (Custom domain available)

### Option 2: Using Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to your project folder
cd Portfolio

# Deploy
vercel

# Follow the prompts (just press Enter for defaults)
```

## 🌐 Deploy to Netlify (FREE)

### Drag & Drop Method
1. Go to [netlify.com](https://www.netlify.com)
2. Sign up or log in
3. Drag your entire project folder to the Netlify Drop zone
4. Your site is live instantly!

### Git Integration
1. Push your code to GitHub
2. Go to Netlify → **"Add new site"** → **"Import from Git"**
3. Connect your GitHub account
4. Select your repository
5. Click **Deploy**
6. Automatic deployments on every push!

## ✅ Pre-Deployment Checklist

- [ ] All project images added to `images/` folders
- [ ] Personal information updated in `index.html`
- [ ] GitHub links updated in `index.html` and `script.js`
- [ ] LinkedIn and email links updated
- [ ] Project details customized in `script.js`
- [ ] Tested on mobile devices (use browser dev tools)
- [ ] All links work correctly
- [ ] No console errors (check browser console with F12)

## 🔧 Troubleshooting

### Images not showing
- Check that image filenames match exactly (case-sensitive)
- Verify images are in correct folders
- Check file extensions (.jpg vs .jpeg)

### Page not loading on GitHub Pages
- Make sure file is named `index.html` (lowercase)
- Check GitHub Pages settings are correct
- Wait a few minutes for deployment to complete

### Styling issues
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that `style.css` is in the same folder as `index.html`
- Verify no syntax errors in CSS

## 🎨 Optional Enhancements

### Add a favicon
```html
<!-- Add to <head> in index.html -->
<link rel="icon" type="image/png" href="favicon.png">
```

### Add Google Analytics
```html
<!-- Add before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-TRACKING-ID');
</script>
```

### Custom Domain
- **GitHub Pages**: Settings → Pages → Custom domain
- **Vercel/Netlify**: Project settings → Domains → Add custom domain

## 📱 Share Your Portfolio

Once deployed, share your portfolio link on:
- LinkedIn profile (Featured section)
- Resume/CV
- GitHub profile README
- Twitter/X bio
- Email signature
- Job applications

---

Need help? Check the main README.md or create an issue on GitHub!
