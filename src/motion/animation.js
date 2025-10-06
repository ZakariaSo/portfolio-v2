

export const staggerContainer = {
    hidden : {},
    show : {
        transition: {
            staggerChildren: 0.4
        },
    },
};

export const fadeIn = {
    hidden:{ 
        opacity: 0,
        filter: "blur(10px)",
    },
    show: {
        opacity: 1,
        filter: "blur(0)",
        transition:{
            duration: 0.7,
            ease: "easeIn",
        },
    },
};


export const fadeInUp = {
    hidden:{ 
        y:30,
        opacity: 0,
        filter: "blur(6px)",
    },
    show: {
        y:0,
        opacity: 1,
        filter: "blur(0)",
        transition:{
            duration: 0.7,
            ease: "easeInOut",
        },
    },
};