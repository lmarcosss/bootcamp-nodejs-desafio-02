const { User } = require('../models')
module.exports = (req, res, next) => {
  const { id } = req.session.user
  const user = User.findOne({
    where: {
      user_id: id,
      provider: true
    }
  })
  if (user) {
    res.redirect('/app/dashboard/provider')
  }

  next()
}
