import { motion } from 'motion/react';
import {
  Heart,
  Salad,
  Dumbbell,
  Brain,
  Moon,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';

export default function HealthGuide() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const healthSections = [
    {
      id: 'tips',
      title: 'Daily Health Tips',
      icon: Heart,
      gradient: 'from-red-500 to-pink-500',
      items: [
        'Drink 8–10 glasses of water daily to stay hydrated',
        'Maintain proper posture while sitting or using devices',
        'Take short breaks every 30–45 minutes during work',
        'Avoid excessive screen time before bedtime',
        'Wash hands regularly and maintain personal hygiene',
        'Spend at least 10–15 minutes in sunlight daily',
      ],
    },
    {
      id: 'diet',
      title: 'Diet & Nutrition Guide',
      icon: Salad,
      gradient: 'from-green-500 to-teal-500',
      items: [
        'Include fresh fruits and vegetables in every meal',
        'Prefer whole grains over refined carbohydrates',
        'Limit sugar, junk food, and sugary drinks',
        'Add protein sources like pulses, eggs, or dairy',
        'Avoid skipping meals, especially breakfast',
        'Maintain portion control to avoid overeating',
      ],
    },
    {
      id: 'exercise',
      title: 'Exercise & Physical Activity',
      icon: Dumbbell,
      gradient: 'from-blue-500 to-cyan-500',
      items: [
        'Engage in at least 30 minutes of physical activity daily',
        'Include cardio, strength, and flexibility exercises',
        'Start workouts with warm-up and end with stretching',
        'Choose activities you enjoy for better consistency',
        'Take rest days to allow muscle recovery',
        'Stay active even with light activities like walking',
      ],
    },
    {
      id: 'mental',
      title: 'Mental Health & Well-being',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      items: [
        'Practice meditation, yoga, or mindfulness regularly',
        'Stay connected with family and close friends',
        'Avoid excessive stress and manage workload properly',
        'Take time for hobbies and relaxation',
        'Seek professional support if feeling overwhelmed',
        'Practice gratitude and positive self-talk',
      ],
    },
    {
      id: 'sleep',
      title: 'Sleep & Recovery',
      icon: Moon,
      gradient: 'from-indigo-500 to-blue-500',
      items: [
        'Maintain a consistent sleep schedule daily',
        'Aim for 7–9 hours of quality sleep',
        'Avoid caffeine late in the evening',
        'Keep your sleeping environment dark and quiet',
        'Avoid mobile screens at least 30 minutes before sleep',
        'Use relaxation techniques to improve sleep quality',
      ],
    },
    {
      id: 'preventive',
      title: 'Preventive Care & Safety',
      icon: ShieldCheck,
      gradient: 'from-emerald-500 to-green-500',
      items: [
        'Get regular health check-ups and screenings',
        'Follow vaccination schedules as recommended',
        'Monitor blood pressure, sugar, and weight regularly',
        'Avoid smoking and limit alcohol consumption',
        'Use protective gear during physical activities',
        'Consult a doctor if symptoms persist or worsen',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Health Guide
          </h1>
          <p className="text-xl text-gray-400">
            Practical guidance for a healthier and balanced lifestyle
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-4">
          {healthSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden"
              onMouseEnter={() => setExpandedSection(section.id)}
              onMouseLeave={() => setExpandedSection(null)}
            >
              {/* Header */}
              <div className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center`}
                  >
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-left">
                    {section.title}
                  </h3>
                </div>

                {expandedSection === section.id ? (
                  <ChevronUp className="h-6 w-6 text-gray-400" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400" />
                )}
              </div>

              {/* Content */}
              {expandedSection === section.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: idx * 0.05 }}
                        className="flex items-start gap-3 text-gray-300 p-3 rounded-lg bg-white/5"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.gradient} mt-2`}
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
