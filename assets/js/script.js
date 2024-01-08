// Declared variable object called 'localeSettings' as an empty object. 
const localeSettings = {};
dayjs.locale(localeSettings);

// This function has a variable titled 'currentHour' which is equal to the dayjs libary current hour format 'H'. 
// The console logs the users current hour.
$(function () {
  const currentHour = dayjs().format('H');
  console.log('Current Hour:', currentHour);
});

// This function uses the query selector method to update the HTML #date id to the users current date.
function updateDate() {
  const now = new Date();
  const currentDate = now.toLocaleString();
  document.querySelector('#date').textContent = currentDate;
};

// This updates the above functions every 1000 milliseconds (1 second).
setInterval(updateDate, 1000);

// Color-code for: past, preasent and future:
const currentHour = dayjs().hour();

$('.time-block').each(function () {
  const blockHour = parseInt($(this).attr('id'));
  if (blockHour < currentHour) {
    $(this).addClass('past');
  } else if (blockHour === currentHour) {
    $(this).removeClass('past');
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  };
});

// Funtion to save text in local storage when save button is clicked.
