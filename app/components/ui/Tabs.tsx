// 'use client'
// import { useState } from "react";
// import { motion } from 'framer-motion';
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// function AnimatedTabs({tabs}) {
//     const pathname = usePathname();
//     const route = pathname.slice(9);
    
//     const [activeTab, setActiveTab] = useState(tabs.filter(tab => tab.id === route)[0].id);
  
//     return (
//       <div className="flex space-x-1 ">
//         {tabs.map((tab) => (
//           <Link href={`/account/${tab.id}`} key={tab.id}>

//           <button
            
//             onClick={() => setActiveTab(tab.id)}
//             className={`${
//               activeTab === tab.id ? "" : "hover:text-white/60"
//             } relative rounded-full px-3 py-1.5 text-sm font-medium text-black outline-sky-400 transition focus-visible:outline-2 `}
//             style={{
//               WebkitTapHighlightColor: "transparent",
//             }}
//           >
//             {activeTab === tab.id && (
//               <motion.span
//                 layoutId="bubble"
//                 className="absolute inset-0 z-10 bg-white mix-blend-difference"
//                 style={{ borderRadius: 9999 }}
//                 transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//               />
//             )}
            
//             {tab.label}
//           </button>
//           </Link>
//         ))}
//       </div>
//     );
//   }

//   export default AnimatedTabs

'use client'

import { useState } from "react"
import { motion } from 'framer-motion'
import Link from "next/link"
import { usePathname } from "next/navigation"

function AnimatedTabs({ tabs }) {
  const pathname = usePathname()
  const route = pathname.slice(9)
  
  const [activeTab, setActiveTab] = useState(tabs.filter(tab => tab.id === route)[0].id)

  return (
    <div className="flex space-x-2 p-1 bg-white rounded-full">
    {tabs.map((tab) => (
      <Link href={`/account/${tab.id}`} key={tab.id}>
        <button
          onClick={() => setActiveTab(tab.id)}
          className={`
            relative rounded-full px-4 py-2 text-base font-medium
            transition-colors duration-200
            ${activeTab === tab.id ? "text-white" : "text-black hover:text-black/70"}
            outline-sky-400 focus-visible:outline-2
          `}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-green-500"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-20">{tab.label}</span>
        </button>
      </Link>
    ))}
  </div>
  )
}

export default AnimatedTabs

