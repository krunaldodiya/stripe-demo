import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps, Product } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function ProductDetail({ auth }: PageProps) {
    const { props: { product } } = usePage<{ product: Product }>();
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Product detail</h2>}
        >
            <Head title="Product detail" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                                    <input type="hidden" name='price' value={product.price} />
                                    <input type="hidden" name='title' value={product.title} />
                                    <img src={product.image_url} alt={product.title} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <h4 className="text-lg font-semibold">{product.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
                                        <p className="mt-2">${product.price}</p>
                                    </div>
                                    <div className="p-4">
                                        <a className='px-4 py-2 font-medium bg-black-600 dark:bg-white-500 border border-1 border-black-600 dark:border-white-600' 
                                            href={route('handle-checkout', {id: product.id})}>
                                            Buy Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}