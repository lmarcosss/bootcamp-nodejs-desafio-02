module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'gonodemodulo2',
  imezone: '-02:00',
  operatorAliases: false,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true
  }
}
