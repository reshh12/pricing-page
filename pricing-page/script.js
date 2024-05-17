document.addEventListener('DOMContentLoaded', function () {
    const billingToggle = document.getElementById('billing-toggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');

    // Function to update prices based on selected billing cycle
    function updatePrices() {
        const billingCycle = billingToggle.value;

        if (billingCycle === 'monthly') {
            monthlyPrices.forEach(price => price.style.display = 'block');
            yearlyPrices.forEach(price => price.style.display = 'none');
        } else {
            monthlyPrices.forEach(price => price.style.display = 'none');
            yearlyPrices.forEach(price => price.style.display = 'block');
        }
    }

    // Event listener for the billing toggle
    billingToggle.addEventListener('change', updatePrices);

    // Initial call to set the correct prices on page load
    updatePrices();
});
