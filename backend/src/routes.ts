import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/multer'
import { isAuthenticated } from './middlewares/isAuthenticated';

import { CreateUserController } from './controllers/users/CreateUserController';
import { AuthUserController } from './controllers/users/AuthUserController';
import { DetailUserController } from './controllers/users/DetailUserController';
import { DeleteUserController } from './controllers/users/DeleteUserController';

import { CreateAnimalTypeController } from './controllers/animals/CreateAnimalTypeController';
import { ListAnimalTypeController } from './controllers/animals/ListAnimalTypeController';

import { CreateBreedController } from './controllers/breeds/CreateBreedController';
import { ListByBreedController } from './controllers/breeds/ListByBreedController';

import { CreatePetController } from './controllers/pets/CreatePetController';
//import { RemoveOrderController } from './controllers/order/RemoveOrderController';
//import { AddItemController } from './controllers/order/AddItemController';
//import { RemoveItemController } from './controllers/order/RemoveItemController';
//import { SendOrderController } from './controllers/order/SendOrderController';
//import { ListOrderController } from './controllers/order/ListOrderController';
//import { DetailOrderController } from './controllers/order/DetailOrderController';
//import { FinishOrderController } from './controllers/order/FinishOrderController';


const upload = multer(uploadConfig.upload("./tmp"));
const router = Router();

//-- ROTAS USER --
router.post('/signup', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.delete('/user', isAuthenticated, new DeleteUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

//-- ROTAS ANIMALS --
router.post('/category', isAuthenticated, new CreateAnimalTypeController().handle)
router.get('/category', isAuthenticated, new ListAnimalTypeController().handle)

//-- ROTAS BREEDS --
router.post('/breed', isAuthenticated, new CreateBreedController().handle)
router.get('/category/breed', isAuthenticated, new ListByBreedController().handle)

//-- ROTAS PETS --

router.post('/pet', isAuthenticated, upload.single('file'), new CreatePetController().handle)
//router.post('/order', isAuthenticated, new CreateOrderController().handle)
//router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
//router.post('/order/add', isAuthenticated, new AddItemController().handle)
//router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)
//router.put('/order/send', isAuthenticated, new SendOrderController().handle)
//router.get('/order', isAuthenticated, new ListOrderController().handle)
//router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)
//router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)





export { router };