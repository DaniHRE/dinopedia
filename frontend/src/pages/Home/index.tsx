import { IDinosaur } from "../../models/dinosaur.interface";
import { CreateModal } from "../../components/CreateModal";
import { useEffect, useReducer, useState } from "react";
import { BadgeCard } from "../../components/BadgeCard";
import { ActionIcon, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons";
import { Dinosaur } from "../../api/api";

export function Home() {
  const [opened, handlers] = useDisclosure(false);

  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [dinosaurs, setDinosaurs] = useState<IDinosaur[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0)

  useEffect(() => {
    Dinosaur.getDinosaurs()
      .then((data) => {
        setDinosaurs(data);
      })
      .catch(() => {
        setIsError(true);
      });
    console.log('refetched')
    return () => { };
  }, [reducerValue]);

  return (
    <div className="Home">
      <Group position="center">
        <ActionIcon onClick={handlers.toggle} variant="default" radius="md" size={36}>
          <IconPlus size={18} stroke={1.5} />
        </ActionIcon>
      </Group>
      <CreateModal onOpen={opened} onToggle={handlers.toggle} onExit={forceUpdate}/>
      {dinosaurs.map((dinosaur, index) => {
        return (
          <BadgeCard
            key={index}
            id={dinosaur.id}
            image={dinosaur.image}
            title={dinosaur.name}
            country={dinosaur.region}
            shortDescription={dinosaur.short_description}
            description={dinosaur.description}
            badges={[
              { emoji: "🥄", label: `${dinosaur.feeding_habit}` },
              { emoji: "🆙", label: `${dinosaur.height}` },
              { emoji: "📏", label: `${dinosaur.length}` },
              { emoji: "🏋️‍♀️", label: `${dinosaur.weight}` },
              { emoji: "🦖", label: `${dinosaur.species}` },
            ]}
            serviceState={[
              {onToggleHandler: handlers.toggle},
              {onExit: forceUpdate},
              {onOpen: opened}
            ]}
          />
        );
      })}
    </div>
  );
}
