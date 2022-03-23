const { matchedData } = require('express-validator')
const { tracksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')
/**
 * Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 **/
const getItems = async (req, res) => {
	try {
		const data = await tracksModel.find({})
		res.send({ data })
	} catch (e) {
		handleHttpError(res, 'ERROR_GET_ITEMS')
	}
}
/**
 * Obtener un detalle!
 * @param {*} req
 * @param {*} res
 **/
const getItem = async (req, res) => {
	try {
		req = matchedData(req)
		const { id } = req
		const data = await tracksModel.findById(id)
		res.send({ data })
	} catch (e) {
		handleHttpError(res, 'ERROR_GET_ITEM')
	}
}
/**
 * Insertar un registro!
 * @param {*} req
 * @param {*} res
 **/
const createItem = async (req, res) => {
	try {
		const body = matchedData(req)
		const data = await tracksModel.create(body)
		await res.send({ data })
	} catch (e) {
		handleHttpError(res, 'ERROR_CREATE_ITEMS')
	}
}
/**
 * Actualizar un registro!
 * @param {*} req
 * @param {*} res
 **/
const updateItem = async (req, res) => {
	try {
		// from one object we create two objects
		const { id, ...body } = matchedData(req)
		const data = await tracksModel.findOneAndUpdate(
			// first argument query id, search
			id,
			// second argument query body, info
			body
		)
		await res.send({ data })
	} catch (e) {
		handleHttpError(res, 'ERROR_UPDATE_ITEMS')
	}
}
/**
 * Eliminar un registro!
 * @param {*} req
 * @param {*} res
 **/
const deleteItem = async (req, res) => {
	try {
		req = matchedData(req)
		const { id } = req
		const data = await tracksModel.deleteOne({ _id: id })
		res.send({ data })
	} catch (e) {
		console.log(e)
		handleHttpError(res, 'ERROR_DELETE_ITEM')
	}
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
