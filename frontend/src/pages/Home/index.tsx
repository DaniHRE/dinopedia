import { IDinosaur } from "../../models/dinosaur.interface";
import { CreateModal } from "../../components/CreateModal";
import { useEffect, useReducer, useState } from "react";
import { BadgeCard } from "../../components/BadgeCard";
import { ActionIcon, Button, Group } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { Dinosaur } from "../../api/api";

export function Home() {
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [dinosaurs, setDinosaurs] = useState<IDinosaur[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    Dinosaur.getDinosaurs()
      .then((data) => {
        setDinosaurs(data);
      })
      .catch(() => {
        setIsError(true);
      });
    return () => { };
  }, [reducerValue]);

  return (
    <div className="Home">
      <Group position="center">
        <ActionIcon onClick={handleShow} variant="default" radius="md" size={36}>
          <IconPlus size={18} stroke={1.5} />
        </ActionIcon>
      </Group>
      <CreateModal show={show} onHide={handleClose} onExit={forceUpdate} />
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
          />
        );
      })}
    </div>
  );
}
