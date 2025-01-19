import { motion } from "framer-motion";


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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            OLEH
          </h1>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 text-sm">
            Eco-Design Arsitektur Komersial
          </p>
          <h2 className="text-2xl font-serif text-white mt-2">BREAD YARD</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
