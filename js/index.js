// card one function
document.getElementById('btn-donate-noakhali')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addInputDonation = getInputFieldValueById('input-flood-noakhali');
        
        const mainBalance = parseFloat(document.getElementById('balance').innerText);

        const modal = document.getElementById('my_modal');
        
        if (addInputDonation <= 0 || isNaN(addInputDonation)) {
            alert('Invalid Donation amount');
            modal.close();
            return;
        };
        if(addInputDonation > mainBalance) {
            alert('Invalid Donation amount');
            modal.close();
            return;
        };
        modal.showModal();

        const addBalance = parseFloat(document.getElementById('donation-balance-noakhali').innerText);

        const updatedDonation = addInputDonation + addBalance;

        document.getElementById('donation-balance-noakhali').innerText = updatedDonation;

        const updatedMainBalance = mainBalance - addInputDonation;
        document.getElementById('balance').innerText = updatedMainBalance;

        const historyItem = document.createElement('div');
        historyItem.className = 'flex flex-col mx-auto border p-6 my-4 w-10/12 rounded-2xl gap-4';

        historyItem.innerHTML = `
        <p class="text-xl font-bold">${addInputDonation} Taka is Donated for Flood at Noakhali, Bangladesh</p>
        <p>Date: ${new Date().toString()}</p>
        `
        const historyList = document.getElementById('history-list');
        historyList.insertBefore(historyItem, historyList.firstChild);
    });

// card two function
document.getElementById('btn-donate-feni')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addInputDonation = getInputFieldValueById('input-flood-feni');
        
        const mainBalance = parseFloat(document.getElementById('balance').innerText);

        const modal = document.getElementById('my_modal');

        if (addInputDonation <= 0 || isNaN(addInputDonation)) {
            alert('Invalid Donation amount');
            modal.close();
            return;
        };
        if(addInputDonation > mainBalance) {
            alert('Invalid Donation amount');
            modal.close();
            return;
        };
        modal.showModal();

        const addBalance = parseFloat(document.getElementById('donation-balance-feni').innerText);
        const updatedDonation = addInputDonation + addBalance;

        document.getElementById('donation-balance-feni').innerText = updatedDonation;

        const updatedMainBalance = mainBalance - addInputDonation;
        document.getElementById('balance').innerText = updatedMainBalance;

        const historyItem = document.createElement('div');
        historyItem.className = 'flex flex-col mx-auto border p-6 my-4 w-10/12 rounded-2xl gap-4';

        historyItem.innerHTML = `
        <p class="text-xl font-bold">${addInputDonation} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
        <p>Date: ${new Date().toString()}</p>
        `
        const historyList = document.getElementById('history-list');
        historyList.insertBefore(historyItem, historyList.firstChild);
    });

// card three function
document.getElementById('btn-aid-injury')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addInputDonation = getInputFieldValueById('input-quota-movement');

        const mainBalance = parseFloat(document.getElementById('balance').innerText);

        const modal = document.getElementById('my_modal');

        if (addInputDonation <= 0 || isNaN(addInputDonation)) {
            return alert('Invalid Donation amount');
            modal.close();
            return;
        };
        if(addInputDonation > mainBalance) {
            alert('Invalid Donation amount');
            modal.close();
            return;
        };
        modal.showModal();

        const addBalance = parseFloat(document.getElementById('donation-balance-movement').innerText);
        const updatedDonation = addInputDonation + addBalance;

        document.getElementById('donation-balance-movement').innerText = updatedDonation;

        const updatedMainBalance = mainBalance - addInputDonation;
        document.getElementById('balance').innerText = updatedMainBalance;

        const historyItem = document.createElement('div');
        historyItem.className = 'flex flex-col mx-auto border p-6 my-4 w-10/12 rounded-2xl gap-4';

        historyItem.innerHTML = `
        <p class="text-xl font-bold">${addInputDonation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
        <p>Date: ${new Date().toString()}</p>
        `
        const historyList = document.getElementById('history-list');
        historyList.insertBefore(historyItem, historyList.firstChild);
    });

// History tab functionality

const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');
historyTab.addEventListener('click', function () {
        
    historyTab.classList.add('bg-[#B4F461]');
    historyTab.classList.remove('bg-gray-transparent');
    donationTab.classList.remove('bg-[#B4F461]');
    donationTab.classList.add('bg-gray-transparent');

    document.getElementById('donation-cards').classList.add('hidden');
    document.getElementById('history-list').classList.remove('hidden');
});

donationTab.addEventListener('click', function(){
    donationTab.classList.add('bg-[#B4F461]');
    historyTab.classList.remove('bg-[#B4F461]');
    donationTab.classList.remove('bg-gray-transparent');

    document.getElementById('donation-cards').classList.remove('hidden');
    document.getElementById('history-list').classList.add('hidden');
});