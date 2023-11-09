import { motion } from "framer-motion"

const FramerMotionLoading = () => {
    return (<motion.div className="h-60 w-60 font-bold text-red-400 text-center text-2xl border-2 border-red-400 bg-white mx-auto flex justify-center items-center p-4"
        animate={{
            scale: [1, 2, 2, 1, 1],
            // rotate: [0, 0, 270, 270, 0],
            borderRadius: ["10%", "10%", "50%", "50%", "10%"],
        }}
        transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
        }}
    >No Data till now...<br />Wait a moment or search with different keyword</motion.div>)
};

export default FramerMotionLoading;