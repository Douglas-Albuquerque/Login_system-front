import { Router } from 'express';
import UsersConstroller from './controllers/UsersConstroller';

const routes = new Router();

routes.get('/users', UsersConstroller.index);
routes.get('/users/:id', UsersConstroller.show);
routes.post('/users', UsersConstroller.create);
routes.put('/users/:id', UsersConstroller.update);
routes.delete('/users/:id', UsersConstroller.destroy);

export default routes;