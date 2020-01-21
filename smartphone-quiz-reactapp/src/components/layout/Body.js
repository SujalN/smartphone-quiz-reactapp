import React, { Component } from "react";
import { Section, Container, Columns, Column } from "bloomer";
import Card from "./Card";
import Modal from "./Modal";

class Body extends Component {
  state = {
    isActive: false
  };
  launchModal = () => this.setState({ isActive: !this.state.isActive });
  render() {
    return (
      <body>
        <Section>
          <Container>
            <Modal
              isActive={this.state.isActive}
              launchModal={this.launchModal}
            />
            <Columns isCentered>
              <Column>
                <Card launchModal={this.launchModal} />
              </Column>
            </Columns>
          </Container>
        </Section>
      </body>
    );
  }
}

export default Body;
