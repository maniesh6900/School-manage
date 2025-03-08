"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const School_controller_1 = require("../controller/School-controller");
router.route("/create").post(School_controller_1.createSchool);
router.route("/get").get(School_controller_1.getSchools);
exports.default = router;
