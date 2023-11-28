import {
  Title,
  Button,
  Group,
  Text,
  Stack,
  Container,
  Divider,
  rem,
  List,
  ThemeIcon,
} from '@mantine/core';
import { IconDownload, IconSchool } from '@tabler/icons-react';
import { Image } from '@mantine/core';
import classes from './Hero.module.css';
import resumePic from '/profilePic.png';

import Contact from '../Contact';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import HeroList from '../ui/List';



const boxVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0, },
}
const styles = {
  width: rem(12),
  height: rem(12),
}


export function Hero() {

  const ref = useRef(null)
  const control = useAnimation()
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={{ type: 'ease', duration: 0.8 }}

    >
      <Container className={classes.mainContainer} id='home' ref={ref}>
        <Stack className={classes.mainInfo} >
          <Title className={classes.title} id='home'>
            John A. Kornegay
          </Title>
          <Text className={classes.goal}>
            Frontend Developer
          </Text>
          <Text className={classes.objective} >
            <b>Objective</b>: A highly motivated individual seeking an internship opportunity to gain experience in the field of web development.
          </Text>
        </Stack>
        <div className={classes.inner}
        >
          <Stack className={classes.wrapper}
          >
            <motion.div variants={{
              hidden: { opacity: 0.3 },
              visible: { opacity: 1 }
            }} transition={{ type: 'ease', }}>
              <Image src={resumePic} className={classes.image} fallbackSrc='https://placehold.co/400x400?text=:)' alt="headshot photo" />
            </motion.div>
            <div className={classes.contacts} >
              <Contact />
            </div>
          </Stack>


          <div className={classes.content}>
            <Text className={classes.banner}>Education</Text>
            <Divider mb='xs' />
            <List>
              <List.Item className={classes.listItem} icon={<ThemeIcon size={20} radius="md" variant="outline" className={classes.icon}>
                <IconSchool
                  style={styles}
                  stroke={2}
                />
              </ThemeIcon>}>
                <b>Bachelor of Science in Molecular and Cell Biology</b> – <span>Graduation: 2016</span> <br />
                University of Texas A&M  - College Station, TX
              </List.Item>
         
              <Text fw={300} mb='xs' className={classes.locHistory}>
            
              </Text>
            </List>
            <Text className={classes.banner}>Features</Text>
            <Divider mb='md' />
            <HeroList />
            <Group mt={30}>
              <motion.div whileHover={{
                scale: 1.1,
                transition: { type: 'ease' },
              }}>
                <Button radius="sm" size="xs" className={classes.control} >
                  Download Resume <IconDownload stroke={3} style={{
                    width: rem(12),
                    height: rem(12),
                    marginLeft: '5px',
                  }} />
                </Button>
              </motion.div>
            </Group>
          </div>

        </div>
      </Container>
    </motion.div >

  );
}


// TODO: add button icon to download button