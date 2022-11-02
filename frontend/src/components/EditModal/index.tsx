import { useState } from 'react';
import { useStyles } from './style';
import { useForm } from '@mantine/form';
import { Dinosaur } from '../../api/api';
import { IconUpload } from '@tabler/icons';
import { IDinosaur } from '../../models/dinosaur.interface';
import { Modal, Button, Group, Title, DefaultProps, TextInput, Textarea, NumberInput, FileInput, Image } from '@mantine/core';

export interface EditModalProps extends DefaultProps {
    dinosaur: IDinosaur
    isOpen: boolean;
    onToggle: () => void;
    onEdit: Function;
}

export function EditModal({ dinosaur, isOpen, onEdit, onToggle }: EditModalProps) {
    const { classes } = useStyles();
    const [file, setFile] = useState<File | null>(null);

    const form = useForm({
        initialValues: {
            image: file,
            name: dinosaur.name,
            species: dinosaur.species,
            feeding_habit: dinosaur.feeding_habit,
            height: dinosaur.height,
            length: dinosaur.length,
            weight: dinosaur.weight,
            region: dinosaur.region,
            short_description: dinosaur.short_description,
            description: dinosaur.description
        },
        validate: {
            name: (value) => (value.length < 0 ? 'Name must have any caracter' : null),
            species: (value) => (!value ? 'This field needs to be filled' : null),
            feeding_habit: (value) => (!value ? 'This field needs to be filled' : null),
            height: (value) => (!value ? 'This field needs to be filled' : null),
            length: (value) => (!value ? 'This field needs to be filled' : null),
            weight: (value) => (!value ? 'This field needs to be filled' : null),
            region: (value) => (!value ? 'This field needs to be filled' : null),
            short_description: (value) => (!value ? 'This field needs to be filled' : null),
            description: (value) => (!value ? 'This field needs to be filled' : null),
            // image: (value: File) => (!value ? 'Need to atache a image' : null),
        },
    });

    const edit = async () => {
        await Dinosaur.updateDinosaur({ ...form.values }, dinosaur.id);
        onToggle();
        onEdit();
    }

    return (
        <>
            <Modal
                opened={isOpen}
                overlayOpacity={0.55}
                overlayBlur={3}
                onClose={() => { onToggle(); }}
                title={
                    <Title order={3} weight={500}>
                        Edit {dinosaur.name} 🦖
                    </Title>
                }
            >

                <Image
                    radius="md"
                    width='100%'
                    height='auto'
                    src={dinosaur.image}
                    alt="Random unsplash image"
                />

                <form onSubmit={form.onSubmit((values) => { edit() })}>
                    <Group className={classes.flex} grow mt="sm">
                        <TextInput withAsterisk label="Name" placeholder="Name" {...form.getInputProps('name')} />
                        <TextInput withAsterisk label="Species" placeholder="Species" {...form.getInputProps('species')} />
                    </Group>
                    <Group className={classes.flex} grow mt="sm">
                        <TextInput withAsterisk label="Feeding Habit" placeholder="Feeding Habit" {...form.getInputProps('feeding_habit')} />
                        <TextInput withAsterisk label="Region" placeholder="Region" {...form.getInputProps('region')} />
                    </Group>
                    <Group className={classes.flex} grow mt="sm">
                        <NumberInput withAsterisk label="Height in m" placeholder="Height" {...form.getInputProps('height')} />
                        <NumberInput withAsterisk label="Length in m" placeholder="Length" {...form.getInputProps('length')} />
                        <NumberInput withAsterisk label="Weight in kg" placeholder="Weight" {...form.getInputProps('weight')} />
                    </Group>
                    <Group className={classes.flex} grow mt="sm">
                        <Textarea autosize minRows={1} maxRows={4} withAsterisk label="Short Description" {...form.getInputProps('short_description')} />
                        <Textarea autosize minRows={1} maxRows={4} withAsterisk label="Description" {...form.getInputProps('description')} />
                    </Group>

                    <Group mt="xl" position="apart">
                        <FileInput
                            placeholder="Your image"
                            accept="image/*"
                            onChange={setFile} {...form.getInputProps('image')}
                            icon={<IconUpload size={14} />} />
                        <Button type="submit"> Confirm </Button>
                    </Group>
                </form>
            </Modal>
        </>
    );
}
