document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");

    function updateDateTime() {
        const now = new Date();

        
        const day = now.getDate();
        const monthNames = [
            "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", 
            "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
        ];
        const month = monthNames[now.getMonth()];
        const year = now.getFullYear();

              
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
       

        hours = hours % 12 || 12;     

         
        dateElement.textContent = `م ${year} ${month} ${day}`;
        timeElement.textContent = `${hours}:${minutes}`;
    }

    updateDateTime();
    setInterval(updateDateTime, 60000); 
});




// script.js

const modeToggleIcon = document.getElementById('modeToggle');

// Check if the user has a preferred theme saved in localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  modeToggleIcon.classList.remove('fa-toggle-off');
  modeToggleIcon.classList.add('fa-toggle-on'); // Switch to toggle-on icon for dark mode
}

// Toggle dark mode when the icon is clicked
modeToggleIcon.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');


  if (document.body.classList.contains('dark-mode')) {
    modeToggleIcon.classList.remove('fa-toggle-off');
    modeToggleIcon.classList.add('fa-toggle-on'); // Change to "toggle-on" icon for dark mode
    localStorage.setItem('theme', 'dark');  // Save the user's preference
  } else {
    modeToggleIcon.classList.remove('fa-toggle-on');
    modeToggleIcon.classList.add('fa-toggle-off'); // Change to "toggle-off" icon for light mode
    localStorage.setItem('theme', 'light');  // Save the user's preference
  }
});





var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 35, 
    effect: 'slide',
    autoplay: {
        delay: 2500, 
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    dynamicBullets: true,
    },
    
    
   
});


var swiper = new Swiper('.swiper-products', {
    loop: true,
    speed: 600,
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 35,
    effect: 'slide',
    autoplay: false,
    watchOverflow: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: false,

    pagination: {
        el: '.swiper-pagination2',
        type: "bullets",
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        993: { slidesPerView: 3 }
    }
});



//Wow.js
new WOW().init();






document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById("chatIcon"); 
    const chatBox = document.getElementById("chatBox"); 
    const closeChat = document.getElementById("closeChat"); 

    // Toggle chat box on chat icon click
    chatIcon.addEventListener("click", function () {
        chatBox.classList.toggle("open"); 
    });

    // Close chat when clicking the close button
    closeChat.addEventListener("click", function () {
        chatBox.classList.remove("open"); 
    });
});
