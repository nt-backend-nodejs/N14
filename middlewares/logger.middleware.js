export const loggerMiddleware = (req, res, next) => {
  try {
    console.log({
      METHOD: req.method,
      URL: req.url
    })
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