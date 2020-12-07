// @flow
import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
  ALL_PROJECTS,
  PROJECT_CATEGORIES,
  PROJECT_STATUSES,
  PROJECT_COLORS,
  PROJECT_ACCESS_ROLES,
  USER_PERSONS,

  ADD_PROJECT,
  ADD_PROJECT_CATEGORY,
  ADD_PROJECT_STATUS,
  ADD_PROJECT_ASSIGNEES,
  INVITE_PERSON,

  PROJECT_LABELS,
  ADD_PROJECT_LABEL, 
   
} from './actionTypes';

import {
  getAllProjectsSuccess, getAllProjectsError,
  getProjectCategoriesSuccess, getProjectCategoriesError,
  getProjectStatusesSuccess, getProjectStatusesError,
  getUserPersonsSuccess, getUserPersonsError,
  getProjectColorsSuccess, getProjectColorsError,
  getProjectAccessRolesSuccess, getProjectAccessRolesError,

  addProjectSuccess, addProjectError,
  addProjectCategorySuccess, addProjectCategoryError,
  addProjectStatusSuccess, addProjectStatusError,
  addProjectAssigneesSuccess, addProjectAssigneesError,
  invitePersonSuccess, invitePersonError ,
  
  getProjectLabelsSuccess, getProjectLabelsError,
  addProjectLabelSuccess, addProjectLabelError, 
  
} from './actions';

import {
  fetchData,
} from '../../service/fetch';

import {
  postData
} from '../../service/post';

function* getAllProjects() {
  try {
    const response = yield call(fetchData, '/allprojects');
    yield put(getAllProjectsSuccess(response));
  } catch (error) {
    console.log('get all projects error', error);
    yield put(getAllProjectsError(error));
  }
}

function* getProjectCategories() {
  try {
    const response = yield call(fetchData, '/projectcategories');
    yield put(getProjectCategoriesSuccess(response));
  } catch (error) {
    console.log('get project categories error', error);
    yield put(getProjectCategoriesError(error));
  }
}

function* getProjectStatuses() {
  try {
    const response = yield call(fetchData, '/projectstatuses');
    yield put(getProjectStatusesSuccess(response));
  } catch (error) {
    console.log('get project statuses error', error);
    yield put(getProjectStatusesError(error));
  }
}

function* getUserPersons() {
  try {
    const response = yield call(fetchData, '/userpersons');
    yield put(getUserPersonsSuccess(response));
  } catch (error) {
    console.log('get persons error', error);
    yield put(getUserPersonsError(error));
  }
}

function* getProjectColors() {
  try {
    const response = yield call(fetchData, '/projectcolors');
    yield put(getProjectColorsSuccess(response));
  } catch (error) {
    console.log('get project colors error', error);
    yield put(getProjectColorsError(error));
  }
}

function* getProjectAccessRoles() {
  try {
    const response = yield call(fetchData, '/projectaccessroles');
    yield put(getProjectAccessRolesSuccess(response));
  } catch (error) {
    console.log('get project access roles error', error);
    yield put(getProjectAccessRolesError(error));
  }
}


function* addProject({payload}) {
  try {    
    const response = yield call(postData, '/addproject', payload);    
    yield put(addProjectSuccess(response));
  } catch (error) {
    console.log('add project error', error);
    yield put(addProjectError(error));
  }
}

function* addProjectCategory({payload}) {
  try {
    const response = yield call(postData, '/addprojectcategory', payload);
    yield put(addProjectCategorySuccess(response));
  } catch (error) {
    console.log('add project category error', error);
    yield put(addProjectCategoryError(error));
  }
}

function* addProjectStatus({payload}) {
  try {
    const response = yield call(postData, '/addprojectstatus', payload);
    yield put(addProjectStatusSuccess(response));
  } catch (error) {
    console.log('add project status error', error);
    yield put(addProjectStatusError(error));
  }
}

function* addProjectAssignees({payload}) {
  try {
    const response = yield call(postData, '/addprojectassignees', payload.assignees);
    yield put(addProjectAssigneesSuccess(response));
  } catch (error) {
    console.log('add project assignees error', error);
    yield put(addProjectAssigneesError(error));
  }
}

function* invitePerson({payload}) {
  try {
    const response = yield call(postData, '/inviteperson', payload);
    yield put(invitePersonSuccess(response));
  } catch (error) {
    console.log('invite person error', error);
    yield put(invitePersonError(error));
  }
}

function* getProjectLabels({payload}) {
  try {    
    const response = yield call(fetchData, '/projectlabels', payload);
    yield put(getProjectLabelsSuccess(response));    
  } catch (error) {
    console.log('get project labels error', error);
    yield put(getProjectLabelsError(error));
  }
}

function* addProjectLabel({payload}) {
  try {    
    const response = yield call(postData, '/addprojectlabel', payload);        
    yield put(addProjectLabelSuccess(response));
  } catch (error) {
    console.log('add project label error', error);
    yield put(addProjectLabelError(error));
  }
}


export function* watchGetAllProjects() {
  yield takeEvery(ALL_PROJECTS, getAllProjects);
}

export function* watchGetProjectCategories() {
  yield takeEvery(PROJECT_CATEGORIES, getProjectCategories);
}

export function* watchGetProjectStatuses() {
  yield takeEvery(PROJECT_STATUSES, getProjectStatuses);
}

export function* watchGetUserPersons() {
  yield takeEvery(USER_PERSONS, getUserPersons);
}

export function* watchGetProjectColors() {
  yield takeEvery(PROJECT_COLORS, getProjectColors);
}

export function* watchGetProjectAccessRoles() {
  yield takeEvery(PROJECT_ACCESS_ROLES, getProjectAccessRoles);
}


export function* watchAddProject() {
  yield takeEvery(ADD_PROJECT, addProject);
}

export function* watchAddProjectCategory() {
  yield takeEvery(ADD_PROJECT_CATEGORY, addProjectCategory);
}

export function* watchAddProjectStatus() {
  yield takeEvery(ADD_PROJECT_STATUS, addProjectStatus);
}

export function* watchAddProjectAssignees() {
  yield takeEvery(ADD_PROJECT_ASSIGNEES, addProjectAssignees);
}

export function* watchInvitePerson() {
  yield takeEvery(INVITE_PERSON, invitePerson);
}


export function* watchGetProjectLabels() {
  yield takeEvery(PROJECT_LABELS, getProjectLabels);
}

export function* watchAddProjectLabel() {
  yield takeEvery(ADD_PROJECT_LABEL, addProjectLabel);
}


function* ProjectSaga() {
  yield all([
    fork(watchGetAllProjects),
    fork(watchGetProjectCategories),
    fork(watchGetProjectStatuses),
    fork(watchGetUserPersons),
    fork(watchGetProjectColors),
    fork(watchGetProjectAccessRoles),

    fork(watchAddProject),
    fork(watchAddProjectCategory),
    fork(watchAddProjectStatus),
    fork(watchAddProjectAssignees),
    fork(watchInvitePerson),

    fork(watchGetProjectLabels),
    fork(watchAddProjectLabel),      

  ]);
}

export default ProjectSaga;
