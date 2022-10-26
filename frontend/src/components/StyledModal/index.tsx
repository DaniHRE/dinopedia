import { useState } from 'react';
import { Modal, Button, Group, Text, Title, DefaultProps } from '@mantine/core';
import { useStyles } from './style';

export interface StyledModalProps extends DefaultProps {
  title: string;
  buttonValue: string;
  content: string;
}

export function StyledModal({ title, buttonValue, content }: StyledModalProps) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

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

      <Group style={{ flex: 1}} position="center">
        <Button radius="md" style={{ flex: 1 }} onClick={() => setOpened(true)}>
          {buttonValue}
        </Button>
      </Group>
    </>
  );
}
