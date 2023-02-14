async function getJobOffers() {
    const response = await fetch('/api/jobOffers');
    const jobOffers = await response.json();
    return jobOffers;
}
  
async function getJobOffer(id) {
    const response = await fetch(`/api/jobOffers/${id}`);
    const jobOffer = await response.json();
    return jobOffer;
}
  
async function createJobOffer(data) {
    const response = await fetch('/api/jobOffers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const jobOffer = await response.json();
    return jobOffer;
}
  
async function updateJobOffer(id, data) {
    const response = await fetch(`/api/jobOffers/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const jobOffer = await response.json();
    return jobOffer;
}
  
async function deleteJobOffer(id) {
    const response = await fetch(`/api/jobOffers/${id}`, {
      method: 'DELETE'
    });
    const result = await response.json();
    return result;
}