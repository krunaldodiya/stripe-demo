<?php

namespace App\Http\Controllers;

use App\Models\Product;

use Inertia\Inertia;

class ProductController extends Controller
{
    public function products()
    {
        $products = Product::all();

        return Inertia::render('ProductList', ['products' => $products]);
    }
}

