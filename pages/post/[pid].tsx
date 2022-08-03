// import fetch from "isomorphic-unfetch";
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
            staggerChildren: 0.4
        }
    }
};

const styleA = {
    cursor: "pointer"
};

const Pid = ({ postById }) => (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={stagger}>
            <Link href="/">
                <motion.div variants={fadeInRight}>
                    <a style={styleA}>Back to Home</a>
                </motion.div>
            </Link>
            <motion.p variants={fadeInRight}>Post: {postById}</motion.p>
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