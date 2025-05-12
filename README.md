# Pistachio Online Shop

A fully‐functional e-commerce demo built with Next.js and TypeScript as part of the JavaScript Frameworks course assignment. 

## 🚀 Features

- **Product Listing**  
  • Fetches products from the public API (`GET /online-shop`)  
  • Responsive grid of product cards with image, title, price (original & discounted), rating and discount badge  
- **Product Details**  
  • Dynamic route at `/product/[id]`  
  • Displays full product info: images, title, description, tags, reviews  
  • “Add to Bag” button with success toast  
- **Search & Sort**  
  • Real-time filtering by title  
  • Sort by price (asc/desc) or name (A→Z / Z→A)  
- **Shopping Cart**  
  • Global cart state via [Zustand] persisted to `localStorage`  
  • Increment, decrement, or remove individual items with toasts  
  • Clear all & checkout flow → success page + toast  
- **Contact Form**  
  • Client-side form with React Hook Form & TypeScript validation  
  • Fields: Full Name, Subject, Email, Message  
  • Validation toasts for success / failure  
- **Styling & UX**  
  • Tailwind CSS v4 for utility-first styling  
  • Google Fonts via `next/font` – **Chango** for headings, **Roboto Mono** for body text  
  • Custom CSS variables for colors (`#C8C9B3` background, `#FDFCED` card, `#696956` text)  
  • Toast notifications with `react-hot-toast`  
  • Next.js `<Image>` optimized loading (configured in `next.config.js`)  
  • Mobile ↔ desktop responsive breakpoints  

## 📦 Tech Stack

- **Framework:** Next.js 15 + React 19  
- **Language:** TypeScript 5  
- **Styling:** Tailwind CSS 4  
- **State:** Zustand (with `persist`)  
- **Forms:** React Hook Form  
- **Notifications:** react-hot-toast  
- **HTTP:** axios  


## 🔧 Getting Started

### Prerequisites

- Node.js >= 18  
- npm or yarn  

### Clone & Install

```bash
git clone <YOUR-GITHUB-CLASSROOM-REPO-URL>
cd jsframeworks
npm install
```

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```
### Build & start for production

```bash
npm run build
npm run start
```
Your app will run on http://localhost:3000.


## ⚙️ Configuration

**next.config.js**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.cloud.noroff.dev",
        port: "",
        pathname: "/api/online-shop/**",
      },
    ],
  },
}
export default nextConfig
```
## Fonts (`src/lib/fonts.ts`)

```ts
import { Chango, Roboto_Mono } from 'next/font/google'

interface NextFontWithVar { className: string; variable: string }

export const chango = Chango({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-chango',
}) as NextFontWithVar

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-roboto-mono',
}) as NextFontWithVar
```

## 🔗 API Endpoints

- **All products**: `GET https://v2.api.noroff.dev/online-shop`
- **Single product**: `GET https://v2.api.noroff.dev/online-shop/:id`

_No API key or auth needed._

## 🚀 Deployment

Deploy easily to Vercel or Netlify:

1. Push your repo to GitHub.  
2. Create a new project in Vercel or Netlify and link your repository.  
3. Use the default Next.js build settings:  
   ```bash
   npm run build
   ```  
4. Deploy!  

## 📝 Project Structure

```
src/
├─ app/
│  ├─ layout.tsx               # Root layout + Toaster
│  ├─ page.tsx                 # Home (with client wrapper)
│  ├─ cart/page.tsx            # Cart page (client)
│  └─ product/[id]/page.tsx    # Product details
├─ components/
│  ├─ Header.tsx
│  ├─ Footer.tsx
│  ├─ ProductCard.tsx
│  ├─ AddToCartButton.tsx
│  ├─ SearchBar.tsx
│  └─ SortDropdown.tsx
├─ lib/
│  ├─ productApi.ts
│  ├─ cartStore.ts
│  └─ fonts.ts
└─ styles/
   └─ globals.css
```
Happy coding! 🍐 ( Ida @ Pistachio 🥜 ) 
