'use client';
import { useState, useEffect } from 'react';
import { setCookie, getCookie } from '../../../utils/cookie';

export default function UploadCVPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const correctPassword = 'admin123'; // Change to something stronger

  useEffect(() => {
    const cookie = getCookie('cv_admin_auth');
    if (cookie === 'true') setAuthenticated(true);
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthenticated(true);
      setCookie('cv_admin_auth', 'true', 1); // 1 day
    } else {
      setMessage('Incorrect password.');
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file.');
      return;
    }
    setMessage('CV uploaded successfully! (Mock only)');
    setFile(null);
  };

  if (!authenticated) {
    return (
      <section className="max-w-md mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-[#054160] mb-4">Admin Access</h2>
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <button type="submit" className="bg-[#054160] text-white px-6 py-2 rounded">
            Enter
          </button>
        </form>
        {message && <p className="text-red-600 mt-4">{message}</p>}
      </section>
    );
  }

  return (
    <section className="max-w-xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-[#054160] mb-6">Upload CV (Admin)</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full"
        />
        <button type="submit" className="bg-[#054160] text-white px-6 py-2 rounded">
          Upload
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </section>
  );
}
