import todolistModel from "../models/todolist.model";
import axios from 'axios';
export default {
    create: async function (req, res) {
        try {
            const { name, status } = req.body
            let { result, message, data } = await todolistModel.create(name, status)
            console.log(result);
            if (result) {

                return res.status(200).json({
                    data,
                    message
                });
            }
            else {
                return res.status(500).json(message);
            }

        } catch (err) {
            console.log(err);
        }


    },
    getAlltodolist: async function (req, res) {
        try {
            let { status, message, data } = await todolistModel.getAlltodolist();
            if (status) {
                return res.status(200).json(data);
            }
            else {
                return res.status(500).json({ message });
            }
        } catch (err) {
            console.log('Error fetching todolists:', err);
        }

    },
    gettodolistById: async function (req, res) {
        try {
            let { status, message, data } = await todolistModel.gettodolistById(parseInt(req.params.id));
            if (status) {
                return res.status(200).json(data);
            } else {
                return res.status(500).json(message);
            }

        } catch (err) {
            console.log("err", err);

        }
    },

    deletetodolistById: async function (req, res) {
        try {
            const id = parseInt(req.params.id)
            let { status, message, data } = await todolistModel.deletetodolistById(id)
            if (status) {
                return res.status(200).json(message);
            } else {
                return res.status(500).json(message);
            }
        } catch (err) {
            console.log(err);
        }

    },
    updatetodolistById: async function (req, res) {
        try {
            const id = parseInt(req.params.id)
            const { status, name } = req.body
            let { result, message, data } = await todolistModel.updatetodolistById(id, name, status)
            if (result) {
                return res.status(200).json({
                    data
                });
            } else {
                return res.status(500).json(message);
            }
        } catch (err) {
            console.log(err);
        }


    },

}


