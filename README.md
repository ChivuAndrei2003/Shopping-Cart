# 🛒 Shopping Cart

A modern React-based shopping cart application with multiple pages and real-time cart updates.

## 📋 Overview

This project implements a complete shopping cart experience with navigation between different pages and dynamic cart management.

## 🎯 Features

### 🏠 Home Page

- Welcome page with images and information
- Navigation to other sections
- Clean and simple design

### 🛍️ Shop Page

- **Product Cards**: Individual cards for each product
- **Quantity Controls**:
  - Manual input field for quantity
  - Increment/decrement buttons for fine-tuning
- **Product Information**: Title and details for each item
- **Add to Cart**: Button to add items to shopping cart

### 🛒 Cart Page

- Display all items in cart with quantities
- **Real-time Updates**: Cart badge shows item count in navbar
- **Quantity Management**:
  - Increase/decrease item quantities
  - Remove items from cart
- No checkout/payment system required

## 🔧 Technical Requirements

- ✅ **Navigation Bar**: Shown on all pages with route navigation
- ✅ **API Integration**: Fetch products from **FakeStore API**
- ✅ **Props Validation**: No missing prop validation errors
- ✅ **Testing**: Thorough testing with React Testing Library
  - Note: Don't test `react-router-dom` directly (external library)
- ✅ **Styling**: Professional styling for portfolio display

## 🚀 Technologies Used

- React
- React Router
- FakeStore API
- React Testing Library
- Tailwind CSS (for styling)
