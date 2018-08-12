'use strict'

const Model = use('Model')

class Project extends Model {

  // Associate project with User
  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Project
