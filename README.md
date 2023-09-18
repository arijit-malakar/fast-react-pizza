# Fast React Pizza

Fast React Pizza is a delightful pizza ordering web application built with React, Redux Toolkit, React Router, TypeScript, and styled with Tailwind CSS. This README will provide an overview of the application and guide you through its functionality.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Overview

Fast React Pizza is a user-friendly pizza ordering app that allows customers to browse a menu of delicious pizzas, add them to their cart, and place an order for delivery. Here's how it works:

1. **Homepage**: Upon opening the app, you'll be greeted with a blank text box prompting you to input your name. After entering your name, you will be redirected to the `/menu` route.

2. **Menu Page**: In the menu page, you'll find a list of pizzas available for order. Pizzas that are in stock will display their price and an "Add to Cart" button. Pizzas that are out of stock will be greyed out, and instead of a price, it will show "Sold out."

3. **Adding to Cart**: When you click the "Add to Cart" button for an available pizza, it will be added to your cart. The button will change to "Delete" and display - and + buttons to adjust the quantity of the selected pizza in your cart.

4. **Cart Overview**: At the bottom of the page, you'll find a cart overview component that displays the total quantity of items in your cart, the total price, and a link to open the cart.

5. **Cart Page**: Clicking on the cart link will redirect you to the `/cart` route. Here, you'll see a list of items added to your cart, along with their quantities. You can use the ⊖ and ⊕ buttons to adjust the quantity of each item or click the "Delete" button to remove items from your cart.

6. **Placing an Order**: When you're ready to place your order, click the "Order Now" button on the cart page. You will be redirected to the `/order/:id` route, where you'll receive an estimated time of arrival (ETA) for your order.

7. **Payment**: Fast React Pizza currently supports only Cash on Delivery (COD) as the payment option.

## Features

- User-friendly interface for pizza selection and ordering.
- Real-time updates on pizza availability and cart status.
- Flexible cart management with quantity adjustments and item removal.
- Order confirmation with estimated delivery time.
- Secure and efficient payment with Cash on Delivery (COD).

## Installation

To run Fast React Pizza locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/arijit-malakar/fast-react-pizza.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fast-react-pizza
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your web browser and visit `http://localhost:5173` to access Fast React Pizza.

## Usage

- Input your name on the homepage and start exploring the pizza menu.
- Add your favorite pizzas to the cart and adjust quantities if needed.
- Review your cart, make any final adjustments, and click "Order Now" to place your order.
- Enjoy your delicious pizza with Cash on Delivery (COD) payment.
