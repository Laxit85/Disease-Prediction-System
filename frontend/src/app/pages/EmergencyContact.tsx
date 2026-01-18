import { motion } from 'motion/react';
import { Phone, MapPin, Clock, AlertCircle } from 'lucide-react';

export default function EmergencyContact() {
  const emergencyContacts = [
    {
      name: 'Government Hospital Emergency',
      type: 'Emergency Room',
      phone: '108',
      address: 'Nearest Government Hospital',
      hours: '24/7 Emergency Services',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      name: 'Police Emergency',
      type: 'Law Enforcement',
      phone: '112',
      address: 'National Emergency Number (India)',
      hours: '24/7 Police Response',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      name: 'Fire & Rescue Services',
      type: 'Fire Emergency',
      phone: '101',
      address: 'Fire & Rescue Department',
      hours: '24/7 Fire Emergency',
      gradient: 'from-red-600 to-red-400',
    },
    {
      name: 'Poison Control (AIIMS)',
      type: 'Poison Emergency',
      phone: '011-26593677',
      address: 'AIIMS, New Delhi',
      hours: '24/7 Poison Helpline',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Mental Health Helpline (KIRAN)',
      type: 'Mental Health Support',
      phone: '1800-599-0019',
      address: 'Ministry of Health & Family Welfare',
      hours: '24/7 Mental Health Support',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      name: 'Women Helpline',
      type: 'Women Safety',
      phone: '181',
      address: 'Women Emergency Support',
      hours: '24/7 Assistance',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Child Helpline',
      type: 'Child Safety',
      phone: '1098',
      address: 'National Child Helpline',
      hours: '24/7 Child Protection',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      name: 'Private Ambulance Service',
      type: 'Emergency Transport',
      phone: '+91 98765 43210',
      address: 'Local Private Ambulance',
      hours: '24/7 Ambulance Service',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
  name: 'Senior Citizen Helpline',
  type: 'Elder Care',
  phone: '14567',
  address: 'National Helpline for Senior Citizens',
  hours: '24/7 Assistance',
  gradient: 'from-slate-500 to-gray-500',
},
{
  name: 'Disaster Management (NDRF)',
  type: 'Natural Disaster',
  phone: '1078',
  address: 'National Disaster Response Force',
  hours: '24/7 Disaster Support',
  gradient: 'from-amber-500 to-yellow-500',
},
{
  name: 'Road Accident Emergency',
  type: 'Road Safety',
  phone: '1073',
  address: 'National Highway Accident Helpline',
  hours: '24/7 Road Accident Assistance',
  gradient: 'from-orange-500 to-red-500',
},
{
  name: 'COVID-19 Health Helpline',
  type: 'Public Health',
  phone: '1075',
  address: 'Ministry of Health & Family Welfare',
  hours: '24/7 COVID Assistance',
  gradient: 'from-teal-500 to-emerald-500',
},

  ];

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Emergency Contacts (India)
          </h1>
          <p className="text-xl text-gray-400">
            Quick access to essential emergency services across India
          </p>
        </motion.div>

        {/* Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 p-6 rounded-2xl bg-red-500/10 border border-red-500/20"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-red-500/20">
              <AlertCircle className="h-6 w-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">
                Life-threatening emergency?
              </h3>
              <p className="text-gray-300 mb-4">
                Call 108 for medical emergencies or 112 for immediate danger.
              </p>
              <button
                onClick={() => handleCall('108')}
                className="px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 font-semibold transition-colors"
              >
                Call Ambulance (108)
              </button>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyContacts.map((contact, index) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-teal-400/30 transition-all group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />

              <div className="relative">
                <div className="mb-4">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${contact.gradient}`}>
                    {contact.type}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {contact.name}
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-gray-300">
                    <Phone className="h-5 w-5 text-teal-400 mt-0.5" />
                    <span className="text-sm">{contact.phone}</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                    <span className="text-sm">{contact.address}</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300">
                    <Clock className="h-5 w-5 text-purple-400 mt-0.5" />
                    <span className="text-sm">{contact.hours}</span>
                  </div>
                </div>

                <motion.button
                  onClick={() => handleCall(contact.phone)}
                  className={`w-full py-3 rounded-lg bg-gradient-to-r ${contact.gradient} font-semibold hover:opacity-90 transition-opacity`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Call Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
