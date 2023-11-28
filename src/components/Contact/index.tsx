import { Group, Title, Text, rem, Divider, Paper } from '@mantine/core';
import { IconMail, IconMapPin, IconSun } from '@tabler/icons-react';
import classes from './Contact.module.css';
import { Link } from 'react-router-dom';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  link: string;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, description, link, ...others }: ContactIconProps) {

  const emailLink = link === 'mailto:jakornegay01@gmail.com' ? 'auto' : 'none';

  return (
    <div className={classes.wrapper} {...others}>
      <Link to={link} style={{ textDecoration: 'none', pointerEvents: emailLink }}>
        <Group>
          <Icon
            style={{
              width: rem(16),
              height: rem(16),
              color: 'var(--mantine-color-blue-6)',
              marginRight: rem(-5),
            }}
          />
          <Text className={classes.description}>{description}</Text>
        </Group>
      </Link>
    </div>
  );
}

const contactData = [
  { description: 'Jakornegay01@gmail.com', icon: IconMail, link: 'mailto:jakornegay01@gmail.com' },
  { description: 'McAllen, TX', icon: IconMapPin, link: '' },
];

const Contact = () => {
  const items = contactData.map((item, index) => <ContactIcon key={index} {...item} />);
  return (
    <Paper>
      <div>
        <Title order={5} className={classes.title}>
          Contact Information
        </Title>
        <Divider mb="xs" />
        <Group gap='xs'>{items}</Group>
      </div>
    </Paper>
  );
};

export default Contact;
