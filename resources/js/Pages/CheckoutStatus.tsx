import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function CheckoutStatus({ auth }: PageProps) {
    const { props: { success } } = usePage<{ success: boolean }>();
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Checkout Status</h2>}
        >
            <Head title="Checkout Status" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="text-sm">
                                <span>Your order was &nbsp;</span>
                                <span className={success ? 'text-green-300': 'text-red-300'}>
                                    {success ? 'Successful' : 'Cancelled'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}