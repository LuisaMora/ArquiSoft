import { createRouter } from 'next-connect';
import { getAllUsers } from '../../../../controlador/usuarios/usuarios'

const router = createRouter();
router.get(getAllUsers);
export default router.handler;