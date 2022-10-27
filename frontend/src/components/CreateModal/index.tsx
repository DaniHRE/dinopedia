import { useState } from 'react';
import { useStyles } from './style';
import { useForm } from '@mantine/form';
import { IconPlus } from '@tabler/icons';
import { Modal, Button, Group, Title, DefaultProps, ActionIcon, TextInput, Textarea, NumberInput, FileButton } from '@mantine/core';
import { Dinosaur } from '../../api/api';

export interface CreateModalProps extends DefaultProps {
    // onOpen: () => void;
    // setIsEdit: (state: boolean) => void;
    // dinosaur: DinosaurType;
}

export function CreateModal({ onOpen, setIsEdit, dinosaur }: CreateModalProps) {
    const [opened, setOpened] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const { classes } = useStyles();

    const form = useForm({
        initialValues: {
            image: file,
            name: '',
            species: '',
            feeding_habit: '',
            height: '',
            length: '',
            weight: '',
            region: '',
            short_description: '',
            description: ''
        }
    });

    console.table(form.values.image)

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => { setOpened(false); form.reset() }}
                title={
                    <Title order={3} weight={500}>
                        Add Dinosaur 🦖
                    </Title>
                }
            >
                <Group grow mt="sm">
                    <TextInput withAsterisk label="Name" placeholder="Name" {...form.getInputProps('name')} />
                    <TextInput withAsterisk label="Species" placeholder="Species" {...form.getInputProps('species')} />
                </Group>
                <Group grow mt="sm">
                    <TextInput withAsterisk label="Feeding Habit" placeholder="Feeding Habit" {...form.getInputProps('feeding_habit')} />
                    <TextInput withAsterisk label="Region" placeholder="Region" {...form.getInputProps('region')} />
                </Group>
                <Group grow mt="sm">
                    <NumberInput withAsterisk label="Height in m" placeholder="Height" {...form.getInputProps('height')} />
                    <NumberInput withAsterisk label="Length in m" placeholder="Length" {...form.getInputProps('length')} />
                    <NumberInput withAsterisk label="Weight in kg" placeholder="Weight" {...form.getInputProps('weight')} />
                </Group>
                <Group style={{ display: 'flex', alignItems: 'flex-start' }} grow mt="sm">
                    <Textarea autosize minRows={1} maxRows={4} withAsterisk label="Short Description" {...form.getInputProps('short_description')} />
                    <Textarea autosize minRows={1} maxRows={4} withAsterisk label="Description" {...form.getInputProps('description')} />
                </Group>

                <Group mt="xl" position="apart">
                    <FileButton onChange={setFile} accept="image/*">
                        {(props) => <Button {...props}>Upload image</Button>}
                    </FileButton>
                    <Button onClick={() => Dinosaur.createDinosaur(form.values)}> Confirm </Button>
                </Group>
            </Modal>

            <Group position="center">
                <ActionIcon onClick={() => setOpened(true)} variant="default" radius="md" size={36}>
                    <IconPlus size={18} stroke={1.5} />
                </ActionIcon>
            </Group>
        </>
    );
}
