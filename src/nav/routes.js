import Logout from '../container/Logout';
import Login from '../container/Login';
import Home from '../container/Home';
import Product from '../container/Product';

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login,
		isNonMenuItem: true
	},
	{
		path: '/Home',
		name: 'Home',
		component: Home
	},
	{
		path: '/Product',
		name: 'Product',
		component: Product
	},
	{
		path: '/logout',
		name: 'Logout',
		component: Logout
	}
];

export default routes;
