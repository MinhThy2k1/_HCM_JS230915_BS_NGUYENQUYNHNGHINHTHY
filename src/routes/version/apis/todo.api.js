import todoController from "../../../controller/todolist.controller";
import express from "express";
const Router = express.Router();
Router.post("", todoController.create)
Router.get("", todoController.getAlltodolist)
Router.get("/:id", todoController.gettodolistById)
Router.put("/:id", todoController.updatetodolistById)
Router.delete("/:id", todoController.deletetodolistById)

export default Router