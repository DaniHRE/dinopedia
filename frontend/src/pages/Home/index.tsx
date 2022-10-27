import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Dinosaur } from "../../api/api";
import { IDinosaur } from "../../models/dinosaur.interface";
import { BadgeCard } from "../../components/BadgeCard";
import { CreateModal } from "../../components/CreateModal";

export function Home() {
  const [opened, handlers] = useDisclosure(false, {
    onOpen: () => console.log("Opened"),
    onClose: () => console.log("Closed"),
  });

  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [dinosaurs, setDinosaurs] = useState<IDinosaur[]>([]);
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
      <CreateModal />
      {dinosaurs.map((dinosaur) => {
        return (
          <BadgeCard
            key={dinosaur.id}
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
