import { Card, Image, Text, Group, Badge } from '@mantine/core';
import { useStyles } from './style';
import { StyledModal } from '../StyledModal';
import { DeleteModal } from '../DeleteModal';

interface BadgeCardProps {
    id: number;
    image: string;
    title: string;
    country: string;
    shortDescription: string;
    description: string;
    badges: {
        emoji: string;
        label: string;
    }[];
}

export function BadgeCard({ id, image, title, shortDescription, description, country, badges }: BadgeCardProps) {
    const { classes, theme } = useStyles();

    const features = badges.map((badge, index) => (
        <Badge
            color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
            key={index}
            leftSection={badge.emoji}
        >
            {badge.label}
        </Badge>
    ));

    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Image src={image} alt={title} height={180} />
            </Card.Section>

            <Card.Section className={classes.section}>
                <Group position="apart">
                    <Text size="lg" weight={500}>
                        {title}
                    </Text>
                    <Badge size="sm">🌎 {country}</Badge>
                </Group>
                <Text size="sm" mt="xs">
                    {shortDescription}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Text style={{}} size="sm" className={classes.label} color="dimmed">
                    Detailed Info
                </Text>
                <Group spacing={7} mt={5}>
                    {features}
                </Group>
            </Card.Section>

            <Group mt="xs">
                <StyledModal title={`${title}`} buttonValue='Show details' content={`${description}`} />
                <DeleteModal id={id}/>
                {/* <ActionIcon variant="default" radius="md" size={36}>
                    <IconHeart size={18} className={classes.like} stroke={1.5} />
                </ActionIcon> */}
            </Group>
        </Card>
    );
}
