import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function History() {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (!user.user_id) {
      toast.error('Please login first');
      return;
    }

    fetch(`${import.meta.env.VITE_API_BASE_URL}/history/${user.user_id}`)
      .then(res => res.json())
      .then(data => setHistory(data))
      .catch(() => toast.error('Failed to load history'));
  }, []);

  return (
    <div className="min-h-screen pt-28 px-4">
      <h1 className="text-3xl font-bold mb-6">Prediction History</h1>

      {history.length === 0 && <p>No history found</p>}

      {history.map((item, i) => (
        <div key={i} className="border p-4 mb-3 rounded">
          <p><b>Disease:</b> {item.disease}</p>
          <p><b>Symptoms:</b> {item.symptoms}</p>
          <p><b>Date:</b> {new Date(item.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
