document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get values from the input fields
    const name = document.getElementById('nameInput').value;
    const city = document.getElementById('cityInput').value;
    const comment = document.getElementById('commentInput').value;

    // Check if the input fields are not empty
    if (name && city && comment) {
        // Get the table body where new rows will be appended
        const tableBody = document.getElementById('commentsTableBody');

        // Determine the next row number
        const nextRowNumber = tableBody.rows.length + 1;

        // Create a new row and populate it with data
        const newRow = tableBody.insertRow();

        // Insert cells
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        // Set the text content of the cells
        cell1.textContent = nextRowNumber;
        cell2.textContent = name;
        cell3.textContent = city;
        cell4.textContent = comment;

        // Clear the form fields
        document.getElementById('commentForm').reset();
    } else {
        alert('Please fill in all fields');
    }
});
