import VendorComponent from '../views/admin/vendors/Index'
import ProductComponent from '../views/admin/products/Index'

export default [
    {
        path: 'vendors',
        name: 'vendors',
        component: VendorComponent
    },
    {
        path: 'products',
        name: 'products',
        component: ProductComponent
    }
]