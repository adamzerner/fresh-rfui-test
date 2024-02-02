import { PageProps } from "$fresh/server.ts";
import { Container } from "rfui";
import { Navbar } from "../components/navbar.tsx";
import { Footer } from "../components/footer.tsx";

export default ({ Component }: PageProps) => {
  return (
    <>
      <Navbar />
      <Container size="xl" class="mt-8 mb-6 font-sans min-h-[200px]">
        <Component />
      </Container>
      <Footer />
    </>
  );
};
