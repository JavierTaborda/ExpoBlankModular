# 🚀 Expo Modular Blank Template

![Expo Version](https://img.shields.io/badge/expo-50.0.0-blue.svg)
![React Native Version](https://img.shields.io/badge/react%20native-0.73.0-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A professional, production-ready starter template for Expo apps featuring modular architecture, tab navigation, and authentication flows.

---

## ✨ Features / Características 

- **Modular architecture** — Organize code by feature for scalability and maintainability.
- **Expo Router** — File-based routing for intuitive navigation.
- **Authentication** — Built-in login and registration flows.
- **Example modules** — Includes Home, Tab1, and Tab2 modules.
- **State management** — Powered by Zustand.
- **TypeScript** — Strict, production-ready configuration.
- **Testing** — Preconfigured with Jest and Testing Library.
- **Environment variables** — .env support out of the box.

**Español**
- **Arquitectura modular** — Organiza el código por Features para mejorar la escalabilidad y mantenimiento.
- **Enrutador Expo** — Enrutamiento de Expo (carpetas)
- **Autenticación** — Organizacion para crear autenticación
- **Módulos de ejemplo** — Incluye los módulos Home, Tab1 y Tab2.
- **Gestión de estado** — Diseñado para Zustand.
- **TypeScript** — Configuración estricta y lista para producción.
- **Pruebas** — Carpetas para trabajar  con Jest y Testing Library.
- **Variables de entorno** — Soporte para .env desde el inicio.

---

## 🏗️ Project Structure / Estructura del Proyecto

```bash
.
├── app/         # Expo Router Only screens/Solo pantallas 
├── modules/     # Feature modules (self-contained) /Modulos de la Aplicacion  
├── components/  # Shared UI components / Componentes UI Compartidos
├── hooks/       # Global hooks
├── services/    # Shared services (API, etc.) / Servicios compartidos
├── stores/      # Global state (Zustand) / estado global creado para Zustand 
└── utils/       # Utility functions / Funciones de utilidades
```

---

## 🚀 Getting Started

### Quick Start / Inicio Rápido

```bash
# Clone and install / Clonar e instalar
git clone https://github.com/your-user/expo-modular.git
cd expo-modular
npm install

# Start development server / Iniciar servidor
npx expo start
```

---

## ➕ Add New Features / Agregar Nuevos Módulos

To create a new module:

```bash
mkdir -p modules/NewFeature/{components,hooks,services,stores,types}
```

---
you need install te packages, feel free to customize and extend this template to fit your project's needs!

Debes instalar los paquetes necesarios, siéntete libre de personalizar y extender esta plantilla para adaptarla a las necesidades de tu proyecto.
