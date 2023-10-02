export default{
    path:"/superadmin",
    name:"superadmin",
    // redirect: "/404",
    component:()=>{
        return import("@/views/superadmin/superadmin.vue")
    },
   children: [
    {
        path: '/brands',
        name:  'brands',
        component: () => {
            return import("@/views/superadmin/brands.vue")
        },
    },
    {
        path: '/tovar',
        name:  'tovar',
        component: () => {
            return import("@/views/superadmin/tovar.vue")
        },
    },
    {
        path: '/grou',
        name:  'grou',
        component: () => {
            return import("@/views/superadmin/grou.vue")
        },
    },
    {
        path: '/products',
        name:  'products',
        component: () => {
            return import("@/views/superadmin/products.vue")
        },
    },
    {
        path: '/single_product/:id',
        name:  'single_product',
        meta: {
            child: 'product_lists',
        },
        component: () => {
            return import("@/views/superadmin/singleproduct.vue")
        },
    }
   ]
}