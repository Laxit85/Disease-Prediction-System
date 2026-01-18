import { motion } from 'motion/react';
import {
  Users,
  Award,
  Zap,
  Target,
  Brain,
  ShieldCheck,
  Cpu,
  Stethoscope,
  Activity,
  Database,
  LineChart,
  HeartPulse,
  UserCheck,
  Hospital,
  Globe,
} from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Active Users', value: '50+', icon: Users },
    { label: 'Predictions Made', value: '100+', icon: Zap },
    { label: 'Accuracy Rate', value: '95%', icon: Award },
  ];

  const coreValues = [
    {
      title: 'AI-Driven Intelligence',
      desc: 'Advanced machine learning models analyze symptoms to generate accurate and explainable predictions.',
      icon: Brain,
    },
    {
      title: 'Medical Awareness',
      desc: 'Designed to support—not replace—professional medical consultation.',
      icon: Stethoscope,
    },
    {
      title: 'Privacy & Security',
      desc: 'Strong focus on data protection, confidentiality, and ethical AI usage.',
      icon: ShieldCheck,
    },
  ];

  const workflow = [
    {
      step: '01',
      title: 'Symptom Collection',
      desc: 'Users enter symptoms using a guided and intuitive interface.',
      icon: Activity,
    },
    {
      step: '02',
      title: 'Data Processing',
      desc: 'Input data is cleaned and structured for AI evaluation.',
      icon: Database,
    },
    {
      step: '03',
      title: 'Disease Prediction',
      desc: 'Machine learning model predicts possible health conditions.',
      icon: Cpu,
    },
    {
      step: '04',
      title: 'Health Guidance',
      desc: 'Users receive insights, severity level, and next steps.',
      icon: LineChart,
    },
  ];

  const useCases = [
    {
      title: 'Early Symptom Awareness',
      desc: 'Helps users understand potential health risks before conditions worsen.',
      icon: HeartPulse,
    },
    {
      title: 'Remote Health Assistance',
      desc: 'Useful for users in areas with limited access to medical facilities.',
      icon: Globe,
    },
    {
      title: 'Health Monitoring',
      desc: 'Tracks previous predictions and health history over time.',
      icon: UserCheck,
    },
  ];

  const beneficiaries = [
    {
      title: 'Individuals',
      desc: 'People seeking quick health insights and symptom analysis.',
      icon: Users,
    },
    {
      title: 'Healthcare Support Staff',
      desc: 'Assists preliminary assessment and patient triage.',
      icon: Hospital,
    },
    {
      title: 'Students & Researchers',
      desc: 'Useful for learning AI-driven healthcare systems.',
      icon: Brain,
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
  Transforming Healthcare with <span className="text-teal-400">AI</span>
</h1>

          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            HealthAI is an AI-powered disease prediction system designed to
            provide early health insights by intelligently analyzing user
            symptoms.
          </p>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mt-4"> 
            By leveraging advanced machine learning algorithms, HealthAI aims
            to empower individuals with timely information about potential health
            conditions, promoting proactive healthcare decisions.
          </p>
        </motion.div>

        {/* INTRO CONTENT (NEW) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-gray-300 leading-relaxed space-y-5 mb-28"
        >
          <p className="text-lg md:text-xl ">
            In many real-world scenarios, people delay medical attention because
            early symptoms often appear minor or confusing. This delay can lead
            to complications that could have been avoided with early awareness.
          </p>
          <p className="text-lg md:text-xl ">
            HealthAI was created to bridge this gap by acting as a supportive
            digital health assistant. It helps users understand potential health
            risks at an early stage and encourages timely medical consultation.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-teal-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CORE VALUES */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Core Principles
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-center leading-relaxed mb-12">
            HealthAI is built on strong foundational principles that ensure the
            platform remains reliable, ethical, and user-focused across all
            healthcare interactions.
          </p>
          <p className="text-gray-300 max-w-4xl mx-auto text-center leading-relaxed mb-12">
            These core values guide our mission to provide accurate health
            insights while prioritizing user privacy and promoting responsible
            AI usage in healthcare.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* USE CASES */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-6">
            Real-World Use Cases
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-center leading-relaxed mb-12">
            HealthAI is designed to solve practical healthcare challenges faced
            by individuals, communities, and institutions across different
            environments.
          </p>
            <p className="text-gray-300 max-w-4xl mx-auto text-center leading-relaxed mb-12">
            By providing early symptom analysis and health insights, the
            platform aims to enhance health awareness, support remote care, and
            facilitate proactive health management.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <u.icon className="h-8 w-8 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{u.title}</h3>
                <p className="text-gray-400 leading-relaxed">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BENEFICIARIES */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-6">
            Who Can Benefit from HealthAI
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-center leading-relaxed mb-12">
            The platform is built to support a wide range of users, from
            individuals seeking health clarity to professionals involved in
            healthcare education and support systems.
          </p>
          <p className="text-gray-300 max-w-4xl mx-auto text-center leading-relaxed mb-12">
            By catering to diverse beneficiary groups, HealthAI aims to
            maximize its positive impact on health outcomes and awareness across
            various communities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {beneficiaries.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <b.icon className="h-8 w-8 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-400 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DISCLAIMER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-white/5 border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-4">Medical Disclaimer</h2>
          <p className="text-gray-300 leading-relaxed">
            HealthAI provides preliminary health insights for educational
            purposes only. It does not replace professional medical advice,
            diagnosis, or treatment. Always consult a qualified healthcare
            provider for medical concerns.
          </p>
          <p className="text-gray-300 leading-relaxed mt-2">
            By using HealthAI, you acknowledge and agree that the platform's
            predictions are not definitive medical diagnoses and should not be
            solely relied upon for health decisions.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
