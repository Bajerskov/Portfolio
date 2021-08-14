import Link from 'next/link'
import { motion } from 'framer-motion'
import { buttonProp } from '../models/button.prop'

export default function AnimatedButton(data:buttonProp) {
    return (
        <>
            <Link href={data.url} passHref>
                <motion.button
                className='block pointer bg-gray-800 text-white rounded-lg py-5 px-9 hover:bg-gray-600'
                whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                >
                {data.text}
                </motion.button>
            </Link>
    </>
    );
}