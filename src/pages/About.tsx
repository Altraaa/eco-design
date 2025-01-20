import { motion } from "framer-motion";
import teams from "../assets/images/teams.jpg"

const About = () => {
  const teamMembers = [
    {
      nim: "202405051",
      name: "KADEK JUAN ARI WIJAYA",
    },
    {
      nim: "202405056",
      name: "ZASKIANY PUTRI",
    },
    {
      nim: "202405058",
      name: "NI NYOMAN NIA UTAMI",
    },
    {
      nim: "202405063",
      name: "ANAK AGUNG SAGUNG OKA KINEISHA CLEARETHA",
    },
    {
      nim: "202405044",
      name: "REKALYNI AGHNEA SAFFANA REVIELLIA",
    },
    {
      nim: "202405061",
      name: "NI NYOMAN INDAH MAYANG SARI",
    },
  ];

  return (
    <div className="min-h-screen bg-custom-gray1 pt-24">
      <div className="container mx-auto px-4">
        {/* Title Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
            ECO-DESIGN
          </h1>
          <h2 className="text-3xl md:text-4xl font-serif text-secondary mb-12">
            ARSITEKTUR KOMERSIAL
          </h2>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={teams}
                alt="Bread Yard"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-4xl font-serif text-white mb-2">
                  OUR TEAMS
                </h3>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Members Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-serif text-white mb-4">OLEH</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.nim}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-white space-y-2">
                <p className="text-sm font-medium text-white/60">
                  {member.nim}
                </p>
                <h3 className="text-lg font-serif">{member.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
