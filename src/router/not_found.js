export default{
    path:"/not_found",
    name:"not",
    component:()=>{
        return import("@/views/404/PageNotFound.vue")
    }
}