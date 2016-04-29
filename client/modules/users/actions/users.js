export default {
  create({Meteor, LocalState}, email, password) {
    if (!email) {
      return LocalState.set('CREATE_USER_ERROR', 'Email is required.');
    }

    if (!password) {
      return LocalState.set('CREATE_USER_ERROR', 'Password is required.');
    }

    LocalState.set('CREATE_USER_ERROR', null);

    Accounts.createUser({email, password});
    FlowRouter.go('/');
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  },

  login({Meteor, LocalState, FlowRouter}, email, password) {
    if (!email) {
      return LocalState.set('LOGIN_ERROR', 'Email is required.');
    }

    if (!password) {
      return LocalState.set('LOGIN_ERROR', 'Password is required.');
    }

    LocalState.set('LOGIN_ERROR', null);
    Meteor.loginWithPassword(email, password, (err, response) => {
      if(err)
        return LocalState.set('LOGIN_ERROR', err.reason);
      else
        FlowRouter.go('/');
    });
  },
};
