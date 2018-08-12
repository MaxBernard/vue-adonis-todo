const InvalidAccessException = use('App/Exceptions/InvalidAccessException')
const InvalidResourceException = use('App/Exceptions/InvalidResourceException')

class AuthService {
  verifyPermission(resource, user) {
    if (resource.user_id !== user.id) {
      throw new InvalidAccessException
    }  

    if ( !resource ) {
      throw new InvalidResourceException
    }  
  }

module.exports = new AuthService