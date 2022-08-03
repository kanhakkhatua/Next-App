import { useEffect, useState } from "react";
import Link from "next/link";
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
// import Apabae from "../components/Apabae";
import Axios from "axios";


const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        cursor: "pointer",
        transition: {
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};


const Index = () => {
    const [todos, setTodos] = useState<object[]>([]);
    useEffect(() => {
        (async () => {
            const { data } = await Axios.get(
                "https://jsonplaceholder.typicode.com/todos?_limit=5"
            );
            setTodos(data);
            console.log(todos);
        })();
    }, []);
    return (
        <motion.div drag exit={{ opacity: 0 }} initial="initial" animate="animate">
            <motion.ul variants={stagger}>
                {todos &&
                    todos.map(post => (
                        <Link key={post?.id} href="/post/[pid]" as={`/post/${post?.id}`}>
                            <motion.li variants={fadeInUp}>{post?.title}</motion.li>
                        </Link>
                    ))}
            </motion.ul>
        </motion.div>
    );
};


export default Index;