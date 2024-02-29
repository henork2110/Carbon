document.addEventListener('DOMContentLoaded', function() {
    // Function to detect the operating system
    function getOS() {
        const userAgent = window.navigator.userAgent,
              platform = window.navigator.platform,
              macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
              windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
              iosPlatforms = ['iPhone', 'iPad', 'iPod'];
        let os = 'Unknown OS';

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'macOS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        }

        return os;
    }

    // Function to get viewport size
    function getViewportSize() {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        return `${width}x${height}`;
    }

    // Display the OS and viewport size
    document.getElementById('userOS').textContent = `${getOS()}`;
    document.getElementById('viewportSize').textContent = `${getViewportSize()}`;

    // Optional: Listen to window resize events to update the viewport size dynamically
    window.addEventListener('resize', function() {
        document.getElementById('viewportSize').textContent = `${getViewportSize()}`;
    });


    // clock
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
    
        document.getElementById('clock').textContent = timeString;
    }
    
    // Update the clock immediately and every second thereafter
    updateClock();
    setInterval(updateClock, 1000);
    
});














document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          // Optional: Remove the 'visible' class when the image is not in the viewport
          entry.target.classList.remove('visible');
        }
      });
    });
  
    document.querySelectorAll('img').forEach(img => {
      observer.observe(img);
    });
  });