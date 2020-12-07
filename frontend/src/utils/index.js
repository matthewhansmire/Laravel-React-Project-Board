import moment from 'moment';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

/****
  calculating number of days between two dates  
****/
export function calculateDaysBetweenDates(startDate, endDate) {
  var start = moment(startDate, 'YYYY-MM-DD');
  var end = moment(endDate, 'YYYY-MM-DD');

  var duration = moment.duration(end.diff(start)).asDays();
  return duration;
}

/****
  value: segunfunmi oyedele
  return: SE
****/
export function getInitial(value) {
  if (!value) return;
  var chunks = value.split(" ");
  var firstLetter = chunks[0].slice(0, 1);
  var secondLetter = chunks.length > 1 ? chunks[1].slice(0, 1) : '';
  var initials = firstLetter + secondLetter;
  return initials.toUpperCase();
}

export function showToastr(param){
  var type = param.type;
  var title = param.title;
  var message = param.message;

  var positionClass = 'toast-top-right';
  var timeOut = 3000;
  var extendedTimeOut = 1000;
  var closeButton = true;
  var showEasing = 'swing';
  var hideEasing = 'linear';
  var showMethod = 'fadeIn';
  var hideMethod = 'fadeOut';
  var showDuration = 300;
  var hideDuration = 300;

  toastr.options = {
    positionClass: positionClass,
    timeOut: timeOut,
    extendedTimeOut: extendedTimeOut,
    closeButton: closeButton,
    debug: false,
    progressBar: false,
    preventDuplicates: false,
    newestOnTop: false,
    showEasing: showEasing,
    hideEasing: hideEasing,
    showMethod: showMethod,
    hideMethod: hideMethod,
    showDuration: showDuration,
    hideDuration: hideDuration
  }

  // setTimeout(() => toastr.success(`Settings updated `), 300)
  if (type === 'success')
    toastr.success(message, title)
  if (type === "info")
    toastr.info(message, title)
  else if (type === "warning")
    toastr.warning(message, title)
  else if (type === "error")
    toastr.error(message, title)
}
