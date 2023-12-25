import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
    create: async function (name, status) {
        try {
            const todolist = await prisma.todolist.create({
                data: {
                    name: name,
                    status: status
                },
            });
            return {
                result: true,
                message: "Thành công",
                data: todolist
            }
        } catch (err) {
            console.log('err', err)
            let message = err.message || "Model Error";
            return {
                result: false,
                message: message,
                data: null
            }
        }
    },
    getAlltodolist: async function () {
        try {
            let todolist = await prisma.todolist.findMany();
            return {
                status: true,
                data: todolist
            }

        } catch (err) {
            console.log('Error:', err);
            let message = null;
            return {
                status: false,
                message: message ? message : "modelError",
                data: null
            }
        }
    },
    gettodolistById: async function (id) {
        try {
            let todolist = await prisma.todolist.findUnique({
                where: {
                    id: Number(id),
                }

            });
            return {
                status: true,
                message: "ok",
                data: todolist
            };
        } catch (err) {
            console.log('Error model:', err);
            return {
                status: false,
                message: "modelError",
                data: null,
            };
        }
    },

    deletetodolistById: async function (id) {
        try {
            let todolist = await prisma.todolist.delete({
                where: {
                    id: id
                }

            });
            return {
                status: true,
                message: "ok",
                data: todolist
            };


        } catch (err) {
            console.log(err);
        }

    },
    updatetodolistById: async function (id, name, status) {
        try {
            let todolist = await prisma.todolist.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name: name,
                    status: "completed"

                },
            })
            return {
                result: true,
                message: "ok",
                data: todolist
            }

        } catch (err) {
            console.log(err);
        }

    },
}



