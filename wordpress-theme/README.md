# ZINAIA WordPress Theme - Compressed

This is a pure HTML/CSS/JavaScript WordPress-ready theme for the ZINAIA luxury skincare brand.

## File Structure
```
wordpress-theme/
├── index.html              # Homepage with hero slider
├── shop.html               # Product listing
├── product.html            # Single product page
├── about.html              # About company
├── contact.html            # Contact page
├── routines.html           # Skincare routines
├── faqs.html               # FAQs page
├── css/
│   ├── style.css           # Full CSS (3,691 lines)
│   └── style.min.css       # Minified CSS (~85% reduction)
└── js/
    ├── main.js             # Full JavaScript (727 lines)
    └── main.min.js         # Minified JS (~75% reduction)
```

## Performance Optimizations

### CSS Compression
- **Original:** 3,691 lines (~110KB)
- **Minified:** Removed comments, whitespace, and redundant declarations
- **Reduction:** ~85% size reduction
- **Usage:** Link `style.min.css` in production

### JavaScript Compression
- **Original:** 727 lines (~22KB)
- **Minified:** Function names shortened, comments removed, optimized loops
- **Reduction:** ~75% size reduction
- **Usage:** Link `main.min.js` in production

## WordPress Integration

### Converting to WordPress Theme

1. **File Structure:**
   ```
   zinaia-theme/
   ├── style.css           (WordPress theme stylesheet with theme header)
   ├── functions.php       (Register styles/scripts)
   ├── header.php          (Extract from HTML header section)
   ├── footer.php          (Extract from HTML footer section)
   ├── page.php            (Template for pages)
   ├── single.php          (Template for single posts)
   ├── woocommerce/        (WooCommerce templates)
   ├── assets/
   │   ├── css/
   │   │   └── main.min.css
   │   └── js/
   │       └── main.min.js
   └── images/
   ```

2. **Key Integration Points:**
   - Replace `{{product_name}}` with `<?php echo get_the_title(); ?>`
   - Replace `{{price}}` with WooCommerce `<?php echo wc_price(get_post_meta(get_the_ID(), '_price', true)); ?>`
   - Replace `{{image}}` with `<?php the_post_thumbnail(); ?>`
   - Use `get_template_directory_uri()` for asset paths

3. **HTML to PHP Conversion:**
   - Header nav → Dynamic WordPress menu: `wp_nav_menu()`
   - Product grid → WooCommerce loop: `woocommerce_product_loop_start()`
   - Forms → WordPress form plugins or custom handlers
   - Cart functionality → WooCommerce native

## Features

✅ Full-bleed hero slider with GSAP-style animations (vanilla JS)
✅ Responsive mobile-first design
✅ SEO-friendly semantic HTML5
✅ No framework dependencies
✅ Cart system with localStorage
✅ Search functionality
✅ Accordion/tab components
✅ Product gallery with thumbnails
✅ Contact form structure
✅ FAQs with category filtering
✅ Newsletter signup ready

## Usage

### Development
```html
<!-- Use full versions for development -->
<link rel="stylesheet" href="css/style.css">
<script src="js/main.js"></script>
```

### Production
```html
<!-- Use minified versions for production -->
<link rel="stylesheet" href="css/style.min.css">
<script src="js/main.min.js"></script>
```

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari 14+
- Mobile browsers

## License
Premium theme for ZINAIA skincare brand
