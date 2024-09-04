function updateDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = now.toLocaleString('en-US',options);
    document.getElementById('date').textContent = formattedDate;
    console.log('updated date')
}

updateDate();
setInterval(updateDate, 1000); // Update every 24 hours