export const registerMiddleware = (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).send("Email va Password bo'lish shart!")
  }

  if (password.length <= 5) {
    res.status(400).send("Passwordning uzunligi 5 dan yuqori bo'lishi kerka!")
  }

  if (validateEmail(email)) {
    res.status(400).send("Passwordning uzunligi 5 dan yuqori bo'lishi kerka!")
  }



  next()
}
