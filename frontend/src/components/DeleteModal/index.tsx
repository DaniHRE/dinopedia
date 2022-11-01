import { useStyles } from './style';
import { Modal, Button, Title, DefaultProps, Group, ActionIcon } from '@mantine/core';

export interface DeleteModalProps extends DefaultProps {
    dinosaurID: number;
    isOpen: boolean;
    onToggle: () => void;
    onRemove: () => void;
}

export function DeleteModal({ dinosaurID, isOpen, onToggle, onRemove }: DeleteModalProps) {
    const { classes } = useStyles();

    return (
        <Modal
            opened={isOpen}
            overlayOpacity={0.55}
            overlayBlur={3}
            onClose={() => { onToggle() }}
            title={
                <Title order={3} weight={500}>
                    Remove Dinosaur 🦖☄
                    {`${dinosaurID}`}
                </Title>
            }
        >
            <Button onClick={() => {onRemove(); onToggle()}} />
        </Modal>
    );
}
