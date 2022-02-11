const { userViews } = require('../views')
const { setResponse } = require('../helpers')

const create = async (req, res) => {
  try {
    const data = await userViews.create(req)
    setResponse(res, data)
  } catch (error) {
    console.log('Error ', error)
    setResponse(res, { type: 'serverError' })
  }
}

const findAll = async (req, res) => {
  try {
    const data = await userViews.findAll(req)
    setResponse(res, data)
  } catch (error) {
    setResponse(res, { type: 'serverError' })
  }
}

module.exports = {
  create,
  findAll
}
