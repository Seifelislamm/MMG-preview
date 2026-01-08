# MMG Accounting Office - Website Customization Guide

Welcome to your professional bilingual company website! This guide will help you customize the content for your accounting office.

## 🎨 Features

- **Fully Bilingual**: Arabic and English support with instant language switching
- **RTL/LTR Support**: Automatic text direction switching for Arabic (right-to-left) and English (left-to-right)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Professional Design**: Clean, modern design with dark blue, gray, and white color scheme
- **Smooth Animations**: Smooth scrolling and hover effects
- **Contact Form**: Ready-to-use contact form for potential clients

## 📂 File Structure

The main file you'll edit is: `/src/App.tsx`

## 🔧 How to Customize Content

### 1. Company Information

Open `src/App.tsx` and locate the `content` object (starts around line 8).

### 2. Navigation Menu

To change navigation menu items, edit:
```typescript
nav: {
  home: 'Home',          // English version
  about: 'About Us',
  // ...
}
```

And the Arabic version:
```typescript
nav: {
  home: 'الرئيسية',      // Arabic version
  about: 'من نحن',
  // ...
}
```

### 3. Hero Section (Homepage Banner)

Edit the hero section content:
```typescript
hero: {
  title: 'MMG',                    // Company name
  subtitle: 'Accounting & Financial Services',
  description: 'Your description here...',
  cta: 'Contact Us'                // Call-to-action button
}
```

**Arabic version:**
```typescript
hero: {
  title: 'MMG',
  subtitle: 'خدمات المحاسبة والاستشارات المالية',
  description: 'وصفك هنا...',
  cta: 'اتصل بنا'
}
```

### 4. About Us Section

Edit vision, mission, and values:
```typescript
about: {
  title: 'About Us',
  vision: {
    title: 'Our Vision',
    text: 'Your vision statement here...'
  },
  mission: {
    title: 'Our Mission',
    text: 'Your mission statement here...'
  },
  values: {
    title: 'Our Values',
    items: [
      'Value 1',
      'Value 2',
      'Value 3',
      // Add or remove values as needed
    ]
  }
}
```

### 5. Services Section

Customize your services:
```typescript
services: {
  title: 'Our Services',
  subtitle: 'Comprehensive Financial Solutions',
  items: [
    {
      title: 'Service Name',
      description: 'Service description here...'
    },
    // Add more services by copying this block
  ]
}
```

**To add a new service:** Copy one of the service blocks and add it to the array:
```typescript
{
  title: 'New Service Name',
  description: 'New service description...'
},
```

### 6. Contact Information

Edit your contact details:
```typescript
contact: {
  info: {
    address: 'Your office address here',
    phone: '+966 XX XXX XXXX',        // Replace with your phone
    email: 'info@mmg-accounting.com'   // Replace with your email
  }
}
```

**Don't forget the Arabic version:**
```typescript
contact: {
  info: {
    address: 'عنوان مكتبك هنا',
    phone: '+966 XX XXX XXXX',
    email: 'info@mmg-accounting.com'
  }
}
```

### 7. Footer

Edit copyright information:
```typescript
footer: {
  rights: '© 2024 MMG Accounting Office. All rights reserved.'
}
```

## 🖼️ Adding Your Logo

Currently, the logo is text-based ("MMG"). To add an image logo:

1. Place your logo image in the `/public` folder (e.g., `logo.png`)
2. In `src/App.tsx`, find this line (around line 200):
```typescript
<span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
  MMG
</span>
```

3. Replace it with:
```typescript
<img src="/logo.png" alt="MMG Logo" className="h-10" />
```

## 📜 Adding Certifications

Find the Certifications section in `src/App.tsx` (around line 330).

Currently, there are 4 placeholder boxes. To add real certifications:

1. Place certification images in the `/public` folder
2. Replace the placeholder grid with your actual certifications:

```typescript
<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src="/cert1.jpg" alt="Certification 1" className="w-full h-auto" />
  </div>
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src="/cert2.jpg" alt="Certification 2" className="w-full h-auto" />
  </div>
  <!-- Add more certifications as needed -->
</div>
```

## 🎨 Changing Colors

The website uses a professional color scheme with dark blue and slate colors.

### Primary Colors (Blue):
- `bg-blue-600` - Main blue color
- `bg-blue-700` - Hover state
- `text-blue-400` - Light blue text

### Dark Colors (Slate):
- `bg-slate-900` - Dark background (navbar, footer)
- `bg-slate-800` - Slightly lighter dark
- `text-slate-900` - Dark text

To change colors throughout the site:
1. Use Find & Replace in your code editor
2. Replace `blue-600` with another Tailwind color (e.g., `cyan-600`, `teal-600`)
3. Example: Replace `bg-blue-600` with `bg-teal-600` for teal buttons

### Available Tailwind Colors:
- slate, gray, zinc, neutral, stone
- red, orange, amber, yellow, lime, green
- emerald, teal, cyan, sky, blue, indigo
- violet, purple, fuchsia, pink, rose

## 📱 Contact Form Functionality

Currently, the contact form shows an alert message. To make it functional:

### Option 1: Use Email Service (EmailJS)

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Install EmailJS: `npm install @emailjs/browser`
3. Replace the `handleSubmit` function (around line 184) with:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;

  try {
    await emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form,
      'YOUR_PUBLIC_KEY'
    );
    alert('Message sent successfully!');
    form.reset();
  } catch (error) {
    alert('Failed to send message. Please try again.');
  }
};
```

### Option 2: Use Backend API

If you have a backend API, replace the `handleSubmit` function with:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);

  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Message sent successfully!');
      (e.target as HTMLFormElement).reset();
    }
  } catch (error) {
    alert('Failed to send message. Please try again.');
  }
};
```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📝 SEO Optimization

Edit the HTML meta tags in `index.html`:

```html
<title>MMG - Accounting & Financial Services</title>
<meta name="description" content="Your SEO description here">
<meta name="keywords" content="accounting, auditing, tax consulting, Saudi Arabia">
```

## ✅ Checklist Before Launch

- [ ] Update all content in both English and Arabic
- [ ] Replace contact information (phone, email, address)
- [ ] Add your logo
- [ ] Add certification images
- [ ] Test contact form functionality
- [ ] Update footer copyright year
- [ ] Test on mobile devices
- [ ] Test language switching
- [ ] Check all links work
- [ ] Verify RTL/LTR text display

## 🆘 Need Help?

If you encounter any issues:
1. Make sure all text appears in both English and Arabic versions
2. Maintain the same structure when editing
3. Keep the commas and brackets correctly placed
4. Test frequently by running `npm run dev`

## 📞 Contact Form Fields

The contact form includes:
- Full Name (required)
- Email Address (required)
- Message (required)

All fields are validated automatically by the browser.

---

**Remember:** Every change you make in the English section should also be made in the Arabic section to maintain bilingual functionality!

Good luck with your website! 🎉
