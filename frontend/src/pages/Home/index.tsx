import { IDinosaur } from "../../models/dinosaur.interface";
import { CreateModal } from "../../components/CreateModal";
import { useEffect, useState } from "react";
import { BadgeCard } from "../../components/BadgeCard";
import { ActionIcon, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons";
import { Dinosaur } from "../../api/api";

export function Home() {
  const [create, createHandler] = useDisclosure(false);

  const [dinosaurs, setDinosaurs] = useState<IDinosaur[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = () => {
    Dinosaur.getDinosaurs()
      .then((data) => {
        setDinosaurs(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }


  const removeDinosaur = async (id: number) => {
    const responseCheck = await Dinosaur.deleteDinosaur(id);
    if (responseCheck.status == 204) {
      setDinosaurs(dinosaurs.filter(dinosaur => dinosaur.id !== id));
    } else {
      console.log(responseCheck);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="Home">
      <Group position="center">
        <ActionIcon onClick={createHandler.toggle} variant="default" radius="md" size={36}>
          <IconPlus size={18} stroke={1.5} />
        </ActionIcon>
      </Group>
      <CreateModal onOpen={create} onToggle={createHandler.toggle} onSubmit={handleAddDinosaur} />
      {dinosaurs.map((dinosaur, index) => {
        console.log(dinosaur)
        return (
          <BadgeCard
            key={index}
            dinosaur={dinosaur}
            onRemove={() => { removeDinosaur(dinosaur.id) }}
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
