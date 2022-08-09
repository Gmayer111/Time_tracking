let day = document.querySelector('#daily');
let weekly = document.querySelector('#weekly');
let monthly = document.querySelector('#monthly');


fetch('../data.json')
    .then(response => json = response.json())
    .then((data) => {
        const dataJson = data ;

    day.addEventListener('click', dailyFunction);
    weekly.addEventListener('click', weeklyFunction);
    monthly.addEventListener('click', monthlyFunction);

    function dailyFunction() {

        for (let n = 0; n < dataJson.length; n++) {
            let dailyTime = document.getElementsByClassName('hours')[n];
            let last = document.getElementsByClassName('last')[n];
            let current = dataJson[n].timeframes.daily.current;
            let previous = dataJson[n].timeframes.daily.previous;
            dailyTime.textContent = current + ' hours';
            last.textContent = 'Last week - ' + previous + ' hours';
        }        
    }


    function weeklyFunction() {

        for (let n = 0; n < dataJson.length; n++) {
            let dailyTime = document.getElementsByClassName('hours')[n];
            let last = document.getElementsByClassName('last')[n];
            let current = dataJson[n].timeframes.weekly.current;
            let previous = dataJson[n].timeframes.weekly.previous;
            dailyTime.textContent = current + ' hours';
            last.textContent = 'Last week - ' + previous + ' hours';
        }        
    }


    function monthlyFunction() {

        for (let n = 0; n < dataJson.length; n++) {
            let dailyTime = document.getElementsByClassName('hours')[n];
            let last = document.getElementsByClassName('last')[n];
            let current = dataJson[n].timeframes.monthly.current;
            let previous = dataJson[n].timeframes.monthly.previous;
            dailyTime.textContent = current + ' hours';
            last.textContent = 'Last week - ' + previous + ' hours';
        }        
    }
}) 
    

