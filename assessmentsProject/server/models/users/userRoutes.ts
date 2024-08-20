// userRoutes.ts
import { Router } from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from './userController';  // נתיב אל בקר המשתמש

const router = Router();

router.post('/users', createUser);        // יצירת משתמש
router.get('/users', getUsers);           // קבלת כל המשתמשים
router.get('/users/:id', getUserById);    // קבלת משתמש לפי ID
router.put('/users/:id', updateUser);     // עדכון משתמש לפי ID
router.delete('/users/:id', deleteUser);  // מחיקת משתמש לפי ID

export default router;
