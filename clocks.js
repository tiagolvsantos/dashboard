function updateClocks() {
    const zones = [
        { id: 'lisbon', name: 'LIS', tz: 'Europe/Lisbon', open: '08:00:00', close: '16:30:00' },
        { id: 'newYork', name: 'NYC', tz: 'America/New_York', open: '09:30:00', close: '16:00:00' },
        { id: 'shanghai', name: 'SHA', tz: 'Asia/Shanghai', open: '09:30:00', close: '15:00:00' },
        { id: 'tokyo', name: 'TOK', tz: 'Asia/Tokyo', open: '09:00:00', close: '15:00:00' }
    ];

    zones.forEach(zone => {
        const now = moment().tz(zone.tz);
        const timeStr = now.format('HH:mm:ss');
        const day = now.day(); // 0 is Sunday, 6 is Saturday
        const isWeekend = (day === 0 || day === 6);
        
        const clockEl = document.getElementById(zone.id);
        if (!clockEl) return;

        const timeNode = clockEl.querySelector('.time');
        const dotNode = clockEl.querySelector('.status-dot');
        
        if (timeNode) timeNode.textContent = `${zone.name} ${timeStr}`;

        if (dotNode) {
            if (isWeekend) {
                dotNode.className = 'status-dot'; // Default / Closed
            } else if (timeStr >= zone.open && timeStr <= zone.close) {
                dotNode.className = 'status-dot active';
            } else {
                dotNode.className = 'status-dot warning'; // Pre/Post or lunch
            }
        }
    });
}

// Initialize clock structure if not present
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.clocks-wrapper');
    if (container && container.children.length === 0) {
        const zones = [
            { id: 'lisbon', name: 'LIS' },
            { id: 'newYork', name: 'NYC' },
            { id: 'shanghai', name: 'SHA' },
            { id: 'tokyo', name: 'TOK' }
        ];
        
        zones.forEach(zone => {
            const div = document.createElement('div');
            div.id = zone.id;
            div.className = 'clock-item';
            div.innerHTML = `<span class="status-dot"></span><span class="time">${zone.name} --:--:--</span>`;
            container.appendChild(div);
        });
    }
    updateClocks();
    setInterval(updateClocks, 1000);
});