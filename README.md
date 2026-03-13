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

## 🎨 Color System

The visual identity of Met Open is built around a warm museum-inspired dark theme designed to feel elegant and gallery-like.

The palette combines deep charcoal backgrounds with burnt orange highlights to create strong contrast while maintaining a refined aesthetic.

Colors are defined as centralized **design tokens in `theme/tokens.js`**, ensuring consistent styling across the application.

| Swatch                                                                                                                        | Name               | Hex     | Usage                           |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------- | ------------------------------- |
| <span style="display:inline-block;width:18px;height:18px;background:#1A1614;border-radius:4px;border:1px solid #555;"></span> | charcoal           | #1A1614 | Main app background             |
| <span style="display:inline-block;width:18px;height:18px;background:#241D1A;border-radius:4px;border:1px solid #555;"></span> | charcoal-light     | #241D1A | Cards and elevated surfaces     |
| <span style="display:inline-block;width:18px;height:18px;background:#EDEAE7;border-radius:4px;border:1px solid #ccc;"></span> | ivory              | #EDEAE7 | Primary text                    |
| <span style="display:inline-block;width:18px;height:18px;background:#B8B2AE;border-radius:4px;border:1px solid #ccc;"></span> | ivory-muted        | #B8B2AE | Secondary text                  |
| <span style="display:inline-block;width:18px;height:18px;background:#C2410C;border-radius:4px;border:1px solid #555;"></span> | burnt-orange       | #C2410C | Primary accent                  |
| <span style="display:inline-block;width:18px;height:18px;background:#EA580C;border-radius:4px;border:1px solid #555;"></span> | burnt-orange-light | #EA580C | Hover and active states         |
| <span style="display:inline-block;width:18px;height:18px;background:#3A2F2A;border-radius:4px;border:1px solid #555;"></span> | muted              | #3A2F2A | Dividers and subtle UI elements |

## 🚀 Getting Started

### 1. Install Dependencies

Because this project uses the latest React 19 features alongside Expo SDK 54, you must use the `legacy-peer-deps` flag.
