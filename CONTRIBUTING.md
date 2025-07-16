# Contributing to CloudFlow SaaS Template

Terima kasih atas minat Anda untuk berkontribusi pada CloudFlow SaaS Template! Kami menyambut semua jenis kontribusi, dari bug reports hingga feature requests dan pull requests.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)
- [Questions and Support](#questions-and-support)

## 🤝 Code of Conduct

Proyek ini mengikuti [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). Dengan berpartisipasi, Anda diharapkan untuk mematuhi kode etik ini.

## 🚀 How Can I Contribute?

### Reporting Bugs

Sebelum membuat bug report, periksa daftar [existing issues](https://github.com/yourusername/cloudflow-saas-template/issues) untuk memastikan masalah belum dilaporkan.

**Bug Report Template:**
```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
- OS: [e.g. Windows 10, macOS 12.0]
- Browser: [e.g. Chrome 96, Firefox 95]
- Version: [e.g. 1.2.0]

**Additional context**
Add any other context about the problem here.
```

### Suggesting Enhancements

**Feature Request Template:**
```markdown
**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Follow the coding standards
5. Test your changes
6. Commit your changes using conventional commits
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Fork and clone the repository
git clone https://github.com/yourusername/cloudflow-saas-template.git
cd cloudflow-saas-template

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Quality Assurance
npm run lint         # Run ESLint
npm run lint:css     # Run Stylelint
npm run test         # Run tests

# Utilities
npm run clean        # Clean build files
npm run optimize     # Optimize images
npm run zip          # Create distribution zip
```

## 📝 Coding Standards

### HTML

- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Include proper alt attributes for images
- Use descriptive class names
- Follow accessibility guidelines (WCAG 2.1)

### CSS

- Use Tailwind CSS utility classes
- Custom CSS should be in `assets/css/style.css`
- Follow BEM methodology for custom classes
- Use CSS custom properties for theming
- Maintain responsive design principles

### JavaScript

- Use ES6+ features
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Handle errors gracefully

### File Naming

- Use kebab-case for file names
- Use descriptive names
- Group related files in appropriate directories

### Code Comments

- Comment complex logic
- Use JSDoc for functions
- Keep comments up to date
- Write self-documenting code when possible

## 📋 Commit Guidelines

Kami menggunakan [Conventional Commits](https://www.conventionalcommits.org/) untuk commit messages.

### Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

### Examples

```bash
feat: add dark mode support
fix: resolve mobile navigation issue
docs: update installation guide
style: format code according to style guide
refactor: simplify pricing component
perf: optimize image loading
test: add unit tests for form validation
chore: update dependencies
```

## 🔄 Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following coding standards
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Write a clear PR description** explaining what and why
6. **Request review** from maintainers
7. **Address feedback** and make necessary changes
8. **Squash commits** if requested
9. **Merge** when approved

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Tested on desktop browsers
- [ ] Tested on mobile devices
- [ ] Tested accessibility features
- [ ] Tested performance impact

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

## 🐛 Reporting Bugs

### Before Submitting

1. Check existing issues
2. Try to reproduce the bug
3. Check browser console for errors
4. Test on different browsers/devices
5. Clear cache and cookies

### Bug Report Checklist

- [ ] Clear title describing the issue
- [ ] Detailed description of the problem
- [ ] Steps to reproduce
- [ ] Expected vs actual behavior
- [ ] Environment details
- [ ] Screenshots/videos if applicable
- [ ] Console errors if any

## 💡 Feature Requests

### Before Submitting

1. Check existing feature requests
2. Consider if it aligns with project goals
3. Think about implementation complexity
4. Consider impact on existing features

### Feature Request Checklist

- [ ] Clear title describing the feature
- [ ] Detailed description of the feature
- [ ] Use cases and benefits
- [ ] Implementation suggestions
- [ ] Mockups/wireframes if applicable
- [ ] Consideration of alternatives

## ❓ Questions and Support

### Getting Help

1. **Check Documentation**: Read the README and documentation
2. **Search Issues**: Look for similar questions in existing issues
3. **Create Issue**: Use the "Question" template for general questions
4. **Community**: Join our community channels

### Support Channels

- GitHub Issues: For bugs and feature requests
- GitHub Discussions: For questions and discussions
- Email: support@yourcompany.com
- Documentation: [GitHub Wiki](https://github.com/yourusername/cloudflow-saas-template/wiki)

## 🏷️ Labels

Kami menggunakan labels untuk mengkategorikan issues dan PRs:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements or additions to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `question`: Further information is requested
- `wontfix`: This will not be worked on

## 🎯 Development Workflow

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a feature branch
4. **Make** your changes
5. **Test** your changes
6. **Commit** using conventional commits
7. **Push** to your fork
8. **Create** a pull request
9. **Wait** for review and feedback
10. **Address** feedback if needed
11. **Merge** when approved

## 📊 Performance Guidelines

- Keep bundle size minimal
- Optimize images and assets
- Use lazy loading where appropriate
- Minimize HTTP requests
- Follow performance best practices

## 🔒 Security Guidelines

- Never commit sensitive information
- Follow security best practices
- Report security vulnerabilities privately
- Use HTTPS for all external resources
- Validate and sanitize user inputs

## 🌍 Internationalization

- Use semantic HTML for better accessibility
- Consider RTL languages if applicable
- Use proper character encoding
- Follow i18n best practices

## 📱 Responsive Design

- Test on multiple screen sizes
- Use mobile-first approach
- Ensure touch targets are appropriate
- Test on real devices when possible

## ♿ Accessibility

- Follow WCAG 2.1 guidelines
- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation
- Test with screen readers

## 🧪 Testing

- Write tests for new features
- Ensure existing tests pass
- Test across different browsers
- Test on mobile devices
- Test accessibility features

## 📈 Performance Testing

- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Test loading times
- Optimize for mobile performance

## 🤝 Recognition

Kontributor akan diakui dalam:

- README.md contributors section
- Release notes
- Project documentation
- Community acknowledgments

## 📄 License

Dengan berkontribusi, Anda setuju bahwa kontribusi Anda akan dilisensikan di bawah [MIT License](LICENSE).

---

**Terima kasih telah berkontribusi pada CloudFlow SaaS Template! 🚀** 