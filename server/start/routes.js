'use strict'

//const UserController = require('../app/Controllers/Http/UserController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.group ( () => {
  // Users
  Route.post('auth/register', 'UserController.register')
  Route.post('auth/login', 'UserController.login')
  // Projects
  Route.get('projects', 'ProjectController.index').middleware('auth')
  Route.post('projects', 'ProjectController.create').middleware('auth')
  Route.patch('projects/:id', 'ProjectController.update').middleware('auth')
  Route.delete('projects/:id', 'ProjectController.destroy').middleware('auth')
  // Tasks
  Route.get('projects/:id/tasks', 'TaskController.index').middleware('auth')
  Route.post('projects/:id/tasks', 'TaskController.create').middleware('auth')
  Route.patch('tasks/:id', 'TaskController.update').middleware('auth')
  Route.delete('tasks/:id', 'TaskController.destroy').middleware('auth')
}).prefix('api')
