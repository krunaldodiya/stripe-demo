<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/product/list', [ProductController::class, 'product_list'])
    ->middleware(['auth', 'verified'])
    ->name('product-list');

Route::get('/products/{id}/detail', [ProductController::class, 'product_detail'])
    ->middleware(['auth', 'verified'])
    ->name('product-detail');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/checkout', [ProductController::class, 'handle_checkout'])
->middleware(['auth', 'verified'])
->name('handle-checkout');

Route::get('/checkout/success', [ProductController::class, 'handle_checkout_success'])
->middleware(['auth', 'verified'])
->name('handle-checkout-success');

Route::get('/checkout/cancel', [ProductController::class, 'handle_checkout_cancel'])
->middleware(['auth', 'verified'])
->name('handle-checkout-cancel');

require __DIR__.'/auth.php';
