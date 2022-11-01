import { Router } from 'express';
import UsersConstroller from './controllers/UsersConstroller';
import SessionController from './controllers/SessionController'
import auth from "./middlewares/auth";


const routes = new Router();

routes.post('/sessions', SessionController.create);

routes.use(auth);

routes.get('/users', UsersConstroller.index);
routes.get('/users/:id', UsersConstroller.show);
routes.post('/users', UsersConstroller.create);
routes.put('/users/:id', UsersConstroller.update);
routes.delete('/users/:id', UsersConstroller.destroy);

export default routes;