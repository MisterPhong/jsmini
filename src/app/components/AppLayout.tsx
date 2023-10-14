"use client";
import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  NavLink,
  createStyles,
  Group,
  Button,
} from "@mantine/core";
<<<<<<< HEAD
import { IconCode, IconGlobeFilled, IconHome2, IconLogout, IconUsb } from "@tabler/icons-react";
=======
import {
  IconCode,
  IconHome2,
  IconLogout,
  IconUserOff,
} from "@tabler/icons-react";
>>>>>>> 75e05848ae9fbb3f523278fd074936187d35888b
import Link from "next/link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <NavLink
              label="หน้าแรก"
              icon={<IconHome2 size="1rem" stroke={1.5} />}
            />
          </Link>

          <Link href={"testapi"} style={{ textDecoration: "none" }}>
            <NavLink
              label="ฟังหมอลำสักหน่อย"
              icon={<IconCode size="1rem" stroke={1.5} />}
            />
          </Link>
<<<<<<< HEAD

          <Link href={"about"} style={{ textDecoration: "none" }}>
            <NavLink
              label="ราคาเหรียญ"
              icon={<IconUsb size="1rem" stroke={1.5} />}
=======
          <Link href={"about"} style={{ textDecoration: "none" }}>
            <NavLink
              label="เกี่ยวกับเรา"
              icon={<IconUserOff size="1rem" stroke={1.5} />}
>>>>>>> 75e05848ae9fbb3f523278fd074936187d35888b
            />
          </Link>
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <Group position="apart">
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </Group>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
