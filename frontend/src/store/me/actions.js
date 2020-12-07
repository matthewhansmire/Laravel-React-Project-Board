import { 
  MY_PROJECTS, MY_PROJECTS_SUCCESS, MY_PROJECTS_ERROR,
  MY_TASKS, MY_TASKS_SUCCESS, MY_TASKS_ERROR,
  MY_EVENTS, MY_EVENTS_SUCCESS, MY_EVENTS_ERROR,
  MY_MILESTONES, MY_MILESTONES_SUCCESS, MY_MILESTONES_ERROR,
  MY_ACTIVITIES, MY_ACTIVITIES_SUCCESS, MY_ACTIVITIES_ERROR,
  MY_CALENDAR, MY_CALENDAR_SUCCESS, MY_CALENDAR_ERROR,
  BOOKMARKS, BOOKMARKS_SUCCESS, BOOKMARKS_ERROR,
  QUICKIES, QUICKIES_SUCCESS, QUICKIES_ERROR
} from './actionTypes';

////////////////////////////////////
export const getMyProjects = () => {
  return {
      type: MY_PROJECTS      
  }
}

export const getMyProjectsSuccess = (myProjects) => {      
  return {
    type: MY_PROJECTS_SUCCESS,
    payload: myProjects
  }
}

export const getMyProjectsError = (error) => {
  return {
    type: MY_PROJECTS_ERROR,
    payload: error
  }
}

////////////////////////////////
export const getMyTasks = () => {
  return {
    type: MY_TASKS,
  }
}

export const getMyTasksSuccess = (myTasks) => {
  return {
    type: MY_TASKS_SUCCESS,
    payload: myTasks
  }
}

export const getMyTasksError = (error) => {
  return {
    type: MY_TASKS_ERROR,
    payload: error
  }
}

////////////////////////////////
export const getMyEvents = () => {
  return {
    type: MY_EVENTS
  }
}

export const getMyEventsSuccess = (events) => {
  return {
    type: MY_EVENTS_SUCCESS,
    payload: events
  }
}

export const getMyEventsError = (error) => {
  return {
    type: MY_EVENTS_ERROR,
    payload: error
  }
}

////////////////////////////////
export const getMyMilestones = () => {
  return {
    type: MY_MILESTONES
  }
}

export const getMyMilestonesSuccess = (milestones) => {
  return {
    type: MY_MILESTONES_SUCCESS,
    payload: milestones
  }
}

export const getMyMilestonesError = (error) => {
  return {
    type: MY_MILESTONES_ERROR,
    payload: error
  }
}
 
////////////////////////////////
export const getMyCalendar = () => {
  return {
    type: MY_CALENDAR
  }
}

export const getMyCalendarSuccess = (myCalendar) => {
  return {
    type: MY_CALENDAR_SUCCESS,
    payload: myCalendar
  }
}

export const getMyCalendarError = (error) => {
  return {
    type: MY_CALENDAR_ERROR,
    payload: error
  }
}
  
////////////////////////////////
export const getMyActivities = () => {
  return {
    type: MY_ACTIVITIES
  }
}

export const getMyActivitiesSuccess = (myActivities) => {
  return {
    type: MY_ACTIVITIES_SUCCESS,
    payload: myActivities
  }
}

export const getMyActivitiesError = (error) => {
  return {
    type: MY_ACTIVITIES_ERROR,
    payload: error
  }
}
  
////////////////////////////////
export const getBookmarks = () => {
  return {
    type: BOOKMARKS
  }
}

export const getBookmarksSuccess = (bookmarks) => {
  return {
    type: BOOKMARKS_SUCCESS,
    payload: bookmarks
  }
}

export const getBookmarksError = (error) => {
  return {
    type: BOOKMARKS_ERROR,
    payload: error
  }
}

////////////////////////////////
export const getQuickies = () => {
  return {
    type: QUICKIES
  }
}

export const getQuickiesSuccess = (quickies) => {
  return {
    type: QUICKIES_SUCCESS,
    payload: quickies
  }
}

export const getQuickiesError = (error) => {
  return {
    type: QUICKIES_ERROR,
    payload: error
  }
}
