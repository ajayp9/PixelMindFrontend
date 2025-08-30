# E-Commerce Product Listing Page

A responsive e-commerce product listing page built with Next.js, featuring product search, filtering, detailed views, and a mock product addition form.

## 🚀 Live Demo
   https://pixel-mind-frontend.vercel.app/
   
---

## Features

- Product grid display with images, names, prices, and descriptions
- Search functionality to filter products by name
- Category-based filtering
- Product detail modals
- Mock product addition form with validation
- Shopping cart functionality with item count display
- Fully responsive design

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Data Fetching**: React Query
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod validation

## Setup Instructions

1. Clone the repository:
git clone https://github.com/ajayp9/PixelMindFrontend
cd ecommerce-app

---
2.  Install dependencies
     npm install
---
 3.  Run the development server:
            npm run dev
---
 ## 🏗️ Project Structure
 ecommerce-app/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── ProductCard.js   # Product display card
│   │   ├── ProductModal.js  # Product detail modal
│   │   ├── SearchFilter.js  # Search and filter component
│   │   ├── AddProductForm.js # Product addition form
│   │   ├── CartIcon.js      # Shopping cart icon
│   │   └── QueryClientProvider.js # React Query provider
│   ├── stores/
│   │   └── useStore.js      # Zustand state management
│   ├── hooks/
│   │   └── useProducts.js   # Custom React Query hooks
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout component
│   └── page.js              # Home page
├── public/                  # Static assets
└── configuration files      # Next.js, Tailwind, etc.


---

## 🎯 Key Features Explained

### Product Display

-   Fetches product data from Fake Store API using React Query
    
-   Displays products in a responsive grid layout
    
-   Each product card shows image, title, price, and description
    

### Search & Filter

-   **Search**: Client-side filtering by product name
    
-   **Filter**: Category-based filtering with dropdown selector
    
-   Global state managed with Zustand for efficient updates
    

### Product Details Modal

-   Click any product to view detailed information
    
-   Responsive modal with product image, full description, and price
    
-   "Add to Cart" functionality directly from the modal
    

### Add Product Form
  -   Mock form for adding new products (doesn't submit to real API)
    
-   Comprehensive validation with Zod schema
    
-   Fields for title, price, description, category, and image URL
    
-   User-friendly error messages and success feedback
    

### Shopping Cart

-   Add products to cart with quantity management
    
-   Persistent cart state across sessions
    
-   Floating cart icon shows current item count


## 🔧 API Integration

This application uses the  [Fake Store API](https://fakestoreapi.com/)  with the following endpoints:

-   `GET /products`  - Fetch all products
    
-   `GET /products/categories`  - Fetch all categories
    
-   `GET /products/category/{category_name}`  - Fetch products by category
    
-   `GET /products/{id}`  - Fetch single product details


## 🚀 Deployment

### Deploy to Vercel (Recommended)

1.  Push your code to GitHub
    
2.  Connect your repository to  [Vercel](https://vercel.com/)
    
3.  Deploy with zero configuration
