# Portfolio Website - Gaurav Jaiswal

A modern, minimal portfolio website inspired by [mistral.ai](https://mistral.ai), built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional design inspired by top-tier tech companies
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Subtle, professional animations using Framer Motion
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter cards, sitemap, and robots.txt
- **Performance Focused**: Optimized for fast load times and smooth interactions
- **Type-Safe**: Built with TypeScript for better developer experience
- **Accessible**: Semantic HTML and proper ARIA attributes

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory)
   ```bash
   cd port-3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── app/
│   └── App.tsx              # Main app component
├── components/
│   ├── layout/
│   │   ├── Container.tsx    # Page container component
│   │   └── Section.tsx      # Section wrapper component
│   ├── ui/
│   │   ├── Button.tsx       # Reusable button component
│   │   └── Heading.tsx      # Heading component with levels
│   └── common/
│       └── Footer.tsx      # Footer component
├── sections/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   ├── Experience.tsx     # Experience section
│   ├── Education.tsx      # Education section
│   └── Contact.tsx        # Contact section
├── theme/
│   ├── tokens.ts           # Design system tokens (shared)
│   └── react-native-theme.ts # React Native theme adapter
├── styles/
│   └── index.css           # Global styles with Tailwind
└── main.tsx                # Entry point
```

## 🎨 Design System

The project uses a shared design system defined in `src/theme/tokens.ts`. This ensures consistency across the web app and can be easily adapted for React Native (see `src/theme/react-native-theme.ts`).

### Color Palette
- **Primary**: Near-black (#0B0B0C) for text and emphasis
- **Background**: White/Off-white for clean surfaces
- **Accent**: Blue (#2563EB) for CTAs and links
- **Text**: Gray scale for hierarchy

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: Responsive typography scale
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## 📝 Customization

### Update Personal Information

1. **Hero Section** (`src/sections/Hero.tsx`)
   - Update name, role, and tagline
   - Modify micro intro line

2. **About Section** (`src/sections/About.tsx`)
   - Update professional summary
   - Add your story and values

3. **Skills Section** (`src/sections/Skills.tsx`)
   - Update skill categories and technologies
   - Modify the `skillCategories` array

4. **Projects Section** (`src/sections/Projects.tsx`)
   - Replace placeholder projects with your actual projects
   - Update GitHub and live demo links
   - Add project descriptions and tech stacks

5. **Experience Section** (`src/sections/Experience.tsx`)
   - Update work experience
   - Add achievements and responsibilities
   - Include relevant technologies

6. **Education Section** (`src/sections/Education.tsx`)
   - Update degree and institution
   - Add graduation year

7. **Contact Section** (`src/sections/Contact.tsx`)
   - Links are already configured with your information
   - Update email, LinkedIn, and GitHub links if needed

### Update Resume PDF

1. Add your resume PDF to the `public` folder as `resume.pdf`
2. The download button in the Hero section will automatically link to it

### Update SEO Meta Tags

Edit `index.html` to update:
- Title and description
- Open Graph tags
- Twitter Card tags
- Canonical URL

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

   Or connect your GitHub repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will auto-detect Vite and configure everything

3. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard
   - Update build command if needed: `npm run build`
   - Output directory: `dist`

### Netlify

1. **Install Netlify CLI** (optional)
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod
   ```

   Or connect via Netlify Dashboard:
   - Go to [netlify.com](https://netlify.com)
   - Add new site from Git
   - Select your repository
   - Build command: `npm run build`
   - Publish directory: `dist`

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**
   - Go to repository Settings > Pages
   - Source: `gh-pages` branch
   - Update `vite.config.ts` base path if needed

## 🔧 Performance Optimization

The project includes several performance optimizations:

- **Code Splitting**: Automatic with Vite
- **Lazy Loading**: Images and components can be lazy-loaded
- **Font Optimization**: Google Fonts with `display=swap`
- **Minification**: Automatic in production builds
- **Tree Shaking**: Unused code is automatically removed

### Lighthouse Best Practices

- Semantic HTML for better SEO
- Proper meta tags for social sharing
- Optimized images (add your own optimized images)
- Fast load times with Vite
- Accessible components

## 📱 React Native Support

The design system is structured to be easily ported to React Native. See `src/theme/react-native-theme.ts` for the React Native adapter with example components.

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from [mistral.ai](https://mistral.ai)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

---

Built with ❤️ by Gaurav Jaiswal
