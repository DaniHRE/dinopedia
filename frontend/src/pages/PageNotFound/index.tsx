import { Image, Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
import image from '../../assets/404_page.svg';
import { useStyles } from './style';
import { IconBrandTwitter } from '@tabler/icons';

export function PageNotFound() {
    const { classes } = useStyles();

    return (
        <Container className={classes.div}>
            <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
                <Image src={image} className={classes.mobileImage} />
                <div>
                    <Title className={classes.title}>Something is not right...</Title>
                    <Text color="dimmed" size="lg">
                        Page you are trying to open does not exist. You may have mistyped the address, or the
                        page has been moved to another URL. If you think this is an error contact support.
                    </Text>
                    <Button component="a" href="/" variant="outline" size="md" mt="xl" className={classes.control}>
                        Get back to home page
                    </Button>
                </div>
                <Image src={image} className={classes.desktopImage} />
            </SimpleGrid>
        </Container>
    )
}