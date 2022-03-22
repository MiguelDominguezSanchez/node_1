const { storageModel } = require('../models')
/**
 * Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 **/
const getItems = async (req, res) => {
	const data = await storageModel.find({})
	res.send({ data })
}
/**
 * Obtener un detalle!
 * @param {*} req
 * @param {*} res
 **/
const getItem = (req, res) => {}
/**
 * Insertar un registro!
 * @param {*} req
 * @param {*} res
 **/
const createItem = async (req, res) => {
	const { body, file } = req
	console.log(file)
	// const data = await storageModel.create(body)
	// await res.send({ data })
	RTCRtpSender.send({ file })
}
/**
 * Actualizar un registro!
 * @param {*} req
 * @param {*} res
 **/
const updateItem = (req, res) => {}
/**
 * Eliminar un registro!
 * @param {*} req
 * @param {*} res
 **/
const deleteItem = (req, res) => {}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
