

export const getUsersController = (req, res, next) => {
  try {
    // throw new Error("MISTAKE");
    res.send("GET ONE USER")
  } catch (error) {
    next(error)
  }
}

export const createUserController = (req, res, next) => {
  try {
    res.send("GET ONE USER")
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