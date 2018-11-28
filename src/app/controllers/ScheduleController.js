const { Appointment, User } = require('../models')
const { Op } = require('sequelize')
const moment = require('moment')

class ScheduleController {
  async index (req, res) {
    const { id } = req.session.user
    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.session.user.id,
        date: {
          [Op.between]: [
            moment()
              .startOf('day')
              .format(),
            moment()
              .endOf('day')
              .format()
          ]
        }
      },
      include: [{ model: User, as: 'user' }]
    })
    return res.render('schedule/index', {
      appointments
    })
  }
}

module.exports = new ScheduleController()
