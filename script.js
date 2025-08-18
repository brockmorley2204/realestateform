// JavaScript to handle navigation and data collection for the multi‑step funnel form

(function () {
  // Keep track of form data as the user progresses through the steps
  const formData = {
    propertyType: '',
    suburb: '',
    sellingOrRenting: '',
    name: '',
    email: '',
    phone: ''
  };

  // Cache DOM elements for each step
  const steps = {
    1: document.getElementById('step1'),
    2: document.getElementById('step2'),
    3: document.getElementById('step3'),
    confirmation: document.getElementById('confirmation')
  };

  // Helper to show a specific step and hide the others
  function showStep(stepKey) {
    Object.keys(steps).forEach(key => {
      steps[key].classList.remove('active');
    });
    steps[stepKey].classList.add('active');
  }

  // Step 1 next button
  document.getElementById('next1').addEventListener('click', function (e) {
    // Validate inputs
    const typeValue = document.getElementById('propertyType').value.trim();
    const suburbValue = document.getElementById('suburb').value.trim();
    if (!typeValue || !suburbValue) {
      alert('Please complete all fields before continuing.');
      return;
    }
    // Save values
    formData.propertyType = typeValue;
    formData.suburb = suburbValue;
    showStep(2);
  });

  // Step 2 navigation buttons
  document.getElementById('back2').addEventListener('click', function () {
    showStep(1);
  });

  document.getElementById('next2').addEventListener('click', function () {
    const sellingValue = document.getElementById('sellingOrRenting').value;
    if (!sellingValue) {
      alert('Please select an option before continuing.');
      return;
    }
    formData.sellingOrRenting = sellingValue;
    showStep(3);
  });

  // Step 3 navigation buttons
  document.getElementById('back3').addEventListener('click', function () {
    showStep(2);
  });

  document.getElementById('submit').addEventListener('click', function () {
    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const phoneValue = document.getElementById('phone').value.trim();
    if (!nameValue || !emailValue || !phoneValue) {
      alert('Please complete all fields before submitting.');
      return;
    }
    formData.name = nameValue;
    formData.email = emailValue;
    formData.phone = phoneValue;

    // Here you can send formData to your server or API using fetch() or AJAX
    // Example:
    // fetch('https://your-api-endpoint.com/leads', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    //   .then(response => response.json())
    //   .then(data => { console.log('Success:', data); })
    //   .catch((error) => { console.error('Error:', error); });

    console.log('Collected data:', formData);

    // Display confirmation message
    showStep('confirmation');
  });

  // Set a cookie with device information (similar to the original page)
  function setDeviceCookie() {
    const deviceInfo = {
      ow: window.outerWidth,
      oh: window.outerHeight,
      iw: window.innerWidth,
      ih: window.innerHeight,
      pr: window.devicePixelRatio || 1
    };
    document.cookie = 'DeviceInfo=' + encodeURIComponent(JSON.stringify(deviceInfo));
  }

  setDeviceCookie();
})();
