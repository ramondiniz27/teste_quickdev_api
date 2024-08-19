import * as express from "express";
import { createUser, findUserByID } from "../controllers/UserController";

const router = express.Router();

router.post('/', createUser)
router.get('/:id', findUserByID)




module.exports = router