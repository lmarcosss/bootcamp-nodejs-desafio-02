const { Appointment, User } = require('../models')
const { Op } = require('sequelize')
const moment = require('moment')

class ScheduleController {
  async index (req, res) {
    const { id } = req.session.user
    const appointments = await Appointment.findAll({
      // include: [{ model: User, as: 'user' }],
      // include: [{ model: User, as: 'user' }],
      where: {
        provider_id: id,
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
      }
    })
    return res.render('provider/index', { appointments })
  }
}

module.exports = new ScheduleController()
