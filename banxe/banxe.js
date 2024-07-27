document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const mileage = document.getElementById('mileage').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').files[0];

    if (!image) {
        alert("Vui lòng chọn một hình ảnh.");
        return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('make', make);
    formData.append('model', model);
    formData.append('year', year);
    formData.append('mileage', mileage);
    formData.append('price', price);
    formData.append('image', image);

    fetch('submit_car.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('message').innerText = data;
        document.getElementById('carForm').reset();
    })
    .catch(error => {
        document.getElementById('message').innerText = 'Có lỗi xảy ra khi gửi thông tin.';
        console.error('Error:', error);
    });
});
 //Hàm tài khoán đăng nhập đăng xuất
 document.addEventListener("DOMContentLoaded", function() {
    const userEmail = localStorage.getItem('userEmail');
    const userContainer = document.getElementById('user-container');
    const userEmailSpan = document.getElementById('user-email');
    const logoutButton = document.getElementById('logoutButton');
    const accountMenu = document.querySelector('.dropdown');
    const h1accounMenu=document.querySelector('.dropdown');
    const dropdownAccount = document.getElementById('dropdown-account');

    function updateUserUI() {
        if (userEmail) {
            userEmailSpan.textContent = userEmail;
            userContainer.style.display = 'block';
            dropdownAccount.style.display = 'none';
            if (accountMenu) {
                accountMenu.style.display = 'none';
                h1accounMenu.style.display='none'
            }
        } else {
            userContainer.style.display = 'none';
            if (accountMenu) {
                accountMenu.style.display = 'block';
            }
        }
    }

    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('userEmail');
        updateUserUI();
        alert('Đã đăng xuất');
        window.location.href = './index.html';
    });

    // Placeholder login function for demonstration
    // Replace this with actual login logic
    function login(email) {
        localStorage.setItem('userEmail', email);
        updateUserUI();
    }

    // Simulate a login for demonstration purposes
    // Call this function with the user's email when they log in
    // login('user@example.com');

    updateUserUI();
});
