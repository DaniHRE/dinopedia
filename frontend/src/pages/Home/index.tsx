import { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Dinosaur } from '../../api/api';
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
      {dinosaurs.map((data) => {
        return (
          <BadgeCard
            image={data.image}
            title={data.name}
            country={data.region}
            shortDescription={data.short_description}
            description={data.description}
            badges={[
              { emoji: '🥄', label: `${data.feeding_habit}` },
              { emoji: '🆙', label: `${data.height}` },
              { emoji: '🏋️‍♀️', label: `${data.weight}` },
              { emoji: '📏', label: `${data.length}`},
              { emoji: '🦖', label: `${data.species}`}
            ]}
          />
        );
      })}
    </div>
  )
}