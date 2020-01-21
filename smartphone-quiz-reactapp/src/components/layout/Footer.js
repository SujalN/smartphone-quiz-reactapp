import React from "react";
import { Footer, Container, Columns, Column, Content } from "bloomer";
const FooterComponent = () => {
  return (
    <Footer id="footer">
      <Container>
        <Content>
          <Columns>
            <Column isFull />
          </Columns>
          <Content isSize="small" />
        </Content>
      </Container>
    </Footer>
  );
};

export default FooterComponent;
