
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log('======>>>>>', i + ',');
    }
    if (i % 2 === 0) {
        console.log('======>>>>>', 'Lease' + ',');
    } if (i % 5) {
        console.log('======>>>>>', 'Plan' + ',')
    } if (i % 2 === 0 && i % 5 === 0) {
        console.log('======>>>>>', 'LeasePlan' + ',');
    }
}