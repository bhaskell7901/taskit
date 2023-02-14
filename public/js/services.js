async function getServices() {
    const response = await fetch('/api/services');
    const services = await response.json();
    return services;
    }
  
    getServices().then((services) => {
    const servicesList = document.querySelector('.services-list');
    servicesList.innerHTML = '';
    services.forEach(service => {
      const serviceItem = `
        <li class="service-item">
          <h3>${service.service_name}</h3>
        </li>
      `;
      servicesList.innerHTML += serviceItem;
    });
});