export default{
    path:"/admin",
    name:"admin",
    component:()=>{
        return import("@/views/admin/admin.vue")
    },
   children: [
    {
        path: '/students',
        name:  'students',
        component: () => {
            return import("@/views/admin/students.vue")
        },
    },
    {
        path: '/teachers',
        name:  'teachers',
        component: () => {
            return import("@/views/admin/teachers.vue")
        },
    },
    {
        path: '/groups',
        name:  'groups',
        component: () => {
            return import("@/views/admin/groups.vue")
        },
    },
    {
        path: '/users',
        name:  'users',
        component: () => {
            return import("@/views/admin/users.vue")
        },
    },
    {
        path: '/people',
        name:  'people',
        component: () => {
            return import("@/views/admin/people.vue")
        },
    }
   ]
}