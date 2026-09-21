import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { home } from 'virtual:content';

const slideUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } }
} as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
} as const;

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Wise Recovery — Psychiatrist-Led Group Programs for Serious Mental Illness</title>
        <meta
          name="description"
          content="Wise Recovery offers psychiatrist-led group programming for people living with serious mental illness and their families. Created by Monica Slubicki, MD." />
        
        <link rel="canonical" href="https://wiserecovery.com/" />
        <meta property="og:title" content="Wise Recovery — Psychiatrist-Led Group Programs" />
        <meta property="og:description" content="Recovery-focused group programming for people living with serious mental illness and their families." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wiserecovery.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>

        {/* ─────────────────────────────────────────────────────────────
             HERO — bold typographic opening, ocean image below
          ───────────────────────────────────────────────────────────── */}
        <section style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-0">

            {/* Brand identifier — small, restrained */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.22em] text-foreground/35 mb-10 md:mb-14 font-medium">
              
              WISE RECOVERY
            </motion.p>

            {/* Dominant headline — asymmetric, large */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="mb-12 md:mb-16">
              
              {/* Line 1 — full width, very large */}
              <motion.h1
                variants={slideUp}
                className="font-light leading-[0.95] tracking-tight text-foreground mb-0"
                style={{
                  fontSize: 'clamp(3rem, 7.5vw, 88px)',
                  fontFamily: 'var(--font-heading)',
                  maxWidth: '14ch'
                }}>
                
                Recovery-focused
              </motion.h1>
              {/* Line 2 — offset right, slightly smaller weight contrast */}
              <motion.div
                variants={slideUp}
                className="flex items-baseline gap-4 md:gap-8">
                
                <span
                  className="font-light leading-[0.95] tracking-tight text-foreground"
                  style={{
                    fontSize: 'clamp(3rem, 7.5vw, 88px)',
                    fontFamily: 'var(--font-heading)'
                  }}><span className="font-light leading-[0.95] tracking-tight text-foreground" style={{ fontSize: 'clamp(3rem, 7.5vw, 88px)', fontFamily: 'var(--font-heading)' }}>group programming</span>


                </span>
              </motion.div>
              {/* Lines 3–4 — indented, serif accent on "serious mental illness" */}
              <motion.div variants={slideUp} className="pl-0 md:pl-[8vw]">
                <span
                  className="font-light leading-[0.95] tracking-tight text-foreground/55"
                  style={{
                    fontSize: 'clamp(2.2rem, 5.5vw, 64px)',
                    fontFamily: 'var(--font-heading)',
                    display: 'block'
                  }}>
                  
                  for people living with
                </span>
                <span
                  className="font-normal leading-[0.95] tracking-tight text-foreground"
                  style={{
                    fontSize: 'clamp(2.2rem, 5.5vw, 64px)',
                    fontFamily: 'var(--font-display-serif)',
                    fontStyle: 'italic',
                    display: 'block'
                  }}>
                  
                  serious mental illness
                </span>
                <span
                  className="font-light leading-[0.95] tracking-tight text-foreground/55"
                  style={{
                    fontSize: 'clamp(2.2rem, 5.5vw, 64px)',
                    fontFamily: 'var(--font-heading)',
                    display: 'block'
                  }}>
                  
                  and their families
                </span>
              </motion.div>
            </motion.div>

            {/* Subtext + CTAs — asymmetric, right-offset */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-16 md:pb-20">
              
              <motion.p
                variants={slideUp}
                className="md:col-start-5 md:col-span-5 text-base md:text-lg leading-relaxed text-foreground/60"
                style={{ fontWeight: 300 }}>
                
                {home.hero.body}
              </motion.p>
              <motion.div
                variants={slideUp}
                className="md:col-start-5 md:col-span-7 flex flex-wrap items-center gap-6">
                
                <Link
                  to="/programs"
                  className="text-sm font-medium text-foreground border-b border-foreground pb-0.5 hover:text-foreground/60 hover:border-foreground/60 transition-colors duration-200">
                  
                  {home.hero.cta1} →
                </Link>
                <Link
                  to="/organizations"
                  className="text-sm font-medium text-foreground/45 border-b border-foreground/25 pb-0.5 hover:text-foreground/70 hover:border-foreground/50 transition-colors duration-200">
                  
                  {home.hero.cta2} →
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Full-width cinematic ocean image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full overflow-hidden"
            style={{ height: 'clamp(220px, 32vw, 480px)' }}>
            
            <img
              src="/airo-assets/images/pages/home/hero"
              alt="Calm ocean horizon"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high" />
            
          </motion.div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
             EDUCATION, RECOVERY & ADVOCACY — major typographic statement
          ───────────────────────────────────────────────────────────── */}
        <section
          className="py-24 md:py-36"
          style={{ background: 'hsl(var(--background))' }}>
          
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}>
              
              {/* Large statement */}
              <motion.h2
                variants={slideUp}
                className="font-light leading-[1.05] tracking-tight text-foreground mb-16 md:mb-20"
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 60px)',
                  fontFamily: 'var(--font-heading)',
                  maxWidth: '18ch'
                }}>
                
                {home.education.headline}
              </motion.h2>

              {/* Asymmetric two-column body — offset right */}
              <motion.div
                variants={slideUp}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                
                <p
                  className="md:col-start-4 md:col-span-4 text-base md:text-[17px] leading-[1.8] text-foreground/65"
                  style={{ fontWeight: 300 }}>
                  
                  {home.education.col1}
                </p>
                <p
                  className="md:col-span-4 text-base md:text-[17px] leading-[1.8] text-foreground/65"
                  style={{ fontWeight: 300 }}>
                  
                  {home.education.col2}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
             GROUP PROGRAMS — numbered rows, horizontal rules
          ───────────────────────────────────────────────────────────── */}
        <section
          className="py-24 md:py-32 border-t border-foreground/10"
          style={{ background: 'hsl(var(--background))' }}>
          
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}>
              
              {/* Section label */}
              <motion.div
                variants={slideUp}
                className="grid grid-cols-1 md:grid-cols-12 mb-16">
                
                <h2
                  className="md:col-span-3 text-xs tracking-[0.2em] text-foreground/35 font-medium self-end">
                  
                  GROUP PROGRAMS
                </h2>
              </motion.div>

              {/* Program rows */}
              {home.programs.audiences.map((aud, i) =>
              <motion.div
                key={aud.id}
                variants={slideUp}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 border-t border-foreground/10 group">
                
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span
                    className="text-xs tracking-widest text-foreground/25 font-medium">
                    
                      0{i + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-4">
                    <h3
                    className="font-medium text-foreground leading-snug"
                    style={{
                      fontSize: 'clamp(1.25rem, 2.2vw, 28px)',
                      fontFamily: 'var(--font-heading)'
                    }}>
                    
                      {aud.title}
                    </h3>
                  </div>

                  {/* Items */}
                  <ul className="md:col-span-6 md:col-start-7 flex flex-col gap-2.5 pt-1">
                    {aud.items.map((item) =>
                  <li
                    key={item.id}
                    className="text-sm md:text-[15px] leading-relaxed text-foreground/55 flex items-start gap-3"
                    style={{ fontWeight: 300 }}>
                    
                        <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-foreground/25" />
                        <span>{item.text}</span>
                      </li>
                  )}
                  </ul>
                </motion.div>
              )}

              <motion.div
                variants={slideUp}
                className="pt-8 border-t border-foreground/10">
                
                <Link
                  to="/programs"
                  className="text-sm font-medium text-foreground/45 border-b border-foreground/20 pb-0.5 hover:text-foreground hover:border-foreground transition-colors duration-200">
                  
                  View all programs →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
             WISE RECOVERY TRANSITIONS — deep navy, oversized type + water
          ───────────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ background: 'hsl(var(--footer-bg))' }}>
          
          {/* Full-bleed water image — top half */}
          <div
            className="w-full overflow-hidden"
            style={{ height: 'clamp(200px, 28vw, 400px)' }}>
            
            <img
              src="/airo-assets/images/pages/home/ripple"
              alt="Concentric ripples on still water"
              className="w-full h-full object-cover object-center"
              loading="lazy" />
            
            {/* Dark fade down into navy section */}
            <div
              className="absolute left-0 right-0 pointer-events-none"
              style={{
                top: 'clamp(200px, 28vw, 400px)',
                height: '120px',
                marginTop: '-120px',
                background: `linear-gradient(to bottom, transparent, hsl(var(--footer-bg)))`
              }} />
            
          </div>

          {/* Text content */}
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-16 pb-24 md:pb-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}>
              
              <motion.p
                variants={slideUp}
                className="text-xs tracking-[0.2em] font-medium mb-8"
                style={{ color: 'hsl(var(--accent) / 0.7)' }}>
                
                {home.featured.label.toUpperCase()}
              </motion.p>

              {/* Oversized program name */}
              <motion.div variants={slideUp} className="mb-10 md:mb-14">
                <div
                  className="font-light leading-[0.9] tracking-tight text-primary-foreground"
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 96px)',
                    fontFamily: 'var(--font-heading)'
                  }}>
                  
                  Wise Recovery
                </div>
                <div
                  className="font-light leading-[0.9] tracking-tight"
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 96px)',
                    fontFamily: 'var(--font-display-serif)',
                    fontStyle: 'italic',
                    color: 'hsl(var(--accent))'
                  }}>
                  
                  Transitions
                </div>
              </motion.div>

              {/* Subtitle + body — asymmetric */}
              <motion.div
                variants={slideUp}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
                
                <p
                  className="md:col-span-5 text-base md:text-lg leading-relaxed font-light"
                  style={{ color: 'hsl(var(--white) / 0.55)' }}>
                  
                  {home.featured.subtitle}
                </p>
                <p
                  className="md:col-start-7 md:col-span-5 text-sm md:text-[15px] leading-relaxed font-light"
                  style={{ color: 'hsl(var(--white) / 0.45)' }}>
                  
                  {home.featured.body}
                </p>
              </motion.div>

              {/* Bullet list — horizontal on desktop */}
              <motion.ul
                variants={slideUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                
                {home.featured.bullets.map((b) =>
                <li
                  key={b.id}
                  className="flex items-start gap-3 text-sm font-light"
                  style={{ color: 'hsl(var(--white) / 0.45)' }}>
                  
                    <span
                    className="mt-2 shrink-0 w-1 h-1 rounded-full"
                    style={{ background: 'hsl(var(--accent) / 0.6)' }} />
                  
                    <span>{b.text}</span>
                  </li>
                )}
              </motion.ul>

              <motion.div variants={slideUp}>
                <Link
                  to="/programs"
                  className="text-sm font-medium border-b pb-0.5 hover:opacity-70 transition-opacity duration-200"
                  style={{
                    color: 'hsl(var(--white) / 0.8)',
                    borderColor: 'hsl(var(--white) / 0.3)'
                  }}>
                  
                  {home.featured.cta} →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
             FOR ORGANIZATIONS — typographic rows, fine rules
          ───────────────────────────────────────────────────────────── */}
        <section
          className="py-24 md:py-36"
          style={{ background: 'hsl(var(--background))' }}>
          
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}>
              
              {/* Large heading */}
              <motion.h2
                variants={slideUp}
                className="font-light leading-[1.05] tracking-tight text-foreground mb-16 md:mb-20"
                style={{
                  fontSize: 'clamp(2.2rem, 4.5vw, 56px)',
                  fontFamily: 'var(--font-heading)',
                  maxWidth: '20ch'
                }}>
                
                {home.organizations.headline}
              </motion.h2>

              {/* Intro — offset */}
              <motion.p
                variants={slideUp}
                className="text-base md:text-[17px] leading-[1.8] text-foreground/55 mb-16 md:mb-20"
                style={{ maxWidth: '42ch', fontWeight: 300 }}>
                
                {home.organizations.body}
              </motion.p>

              {/* Organization type rows */}
              {home.organizations.types.map((org) =>
              <motion.div
                key={org.id}
                variants={slideUp}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-8 border-t border-foreground/10">
                
                  <h3
                  className="md:col-span-5 font-medium text-foreground"
                  style={{
                    fontSize: 'clamp(1.1rem, 1.8vw, 22px)',
                    fontFamily: 'var(--font-heading)'
                  }}>
                  
                    {org.title}
                  </h3>
                  <p
                  className="md:col-start-7 md:col-span-5 text-sm md:text-[15px] leading-relaxed text-foreground/50"
                  style={{ fontWeight: 300 }}>
                  
                    {org.desc}
                  </p>
                </motion.div>
              )}

              <motion.div
                variants={slideUp}
                className="pt-12 border-t border-foreground/10 grid grid-cols-1 md:grid-cols-12 gap-8">
                
                <p
                  className="md:col-span-6 text-sm md:text-[15px] leading-relaxed text-foreground/50"
                  style={{ fontWeight: 300 }}>
                  
                  {home.organizations.collab}
                </p>
                <div className="md:col-start-9 md:col-span-4 flex items-start">
                  <Link
                    to="/organizations"
                    className="text-sm font-medium text-foreground border-b border-foreground pb-0.5 hover:text-foreground/50 hover:border-foreground/50 transition-colors duration-200">
                    
                    {home.organizations.cta} →
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
             PROFESSIONAL EDUCATION — watercolor as large background fragment
          ───────────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden border-t border-foreground/10"
          style={{ background: 'hsl(var(--background))' }}>
          
          {/* Watercolor — large, abstract, right-side */}
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden md:block"
            style={{ opacity: 0.18 }}>
            
            <img
              src="/airo-assets/images/pages/home/watercolor"
              alt=""
              className="w-full h-full object-cover object-left"
              loading="lazy" />
            
          </div>

          <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-36">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-[640px]">
              
              <motion.p
                variants={slideUp}
                className="text-xs tracking-[0.2em] text-foreground/30 font-medium mb-8">
                
                {home.profeducation.eyebrow.toUpperCase()}
              </motion.p>
              <motion.h2
                variants={slideUp}
                className="font-light leading-[1.05] tracking-tight text-foreground mb-8"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 52px)',
                  fontFamily: 'var(--font-heading)'
                }}>
                
                {home.profeducation.headline}
              </motion.h2>
              <motion.p
                variants={slideUp}
                className="text-base md:text-[17px] leading-[1.8] text-foreground/60 mb-6"
                style={{ fontWeight: 300 }}>
                
                {home.profeducation.body}
              </motion.p>
              <motion.p
                variants={slideUp}
                className="text-sm text-foreground/40"
                style={{ fontWeight: 300 }}>
                
                {home.profeducation.note}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
             ABOUT MONICA — large portrait, asymmetric editorial
          ───────────────────────────────────────────────────────────── */}
        <section
          className="border-t border-foreground/10"
          style={{ background: 'hsl(var(--background))' }}>
          
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-start">

              {/* Portrait — large, takes 5 columns, full height */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="md:col-span-5 relative"
                style={{ minHeight: 'clamp(400px, 55vw, 680px)' }}>
                
                <img
                  src="/airo-assets/images/pages/home/about-psychiatrist"
                  alt="Monica Slubicki, MD — Psychiatrist and Founder of Wise Recovery"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy" />
                
              </motion.div>

              {/* Text — 6 columns, offset, vertically centered */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="md:col-start-7 md:col-span-6 py-16 md:py-24 flex flex-col justify-center">
                
                <motion.p
                  variants={slideUp}
                  className="text-xs tracking-[0.2em] text-foreground/30 font-medium mb-8">
                  
                  {home.about.eyebrow.toUpperCase()}
                </motion.p>
                <motion.h2
                  variants={slideUp}
                  className="font-light leading-[1.0] tracking-tight text-foreground mb-3"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 52px)',
                    fontFamily: 'var(--font-heading)'
                  }}>
                  
                  {home.about.name}
                </motion.h2>
                <motion.p
                  variants={slideUp}
                  className="text-sm text-foreground/40 mb-10 font-light">
                  
                  {home.about.title}
                </motion.p>
                <motion.p
                  variants={slideUp}
                  className="text-base md:text-[17px] leading-[1.8] text-foreground/60 mb-10"
                  style={{ fontWeight: 300 }}>
                  
                  {home.about.bio}
                </motion.p>
                <motion.div variants={slideUp}>
                  <Link
                    to="/about"
                    className="text-sm font-medium text-foreground border-b border-foreground pb-0.5 hover:text-foreground/50 hover:border-foreground/50 transition-colors duration-200">
                    
                    {home.about.cta} →
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
             CONTACT — deep navy, oversized question, minimal
          ───────────────────────────────────────────────────────────── */}
        <section
          className="py-24 md:py-36"
          style={{ background: 'hsl(var(--footer-bg))' }}>
          
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}>
              
              {/* Oversized question */}
              <motion.h2
                variants={slideUp}
                className="font-light leading-[0.95] tracking-tight text-primary-foreground mb-16 md:mb-20"
                style={{
                  fontSize: 'clamp(2.8rem, 7vw, 84px)',
                  fontFamily: 'var(--font-heading)',
                  maxWidth: '14ch'
                }}>
                
                Questions about<br />
                <span style={{ fontFamily: 'var(--font-display-serif)', fontStyle: 'italic' }}>
                  Wise Recovery?
                </span>
              </motion.h2>

              {/* Contact info + body — asymmetric */}
              <motion.div
                variants={slideUp}
                className="grid grid-cols-1 md:grid-cols-12 gap-10">
                
                <p
                  className="md:col-span-5 text-base leading-[1.8] font-light"
                  style={{ color: 'hsl(var(--white) / 0.5)' }}>
                  
                  {home.contact.body}
                </p>
                <div className="md:col-start-8 md:col-span-4 flex flex-col gap-4">
                  <p
                    className="text-sm font-medium text-primary-foreground">
                    
                    {home.contact.name}
                  </p>
                  <Link
                    to="/contact"
                    className="text-sm font-medium border-b pb-0.5 hover:opacity-60 transition-opacity duration-200 self-start"
                    style={{
                      color: 'hsl(var(--white) / 0.7)',
                      borderColor: 'hsl(var(--white) / 0.25)'
                    }}>
                    
                    Get in touch →
                  </Link>
                  <p
                    className="text-xs mt-6 pt-6 border-t font-light"
                    style={{
                      color: 'hsl(var(--white) / 0.25)',
                      borderColor: 'hsl(var(--white) / 0.1)'
                    }}>
                    
                    {home.contact.disclaimer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
    </>);

}