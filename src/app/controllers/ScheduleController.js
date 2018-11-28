const { Appointment, User } = require('../models')
const { Op } = require('sequelize')
const moment = require('moment')

class ScheduleController {
  async index (req, res) {
    const { id } = req.session.user
    console.log('IDDDD: ' + id)
    const appointments = await Appointment.findAll({
      include: [{ model: User, as: 'user' }],
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
    return res.render('schedule/index', {
      appointments
    })
  }
}

module.exports = new ScheduleController()
