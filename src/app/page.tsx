"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import Magnetic from "@/components/Magnetic";

export default function Home() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "20vh"]);

  return (
    <main ref={container} className="min-h-screen relative overflow-hidden selection:bg-primary/30">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card z-[-1]" />

      <nav className="absolute top-0 w-full p-6 md:p-10 flex justify-between items-center z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-art font-extrabold text-2xl tracking-tight text-primary-foreground mix-blend-difference"
        >
          MBARI.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-8 text-sm uppercase tracking-widest font-medium text-primary-foreground mix-blend-difference"
        >
          <a href="#auctions" className="hover:text-primary transition-colors">Auctions</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#artists" className="hidden md:block hover:text-primary transition-colors">Artists</a>
        </motion.div>
      </nav>

      <section className="relative min-h-[100dvh] w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24">

        <div className="relative z-10 w-full md:w-1/2 pt-32 md:pt-0">
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-art text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] text-foreground mix-blend-difference mb-6">
              Soul <br />
              <span className="text-primary italic font-light">&</span> Matter
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-lg md:text-xl max-w-md font-light mb-12"
          >
            Curated artifacts, historical masterpieces, and contemporary African expressions for the world's most discerning collectors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6"
          >
            <Magnetic intensity={0.15}>
              <a href="#explore" className="group relative inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-xs font-bold overflow-hidden rounded-full">
                <span className="relative z-10 flex items-center gap-2">
                  Enter Gallery <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-[0.16,1,0.3,1] rounded-full" />
              </a>
            </Magnetic>

            <Magnetic intensity={0.1}>
              <a href="#live-auctions" className="text-xs uppercase tracking-widest font-bold text-foreground hover:text-primary transition-colors flex items-center gap-2 px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Auctions
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <div className="absolute md:relative inset-0 md:inset-auto md:w-1/2 h-full flex items-center justify-center md:justify-end z-0 opacity-40 md:opacity-100">
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full md:h-[85vh] md:w-[80%] lg:w-[70%]"
          >
            <div className="absolute inset-0 bg-card overflow-hidden md:rounded-[2rem]">
              <Image
                src="/hero_mask.png"
                alt="Intricate African Wooden Mask"
                fill
                className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-[2s] ease-[0.16,1,0.3,1]"
                priority
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-4 right-4 md:bottom-10 md:-left-12 bg-background/95 backdrop-blur-xl p-5 flex flex-col gap-1 border border-border shadow-2xl z-20 min-w-[220px]"
            >
              <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Lot #402</span>
              <span className="font-art text-lg text-foreground">Baule Portrait Mask</span>
              <span className="text-xs text-muted-foreground">Ivory Coast, Late 19th C.</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section id="gallery" className="relative py-32 px-6 md:px-12 lg:px-24 bg-background z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">

          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-border pb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl"
            >
              <h2 className="font-art text-4xl md:text-6xl mb-4 text-balance">The Heritage Collection</h2>
              <p className="text-muted-foreground font-light text-lg">Rare artifacts sourced from ethical private collections across West and Central Africa. Each piece carries an indelible mark of history.</p>
            </motion.div>
            <a href="#all" className="uppercase tracking-widest text-xs font-bold hover:text-primary transition-colors whitespace-nowrap">View Complete Catalog</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">

            {/* Gallery Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-7 group cursor-pointer"
            >
              <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-card mb-6">
                <Image
                  src="/featured_1.png"
                  alt="Benin Kingdom Bronze Casting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]"
                />
                <div className="absolute top-4 left-4 bg-background/90 px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-primary backdrop-blur-sm">
                  Available Now
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-art text-2xl mb-1">Edo Bronze Head</h3>
                  <p className="text-muted-foreground text-sm font-light">Benin Kingdom (Nigeria) • 16th Century Style</p>
                </div>
                <span className="font-bold text-lg">$24,500</span>
              </div>
            </motion.div>

            {/* Gallery Item 2 - Offset visually */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-5 md:mt-32 group cursor-pointer"
            >
              <div className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden bg-card mb-6">
                <Image
                  src="/featured_2.png"
                  alt="Dogon Tribe Abstract Wooden Figurine"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]"
                />
                <div className="absolute top-4 left-4 bg-background/90 px-3 py-1 flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> Live Bidding
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-art text-2xl mb-1">Tellem Ancestor Figure</h3>
                  <p className="text-muted-foreground text-sm font-light">Dogon Tribe (Mali) • Hand-carved wood</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Current Bid</span>
                  <span className="font-bold text-lg">$8,200</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Live Auctions: Bento Dynamique */}
      <section id="live-auctions" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">

          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-primary uppercase tracking-widest text-[10px] font-bold">Live Now</span>
              </div>
              <h2 className="font-art text-4xl md:text-5xl text-white mb-2">Exclusive Auctions</h2>
              <p className="text-white/50 font-light max-w-md">Real-time bidding on world-class artifacts. Authenticated and verified provenance.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">

            {/* Bento Box 1: The Main Event */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-8 relative bg-black border border-white/10 rounded-[2rem] overflow-hidden flex flex-col md:flex-row group"
            >
              <div className="w-full md:w-3/5 relative h-[300px] md:h-full">
                <Image
                  src="/auction_1.png"
                  alt="Luba Ceremonial Mask"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s] ease-[0.16,1,0.3,1]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/80" />
              </div>

              <div className="w-full md:w-2/5 p-8 flex flex-col justify-between mix-blend-plus-lighter z-10">
                <div>
                  <h3 className="font-art text-3xl text-white mb-2">Luba Ceremonial Mask</h3>
                  <p className="text-sm text-white/50 font-light mb-8">Democratic Republic of Congo • Early 20th C.</p>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Current Highest Bid</span>
                      <motion.div
                        key="bidamount1"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-mono text-3xl text-primary"
                      >
                        $42,000
                      </motion.div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Ends In</span>
                      <div className="font-mono text-xl text-white flex gap-2">
                        <span>02<span className="text-xs text-white/30 ml-1">H</span></span>
                        <span className="animate-pulse">:</span>
                        <span>14<span className="text-xs text-white/30 ml-1">M</span></span>
                        <span className="animate-pulse">:</span>
                        <span className="text-red-400">59<span className="text-xs text-white/30 ml-1">S</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 mt-8 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-white/90 transition-colors">
                  Place Bid
                </button>
              </div>
            </motion.div>

            {/* Bento Box 2: Activity Stream (The Intelligent List) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-4 bg-[#111] border border-white/5 rounded-[2rem] p-8 flex flex-col relative overflow-hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs uppercase tracking-widest text-white/50 font-bold">Live Activity</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              </div>

              {/* Simulated Auto-Scrolling List (Memoized visually for now) */}
              <div className="flex-1 overflow-hidden relative group/list">
                <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-transparent to-[#111] pointer-events-none z-10" />
                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                  className="flex flex-col gap-4"
                >
                  {/* Repeated identical sets for seamless loop */}
                  {[...Array(2)].map((_, j) => (
                    <div key={j} className="flex flex-col gap-4">
                      {/* Bid 1 */}
                      <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white/50">ID_9X</div>
                          <span className="text-sm font-light text-white">$42,000</span>
                        </div>
                        <span className="text-[10px] text-white/30">Just now</span>
                      </div>
                      {/* Bid 2 */}
                      <div className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 border border-transparent transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white/50">A_201</div>
                          <span className="text-sm font-light text-white/70">$41,500</span>
                        </div>
                        <span className="text-[10px] text-white/30">2m ago</span>
                      </div>
                      {/* Bid 3 */}
                      <div className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 border border-transparent transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white/50">C_84</div>
                          <span className="text-sm font-light text-white/70">$40,000</span>
                        </div>
                        <span className="text-[10px] text-white/30">12m ago</span>
                      </div>
                      {/* Bid 4 */}
                      <div className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 border border-transparent transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white/50">ID_9X</div>
                          <span className="text-sm font-light text-white/70">$38,500</span>
                        </div>
                        <span className="text-[10px] text-white/30">1hr ago</span>
                      </div>
                      {/* Bid 5 */}
                      <div className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 border border-transparent transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] text-primary">STRT</div>
                          <span className="text-sm font-light text-white/70">$25,000</span>
                        </div>
                        <span className="text-[10px] text-white/30">Opened</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Bento Box 3: Secondary Auction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-12 relative bg-background border border-border rounded-[2rem] overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 group"
            >
              <div className="w-full md:w-1/3 relative h-[200px] rounded-xl overflow-hidden">
                <Image
                  src="/auction_2.png"
                  alt="Benin Bronze Status"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]"
                />
              </div>
              <div className="flex-1 flex flex-col md:flex-row justify-between w-full md:items-center gap-6">
                <div>
                  <h3 className="font-art text-2xl mb-1">Igbo Bronze Staff Finial</h3>
                  <p className="text-muted-foreground text-sm font-light mb-4">Nigeria • 19th Century</p>
                  <div className="inline-flex items-center gap-2 bg-secondary px-3 py-1 rounded-full text-xs text-foreground">
                    <span className="font-mono">8 Bids</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:items-end md:text-right border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-8">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Current Bid</span>
                  <span className="font-mono text-2xl">$12,400</span>
                  <a href="#bid2" className="text-primary text-xs uppercase tracking-widest font-bold flex items-center gap-1 hover:underline mt-2">
                    View Lot <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Artists & Provenance: The Cartography Timeline */}
      <section id="artists" className="relative py-32 px-6 md:px-12 lg:px-24 bg-card z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 min-h-[70vh]">

          {/* Left: Text & Timeline */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-art text-4xl md:text-5xl mb-6 text-foreground">Origins &<br />Provenance</h2>
              <p className="text-muted-foreground font-light mb-12">Discover the roots of African mastery. Trace historical artifacts back to their ethnic origins and ancestral creators across West and Central Africa.</p>
            </motion.div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:w-px before:bg-border before:left-2.5">
              {[
                { year: "16th C.", region: "Benin Kingdom", title: "The Bronze Casters", desc: "Masterful lost-wax casting techniques depicting royalty." },
                { year: "19th C.", region: "Dogon Country", title: "Ancestral Carvers", desc: "Abstract, elongated forms symbolizing connection to the sky." },
                { year: "Early 20th C.", region: "Luba Empire", title: "Royal Emblems", desc: "Bow-stands and caryatid stools of immense political power." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-10 group cursor-pointer"
                >
                  <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-background border border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full border border-primary bg-primary group-hover:bg-primary-foreground transition-colors" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{item.year} • {item.region}</span>
                  <h4 className="font-art text-xl mt-1 mb-2 text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: The Geographic Map Visualization */}
          <div className="w-full lg:w-2/3 relative h-[50vh] lg:h-auto min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen"
            >
              <Image
                src="/africa_map.png"
                alt="Stylized Map of Africa"
                fill
                className="object-contain object-right"
              />
            </motion.div>

            {/* Simulated Map Markers */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 1 }}
              className="absolute top-[30%] left-[40%] md:left-[50%] lg:left-[60%] flex flex-col items-center group cursor-pointer"
            >
              <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center animate-pulse relative">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_2px_theme(colors.primary.DEFAULT)]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 1.3 }}
              className="absolute top-[55%] left-[60%] md:left-[70%] lg:left-[80%] flex flex-col items-center group cursor-pointer"
            >
              <div className="w-3 h-3 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-primary/50" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer: Minimalisme Absolu */}
      <footer className="relative py-12 px-6 md:px-12 lg:px-24 bg-background border-t border-border z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-art font-extrabold text-xl tracking-tight text-foreground">
            MBARI.
          </div>

          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            <a href="#" className="hover:text-primary transition-colors">Digital Gallery</a>
            <a href="#" className="hover:text-primary transition-colors">Private Viewing</a>
            <a href="#" className="hover:text-primary transition-colors">Authenticity Promise</a>
          </div>

          <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Mbari Art. All Rights Reserved.
          </div>
        </div>
      </footer>

    </main>
  );
}
