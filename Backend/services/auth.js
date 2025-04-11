import jwt from "jsonwebtoken";git 

function setUser (user) {
  return jwt.sign({ name: user.name, email: user.email ,type:user.type,}, process.env.SECRET)
}

function getUser (token) {
  if (!token) return null
  try {
    return jwt.verify(token, secret)
  } catch (error) {
    return null;
  }
}

export default {
  setUser,
  getUser
}
