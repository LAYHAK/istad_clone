'use client'
import {Image, Paper, rem, Text, Title} from '@mantine/core';
import {Carousel} from '@mantine/carousel';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import classes from "../css/slide.module.css";
import {useRef} from "react";
import Autoplay from "embla-carousel-autoplay";
import {Button} from "flowbite-react";

const data = [
    /* ... urls of images */
    {
        img: '/images/slide/slide1.png',
        title: 'Center of Science and Technology Advanced Development',
        desc: 'CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.'
    },
    {
        img: '/images/slide/slide2.png',
        title: 'Mission',
        desc: 'Provide the latest methodology with high-quality training and mentoring\n' +
            '\n' +
            'Build up the capacity and career of IT experts Cambodia\n' +
            '\n' +
            'Consult and connect CSTAD trainees to top IT careers'
    },
    {
        img: '/images/slide/slide3.png',
        title: 'Vision',
        desc: 'Advanced IT Center in Cambodia'
    }
]

interface CardProps {
    img: string;
    title: string;
    desc: string;
}

const buttonColor = {
    color: {
        blue: 'text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 opacity-60 hover:opacity-100 ms-20',
    }
}

function Card({img, title, desc}: CardProps) {
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="unset"
            className={classes.card}
        >
            <div className="ms-20 pb-4">
                <Image src={img} alt={title} className={classes.bg}/>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
                <Text className={classes.category} size="md">
                    {desc}
                </Text>
            </div>
            <Button color="blue" theme={buttonColor}>
                Enroll now
            </Button>

        </Paper>
    );
}

const Slide = () => {
    const autoplay = useRef(Autoplay({delay: 5000}));
    const slides = data.map((item) => {
        return (
            <Carousel.Slide key={item.title}>
                <Card {...item}/>
            </Carousel.Slide>
        )
    });

    return <Carousel
        withIndicators height={600}
        nextControlIcon={
            <FaArrowRight style={{width: rem(30), height: rem(30), color: 'white'}}/>
        }
        previousControlIcon={
            <FaArrowLeft style={{width: rem(30), height: rem(30), color: 'white'}}/>
        }
        controlSize={40}
        classNames={{indicator: classes.indicator}}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
    >
        {slides}
    </Carousel>;

}

export default Slide;