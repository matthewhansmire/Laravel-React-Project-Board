import { all } from 'redux-saga/effects';

import AuthSaga from './auth/saga';

import RightBarSaga from './rightBar/saga';

import MeSaga from './me/saga';
import ProjectSaga from './project/saga';
import PeopleSaga from './people/saga';
import ReportSaga from './report/saga';

import ActivitySaga from './activity/saga';
import CalendarSaga from './calendar/saga';
import DiscussionSaga from './discussion/saga';
import FileSaga from './file/saga';
import GanttSaga from './gantt/saga';
import NoteSaga from './note/saga';
import OverviewSaga from './overview/saga';
import TaskSaga from './task/saga';
import TimeSaga from './time/saga';

export default function* rootSaga() {
    yield all([        
        AuthSaga(),
        RightBarSaga(),
        MeSaga(),
        ProjectSaga(),
        PeopleSaga(),
        ReportSaga(),

        ActivitySaga(),
        CalendarSaga(),
        DiscussionSaga(),
        FileSaga(),
        GanttSaga(),
        NoteSaga(),
        OverviewSaga(),
        TaskSaga(),
        TimeSaga()
    ])
}