function validateForm(){
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;

    if (name.length < 2) {
      alert("Name must be at least 2 characters long");
    }
    
    else if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number");
    }
    else if (!/\S+@\S+.\S+/.test(email)) {
      alert("Please enter a valid email address");
    }

    else{
            alert("You Have Submitted Successfully");
            open("connect.html");
    }
  }