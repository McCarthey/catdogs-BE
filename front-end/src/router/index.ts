const routes = [
    { path: '/', redirect: '/home', exact: true },
    {
        path: '/sign',
        component: './Sign/_layout',
        routes: [
            { path: '/sign/signup', component: './Sign/SignUp' }, // 不能放在路由表末尾
            { path: '/sign/signin', component: './Sign/SignIn' }, // 同上
        ],
    },
    {
        path: '/',
        component: './_layout',
        routes: [
            {
                path: '/home',
                component: './Home',
            },
            {
                ptah: '/about',
                component: './About',
            },
        ],
	},
	{
		path: '*',component: './Page404'
	}
]

module.exports = routes