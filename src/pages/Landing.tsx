import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { LeafyGreen, Wind, Sprout, Trees } from "lucide-react";
import imghome7 from "../assets/images/ecodesign1.jpg";
import imghome1 from "../assets/images/ecodeisgn4.jpg";
import imghome2 from "../assets/images/ecodesign4.jpg";
import imghome3 from "../assets/images/ecodesign5.jpg";
import imghome4 from "../assets/images/ecodesign6.jpg";
import imghome5 from "../assets/images/ecodesign7.jpg";
import imghome6 from "../assets/images/ecodesign8.jpg";
import maitenance from "../assets/images/maitenance.jpg";
import kitchen from "../assets/images/kitchen.jpg";
import naturalair from "../assets/images/naturalair.jpg";
import greenspace from "../assets/images/greenspace.jpg";
import plant from "../assets/images/plant.jpg";
import material from "../assets/images/material.jpg";
import skylight from "../assets/images/skylight.jpg";
import natural from "../assets/images/natural.jpg";

const Landing = () => {
  const heroAnimation = useScrollAnimation();
  const caseStudyAnimation = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroAnimation.ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen bg-custom-gray1 overflow-hidden"
      >
        <div className="container mx-auto px-4 flex items-center h-screen">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl md:text-7xl font-serif text-neutral-cream mb-6"
            >
              ECO-DESIGN <br />
              <span className="text-secondary">ARSITEKTUR KOMERSIAL</span>
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-cream/90 mb-8 max-w-2xl"
            >
              Mengadopsi prinsip-prinsip arsitektur hijau untuk menciptakan
              ruang komersial yang berkelanjutan dan ramah lingkungan.
            </motion.p>
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="px-8 py-3 bg-custom-gray3 text-white font-semibold rounded-full
                hover:bg-custom-gray4 transition-colors duration-300"
            >
              Eksplorasi Lebih Lanjut
            </motion.button>
          </div>
        </div>

        {/* Decorative Elements - Updated positioning */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="xl:absolute justify-end right-48 rounded-2xl flex w-2/3 top-1/4 h-1/2"
        >
          <img
            src={imghome7}
            alt="Eco Illustration"
            className="w-1/2 h-full object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>
      </motion.section>

      {/* Case Study Section */}
      <section className="py-20 bg-custom-gray2/10">
        <div className="container mx-auto px-4">
          <motion.div
            ref={caseStudyAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-primary mb-4">
              BREAD YARD
            </h2>
            <p className="text-neutral-brown/80 max-w-3xl mx-auto">
              Kafe yang tidak hanya menyajikan hidangan lezat, namun juga
              menjadi oase perkotaan yang mampu meredam intensitas panas
              lingkungan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={imghome1}
                alt="Bread Yard Exterior"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-neutral-brown/80">
                Dengan mengadopsi prinsip-prinsip arsitektur hijau, kafe Bread
                Yard tidak hanya menyajikan hidangan lezat, namun juga menjadi
                oase perkotaan yang mampu meredam intensitas panas lingkungan
                melalui penggunaan material alami, sistem ventilasi alami, dan
                penataan ruang yang memaksimalkan sirkulasi udara, menciptakan
                suasana nyaman bagi pengunjung di tengah cuaca yang semakin
                panas.
              </p>
              <p className="text-neutral-brown/80">
                Kafe ini mengusung tema sesuai dengan namanya yaitu halaman
                belakang, dengan konsep yang awalnya adalah rumah pohon dan
                beralih konsep halaman belakang yang terdapat banyak tanaman.
                Konsep ini dengan tujuan penggunaan bahan masakan yang hidangkan
                berasal dari panen mereka sendiri.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eco-Design Concept Section */}
      <section className="py-20 bg-custom-gray3/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-primary mb-4">
              KONSEP ECO-DESIGN DAN MANFAAT TUMBUHAN
            </h2>
            <p className="text-neutral-gray max-w-3xl mx-auto">
              Sebagai Naungan dalam Arsitektur Modern
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-primary/5 rounded-2xl p-8">
                <h3 className="text-xl font-serif text-primary mb-4">
                  Definisi Eco-Design
                </h3>
                <p className="text-neutral-gray">
                  Eco-design atau desain ramah lingkungan adalah sebuah
                  pendekatan perancangan yang bertujuan meminimalkan dampak
                  negatif terhadap lingkungan.
                </p>
              </div>
              <div className="bg-primary/5 rounded-2xl p-8">
                <h3 className="text-xl font-serif text-primary mb-4">
                  Penggunaan Vegetasi
                </h3>
                <p className="text-neutral-gray">
                  Penggunaan vegetasi sebagai naungan dalam desain interior
                  merupakan tren yang semakin populer. Selain estetika yang
                  menawan, terdapat sejumlah alasan kuat di balik pilihan ini.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src={imghome2}
                alt="Interior with Plants"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <img
                src={imghome3}
                alt="Natural Ventilation"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-custom-gray4 to-custom-gray5 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-serif text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-white/90">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Examples Section */}
      <section className="py-20 bg-custom-gray2/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visualExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-2xl"
              >
                <img
                  src={example.image}
                  alt={example.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white font-serif text-xl mb-2">
                      {example.title}
                    </h4>
                    <p className="text-white/80 text-sm">
                      {example.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-white mb-4">
              Fitur Eco-Design
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Implementasi desain berkelanjutan dalam arsitektur
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecoFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 
                  border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="text-white mb-6">{feature.icon}</div>
                <h3 className="text-xl font-serif text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Implementation Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-serif text-white mb-4">
                IMPLEMENTASI PENGGUNAAN MATERIAL ALAMI
              </h2>
              <p className="text-white/90">
                Penggunaan anyaman bambu dalam desain arsitektur komersial
                sejalan dengan prinsip-prinsip eco-desain, yaitu merancang
                bangunan yang ramah lingkungan dan berkelanjutan. Penggunaan
                anyaman bambu dalam desain arsitektur komersial merupakan
                langkah yang tepat untuk menciptakan bangunan yang indah,
                fungsional, dan ramah lingkungan. Dengan segala kelebihannya,
                bambu memiliki potensi besar untuk menjadi salah satu material
                utama dalam pembangunan masa depan.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={material}
                alt="Bamboo Implementation"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skylight Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={skylight}
                  alt="Skylight Design"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src={natural}
                  alt="Natural Lighting"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="bg-primary/5 rounded-2xl p-8">
                <h2 className="text-3xl font-serif text-primary mb-4">
                  PENGGUNAAN SKYLIGHT SEBAGAI PENCAHAYAAN ALAMI
                </h2>
                <div className="space-y-4">
                  <p className="text-neutral-gray">
                    Penggunaan skylight merupakan salah satu cara yang efektif
                    untuk menerapkan prinsip eco-desain dalam arsitektur. Dengan
                    memanfaatkan cahaya alami, kita dapat mengurangi konsumsi
                    energi, meningkatkan kualitas udara dalam ruangan, dan
                    menciptakan lingkungan yang lebih sehat dan nyaman.
                  </p>
                  <p className="text-neutral-gray">
                    Pada kasus ini, air hujan tidak akan masuk kedalam bangunan,
                    karena terdapat kain kanvas di bawah skylight yang berfungsi
                    agar air hujan tidak masuk ke dalam bangunan.
                  </p>
                  <p className="text-neutral-gray">
                    Dengan menggunakan skylight sebagai pencahayaan alami,
                    kebutuhan akan pencahayaan buatan dapat berkurang secara
                    signifikan, sehingga mengurangi penggunaan lampu listrik,
                    yang berkontribusi pada penghematan energi. Selain itu untuk
                    mengurangi silau dari cahaya matahari pada skylight,
                    menggunakan kain kanvas berwarna alami pada skylight
                    merupakan pilihan yang bagus, karena kain kanvas pada
                    skylight berfungsi untuk mengontrol cahaya, dan menyebarkan
                    cahaya dengan rata supaya sinar matahari yang masuk tidak
                    terlalu panas, sehingga bisa menciptakan suasana yang nyaman
                    saat sedang berada di bawah skylight.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Air Circulation Section */}
      <section className="py-20 bg-gradient-to-br from-custom-gray4 to-custom-gray5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-white mb-4">
              SIRKULASI UDARA PADA RUANG TERBUKA HIJAU
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="glass-effect rounded-2xl p-8">
                <p className="text-white/90 mb-6">
                  Bukaan pada plafon dan dinding, serta keberadaan tanaman hijau
                  pada halaman belakang cafe Bread Yard ini, memungkinkan udara
                  segar dari luar masuk dan udara panas di dalam ruangan keluar.
                  Sirkulasi udara pada ruangan terbuka hijau merupakan aspek
                  penting dalam eco-desain.
                </p>
                <p className="text-white/90 mb-6">
                  Dengan memahami prinsip-prinsip dasar sirkulasi udara dan
                  menggabungkannya dengan elemen alam seperti tanaman, kita
                  dapat menciptakan ruang luar yang nyaman, sehat, dan
                  berkelanjutan.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-xl font-serif text-white mb-4">
                  Fungsi Tanaman pada Ruang Terbuka Hijau
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">
                      Transpirasi dan Penyerapan CO2
                    </h4>
                    <p className="text-white/80">
                      Pada proses transpirasi, tumbuhan melepaskan uap air
                      melalui proses transpirasi. Proses ini membantu
                      mendinginkan udara sekitar dan meningkatkan kelembapan.
                      Lalu pada proses penyerapan Karbon dioksida, tanaman
                      menyerap karbon dioksida dan menghasilkan oksigen,
                      sehingga meningkatkan kualitas udara.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-xl font-serif text-white mb-4">
                  Perawatan Rutin
                </h3>
                <p className="text-white/90">
                  Tentu saja penggunaan konsep ini memerlukan perawatan rutin
                  yang cukup telaten, daun kering yang jatuh dari pohon harus
                  selalu dibersihkan setiap 2 hari sekali, serta pada bagian
                  batang pohon yang mengarah ke atas melewati plafond
                  membutuhkan pengaplikasian lapisan setiap beberapa bulan
                  sekali, meski sudah ditutup dan diberi lapisan dengan baik,
                  tidak menutup kemungkinan bila hujan deras air akan menetes ke
                  arah bar mereka, sehingga pilihan untuk tidak meletakkan
                  elektronik adalah hal yang menjadi solusi penerapan konsep
                  ini.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-6">
                <img
                  src={naturalair}
                  alt="Natural Air Circulation"
                  className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
                />
                <img
                  src={greenspace}
                  alt="Green Space"
                  className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
                />
                <img
                  src={plant}
                  alt="Plant Integration"
                  className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Air Ventilation Design Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-primary/5 rounded-2xl p-8">
                <h2 className="text-3xl font-serif text-primary mb-6">
                  PENGHAWAAN UDARA DI BREAD YARD
                </h2>
                <p className="text-neutral-gray mb-4">
                  Penghawaan udara yang efektif di Cafe Bread Yard, Seminyak,
                  Bali, merupakan aspek penting dalam menciptakan lingkungan
                  yang nyaman bagi pengunjung. Salah satu strategi utama yang
                  diterapkan adalah penggunaan ventilasi alami melalui jendela
                  besar dan pintu yang dapat dibuka.
                </p>
                <p className="text-neutral-gray">
                  Desain ini memungkinkan aliran udara segar dari luar untuk
                  masuk ke dalam ruangan, dengan arah aliran udara yang dapat
                  disesuaikan berdasarkan arah angin dominan di daerah tersebut.
                  Selain itu, penggunaan area terbuka seperti teras atau taman
                  berfungsi untuk menciptakan tekanan udara yang lebih rendah,
                  yang memfasilitasi masuknya udara segar ke ruang tertutup.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="relative">
                  <img
                    src={kitchen}
                    alt="Kitchen Ventilation Design"
                    className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                  />
                  <div
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm 
                    px-4 py-2 rounded-lg"
                  >
                    <span className="text-primary font-medium">
                      Kitchen Terbuka
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary/5 rounded-2xl p-8"
              >
                <h3 className="text-xl font-serif text-primary mb-4">
                  Desain Arsitektur dan Elemen Alami
                </h3>
                <p className="text-neutral-gray">
                  Secara keseluruhan, arah penghawaan udara yang efektif di Cafe
                  Bread Yard sangat bergantung pada desain arsitektur dan
                  penempatan elemen-elemen alami. Dengan memaksimalkan sirkulasi
                  udara, tidak hanya kenyamanan pengunjung dapat ditingkatkan,
                  tetapi juga dapat mengurangi kebutuhan akan pendinginan
                  mekanis, menjadikan cafe ini lebih ramah lingkungan.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-primary/5 rounded-2xl p-8"
              >
                <h3 className="text-xl font-serif text-primary mb-4">
                  Tanaman sebagai Penghalang Alami
                </h3>
                <p className="text-neutral-gray">
                  Tanaman berfungsi sebagai penghalang alami untuk sinar
                  matahari langsung, hal ini membantu mengurangi panas ke dalam
                  ruangan. Penggunaan tanaman yang strategis membantu
                  menghasilkan udara yang lebih sejuk dan menciptakan lingkungan
                  yang lebih sehat.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Space Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-primary mb-4">
              RUANG TERBUKA
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-primary/5 rounded-2xl p-8">
                <p className="text-neutral-gray">
                  Bukaan-bukaan pada elemen pembentuk ruang seperti lantai,
                  dinding, dan plafon menjadi aspek utama dalam menciptakan
                  sirkulasi udara yang baik di cafe Bread Yard. Pada lantai,
                  bukaan dapat berupa akses tangga yang memungkinkan aliran
                  udara vertikal antar lantai, sekaligus berfungsi sebagai
                  elemen estetika yang mengundang interaksi pengguna.
                </p>
                <p className="text-neutral-gray mt-4">
                  Bukaan pada dinding dan plafon, seperti jendela atau
                  ventilasi, memungkinkan udara segar dari luar masuk, sementara
                  udara panas di dalam ruangan dapat keluar. Penempatan
                  elemen-elemen ini dirancang dengan cermat agar mendukung
                  konsep sirkulasi udara alami yang optimal.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={imghome5}
                alt="Open Space Design"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plant Maintenance Section */}
      <section className="py-20 bg-gradient-to-br from-custom-gray6 to-custom-gray7">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-white mb-4">
              MAINTENANCE TANAMAN HIDUP
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-1 gap-6">
                <img
                  src={maitenance}
                  alt="Plant Maintenance"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="glass-effect rounded-2xl p-8">
                <p className="text-white/90 mb-6">
                  Bread Yard konsisten menggunakan tanaman hidup yang diletakkan
                  di area indoor maupun outdoor. Penggunaan tanaman hidup ini
                  membantu suasana dan sirkulasi ruang menjadi lebih sejuk.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">
                      Perawatan Rutin
                    </h4>
                    <ul className="text-white/80 space-y-2">
                      <li>• Rolling tanaman setiap seminggu sekali</li>
                      <li>• Penggantian tanaman indoor secara rutin</li>
                      <li>• Pembersihan daun kering setiap 2 hari</li>
                      <li>• Pengaplikasian lapisan setiap beberapa bulan</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <p className="text-white/90">
                  Penggunaan tanaman hidup ini memerlukan perawatan rutin secara
                  khusus. Hal ini pula yang menjadikan alasan mengapa kafe
                  dengan konsep alami akan lebih menguras biaya pada
                  perawatannya. Namun hal ini sepadan dengan kualitas ruang yang
                  didapatkan.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visitor Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-primary mb-4">
              KESAN DAN PESAN PENGUNJUNG
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-primary/5 rounded-2xl p-8">
                <p className="text-neutral-gray mb-6">
                  Setibanya di Bread Yard Seminyak, pengunjung akan disambut
                  oleh suasana hangat dan nyaman yang langsung terasa. Kafe ini
                  mengusung konsep desain yang mengedepankan elemen alam,
                  menciptakan atmosfer seperti bersantai di rumah sendiri dengan
                  sentuhan modern yang kekinian.
                </p>
                <p className="text-neutral-gray mb-6">
                  Penggunaan material alami menjadi daya tarik utama, pada
                  lantai dua dengan dinding bata ekspos, lantai kayu, dan
                  perabotan dari rotan yang menciptakan nuansa natural dan
                  bersahabat. Tanaman hijau yang menghiasi setiap sudut kafe
                  juga menambah kesegaran udara dan memberikan ketenangan bagi
                  pengunjung.
                </p>
                <p className="text-neutral-gray">
                  Konsep open-space yang diusung memungkinkan cahaya matahari
                  masuk dengan leluasa melalui jendela kaca besar, menjadikan
                  suasana terang dan ceria sekaligus hemat energi. Ini
                  menunjukkan komitmen kafe terhadap lingkungan.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-6">
                {visitorPhotos.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={photo.image}
                      alt={photo.description}
                      className="w-full h-[250px] object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Visitor Review Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-secondary/10 rounded-2xl p-8"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-secondary">★★★★</span>
                  <span className="text-neutral-gray text-sm">
                    sebulan lalu
                  </span>
                </div>
                <p className="text-neutral-gray mb-4">
                  Makan di tempat | Makan siang
                </p>
                <p className="text-neutral-gray italic">
                  "Oh such a cute cafe. If you are a cafe lover, this is the
                  place to go and to hang out as the atmosphere was just so warm
                  and cozy. The place was bright with filtered light from
                  windows and sky lights that allowed the aircon to cool the
                  room and the gorgeous sun filled room to shine. It is also
                  green with a few plants all over the place."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ecoFeatures = [
  {
    title: "Material Alami",
    description:
      "Penggunaan material alami untuk menciptakan suasana yang menyatu dengan alam",
    icon: <Trees className="w-8 h-8 stroke-2" />,
  },
  {
    title: "Ventilasi Alami",
    description: "Sistem ventilasi yang memaksimalkan sirkulasi udara alami",
    icon: <Wind className="w-8 h-8 stroke-2" />,
  },
  {
    title: "Urban Farming",
    description: "Pemanfaatan area untuk menanam bahan makanan sendiri",
    icon: <Sprout className="w-8 h-8 stroke-2" />,
  },
  {
    title: "Ruang Hijau",
    description: "Integrasi tanaman hidup untuk menciptakan suasana sejuk",
    icon: <LeafyGreen className="w-8 h-8 stroke-2" />,
  },
];

const benefits = [
  {
    title: "Kesejukan Alami",
    description:
      "Tanaman mampu menyerap panas dan meningkatkan kelembapan udara, menciptakan suasana yang lebih sejuk dan nyaman. Ini sangat bermanfaat terutama di daerah dengan iklim tropis yang panas.",
  },
  {
    title: "Pemurnian Udara",
    description:
      "Tumbuhan menyerap karbon dioksida dan melepaskan oksigen, sehingga kualitas udara di dalam ruangan menjadi lebih baik. Beberapa jenis tanaman bahkan mampu menyerap polutan berbahaya.",
  },
  {
    title: "Reduksi Kebisingan",
    description:
      "Dedaunan tanaman dapat menyerap suara, sehingga membantu mengurangi kebisingan dari luar ruangan dan menciptakan suasana yang lebih tenang.",
  },
  {
    title: "Peningkatan Produktivitas",
    description:
      "Studi menunjukkan bahwa keberadaan tanaman di dalam ruangan dapat meningkatkan konsentrasi, kreativitas, dan produktivitas.",
  },
  {
    title: "Pengurangan Stres",
    description:
      "Melihat tanaman hijau memiliki efek menenangkan dan dapat mengurangi stres. Interaksi dengan alam dapat meningkatkan kesejahteraan mental.",
  },
  {
    title: "Estetika yang Menarik",
    description:
      "Tanaman memberikan sentuhan alami dan estetika yang unik pada setiap ruangan, dengan berbagai bentuk, warna, dan ukuran yang dapat disesuaikan.",
  },
];

const visualExamples = [
  {
    image: imghome4,
    title: "Integrasi Tanaman Indoor",
    description:
      "Penggunaan tanaman merambat sebagai elemen dekoratif dan peneduh",
  },
  {
    image: imghome6,
    title: "Sistem Ventilasi Alami",
    description: "Desain yang memaksimalkan aliran udara dan pencahayaan alami",
  },
  {
    image: imghome5,
    title: "Urban Farming",
    description: "Area tanam yang menghasilkan bahan makanan segar untuk dapur",
  },
];

const visitorPhotos = [
  {
    image: imghome2,
    description: "Interior Design with Plants",
  },
  {
    image: imghome3,
    description: "Natural Lighting Space",
  },
  {
    image: imghome1,
    description: "Outdoor Seating Area",
  },
];

export default Landing;
