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

        $intent = $request->user()->createSetupIntent();

        return Inertia::render('ProductDetail', ['product' => $product, 'intent' => $intent]);
    }

    public function handle_checkout(Request $request)
    {
        // $intent = $request->user()->createSetupIntent();
    }

    public function handle_checkout_success(Request $request)
    {
        //
    }

    public function handle_checkout_cancel(Request $request)
    {
        //
    }
}

