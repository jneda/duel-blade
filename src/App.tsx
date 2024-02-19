import { AppShell, Center, Title, Container } from "@mantine/core";
import WeaponsTable from "./components/WeaponsTable";
import ArmorTable from "./components/ArmorTable";

const appShellProps = {
  header: { height: 48 },
  footer: { height: 48 },
  padding: "md",
};

const App = () => {
  return (
    <AppShell {...appShellProps}>
      <AppShell.Header>
        <Center>
          <Title>Duel Blade</Title>
        </Center>
      </AppShell.Header>
      <AppShell.Main>
        <Container>
          <WeaponsTable />
          <ArmorTable />
        </Container>
      </AppShell.Main>
      <AppShell.Footer>
        <Center>
          <div>Footer</div>
        </Center>
      </AppShell.Footer>
    </AppShell>
  );
};

export default App;
