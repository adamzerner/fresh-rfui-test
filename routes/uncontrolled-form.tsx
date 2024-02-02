import { Handlers } from "$fresh/server.ts";
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

export const handler: Handlers = {
  POST: async (req) => {
    const form = await req.formData();
    console.log(form);

    const headers = new Headers();

    headers.set("location", "/");

    return new Response(null, {
      status: 303,
      headers,
    });
  },
};

export default () => {
  return (
    <div>
      <H1>Uncontrolled form</H1>
      <form method="post" class="w-[600px]">
        <Stack class="gap-3">
          <FormField label="Name" name="name" type="text" />
          <FormField label="Email" name="email" type="email" />
          <FormField label="Password" name="password" type="password" />
          <label>
            <div>Notes</div>
            <Textarea name="notes" class="w-full"></Textarea>
          </label>
          <label>
            <div>Want to receive updates?</div>
            <Checkbox name="receive-updates" />
          </label>
          <Stack class="gap-3">
            <div>Home type</div>
            <label>
              <RadioButton name="home-type" value="apartment" /> Apartment
            </label>
            <label>
              <RadioButton name="home-type" value="condo" /> Condo
            </label>
            <label>
              <RadioButton name="home-type" value="house" /> House
            </label>
          </Stack>
          <label>
            <div>Country</div>
            <Select name="country">
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
