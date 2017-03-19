import Home from '../pages/Home';
import Companies from '../pages/Companies';

const ROUTERS = [
    {
        'path': '/',
        'name': 'Home',
        'exact': true,
        'component': Home
    },
    {
        'path': '/companies',
        'name': 'Companies',
        'component': Companies
    }
];

export default ROUTERS;
