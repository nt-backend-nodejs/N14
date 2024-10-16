export const userLoggerMiddleware = (req, res, next) => {
  try {
    console.log({
      METHOD: req.method,
      URL: req.url,
      ROUTE: "USER"
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