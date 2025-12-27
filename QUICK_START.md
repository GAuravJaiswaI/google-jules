# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

**Note**: If you encounter permission errors, you may need to run:
```bash
npm install --legacy-peer-deps
```

### 2. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Update Your Information

Before deploying, make sure to update:

#### Essential Updates:

1. **Hero Section** (`src/sections/Hero.tsx`)
   - Line 19: Update micro intro (role + stack)
   - Line 26: Your name is already set to "Gaurav Jaiswal"
   - Line 33: Update tagline

2. **About Section** (`src/sections/About.tsx`)
   - Lines 15-25: Replace with your actual professional summary

3. **Skills Section** (`src/sections/Skills.tsx`)
   - Lines 7-20: Update skill categories and technologies

4. **Projects Section** (`src/sections/Projects.tsx`)
   - Lines 18-45: Replace placeholder projects with your real projects
   - Update GitHub links (currently pointing to your GitHub)
   - Add live demo links if available

5. **Experience Section** (`src/sections/Experience.tsx`)
   - Lines 10-35: Update with your work experience
   - Add real achievements and responsibilities

6. **Education Section** (`src/sections/Education.tsx`)
   - Lines 10-15: Update degree, institution, and year

7. **Contact Section** (`src/sections/Contact.tsx`)
   - Already configured with your email, LinkedIn, and GitHub
   - Verify links are correct

#### SEO Updates:

1. **index.html**
   - Update title and meta description
   - Update Open Graph URLs (replace `gauravjaiswal.dev` with your domain)
   - Add your actual domain URL

2. **public/sitemap.xml**
   - Update URL to your actual domain

3. **public/robots.txt**
   - Update sitemap URL to your actual domain

### 4. Add Resume PDF

1. Place your resume PDF in the `public` folder
2. Name it `resume.pdf`
3. The download button will automatically link to it

### 5. Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### 6. Deploy

#### Option A: Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite - just click Deploy!

#### Option B: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Add new site from Git
4. Build command: `npm run build`
5. Publish directory: `dist`

## 📝 Important Notes

- **Resume PDF**: Add your resume to `public/resume.pdf` before deploying
- **Domain**: Update all URLs in `index.html` and `public/sitemap.xml` with your actual domain
- **Projects**: Replace placeholder projects with your actual work
- **Experience**: Add your real work experience and achievements
- **Images**: Consider adding an Open Graph image (`public/og-image.jpg`) for better social sharing

## 🎨 Customization Tips

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Fonts**: Change font in `src/index.css` (currently using Inter)
- **Animations**: Adjust animation timings in Framer Motion components
- **Layout**: Modify spacing and layout in individual section components

## ✅ Checklist Before Deploying

- [ ] Updated all personal information
- [ ] Added real projects
- [ ] Added work experience
- [ ] Added education details
- [ ] Added resume PDF
- [ ] Updated SEO meta tags
- [ ] Updated domain URLs
- [ ] Tested on mobile and desktop
- [ ] Verified all links work
- [ ] Built production version successfully

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Build errors?**
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`

**Path alias errors?**
- Ensure `@/` imports are working (check `vite.config.ts` and `tsconfig.app.json`)

---

Happy coding! 🚀

