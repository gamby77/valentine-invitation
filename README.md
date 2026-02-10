# 💕 Natasha's Valentine's Day Invitation

A beautiful, interactive Valentine's Day invitation website created with love. Features smooth animations, interactive elements, and a romantic aesthetic with pink, red, and white color schemes.

## Features ✨

- 🎨 Romantic and elegant design
- 💫 Smooth animations and transitions
- ❤️ Animated floating hearts
- 📸 Photo gallery section for memories
- 💌 Personalized messages and reasons
- 🎯 Interactive elements with hover effects
- 🎉 Confetti and heart explosions on proposal answer
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🚀 Ready for deployment on GitHub Pages
- 🎊 Easter egg: Press 'N' three times for a heart rain surprise!

## Project Structure

```
valentines-invitation/
├── index.html          # Main HTML file
├── styles.css          # Styling and animations
├── script.js           # Interactive elements and animations
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## How to Use Locally

1. **Navigate to the project folder:**
   ```bash
   cd valentines-invitation
   ```

2. **Open in your browser:**
   - Simply double-click `index.html` to open it directly, OR
   - Use a live server (recommended for best experience)

3. **Using VS Code Live Server:**
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"
   - Your browser will automatically open to `http://localhost:5500`

## Customization Guide

### Adding Your Photos

The photo gallery section has 4 placeholder areas. To add your photos:

1. Open `index.html` in a text editor
2. Find the `<section id="photos">` section
3. Replace the `.photo-placeholder` divs with actual images:

```html
<div class="photo-item">
    <img src="path/to/your/photo.jpg" alt="Our memory">
</div>
```

Or modify the CSS to use background images:

```css
.photo-item {
    background-image: url("path/to/your/photo.jpg");
    background-size: cover;
    background-position: center;
    width: 300px;
    height: 300px;
    border-radius: 15px;
}
```

### Customizing Text

Edit the following in `index.html`:

- **Title:** Change "Natasha" in the landing section
- **Reasons:** Modify the 12 reason cards with your personal reasons
- **Valentine Message:** Update the text in the "Why I Want You to Be My Valentine" section
- **Proposal Question:** Change the proposal text to your custom message

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-pink: #ff1493;    /* Main pink color */
    --primary-red: #e91e63;     /* Main red color */
    --soft-pink: #ffb6d9;       /* Light pink accent */
    --dark-red: #c2185b;        /* Dark red accent */
    --white: #ffffff;           /* White color */
    --text-dark: #5a3a5a;       /* Text color */
}
```

## Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub Repository:**
   ```bash
   # Initialize git in your project folder
   cd valentines-invitation
   git init
   
   # Add all files
   git add .
   
   # Make initial commit
   git commit -m "Initial Valentine's invitation"
   ```

2. **Push to GitHub:**
   - Create a new repository on GitHub (e.g., `valentines-invitation`)
   - Push your local repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/valentines-invitation.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "GitHub Pages" section
   - Select `main` branch as source
   - Your site will be available at: `https://YOUR_USERNAME.github.io/valentines-invitation/`

### Option 2: Vercel (Easy Deployment)

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Import your repository
   - Click "Deploy"

2. **Your site will be live instantly!**

### Option 3: Netlify

1. **Deploy with Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your project folder
   - Or connect your GitHub repository for automatic deployments

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Interactive Features Explained

### 1. **Smooth Scrolling Navigation**
   - Click buttons to smoothly scroll between sections
   - Progress bar at the top shows how far you've scrolled

### 2. **Reason Cards**
   - Hover to see elevation animation
   - Click for heartbeat animation

### 3. **Photo Gallery**
   - Hover for scaling effect
   - Click placeholders for instructions on adding photos

### 4. **Proposal Section**
   - Click "Ask the Question" to reveal the proposal
   - "Yes" button triggers confetti and heart explosions
   - "Maybe" button playfully moves away from clicks

### 5. **Easter Egg**
   - Press 'N' three times for a heart rain effect
   - Check console for hints!

## Tips for the Best Experience

1. **Open on a computer** first to see the full experience
2. **Use fullscreen** for the most romantic atmosphere
3. **Play background music** while sharing (optional)
4. **Share the deployed link** via text or social media
5. **Have the proposal section ready** when you share it with her 💕

## Troubleshooting

### Photos not showing?
- Check that the image path is correct
- Use absolute URLs for external images (e.g., from Imgur, Google Drive shared links)
- Ensure image files are in the same folder as `index.html`

### Animations not smooth?
- This is normal on some devices - animations are optimized for most browsers
- Try opening in a different browser
- Check that JavaScript is enabled

### Site not deploying to GitHub Pages?
- Ensure the repository is public
- Check that you've enabled GitHub Pages in settings
- Wait a few minutes for the deploy to complete

## File Size

This is a lightweight project with no external dependencies:
- HTML: ~8 KB
- CSS: ~20 KB
- JavaScript: ~8 KB
- **Total: ~36 KB** (Super fast loading!)

## Credits

Created with ❤️ for Natasha

---

**Made with love and lots of hearts! 💕💕💕**

Feel free to customize everything to make it uniquely yours!
