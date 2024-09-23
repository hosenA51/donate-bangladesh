// card one function
document.getElementById('btn-donate-noakhali')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addInputDonation = parseFloat(document.getElementById('input-flood-noakhali').value);

        const modal = document.getElementById('my_modal');

        if (addInputDonation <= 0 || isNaN(addInputDonation)) {
            alert('Invalid Donation amount');
            modal.close();
            return;
        }
        modal.showModal();
        const addBalance = parseFloat(document.getElementById('donation-balance-noakhali').innerText);
        const updatedDonation = addInputDonation + addBalance;

        document.getElementById('donation-balance-noakhali').innerText = updatedDonation;

        const mainBalance = parseFloat(document.getElementById('balance').innerText);
        const updatedMainBalance = mainBalance - addInputDonation;
        document.getElementById('balance').innerText = updatedMainBalance;
    });

// card two function
document.getElementById('btn-donate-feni')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addInputDonation = parseFloat(document.getElementById('input-flood-feni').value);

        const modal = document.getElementById('my_modal');

        if (addInputDonation <= 0 || isNaN(addInputDonation)) {
            alert('Invalid Donation amount');
            modal.close();
            return;
        };
        modal.showModal();
        const addBalance = parseFloat(document.getElementById('donation-balance-feni').innerText);
        const updatedDonation = addInputDonation + addBalance;

        document.getElementById('donation-balance-feni').innerText = updatedDonation;

        const mainBalance = parseFloat(document.getElementById('balance').innerText);
        const updatedMainBalance = mainBalance - addInputDonation;
        document.getElementById('balance').innerText = updatedMainBalance;
    });

// card three function
document.getElementById('btn-aid-injury')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addInputDonation = parseFloat(document.getElementById('input-quota-movement').value);

        const modal = document.getElementById('my_modal');

        if (addInputDonation <= 0 || isNaN(addInputDonation)) {
            return alert('Invalid Donation amount');
            modal.close();
            return;
        };
        modal.showModal();
        const addBalance = parseFloat(document.getElementById('donation-balance-movement').innerText);
        const updatedDonation = addInputDonation + addBalance;

        document.getElementById('donation-balance-movement').innerText = updatedDonation;

        const mainBalance = parseFloat(document.getElementById('balance').innerText);
        const updatedMainBalance = mainBalance - addInputDonation;
        document.getElementById('balance').innerText = updatedMainBalance;
    });
