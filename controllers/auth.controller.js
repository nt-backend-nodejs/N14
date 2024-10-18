import { createUser } from '../services/index.js'

export const registerController = async (req, res, next) => {
  try {

    const user = await createUser(req.body)

    res.send(user)
  } catch (error) {
    next(error)
  }
}
export const loginController = (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
}
export const logoutController = (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
}