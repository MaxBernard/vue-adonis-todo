'use strict'

const Project = use('App/Models/Project')
const Task = use('App/Models/Task')
const AuthService = use('App/Services/AuthService')

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {
  /**
   * Show a list of all tasks.
   * GET tasks
   */
  async index ({ auth, request, params, response, view }) {
    const user = await auth.getUser()
    const { id } = params.id
    const project = await Project.find(id)
    AuthService.verifyPermission(project, user)
    return await project.tasks().fetch()
  }

  /**
   * Render a form to be used for creating a new task.
   * GET tasks/create
   */
  async create ({ auth, request, params, response, view }) {
    const user = await auth.getUser()
    const { title, description } = request.all()
    const { id } = params.id
    const project = await Project.find(id)
    AuthService.verifyPermission(project, user)

    const task = new Task
    task.fill({ title, description })
    await project.tasks().save(task)
    return task
  }

  /**
   * Create/save a new task.
   * POST tasks
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single task.
   * GET tasks/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing task.
   * GET tasks/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update task details.
   * PUT or PATCH tasks/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a task with id.
   * DELETE tasks/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TaskController
