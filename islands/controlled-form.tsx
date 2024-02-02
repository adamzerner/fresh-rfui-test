import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import {
  Button,
  Checkbox,
  FormField,
  H1,
  RadioButton,
  Select,
  Stack,
  Textarea,
} from "rfui";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notes, setNotes] = useState("");
  const [shouldReceiveUpdates, setShouldReceiveUpdates] = useState(false);
  const [homeType, setHomeType] = useState("");
  const [country, setCountry] = useState("");
  const onSubmit = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(notes);
    console.log(shouldReceiveUpdates);
    console.log(homeType);
    console.log(country);
  };

  return (
    <div>
      <H1>Controlled form</H1>
      <form onSubmit={onSubmit} class="w-[600px]">
        <Stack class="gap-3">
          <FormField
            label="Name"
            type="text"
            value={name}
            onInput={(e) => {
              setName((e.target as HTMLInputElement).value);
            }}
          />
          <FormField
            label="Email"
            type="email"
            value={email}
            onInput={(e) => {
              setEmail((e.target as HTMLInputElement).value);
            }}
          />
          <FormField
            label="Password"
            type="password"
            value={password}
            onInput={(e) => {
              setPassword((e.target as HTMLInputElement).value);
            }}
          />
          <label>
            <div>Notes</div>
            <Textarea
              class="w-full"
              value={notes}
              onInput={(e) => {
                setNotes((e.target as HTMLTextAreaElement).value);
              }}
            >
            </Textarea>
          </label>
          <label>
            <div>Want to receive updates?</div>
            <Checkbox
              checked={shouldReceiveUpdates}
              onClick={() => {
                setShouldReceiveUpdates((v) => !v);
              }}
            />
          </label>
          <Stack class="gap-3">
            <div>Home type</div>
            <label>
              <RadioButton
                checked={homeType === "apartment"}
                onClick={() => {
                  setHomeType("apartment");
                }}
              />{" "}
              Apartment
            </label>
            <label>
              <RadioButton
                checked={homeType === "condo"}
                onClick={() => {
                  setHomeType("condo");
                }}
              />{" "}
              Condo
            </label>
            <label>
              <RadioButton
                checked={homeType === "house"}
                onClick={() => {
                  setHomeType("house");
                }}
              />{" "}
              House
            </label>
          </Stack>
          <label>
            <div>Country</div>
            <Select
              value={country}
              onChange={(e) => {
                setCountry((e.target as HTMLInputElement).value);
              }}
            >
              <option value="united-states">United States</option>
              <option value="canada">Canada</option>
              <option value="mexico">Mexico</option>
            </Select>
          </label>
          <Button type="submit" class="self-start">Submit</Button>
        </Stack>
      </form>
    </div>
  );
};
