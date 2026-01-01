# Dhairya Rana - Software Developer Portfolio

A clean, modern, and fully responsive portfolio website for Dhairya Rana, showcasing software development projects and skills.

## 🚀 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Project Showcase**: Three featured projects with detailed modal views
- **Image Galleries**: 4-image galleries for each project
- **Smooth Navigation**: Seamless scrolling and mobile-friendly hamburger menu
- **Contact Links**: Direct links to GitHub, LinkedIn, and email
- **Fast & Lightweight**: Pure HTML, CSS, and JavaScript - no frameworks required
- **Recruiter-Friendly**: Professional presentation suitable for internship and junior developer roles

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── script.js           # Interactive functionality and project data
├── images/             # Project images folder
│   ├── README.md       # Image placement instructions
│   ├── car-rental/
│   │   ├── thumbnail.jpg
│   │   ├── screenshot1.jpg
│   │   ├── screenshot2.jpg
│   │   ├── screenshot3.jpg
│   │   └── screenshot4.jpg
│   ├── course-registration/
│   │   ├── thumbnail.jpg
│   │   ├── screenshot1.jpg
│   │   ├── screenshot2.jpg
│   │   ├── screenshot3.jpg
│   │   └── screenshot4.jpg
│   └── studio-rental/
│       ├── thumbnail.jpg
│       ├── screenshot1.jpg
│       ├── screenshot2.jpg
│       ├── screenshot3.jpg
│       └── screenshot4.jpg
└── README.md           # This file
```

## 🎨 Sections

### Home
- Name and title introduction
- Professional tagline
- Call-to-action buttons

### Projects
- Three project cards with hover effects
- Click to view detailed project information
- Tech stack badges
- Thumbnail previews

### Project Details (Modal)
Each project modal includes:
- Project title and overview
- Tech stack
- 4-image gallery
- Key features list
- GitHub repository link
- Optional live demo link

### About
- Professional summary
- Student background
- Areas of interest and expertise

### Contact
- GitHub profile link
- LinkedIn profile link
- Email contact

## 🖼️ Adding Your Project Images

1. Navigate to the `images/` folder
2. For each project folder (`car-rental`, `course-registration`, `studio-rental`):
   - Add `thumbnail.jpg` (displays on project card)
   - Add `screenshot1.jpg` through `screenshot4.jpg` (displays in modal gallery)
3. Recommended image specifications:
   - Format: JPG or PNG
   - Size: 1200x800px or similar 3:2 aspect ratio
   - Optimized for web (compressed but clear)

### Temporary Placeholders
If you don't have images yet, you can use placeholder services:
```
https://placehold.co/1200x800/667eea/white?text=Your+Project+Name
```

## 🚀 Deployment

### GitHub Pages
1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select branch (main/master) and root folder
4. Save and wait for deployment
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts
4. Your site will be deployed instantly

### Netlify
1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository for automatic deployments

## 🛠️ Customization

### Update Personal Information
Edit `index.html`:
- Line 33-35: Home section name and title
- Line 36: Professional tagline
- Lines 88-102: About section content
- Lines 113-132: Contact links

### Update Projects
Edit `script.js` (lines 2-62):
- Modify project data in the `projects` object
- Update titles, descriptions, tech stacks
- Change GitHub links
- Add live demo links if available

### Change Color Scheme
Edit `style.css` (lines 9-20):
- Modify CSS variables in `:root`
- `--primary-color`: Main accent color
- `--text-primary`: Main text color
- `--bg-primary`: Background color

### Modify Gradient
Edit `style.css` (line 149):
- Change the home section gradient colors

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ✨ Key Technologies

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **CSS Variables**: Easy theme customization
- **CSS Animations**: Smooth transitions and effects

## 🎯 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Free to use and modify for personal portfolios.

## 👤 Contact

**Dhairya Rana**
- GitHub: [@Theyrya](https://github.com/Theyrya)
- LinkedIn: [Dhairya Rana](https://www.linkedin.com/in/dhairya-rana-b809a3323/)
- Email: cloudofdhairya@gmail.com

---

Built with ❤️ for showcasing amazing projects to potential employers and recruiters.
