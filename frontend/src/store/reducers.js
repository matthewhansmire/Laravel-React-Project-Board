import { combineReducers } from "redux";

import Auth from "./auth/reducer";

import RightBar from "./rightBar/reducer";

import Me from './me/reducer';
import Project from './project/reducer';
import People from './people/reducer';
import Report from './report/reducer';

import Activity from './activity/reducer';
import Calendar from './calendar/reducer';
import Discussion from './discussion/reducer';
import File from './file/reducer';
import Gantt from './gantt/reducer';
import Note from './note/reducer';
import Overview from './overview/reducer';
import Task from './task/reducer';
import Time from './time/reducer';

const rootReducer = combineReducers({  
  Auth,
  RightBar,
  Me,
  Project,
  People,
  Report,

  Activity,
  Calendar,
  Discussion,
  File,
  Gantt,
  Note,
  Overview,
  Task,
  Time
});

export default rootReducer;
