import { Router } from "express";
const router = Router();
import { createSchool, getSchools } from "../controller/School-controller";

router.route("/create").post(createSchool);
router.route("/get").get(getSchools);


export default router;