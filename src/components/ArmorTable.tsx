import { Title, Table } from "@mantine/core";
import { armorChoices } from "../data/armor.json";

const ArmorTable = () => {
  const armorRows = armorChoices.map((armor) => (
    <Table.Tr key={armor.name}>
      <Table.Td>{armor.name}</Table.Td>
      <Table.Td>{armor.type}</Table.Td>
      <Table.Td>{armor.attributes.deflection}</Table.Td>
      <Table.Td>{armor.attributes.evasion}</Table.Td>
    </Table.Tr>
  ));

  return (
    <section>
      <Title order={2}>Armor</Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Armor name</Table.Th>
            <Table.Th>Armor type</Table.Th>
            <Table.Th>Deflection</Table.Th>
            <Table.Th>Evasion</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{armorRows}</Table.Tbody>
      </Table>
    </section>
  );
};

export default ArmorTable;
