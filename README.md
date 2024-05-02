# Laravel Stripe Demo

This is a demo application showcasing Laravel integration with Stripe for payment processing.

## Features

1. **Authentication System:** Uses Laravel Breeze for authentication.
2. **UI:** Built using React and Inertia.
3. **Payment Gateway:** Managed by Stripe.
4. **Database:** SQLite is used for demo purposes.
5.  **Products:** Faker to generate dummy products.

## Setup

### 1. Migrate Database

Before running the application, migrate the database by running the following command:

```bash
php artisan migrate:fresh --seed
```

## This will create a user with the following credentials:
- **Email:** admin@example.com
- **Password:** admin@123

### 2. How to Run
To start the Laravel server, run the following command:

```bash
php artisan serve
```
