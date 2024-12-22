'use client';

import { useState } from 'react';

export default function CreateJob() {
  const [form, setForm] = useState({ title: '', company: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert('Job Posted Successfully');
      setForm({ title: '', company: '', description: '' });
    }
  };

  return (
    <div>
      <h1>Create Job Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button type="submit">Submit Job</button>
      </form>
    </div>
  );
}
