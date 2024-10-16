
export const registerValidationMiddleware = (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.status(400).send({ message: "EMAIl and PASSWORD must have" })
    }

    next()
  } catch (error) {
    const { message, name, stack } = error
    res.status(400).send({
      message,
      name,
      stack
    })
  }
}
