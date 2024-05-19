import express from "express";
import { getFood } from "../controller/food.controller.js";

const router=express.Router();

router.get("/",getFood)

export default router;