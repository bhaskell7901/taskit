async function getJobs() {
    const response = await fetch('/api/jobs');
    const jobs = await response.json();
    return jobs;
}
  
async function getJob(id) {
    const response = await fetch(`/api/jobs/${id}`);
    const job = await response.json();
    return job;
}
  
async function createJob(data) {
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const job = await response.json();
    return job;
}
  
async function updateJob(id, data) {
    const response = await fetch(`/api/jobs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const job = await response.json();
    return job;
}
  
async function deleteJob(id) {
    const response = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    });
    const result = await response.json();
    return result;
}