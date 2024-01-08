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


// Color-code for past, present and future.
const currentHour = dayjs().hour();

var timeBlocks = $('.time-block');
const CheckTime = () => {
  for (let i = 0; i < timeBlocks.length; i++) {
    var idCheck = $(timeBlocks[i]).attr('id');
    idCheck = idCheck.split("-");

    //swap block class to handle color
    if (currentHour > idCheck[1]) {
      //Clear other two classes just in case to prevent bugs
      $(timeBlocks[i]).removeClass('future');
      $(timeBlocks[i]).removeClass('present');
      $(timeBlocks[i]).addClass('past');
    } else if (currentHour == idCheck[1]) {
      $(timeBlocks[i]).removeClass('past');
      $(timeBlocks[i]).removeClass('future');
      $(timeBlocks[i]).addClass('present');
    } else {
      $(timeBlocks[i]).removeClass('present');
      $(timeBlocks[i]).removeClass('past');
      $(timeBlocks[i]).addClass('future');
    }
  }
};

// Funtion to save text in local storage when save button is clicked.
$('.saveBtn').click(function () {
  var description = $(this).siblings('textarea').val();
  var blockHour = $(this).parent().attr('id');
  localStorage.setItem(blockHour, description);
});

$('.time-block textarea').each(function () {
  var blockHour = $(this).parent().attr('id');
  var savedText = localStorage.getItem(blockHour);
  if (savedText) {
    $(this).val(savedText);
  }
});


// This updates the above functions every 1000 milliseconds (1 second).
setInterval(updateDate, 1000);

setInterval(function () {
  //every min update
  CheckTime();
}, 1000);