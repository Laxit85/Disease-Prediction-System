import { motion } from 'motion/react';
import { useState } from 'react';
import { Search, Brain, AlertCircle, TrendingUp, X } from 'lucide-react';
import { toast, Toaster } from 'sonner';

export default function CheckDisease() {
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const commonSymptoms = [
    'Fever','Cough','Headache','Fatigue','Nausea',
    'Dizziness','Body Pain','Sore Throat',
    'Runny Nose','Shortness of Breath',
  ];

  const handleAddSymptom = () => {
    if (inputValue && !symptoms.includes(inputValue)) {
      setSymptoms([...symptoms, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveSymptom = (symptom: string) => {
    setSymptoms(symptoms.filter(s => s !== symptom));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (symptoms.length === 0) {
      toast.error('Please add at least one symptom');
      return;
    }

    /* 🔥 CORRECT USER DATA */
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (!user.access_token) {
      toast.error('Please login first');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/prediction/predict`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.access_token}`, // ✅ TOKEN
          },
          body: JSON.stringify({
            symptoms: symptoms.join(' '),
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.detail || 'Prediction failed');
        setLoading(false);
        return;
      }

      setResult({
        disease: data.predicted_disease,
        confidence: Math.floor(85 + Math.random() * 10),
        severity: symptoms.length > 4 ? 'Moderate' : 'Mild',
        recommendations: [
          'Get plenty of rest',
          'Stay hydrated',
          'Monitor symptoms',
          'Consult a doctor if needed',
        ],
      });

      toast.success('Analysis complete!');
    } catch {
      toast.error('Network error');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <Toaster position="top-right" />

      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add symptom"
        />
        <button type="button" onClick={handleAddSymptom}>Add</button>

        <button type="submit" disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </form>

      {result && <p>Predicted Disease: {result.disease}</p>}
    </div>
  );
}
