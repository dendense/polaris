import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
// import Button from "elements/Button";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default function LoginTabs() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            type="button"
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            type="button"
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Register
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email :</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password :</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                  />
                </FormGroup>
                <Button
                  type="button"
                  color="primary"
                  size="md"
                  block
                  onClick={toggle}
                >
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email :</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password :</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Repeat Password :</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Repeat Password"
                  />
                </FormGroup>
                <Button
                  type="button"
                  color="primary"
                  size="md"
                  block
                  onClick={toggle}
                >
                  Register
                </Button>
              </Form>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}
