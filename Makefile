# CloudFlow SaaS Template - Makefile

.PHONY: help install dev build clean lint test deploy docker-build docker-run

# Default target
help:
	@echo "CloudFlow SaaS Template - Available commands:"
	@echo ""
	@echo "Development:"
	@echo "  install     - Install dependencies"
	@echo "  dev         - Start development server"
	@echo "  build       - Build for production"
	@echo "  clean       - Clean build files"
	@echo ""
	@echo "Quality:"
	@echo "  lint        - Run linting"
	@echo "  lint:fix    - Fix linting issues"
	@echo "  test        - Run tests"
	@echo ""
	@echo "Deployment:"
	@echo "  deploy      - Deploy to production"
	@echo "  docker-build - Build Docker image"
	@echo "  docker-run  - Run Docker container"
	@echo ""
	@echo "Utilities:"
	@echo "  optimize    - Optimize images"
	@echo "  zip         - Create distribution zip"
	@echo "  serve       - Serve built files"

# Install dependencies
install:
	@echo "Installing dependencies..."
	npm install

# Start development server
dev:
	@echo "Starting development server..."
	npm run dev

# Build for production
build:
	@echo "Building for production..."
	npm run build

# Clean build files
clean:
	@echo "Cleaning build files..."
	npm run clean
	rm -rf dist/
	rm -rf build/
	rm -rf node_modules/

# Run linting
lint:
	@echo "Running linting..."
	npm run lint
	npm run lint:css

# Fix linting issues
lint:fix:
	@echo "Fixing linting issues..."
	npm run lint -- --fix
	npm run lint:css -- --fix

# Run tests
test:
	@echo "Running tests..."
	npm test

# Deploy to production
deploy:
	@echo "Deploying to production..."
	npm run build
	# Add your deployment commands here
	# Example: netlify deploy --prod --dir=dist

# Build Docker image
docker-build:
	@echo "Building Docker image..."
	docker build -t cloudflow-saas .

# Run Docker container
docker-run:
	@echo "Running Docker container..."
	docker run -p 80:80 cloudflow-saas

# Optimize images
optimize:
	@echo "Optimizing images..."
	npm run optimize:images

# Create distribution zip
zip:
	@echo "Creating distribution zip..."
	npm run zip

# Serve built files
serve:
	@echo "Serving built files..."
	npm run serve

# Development workflow
dev-setup: install
	@echo "Development setup complete!"

# Production workflow
prod-setup: install build test lint
	@echo "Production setup complete!"

# Full deployment workflow
deploy-full: clean install build test lint deploy
	@echo "Full deployment complete!"

# Docker workflow
docker-full: docker-build docker-run
	@echo "Docker workflow complete!"

# Performance check
perf:
	@echo "Running performance checks..."
	npm run preview
	# Add Lighthouse CI or other performance tools here

# Security check
security:
	@echo "Running security checks..."
	npm audit
	# Add additional security tools here

# Backup
backup:
	@echo "Creating backup..."
	tar -czf backup-$(shell date +%Y%m%d-%H%M%S).tar.gz . --exclude=node_modules --exclude=dist --exclude=build

# Update dependencies
update:
	@echo "Updating dependencies..."
	npm update
	npm audit fix

# Check for outdated packages
outdated:
	@echo "Checking for outdated packages..."
	npm outdated

# Generate documentation
docs:
	@echo "Generating documentation..."
	# Add documentation generation commands here

# Format code
format:
	@echo "Formatting code..."
	# Add code formatting commands here

# Type check (if using TypeScript)
type-check:
	@echo "Running type checks..."
	# Add TypeScript type checking here

# Bundle analysis
analyze:
	@echo "Analyzing bundle..."
	# Add bundle analysis tools here

# Environment setup
env-setup:
	@echo "Setting up environment..."
	cp env.example .env
	@echo "Please edit .env file with your configuration"

# Database setup (if applicable)
db-setup:
	@echo "Setting up database..."
	# Add database setup commands here

# Cache clear
cache-clear:
	@echo "Clearing cache..."
	rm -rf .cache/
	rm -rf .parcel-cache/
	npm cache clean --force

# Health check
health:
	@echo "Running health checks..."
	curl -f http://localhost:3000 || echo "Server not running"
	# Add additional health checks here

# Monitoring
monitor:
	@echo "Starting monitoring..."
	# Add monitoring tools here

# Backup and restore
backup-db:
	@echo "Backing up database..."
	# Add database backup commands here

restore-db:
	@echo "Restoring database..."
	# Add database restore commands here

# SSL certificate setup
ssl-setup:
	@echo "Setting up SSL certificates..."
	# Add SSL setup commands here

# Load testing
load-test:
	@echo "Running load tests..."
	# Add load testing tools here

# Accessibility testing
a11y:
	@echo "Running accessibility tests..."
	# Add accessibility testing tools here

# SEO audit
seo-audit:
	@echo "Running SEO audit..."
	# Add SEO audit tools here

# Mobile testing
mobile-test:
	@echo "Running mobile tests..."
	# Add mobile testing tools here

# Cross-browser testing
browser-test:
	@echo "Running cross-browser tests..."
	# Add cross-browser testing tools here

# Performance monitoring
perf-monitor:
	@echo "Starting performance monitoring..."
	# Add performance monitoring tools here

# Error tracking
error-track:
	@echo "Setting up error tracking..."
	# Add error tracking setup here

# Analytics setup
analytics-setup:
	@echo "Setting up analytics..."
	# Add analytics setup commands here

# CDN setup
cdn-setup:
	@echo "Setting up CDN..."
	# Add CDN setup commands here

# Backup verification
verify-backup:
	@echo "Verifying backup..."
	# Add backup verification commands here

# System requirements check
check-requirements:
	@echo "Checking system requirements..."
	node --version
	npm --version
	# Add additional requirement checks here

# Quick start
quick-start: env-setup install dev
	@echo "Quick start complete! Visit http://localhost:3000"

# Production ready
production-ready: clean install build test lint security perf
	@echo "Production ready!"

# Emergency rollback
rollback:
	@echo "Emergency rollback..."
	# Add rollback commands here

# Maintenance mode
maintenance-on:
	@echo "Enabling maintenance mode..."
	# Add maintenance mode commands here

maintenance-off:
	@echo "Disabling maintenance mode..."
	# Add maintenance mode commands here 