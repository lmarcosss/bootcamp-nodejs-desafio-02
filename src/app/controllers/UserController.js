const { User } = require('../models')
class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    const { filename: avatar } = req.file
    await User.create({ ...req.body, avatar })

    return res.redirect('/')
  }

  index (req, res) {
    const { user } = req.params
    User.findOne({
      where: {
        user_id: user
      }
    })
  }
}

module.exports = new UserController()
