document.addEventListener('DOMContentLoaded', function () {
    const liftForm = document.getElementById('lift-form');
    const liftList = document.getElementById('lifts');
    const addButton = document.getElementById('add-lift-button');

    addButton.addEventListener('click', function () {
        const liftName = prompt('Enter the name of the lift:');
        if (liftName) {
            const lift = {
                name: liftName,
                date: new Date().toLocaleDateString(),
            };
            addLiftToList(lift);
            saveLiftToStorage(lift);
        }
    });

    function addLiftToList(lift) {
        const listItem = document.createElement('li');
        listItem.textContent = `${lift.name} (${lift.date})`;
        liftList.appendChild(listItem);
    }

    function saveLiftToStorage(lift) {
        let lifts = JSON.parse(localStorage.getItem('lifts')) || [];
        lifts.push(lift);
        localStorage.setItem('lifts', JSON.stringify(lifts));
    }

    function loadLiftsFromStorage() {
        const lifts = JSON.parse(localStorage.getItem('lifts')) || [];
        lifts.forEach(addLiftToList);
    }

    loadLiftsFromStorage();
});
