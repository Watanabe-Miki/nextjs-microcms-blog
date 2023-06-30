"use client"

import { Drawer, Burger } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import GlovalNav from "../layouts/GlovalNav"

export const DrawerNav = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const label = opened ? "メニューが閉じます。" : "メニューが開きます。"

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false} 
        size="xs"
        overlayProps={{ opacity: 0.5, blur: 4 }}
        classNames={{ content: "bg-[#fff]", body: "p-none" }}
      >
        <div
          onClick={close}
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GlovalNav variant="drawerNav" />
        </div>
      </Drawer>
      <Burger
        opened={opened}
        onClick={open}
        aria-label={label}
        className="md:hidden"
        style={{
          position: "absolute",
          right: "0.8rem",
          top: "1.43rem",
        }}
      />
    </>
  );
};