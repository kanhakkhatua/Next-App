import axios from "axios";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInRight = {
    initial: {
        x: -60,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.8
        }
    }
};

const styleA = {
    cursor: "pointer"
};

const Pid = ({ postById }) => (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate" className="bg-[#f1f1f9] h-screen w-screen flex items-center flex-col justify-center" >
        <motion.div variants={stagger} className='rounded-md shadow-lg p-4 bg-white'>
            <Link href="/">
                <motion.div variants={fadeInRight}>
                    <a style={styleA}>Back to Home</a>
                </motion.div>
            </Link>
            <motion.p variants={fadeInRight}>Post: {postById}</motion.p>
            <motion.div variants={fadeInRight} className="dropdown dropdown-hover dropdown-right ring-1 rounded-lg ring-gray-300">
                <label tabIndex={0} className="h-0 text-xs p-2">Hover</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow-lg rounded-box w-52 bg-gray-200">
                    <motion.li variants={fadeInRight}>Item 1</motion.li>
                    <motion.li variants={fadeInRight}>Item 2</motion.li>
                </ul>
            </motion.div>
        </motion.div>
    </motion.div>
);

Pid.getInitialProps = async ctx => {
    const { pid } = ctx.query;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${pid}`);
    // const getJson = await res.data.json();

    return {
        postById: "Kanha Kumar"
    };
};

export default Pid;