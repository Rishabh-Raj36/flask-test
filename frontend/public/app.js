// Flask backend URL
const FLASK_API_URL = 'http://localhost:5000';

// Check if Flask backend is running
document.getElementById('checkStatus').addEventListener('click', async () => {
  const resultDiv = document.getElementById('statusResult');
  resultDiv.textContent = 'Checking...';
  resultDiv.className = 'result loading';
  
  try {
    const response = await fetch(`${FLASK_API_URL}/`);
    if (response.ok) {
      const text = await response.text();
      resultDiv.textContent = `✓ Flask backend is running! Response: ${text}`;
      resultDiv.className = 'result success';
    } else {
      resultDiv.textContent = `✗ Error: ${response.status}`;
      resultDiv.className = 'result error';
    }
  } catch (error) {
    resultDiv.textContent = `✗ Cannot connect to Flask backend. Make sure it's running on port 5000. Error: ${error.message}`;
    resultDiv.className = 'result error';
  }
});

// Get data from Flask API
document.getElementById('getData').addEventListener('click', async () => {
  const resultDiv = document.getElementById('dataResult');
  resultDiv.textContent = 'Fetching...';
  resultDiv.className = 'result loading';
  
  try {
    const response = await fetch(`${FLASK_API_URL}/api/data`);
    if (response.ok) {
      const data = await response.json();
      resultDiv.textContent = JSON.stringify(data, null, 2);
      resultDiv.className = 'result success';
    } else {
      resultDiv.textContent = `Error: ${response.status}`;
      resultDiv.className = 'result error';
    }
  } catch (error) {
    resultDiv.textContent = `Error: ${error.message}`;
    resultDiv.className = 'result error';
  }
});

// Send data to Flask API
document.getElementById('sendData').addEventListener('click', async () => {
  const resultDiv = document.getElementById('sendResult');
  resultDiv.textContent = 'Sending...';
  resultDiv.className = 'result loading';
  
  try {
    const response = await fetch(`${FLASK_API_URL}/api/echo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ test: 'data from Express' })
    });
    
    if (response.ok) {
      const data = await response.json();
      resultDiv.textContent = `✓ Data sent successfully! Response: ${JSON.stringify(data)}`;
      resultDiv.className = 'result success';
    } else {
      resultDiv.textContent = `Error: ${response.status}`;
      resultDiv.className = 'result error';
    }
  } catch (error) {
    resultDiv.textContent = `Error: ${error.message}`;
    resultDiv.className = 'result error';
  }
});
