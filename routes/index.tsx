import {
  Badge,
  Blockquote,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CodeBlock,
  Flex,
  FormField,
  H1,
  H2,
  Highlight,
  InlineCode,
  Link,
  OL,
  Select,
  Stack,
  Switch,
  Table,
  Text,
  Textarea,
  UL,
} from "rfui";

export default () => {
  return (
    <Stack class="gap-8">
      <H1>Heading test</H1>
      <H2>Subheading</H2>
      <Flex class="gap-3 flex-wrap">
        <Badge type="neutral">neutral</Badge>
        <Badge type="info">info</Badge>
        <Badge type="success">success</Badge>
        <Badge type="warning">warning</Badge>
        <Badge type="danger">danger</Badge>
      </Flex>
      <Blockquote>All models are wrong. Some are useful.</Blockquote>
      <Button>Example</Button>
      <CodeBlock code={`console.log("Hello world");`} />
      <div>
        The <Highlight>pizza</Highlight> is very good.
      </div>
      <div>
        When I wrote <InlineCode>sayHello("John")</InlineCode> it didn't work.
      </div>
      <div>
        <Link href="https://example.com">Example</Link>
      </div>
      <Card>
        <CardHeader>
          <h1 class="font-bold tracking-wide text-neutral-700">Profile</h1>
        </CardHeader>
        <CardBody>
          <div class="text-neutral-700 mb-6">
            Please fill out the following information.
          </div>
          <Stack class="gap-3">
            <FormField label="Name" type="text" />
            <FormField label="Email" type="email" />
            <FormField label="Age" type="number" />
          </Stack>
        </CardBody>
        <CardFooter>
          <Flex class="gap-2">
            <Button variant="primary">Submit</Button>
            <Button>Cancel</Button>
          </Flex>
        </CardFooter>
      </Card>
      <OL>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </OL>
      <UL>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </UL>
      <Select>
        <option value="foo">foo</option>
        <option value="bar">bar</option>
        <option value="baz">baz</option>
      </Select>
      <Switch />
      <Table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>25</td>
          </tr>
        </tbody>
      </Table>
      <Text>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
          odio facilisis mauris sit.
        </p>
        <p>
          Amet consectetur adipiscing elit duis tristique. Ac turpis egestas
          maecenas pharetra. Dui nunc mattis enim ut tellus. Egestas congue
          quisque egestas diam in.
        </p>
      </Text>
      <Textarea></Textarea>
    </Stack>
  );
};
