# Jude Mpoyo | Industrial Minimalist Portfolio

[![Nuxt](https://img.shields.io/badge/Nuxt-4.2-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Expertise](https://img.shields.io/badge/Expertise-PHP%20%2F%20Laravel-8892BF?logo=laravel&logoColor=white)](https://laravel.com)
[![Learning](https://img.shields.io/badge/Learning-Go%20%2F%20Docker-00ADD8?logo=go&logoColor=white)](https://go.dev)

A highly technical, "Industrial Minimalist" portfolio designed for system architects and backend engineers. This project serves as a technical manifesto, documenting the transition from deep PHP/Laravel expertise to a cloud-native future with Go and Docker.

## 🏗 Concept: "Proof by Infrastructure"

The design moves away from traditional creative portfolios to embrace a **technical documentation** aesthetic:
- **Blueprint UI**: Monochromatic palette (Concrete/Chrome), 40px construction grid, and 1px technical borders.
- **Log Level Interaction**: A global switch between `INFO` (summary) and `DEBUG` (technical blueprints/metrics).
- **YAML Stack**: Skills presented as infrastructure configuration files.
- **System Status**: Real-time monitoring of local time, uptime, and learning objectives.

## 🛠 Tech Stack

- **Framework**: Nuxt 4 (Beta/V4 Compatibility)
- **Styling**: Tailwind CSS (Strict 1px technical design)
- **I18n**: `@nuxtjs/i18n` with full EN/FR support and automatic `hreflang` management.
- **State**: Custom composables for Global Log Level management.
- **Deployment**: Configured for SSG (Static Site Generation) with Nitro.

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS)
- npm or pnpm

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (SSG)
npm run generate
```

## 📂 Project Structure

- `app/components/layout/`: Modular layout components (Header, Footer, Nav).
- `app/components/sections/`: Technical data sheets for About, Projects, and Contact.
- `app/composables/`: Technical state management (Log Levels, etc.).
- `i18n/locales/`: Industrial-themed translation strings in JSON format.

## 🌐 Localization

The project supports French and English. All strings are managed in `i18n/locales/*.json`.
- **FR**: Technical Engineering French.
- **EN**: Industrial Documentation English.

---
**Designed by Jude Mpoyo // Built with Nuxt & Concrete Aesthetics**
