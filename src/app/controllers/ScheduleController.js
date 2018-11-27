const { Appointment } = require('../models')

class ScheduleController {
  index (req, res) {
    const { userId } = req.session.user
    const appointments = Appointment.findAll({
      where: {
        provider_id: userId
      }
    })
    return res.render('schedule/index', { appointments })
  }
}

module.exports = new ScheduleController()
