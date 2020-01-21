import React from "react";
import {
  Card,
  CardImage,
  CardContent,
  Media,
  MediaContent,
  Title
} from "bloomer";

const cardText = "Enter Quiz";
const CardComponent = ({ launchModal }) => {
  return (
    <Card onClick={launchModal}>
      <CardImage />
      <CardContent>
        <Media>
          <MediaContent>
            <Title isSize={4} hasTextAlign="centered">
              {cardText}
            </Title>
          </MediaContent>
        </Media>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
