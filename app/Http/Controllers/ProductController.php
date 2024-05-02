<?php

namespace App\Http\Controllers;

use App\Models\Product;

use Inertia\Inertia;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function product_list(Request $request)
    {
        $products = Product::all();

        return Inertia::render('ProductList', ['products' => $products]);
    }

    public function product_detail(Request $request)
    {
        $product = Product::findOrFail($request->id);

        return Inertia::render('ProductDetail', ['product' => $product]);
    }

    public function handle_checkout(Request $request)
    {
        $product = Product::findOrFail($request->id);

        return $request->user()->checkoutCharge(
            amount: $product->price * 100,
            name: $product->title,
            quantity: 1,
            sessionOptions: [
                'success_url' => route('handle-checkout-success', ['id' => $product->id]),
                'cancel_url' => route('handle-checkout-cancel', ['id' => $product->id]),
                'expires_at' => now()->addMinutes(30)->timestamp,
            ]
        );
    }

    public function handle_checkout_success(Request $request, $product_id)
    {
        return Inertia::render('CheckoutStatus', ['success' => true, 'product_id' => $product_id]); 
    }

    public function handle_checkout_cancel(Request $request, $product_id)
    {
        return Inertia::render('CheckoutStatus', ['success' => false, 'product_id' => $product_id]); 
    }
}

