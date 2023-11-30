// Sample data for demonstration
const data = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Mango', 'Strawberry'];

function liveSearch() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    const filteredData = data.filter(item => item.toLowerCase().includes(input));

    if (filteredData.length === 0) {
        resultsContainer.innerHTML = '<li>No results found</li>';
    } else {
        filteredData.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            resultsContainer.appendChild(li);
        });
    }
}
