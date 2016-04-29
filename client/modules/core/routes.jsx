import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import ItemList from '../items/containers/ItemList.js';
import EditItem from '../items/containers/EditItem.js';
import NewUser from '../users/containers/NewUser.js';
import Login from '../users/containers/Login.js'
import CategoryList from '../items/containers/CategoryList.js';
import NewCategory from '../items/containers/NewCategory.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);
  FlowRouter.route('/', {
    name: 'items.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ItemList />)
      });
    }
  });
  FlowRouter.route('/edit', {
    name: 'items.edit',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<EditItem />)
      });
    }
  });
  FlowRouter.route('/edit/:itemId', {
    name: 'items.edit',
    action({itemId}) {
      mount(MainLayoutCtx, {
        content: () => (<EditItem itemId={itemId} />)
      });
    }
  });
  FlowRouter.route('/register', {
    name: 'users.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewUser />)
      });
    }
  });
  FlowRouter.route('/login', {
    name: 'users.login',
    action(){
      mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });
  FlowRouter.route('/logout', {
    name: 'users.logout',
    action(){
      Meteor.logout();
      FlowRouter.go('/')
    }
  });
  FlowRouter.route('/categories', {
    name: 'categories.list',
    action(){
      mount(MainLayoutCtx, {
        content: () => (<CategoryList />)
      });
    }
  })
  FlowRouter.route('/categories/new', {
    name: 'categories.new',
    action(){
      mount(MainLayoutCtx, {
        content: () => (<NewCategory />)
      });
    }
  })
}
