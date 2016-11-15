import * as types from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';

export function loadMyProjects() {
  return (dispatch) => {
    fetch('/api/v1/projects/list')
      .then(res => {
        res.json().then((myProjects) => {
          dispatch({
            type: types.LOAD_MY_PROJECTS,
            myProjects
          });
        });
      }).catch(error => {
        console.error(error);
      });
  };
}

function _createProjectPostRes(config, json) {
  return {
    type: types.CREATE_PROJECT,
    config,
    posts: json
  };
}

export function createProject(config) {
  return (dispatch) => {
    fetch('/api/v1/upload/config/file', {
      method: 'post',
      header: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(config)
    }).then(res => {
      res.json().then(() => {
        dispatch(_createProjectPostRes(config));
      });
    }).catch(error => {
      console.error(error);
    });
  };
}
