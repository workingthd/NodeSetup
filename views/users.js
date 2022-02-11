const { userHelper } = require('../helpers')
const { use } = require('../routes/users')
const { userViews } = require('.')
const e = require('express')
const { USER } = require('../models')



const create = async ({ body }) => {
  try {
    console.log(body)
    //const reqData = userHelper.formateData(body)

    //const data = await USER.create(reqData)
    return { type: 'success', message: `${data.firstName} user created`, data }
  } catch (error) {
    throw error
  }
}






const findAll = async ({ query }) => {
  try {
    const options = query
    const data = await USER.find(options)
    if (data.length > 0) {
      return { type: 'success', message: 'Record found!', data }
    } else {
      return { type: 'bad', message: 'Record not found!' }
    }
  } catch (error) {
    throw error
  }
}

  module.exports = {

    findAll,
    create

  }
  