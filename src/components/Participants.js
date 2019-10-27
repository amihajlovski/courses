import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { Block } from "../styles/Block";
import { CustomForm } from "./CustomForm";

export const Participants = () => {
  const [participants, setParticipants] = useState([{ index: 0 }]);

  return (
    <Block background="#F7F5F3">
      {participants.map((item, index) => (
        <div key={index}>
          <CustomForm
            settings={{
              title: "Participants",
              subTitle: `Participant #${index + 1}`,
              type: "inputs",
              hideTitle: item.index > 0
            }}
          />
        </div>
      ))}
      <Button
        color="brown"
        onClick={() =>
          setParticipants([...participants, { index: participants.length - 1 }])
        }
      >
        Add Participant
      </Button>
    </Block>
  );
};
