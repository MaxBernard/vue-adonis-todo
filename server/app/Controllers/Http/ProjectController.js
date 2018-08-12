'use strict'

const Project = use('App/Models/Project')
const AuthService = use('App/Services/AuthService')

/**
 * Resourceful controller for interacting with projects
 */
class ProjectController {
  /**
   * Show a list of all projects.
   * GET projects
   */
  async index ({ auth, request, response, view }) {
    const user = await auth.getUser()
    return await user.projects().fetch()
  }

  /**
   * Render a form to be used for creating a new project.
   * GET projects/create
   */
  async create ({ auth, request, response, view }) {
    const user = await auth.getUser()
    const { title, description } = request.all()
    const project = new Project
    project.fill({ title, description })
    await user.projects().save(project)
    return project
  }

  /**
   * Create/save a new project.
   * POST projects
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single project.
   * GET projects/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing project.
   * GET projects/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update project details.
   * PUT or PATCH projects/:id
   */
  async update ({ auth, params, request, response }) {
    const user = await auth.getUser()
    const { id } = params.id
    const project = await Project.find(id)
    AuthService.verifyPermission(project, user)
    project.merge(request)
    await project.save()
    return project
  }

  /**
   * Delete a project with id.
   * DELETE projects/:id
   */
  async destroy ({ auth, params, request, response }) {
    const user = await auth.getUser()
    const { id } = params.id
    const project = await Project.find(id)
    AuthService.verifyPermission(project, user)
    await project.delete()
    return project
  }
}

module.exports = ProjectController
