// const controller = {}

import { checkPassword, getUserByEmail, saveUser } from '../services/auth.service.js'


// controller.register = (req, res, next)


export const registerController = async (req, res, next) => {
  try {

    const user = await saveUser(req.body)
    res.send(user)
  } catch (error) {
    next(error)
  }
}

export const loginController = async (req, res, next) => {
  try {
    const loginData = req.body

    const user = await getUserByEmail(loginData.email)

    const passwordCompare = await checkPassword(loginData, user.password)

    console.log({
      user,
      passwordCompare,
      loginData
    });

    if (!passwordCompare) {
      throw new Error(`EMAIL OR PASSWORD is not correct`)
    }

    res.send("WELCOME TO HOME! BABY :)")
  } catch (error) {
    next(error)
  }
}

export const updateUserController = (req, res, next) => {
  try {
    res.send("GET ONE USER")
  } catch (error) {
    next(error)
  }
}
export const deleteUserController = (req, res, next) => {
  try {
    res.send("GET ONE USER")
  } catch (error) {
    next(error)
  }
}

export const getUserController = (req, res, next) => {
  try {
    res.send("GET ONE USER")
  } catch (error) {
    next(error)
  }
}