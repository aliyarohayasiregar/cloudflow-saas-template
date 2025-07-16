# Troubleshooting Guide - CloudFlow SaaS Template

## 🚨 Mobile Menu Toggle Issues

### Problem: Mobile menu tidak muncul saat tombol hamburger diklik

#### Possible Causes & Solutions:

1. **JavaScript tidak dimuat dengan benar**
   ```html
   <!-- Pastikan script dimuat di akhir body -->
   <script src="assets/js/main.js"></script>
   ```

2. **ID elements tidak ditemukan**
   - Pastikan ID `mobile-menu-button` dan `mobile-menu` ada di HTML
   - Periksa tidak ada typo dalam ID

3. **CSS conflicts**
   - Pastikan class `hidden` tidak di-override oleh CSS lain
   - Periksa z-index mobile menu

4. **Font Awesome tidak dimuat**
   ```html
   <!-- Pastikan Font Awesome dimuat -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
   ```

#### Quick Fix:
```javascript
// Tambahkan ini di console browser untuk debug
console.log('Mobile button:', document.getElementById('mobile-menu-button'));
console.log('Mobile menu:', document.getElementById('mobile-menu'));
```

### Problem: Mobile menu muncul tapi tidak hilang

#### Solution:
```javascript
// Pastikan event listener berfungsi
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    console.log('Button clicked!');
    document.getElementById('mobile-menu').classList.toggle('hidden');
});
```

## 🎨 Styling Issues

### Problem: Gradient text tidak muncul

#### Solution:
```css
/* Pastikan browser support */
.bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

### Problem: Animasi tidak berjalan

#### Solution:
```css
/* Pastikan animasi diaktifkan */
@media (prefers-reduced-motion: no-preference) {
    .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
    }
}
```

## 📱 Responsive Issues

### Problem: Layout tidak responsive

#### Solution:
```html
<!-- Pastikan viewport meta tag ada -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Problem: Mobile menu tidak full width

#### Solution:
```css
/* Pastikan mobile menu full width */
#mobile-menu {
    width: 100%;
    left: 0;
    right: 0;
}
```

## 🔧 JavaScript Issues

### Problem: Console errors

#### Common Fixes:
1. **jQuery conflicts** - Template menggunakan vanilla JS
2. **Missing dependencies** - Pastikan semua CDN links berfungsi
3. **Syntax errors** - Periksa browser console

### Problem: Form tidak berfungsi

#### Solution:
```javascript
// Pastikan form validation berjalan
const form = document.querySelector('#contact form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
        // Add your form handling logic
    });
}
```

## 🌐 Browser Compatibility

### Problem: Tidak berfungsi di browser tertentu

#### Supported Browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

#### Fallback CSS:
```css
/* Fallback untuk browser lama */
@supports not (backdrop-filter: blur(10px)) {
    .backdrop-blur-md {
        background-color: rgba(255, 255, 255, 0.9);
    }
}
```

## 📧 Form Integration Issues

### Problem: Contact form tidak mengirim email

#### Solutions:

1. **Formspree Integration:**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Netlify Forms:**
   ```html
   <form name="contact" netlify>
   ```

3. **EmailJS:**
   ```javascript
   emailjs.send('service_id', 'template_id', formData);
   ```

## 🚀 Performance Issues

### Problem: Loading lambat

#### Solutions:
1. **Optimize images** - Gunakan WebP format
2. **Minify CSS/JS** - Jalankan build process
3. **Enable compression** - Gzip/Brotli
4. **Use CDN** - Untuk Font Awesome dan Google Fonts

### Problem: Lighthouse score rendah

#### Quick Fixes:
```html
<!-- Add meta description -->
<meta name="description" content="Your page description">

<!-- Add preload for critical resources -->
<link rel="preload" href="assets/css/style.css" as="style">
<link rel="preload" href="assets/js/main.js" as="script">
```

## 🔍 SEO Issues

### Problem: Meta tags tidak muncul

#### Solution:
```html
<!-- Pastikan semua meta tags ada -->
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your Description">
<meta property="og:image" content="path/to/image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

## 🛠️ Development Issues

### Problem: Live server tidak berjalan

#### Solutions:
```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js
npx serve .

# Menggunakan PHP
php -S localhost:8000
```

### Problem: Build process error

#### Solution:
```bash
# Install dependencies
npm install

# Run build
npm run build

# Check for errors
npm run lint
```

## 📞 Getting Help

### Debug Steps:
1. **Check browser console** - Lihat error messages
2. **Test in different browsers** - Identifikasi browser-specific issues
3. **Disable browser extensions** - Cek konflik dengan extensions
4. **Clear browser cache** - Refresh dengan Ctrl+F5

### Common Console Commands:
```javascript
// Test mobile menu
document.getElementById('mobile-menu-button').click();

// Check if elements exist
console.log(document.getElementById('mobile-menu'));

// Test smooth scrolling
document.querySelector('a[href="#features"]').click();
```

## 🔄 Version Compatibility

### Template Version: 1.2.0
- Tailwind CSS: 3.3.6+
- Font Awesome: 6.4.0+
- Node.js: 14.0.0+
- Modern browsers only

### Breaking Changes:
- Removed jQuery dependency in v1.1.0
- Updated to Tailwind CSS 3.x in v1.2.0
- Changed mobile menu structure in v1.2.0

---

**Need more help?** Check the main README.md or create an issue in the repository. 