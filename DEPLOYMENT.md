# Deployment Guide

This guide covers deploying your professional portfolio website to various platforms.

## 🚀 Vercel Deployment (Recommended)

Vercel is the recommended platform for Next.js applications, offering seamless integration and automatic deployments.

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Repository pushed to GitHub

### Step-by-Step Deployment

1. **Prepare Your Repository**
   ```bash
   # Ensure your code is committed and pushed
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository

3. **Configure Environment Variables**
   In Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add the following variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site
   - You'll get a live URL (e.g., `your-project.vercel.app`)

5. **Custom Domain (Optional)**
   - In Project Settings → Domains
   - Add your custom domain
   - Configure DNS settings as instructed

### Automatic Deployments
- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Rollback capability for previous deployments

## 🌐 Netlify Deployment

Alternative deployment option with similar features to Vercel.

### Steps
1. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

2. **Environment Variables**
   Add the same EmailJS variables in Netlify dashboard

3. **Deploy**
   - Connect GitHub repository
   - Configure build settings
   - Deploy automatically

## 🐳 Docker Deployment

For containerized deployments or self-hosting.

### Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Commands
```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

## ☁️ AWS Deployment

For enterprise-level deployments with AWS services.

### Using AWS Amplify
1. **Connect Repository**
   - Open AWS Amplify Console
   - Connect GitHub repository
   - Configure build settings

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Environment Variables**
   Add EmailJS variables in Amplify console

### Using EC2 + PM2
```bash
# Install Node.js and PM2
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2

# Clone and setup
git clone your-repo
cd your-repo
npm install
npm run build

# Start with PM2
pm2 start npm --name "portfolio" -- start
pm2 startup
pm2 save
```

## 🔧 Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript errors resolved
- [ ] Build completes successfully (`npm run build`)
- [ ] No console errors in production build
- [ ] All images optimized and properly sized

### Content Review
- [ ] Professional bio updated and accurate
- [ ] All project links working
- [ ] Contact information current
- [ ] Resume/CV file updated and accessible

### Performance
- [ ] Lighthouse score > 90 for all metrics
- [ ] Images properly optimized
- [ ] No unused dependencies
- [ ] Bundle size optimized

### SEO & Metadata
- [ ] Page titles and descriptions updated
- [ ] Open Graph images set
- [ ] Structured data implemented
- [ ] Sitemap generated

### Functionality
- [ ] Contact form working with EmailJS
- [ ] All navigation links functional
- [ ] Dark/light mode toggle working
- [ ] Responsive design tested on multiple devices

## 🔍 Post-Deployment Testing

### Automated Testing
```bash
# Install testing dependencies
npm install -D @playwright/test

# Run tests
npx playwright test
```

### Manual Testing Checklist
- [ ] Homepage loads correctly
- [ ] All sections display properly
- [ ] Contact form submits successfully
- [ ] Download CV link works
- [ ] Social media links open correctly
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility

### Performance Monitoring
- [ ] Set up Google Analytics
- [ ] Configure Google Search Console
- [ ] Monitor Core Web Vitals
- [ ] Set up uptime monitoring

## 🚨 Troubleshooting

### Common Issues

**Build Failures**
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

**Environment Variables Not Working**
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Restart development server after adding variables
- Check variable names match exactly

**Images Not Loading**
- Verify image paths are correct
- Ensure images are in `public/` directory
- Check image file extensions and case sensitivity

**Contact Form Not Working**
- Verify EmailJS credentials
- Check CORS settings in EmailJS dashboard
- Test with browser developer tools

### Getting Help
- Check Next.js documentation
- Review deployment platform docs
- Check GitHub issues for similar problems
- Contact support if needed

## 📊 Monitoring & Analytics

### Google Analytics Setup
1. Create GA4 property
2. Add tracking code to `layout.tsx`
3. Configure goals and conversions

### Performance Monitoring
- Use Vercel Analytics (if using Vercel)
- Set up Google PageSpeed Insights monitoring
- Monitor Core Web Vitals regularly

### SEO Monitoring
- Submit sitemap to Google Search Console
- Monitor search rankings
- Track organic traffic growth

---

**Need help with deployment?** Contact [chiemezieagbo1@gmail.com](mailto:chiemezieagbo1@gmail.com)
