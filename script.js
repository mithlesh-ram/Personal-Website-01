// Get the form element
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Simple validation
    if (name && email && mobile) {
        // Simulate login success
        alert(`Welcome, ${name}! Logging in with ${email} and ${mobile}`);
        
        // Store data locally (client-side only)
        localStorage.setItem('user', JSON.stringify({ name, email, mobile }));
        
        // Optional: Redirect to a new page
        // window.location.href = 'dashboard.html';
    } else {
        alert('Please fill in all fields!');
    }
});
