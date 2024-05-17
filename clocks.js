function updateClocks() {
    var options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  
    var lisbonTime = moment().tz("Europe/Lisbon").format('HH:mm:ss');
    var newYorkTime = moment().tz("America/New_York").format('HH:mm:ss');
    var shanghaiTime = moment().tz("Asia/Shanghai").format('HH:mm:ss');
    var tokyoTime = moment().tz("Asia/Tokyo").format('HH:mm:ss');
  
    document.getElementById('lisbon').textContent = 'Lisbon: ' + lisbonTime;
    document.getElementById('newYork').textContent = 'New York: ' + newYorkTime;
    document.getElementById('shanghai').textContent = 'Shanghai: ' + shanghaiTime;
    document.getElementById('tokyo').textContent = 'Tokyo: ' + tokyoTime;
  
    // Assuming market hours are from 9:00 to 17:00
    if (lisbonTime >= '08:30:00' && lisbonTime <= '16:30:00') {
        document.getElementById('lisbon').style.color = 'orange';
    } else {
        document.getElementById('lisbon').style.color = 'white';
    }
  
    if (newYorkTime >= '09:30:00' && newYorkTime <= '16:00:00') {
        document.getElementById('newYork').style.color = 'orange';
    } else {
        document.getElementById('newYork').style.color = 'white';
    }
  
    if (shanghaiTime >= '09:30:00' && shanghaiTime <= '15:00:00') {
        document.getElementById('shanghai').style.color = 'orange';
    } else {
        document.getElementById('shanghai').style.color = 'white';
    }
  
    if (tokyoTime >= '09:00:00' && tokyoTime <= '15:00:00') {
        document.getElementById('tokyo').style.color = 'orange';
    } else {
        document.getElementById('tokyo').style.color = 'white';
    }
  }
  
  setInterval(updateClocks, 1000);