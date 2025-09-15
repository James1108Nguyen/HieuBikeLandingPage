# Image Assets for HieuBike Landing Page

This directory contains placeholders for images that should be added to complete the landing page.

## Required Images

### 1. Hero Background (hero-bg.jpg)

- **Size**: 1920x1080px
- **Description**: Modern electric scooter mechanic working on bike in professional workshop with tools and electrical components
- **Usage**: Background for main hero section
- **Style**: Professional, clean workshop environment, HieuBike branding visible

### 2. About Section Image (about-technician.jpg)

- **Size**: 600x400px
- **Description**: Professional technician in HieuBike uniform working on electric scooter in clean, modern workshop
- **Usage**: About section right column
- **Style**: Shows expertise and professionalism, good lighting

### 3. CTA Background (cta-bg.jpg)

- **Size**: 1920x600px
- **Description**: Emergency rescue scene with HieuBike technician helping customer on roadside with electric scooter
- **Usage**: Call-to-action section background
- **Style**: Action shot, shows service in progress, creates urgency

### 4. Service Icons (Optional)

- **Size**: 64x64px or vector format
- **Files**:
  - wrench-icon.svg (On-site repair)
  - truck-icon.svg (Towing service)
  - battery-icon.svg (Battery replacement)
  - gears-icon.svg (Comprehensive repair)
- **Style**: Line icons in HieuBike brand colors

### 5. Logo Files

- **hieubike-logo.png**: Main logo (transparent background)
- **hieubike-logo-white.png**: White version for dark backgrounds
- **favicon.ico**: 32x32px icon for browser tabs

## Image Optimization Guidelines

1. **Compress images** before upload (use tools like TinyPNG)
2. **Use WebP format** where possible for better performance
3. **Provide fallback** JPEG/PNG versions
4. **Include alt text** for accessibility
5. **Optimize for mobile** viewing

## CSS Implementation

Once images are added, update the CSS:

```css
/* Hero background */
.hero-background {
  background-image: url("../assets/images/hero-bg.jpg");
  background-size: cover;
  background-position: center;
}

/* CTA background */
.cta-background {
  background-image: url("../assets/images/cta-bg.jpg");
  background-size: cover;
  background-position: center;
}

/* About image */
.about-image img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-xl);
}
```

## Brand Guidelines

- **Colors**: Use HieuBike teal (#3AA6B9) prominently
- **Style**: Professional, clean, modern
- **Mood**: Trustworthy, reliable, efficient
- **Avoid**: Cluttered backgrounds, poor lighting, unprofessional appearance

---

**Note**: All placeholder comments in the HTML and CSS should be replaced with actual image implementations once files are available.
