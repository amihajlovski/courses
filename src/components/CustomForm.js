import React, { useState } from "react";
import { Form, Dropdown, Input } from "semantic-ui-react";
import { generateDropdownOptions } from "../helpers";

export const CustomForm = ({ settings, passState }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [primaryDropdown, setPrimary] = useState(null);
  const [secondaryDropdown, setSecondary] = useState(null);

  if (
    !settings.type ||
    (settings.type === "dropdowns" && !settings.dropdownOptions)
  )
    return;

  return (
    <Form className="form">
      {settings.title && !settings.hideTitle && <h2>{settings.title}</h2>}
      {settings.subTitle && <h3>{settings.subTitle}</h3>}
      {settings.type === "dropdowns" ? (
        <div className="form--simple">
          <Form.Field>
            <Dropdown
              fluid
              selection
              placeholder="Name *"
              value={primaryDropdown}
              options={generateDropdownOptions(settings.dropdownOptions)}
              onChange={(e, { value }) => {
                setPrimary(value);
                passState({
                  course: value,
                  courseDate: secondaryDropdown
                });
              }}
            />
          </Form.Field>
          <Form.Field>
            <Dropdown
              fluid
              selection
              placeholder="Date"
              disabled={!primaryDropdown}
              value={secondaryDropdown}
              options={generateDropdownOptions(
                primaryDropdown && settings.dropdownOptions
                  ? settings.dropdownOptions.find(o => o.id === primaryDropdown)
                      .dates
                  : []
              )}
              onChange={(e, { value }) => {
                setSecondary(value);
                passState({
                  course: primaryDropdown,
                  courseDate: value
                });
              }}
            />
          </Form.Field>
        </div>
      ) : (
        <>
          <Form.Field>
            <Input
              fluid
              placeholder="Name *"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </Form.Field>
          <div className="form--different-row-width">
            <Form.Field>
              <Input
                fluid
                placeholder="Phone *"
                value={phone}
                onChange={event => setPhone(event.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                placeholder="Email *"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </Form.Field>
          </div>
        </>
      )}
    </Form>
  );
};
