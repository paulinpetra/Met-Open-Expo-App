🏛️ Met Open - Museum Explorer

![React Native](https://img.shields.io/badge/React%20Native-20232A?style=flat&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white)

A high-end mobile gallery application built with React Native and Expo that provides a modern interface for exploring the Metropolitan Museum of Art's Open Access collection.

<img src="assets/screenshots/home-screen.jpg" alt="Met Open Home Screen" width="300"/>

---

## ✨ Features

- Browse artworks from the Metropolitan Museum collection
- Elegant gallery-style interface
- Responsive mobile layout
- Dark museum-inspired design system
- External API integration with the Met Collection API

---

## 🛠️ Tech Stack

- **Framework:** Expo SDK 54
- **Routing:** Expo Router (file-based navigation)
- **Styling:** NativeWind – Tailwind CSS for React Native
- **Icons:** Lucide React Native
- **Visuals:** Expo Linear Gradient & Expo Google Fonts
- **API:** Metropolitan Museum of Art Collection API

---

## 🎨 Design System

This project utilizes a custom design system that bridges code and design.

**Architecture**

Centralized design tokens located in `theme/tokens.js`.

---

## 🔤 Typography

Met Open uses three complementary typefaces to create a balance between elegance and readability inspired by museum catalog design.

| Role     | Font             | Usage                                                                |
| -------- | ---------------- | -------------------------------------------------------------------- |
| Headings | Playfair Display | Artwork titles, major section headers                                |
| Body     | Inter            | Descriptions, UI text, paragraphs, navigation                        |
| Mono     | JetBrains Mono   | Technical metadata such as object IDs, dates, and collection details |

---

## 🎨 Color System

The visual identity of Met Open is built around a warm museum-inspired dark theme designed to feel elegant and gallery-like.

Colors are defined as centralized design tokens in `theme/tokens.js` to ensure consistency across the app.

| Swatch  | Name               | Hex     | Usage                           |
| ------- | ------------------ | ------- | ------------------------------- |
| #1A1614 | charcoal           | #1A1614 | Main app background             |
| #241D1A | charcoal-light     | #241D1A | Cards and elevated surfaces     |
| #EDEAE7 | ivory              | #EDEAE7 | Primary text                    |
| #B8B2AE | ivory-muted        | #B8B2AE | Secondary text                  |
| #C2410C | burnt-orange       | #C2410C | Primary accent                  |
| #EA580C | burnt-orange-light | #EA580C | Hover and active states         |
| #3A2F2A | muted              | #3A2F2A | Dividers and subtle UI elements |

---

## 🚀 Getting Started

### 1. Install Dependencies

Because this project uses the latest React 19 features alongside Expo SDK 54, you must use the `legacy-peer-deps` flag.
