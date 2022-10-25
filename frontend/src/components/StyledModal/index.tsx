import { useState } from 'react';
import { Modal, Button, Group, Text, Title } from '@mantine/core';
import { useStyles } from './style';

export interface StyledModalProps {
  title: string;
  buttonValue: string;
  content: string;
}

export function StyledModal({ title, buttonValue, content }: StyledModalProps) {
  const [opened, setOpened] = useState(false);
  const { classes, theme } = useStyles();

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Title order={3} weight={500}>
            {title}
          </Title>
        }
      >
        <Text size="md" weight={400}>
          {content}
        </Text>
      </Modal>

      <Group position="center">
        <Button radius="md" onClick={() => setOpened(true)}>
          {buttonValue}
        </Button>
      </Group>
    </>
  );
}
