import { Title, Table } from "@mantine/core";
import { weaponChoices } from "../data/weapons.json";

const WeaponsTable = () => {
  const weaponRows = weaponChoices.map((weapon) => (
    <Table.Tr key={weapon.name}>
      <Table.Td>{weapon.name}</Table.Td>
      <Table.Td>{weapon.type}</Table.Td>
      <Table.Td>{weapon.attributes.accuracy}</Table.Td>
      <Table.Td>{weapon.attributes.power}</Table.Td>
    </Table.Tr>
  ));

  return (
    <section>
      <Title order={2}>Weapons</Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Weapon name</Table.Th>
            <Table.Th>Weapon type</Table.Th>
            <Table.Th>Accuracy</Table.Th>
            <Table.Th>Power</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{weaponRows}</Table.Tbody>
      </Table>
    </section>
  );
};

export default WeaponsTable;
