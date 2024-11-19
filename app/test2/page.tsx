"use client";
import React, { useEffect, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import * as Toast from "@radix-ui/react-toast";
import Trollface from "../../public/assets/Trollface.png";

const page = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex justify-center mt-40">
        <img src={Trollface.src}></img>
      </div>
    );
  }
  const handleClick = () => {
    console.log("hello world");
    return (
      <Toast.Provider>
        <Toast.Root>
          <Toast.Title> Test </Toast.Title>
          <Toast.Description>This is a test</Toast.Description>
          <Toast.Action altText="Goto account settings to upgrade">
            Upgrade
          </Toast.Action>
          <Toast.Close>Close</Toast.Close>
        </Toast.Root>
        <Toast.Viewport />
      </Toast.Provider>
    );
  };

  return (
    <html lang="en">
      <head></head>
      <body>
        <div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Items</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Grenade</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>RPG</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Tank</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Actions</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Attack</MenubarItem>
                <MenubarItem>Flank</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Defend</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Surrender</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <div>
          <span className="flex justify-center mt-3">
            <Label className="font-[NovaBonaBold] text-lg" htmlFor="email">
              Your Email Address
            </Label>
          </span>
          <div className="p-5 mt-6 flex justify-center">
            <span className="flex w-full max-w-sm items-center space-x-2">
              <Input placeholder="Email" className="w-56" />
              <Button onClick={handleClick}>Enter</Button>
            </span>
          </div>
        </div>
      </body>
    </html>
  );
};

export default page;
