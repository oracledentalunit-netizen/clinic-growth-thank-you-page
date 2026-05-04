import { motion } from "motion/react";
import { CheckCircle, ArrowRight, ShieldCheck, PlayCircle, Users } from "lucide-react";

export default function App() {
  const whatsappLink = "https://chat.whatsapp.com/F8t2UltCzMw4xaz8lYoteW";

  // Animation variants
  const containerVars = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 font-sans text-slate-100 selection:bg-brand-blue selection:text-white">
      {/* Immersive background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/20 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-purple/20 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[140px] opacity-30 mix-blend-screen" />
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 z-10 py-12"
        variants={containerVars}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-slate-900/50 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_0_80px_rgba(37,99,235,0.1)] relative overflow-hidden">
          
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />

          {/* 1. Success Confirmation Section */}
          <motion.div variants={itemVars} className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
              >
                <CheckCircle className="w-10 h-10" />
              </motion.div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">
              🎉 Payment <br className="hidden sm:block" /> Successful!
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-lg mb-8 font-medium">
              You're now officially inside the <span className="text-white font-semibold shadow-white/20">Dentist Growth System</span> by Dr. Prashant Kumar Vats.
            </p>
          </motion.div>

          <motion.div variants={itemVars} className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

          {/* 2. Instruction Section */}
          <motion.div variants={itemVars} className="bg-slate-950/60 rounded-2xl p-6 border border-white/5 mb-8 text-center ring-1 ring-inset ring-white/5 shadow-inner">
            <h2 className="text-xl font-semibold mb-3 text-white">Next Step: Claim Your Access</h2>
            <p className="text-slate-400 mb-6 text-sm sm:text-base pr-2 pl-2">
              To access your exclusive templates, webinar recordings, and direct support, you must join our private community.
            </p>
            
            <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-slate-300 font-medium">
              <li className="flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-brand-purple" />
                Templates & Webinars
              </li>
              <li className="hidden sm:block text-slate-600">•</li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-blue" />
                Private Support
              </li>
            </ul>
          </motion.div>

          {/* 3. CTA Button */}
          <motion.div variants={itemVars} className="flex flex-col items-center">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              animate={{ 
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0px 0px 40px rgba(37,211,102,0.4)", 
                  "0px 0px 70px rgba(37,211,102,0.6)", 
                  "0px 0px 40px rgba(37,211,102,0.4)"
                ] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center justify-center gap-3 w-full sm:w-auto bg-[#25D366] hover:bg-[#1DA851] text-white py-4 px-8 sm:px-12 rounded-full font-bold text-lg sm:text-xl transition-colors"
            >
              {/* WhatsApp Icon SVG directly integrated */}
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-7 h-7 sm:w-8 sm:h-8"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.062-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>👉 Join WhatsApp Group Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <p className="mt-4 text-xs tracking-wide text-slate-500 uppercase font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Secure 256-bit encrypted checkout completed
            </p>
          </motion.div>

        </div>
        
        {/* Footer info / Branding */}
        <motion.div variants={itemVars} className="mt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Dentist Patient Acquisition System.</p>
          <p>Created by Dr. Prashant Kumar Vats</p>
        </motion.div>

      </motion.div>
    </div>
  );
}
