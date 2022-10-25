import { useEffect, useState } from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Dinosaur } from '../../api/api';
import { Box } from '@mantine/core';
import { DinosaurType } from '../../models/dinosaur.interface';
import { BadgeCard } from '../../components/BadgeCard';


export function Home() {
  const [opened, handlers] = useDisclosure(false, {
    onOpen: () => console.log('Opened'),
    onClose: () => console.log('Closed'),
  });

  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [dinosaurs, setDinosaurs] = useState<DinosaurType[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    Dinosaur.getDinosaurs()
      .then((data) => {
        setDinosaurs(data);
      })
      .catch(() => {
        setIsError(true);
      });
    return () => { };
  }, []);

  return (
    <div className="Home">
      <h1>Dinopedia</h1>
      {dinosaurs.map((data) => {
        return (
          <BadgeCard
            image={data.image}
            title={data.name}
            country={data.country}
            description={data.description}
            badges={[
              { emoji: <></>, label:<></> }
            ]}
          />
        );
      })}
    </div>
  )
}