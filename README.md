# Shayan Ghosh - Portfolio Website
<img width="1902" height="867" alt="Image" src="https://github.com/user-attachments/assets/646b50a1-8680-4729-a940-2e76d6b36304" />
A modern, responsive portfolio website for Shayan Ghosh, a BTech Computer Science & Engineering student at Abacus Institute of Engineering & Management.

## Live Link - https://shayanghosh.netlify.app

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle**: Switch between dark and light modes with smooth transitions
- **Animated Background**: Dynamic gradient background with floating shapes for visual appeal
- **Smooth Scrolling**: Navigation with smooth scrolling and active link indicators
- **Contact Form**: Integrated email functionality using EmailJS to send messages directly to Gmail
- **Skill Bars**: Animated skill progression indicators
- **Project Showcase**: Display of completed projects and work
- **Mobile Navigation**: Hamburger menu for better mobile experience
- **Smooth Animations**: Various CSS animations for enhanced user experience

## 📁 Project Structure

```
├── index.html           # Main HTML file with page structure
├── style.css            # Styling and animations
├── script.js            # JavaScript functionality
├── images/              # Image assets folder
│   └── shayan_photo.jpg # Profile picture
├── EMAIL_SETUP_GUIDE.txt # Instructions for setting up email functionality
└── README.md            # This file
```

## 🚀 Sections

### 1. **Home (Hero Section)**
   - Animated introduction with name and role
   - Call-to-action buttons for projects and contact

### 2. **About**
   - Personal information and college details
   - Technology stack icons
   - Background and interests

### 3. **Skills**
   - Animated skill bars showing proficiency levels
   - Multiple technical skills displayed

### 4. **Projects**
   - Showcase of completed projects
   - Project descriptions and links

### 5. **Contact**
   - Contact form with email validation
   - Direct email submission via EmailJS
   - Social media links

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Fonts**: Google Fonts (Poppins, Roboto Mono)
- **Icons**: Font Awesome 6.4.0
- **Email Service**: EmailJS
- **Animations**: Pure CSS3 animations and transitions

## ⚙️ Setup Instructions

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources and email functionality)

### Local Setup

1. **Clone or Download** the repository
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # or
     npx http-server
     ```
   - Visit `http://localhost:8000`

### Email Setup (EmailJS Integration)

To enable the contact form email functionality:

1. **Create EmailJS Account**
   - Visit [emailjs.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Configure Gmail Service**
   - Connect your Gmail account in EmailJS
   - Create an email template with the following variables:
     - `from_name`
     - `from_email`
     - `subject`
     - `message`

3. **Update Configuration**
   - Open `script.js`
   - Replace the following constants with your EmailJS credentials:
     ```javascript
     const EMAILJS_PUBLIC_KEY = 'your_public_key';
     const EMAILJS_SERVICE_ID = 'your_service_id';
     const EMAILJS_TEMPLATE_ID = 'your_template_id';
     ```

4. **Refer to EMAIL_SETUP_GUIDE.txt** for detailed step-by-step instructions

## 📱 Features Breakdown

### Dark/Light Theme
- Click the moon icon in the navbar to toggle theme
- Theme preference is maintained across sessions

### Hamburger Menu
- Mobile-friendly navigation menu
- Responsive toggle for smaller screens

### Smooth Navigation
- Active link highlighting based on scroll position
- Smooth scroll behavior

### Back to Top Button
- Appears when scrolling down
- Returns to top on click

### Form Validation
- Email validation before submission
- Success/error messages
- Clear form after successful submission

## 🎨 Customization

### Colors
- Edit CSS variables in `style.css` to change the color scheme

### Content
- Update text content in `index.html`
- Replace `images/shayan_photo.jpg` with your profile picture

### Skills and Projects
- Add or modify skill items in the Skills section
- Update project information in the Projects section

## 📝 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔗 Links

- **Portfolio**: [View Live](https://shayanghosh03.github.io/Shayan_Portfolio_New/)
- **GitHub**: [Shayan Ghosh](https://github.com/Shayanghosh03)
- **Email**: shayanghosh0439@gmail.com

## 📄 License

This project is personal and can be freely used as a portfolio template.

## ✨ Future Enhancements

- [ ] Add blog section
- [ ] Integrate with backend for form submissions
- [ ] Add more interactive animations
- [ ] Implement project filtering
- [ ] Add testimonials section
- [ ] SEO optimization

## 👨‍💻 About the Author

**Shayan Ghosh** - BTech CSE Student (3rd Year, 6th Semester)
- **College**: Abacus Institute of Engineering & Management
- **Interests**: Software Development, AI/ML, Web Development, Data Structures & Algorithms
- **Skills**: Python, JavaScript, Java, C/C++, PHP, Database Management

---

*Last Updated: December 31, 2025*
