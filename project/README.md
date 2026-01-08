# MMG Accounting Office - Professional Bilingual Website

A modern, responsive, and fully bilingual (Arabic/English) website for MMG Accounting Office.

## Features

- **Bilingual Support**: Complete Arabic and English content with instant language switching
- **RTL/LTR**: Automatic text direction switching (Right-to-Left for Arabic, Left-to-Right for English)
- **Responsive Design**: Perfect display on all devices (desktop, tablet, mobile)
- **Professional Design**: Clean and modern interface with professional colors
- **All Sections Included**:
  - Hero section with call-to-action
  - About Us (Vision, Mission, Values)
  - Services showcase
  - Certifications & Licenses (with placeholders)
  - Contact form with contact information
  - Professional footer

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Customization

See [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for detailed instructions on:
- Updating company information
- Changing colors and branding
- Adding your logo
- Adding certifications
- Configuring the contact form
- And much more!

## Quick Customization

All content is located in `src/App.tsx` in the `content` object (line 8).

### Update Company Name
Find and replace "MMG" with your company name in both English and Arabic sections.

### Update Contact Information
Edit the contact information in both language sections:
```typescript
contact: {
  info: {
    address: 'Your address',
    phone: 'Your phone',
    email: 'Your email'
  }
}
```

### Add Logo
1. Place logo in `/public` folder
2. Replace the text logo in the navigation (around line 200)

### Add Certifications
1. Place certification images in `/public` folder
2. Update the certifications section (around line 330)

## Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons

## Browser Support

Works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## File Structure

```
├── public/              # Static files (add your images here)
├── src/
│   ├── App.tsx         # Main application (all content here)
│   ├── index.css       # Global styles and fonts
│   └── main.tsx        # Application entry point
├── index.html          # HTML template
└── CUSTOMIZATION_GUIDE.md  # Detailed customization guide
```

## Fonts

- **English**: Inter (professional sans-serif)
- **Arabic**: Cairo (modern Arabic font)

Loaded from Google Fonts for optimal performance.

## Colors

Professional color scheme:
- **Primary**: Blue (#2563eb)
- **Dark**: Slate (#0f172a)
- **Background**: Gray (#f9fafb)
- **Text**: Slate (#0f172a)

## License

This project is created for MMG Accounting Office.

---

**Need help?** Check the [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for detailed instructions!
