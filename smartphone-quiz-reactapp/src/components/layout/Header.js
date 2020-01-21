import React from "react";
import {
  Hero,
  HeroBody,
  Container,
  Columns,
  Column,
  Title,
  Subtitle
} from "bloomer";

const HeaderComponent = () => {
  return (
    <div>
      <Hero isColor="primary">
        <HeroBody>
          <Container>
            <Columns isVCentered="true">
              <Column>
                <Title>Flagship Smartphone Quiz</Title>
                <Subtitle>Which 2019 flagship should you buy?</Subtitle>
              </Column>
            </Columns>
          </Container>
        </HeroBody>
      </Hero>
    </div>
  );
};

export default HeaderComponent;
