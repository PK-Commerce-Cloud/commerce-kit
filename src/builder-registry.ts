"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { Button } from "./components/ui/button";
import Counter from "./components/Counter/Counter";
import Flex from "./components/builder/flex";
import HeroSection from "./components/builder/hero-section";
import ModelSection from "./components/builder/model-section";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(withChildren(HeroSection), {
  name: "HeroSection",
  inputs: [
    {
      name: "image",
      type: "file",
    },
    {
      name: "video",
      type: "file",
    },
  ],
});

Builder.registerComponent(ModelSection, {
  name: "ModelSection",
  inputs: [
    {
      name: "model",
      type: "string",
    },
    {
      name: "price",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: ["black", "white"],
    },
  ],
});

Builder.registerComponent(withChildren(Button), {
  name: "Button",
  inputs: [
    {
      name: "href",
      type: "string",
    },
    {
      name: "variant",
      type: "string",
      enum: ["default", "destructive", "ghost", "outline", "secondary"],
    },
    {
      name: "size",
      type: "string",
      enum: ["default", "sm", "lg"],
    },
    {
      name: "className",
      type: "string",
    },
  ],
});

Builder.registerComponent(withChildren(Flex), {
  name: "Flex",
  inputs: [
    {
      name: "direction",
      type: "string",
      enum: ["row", "col"],
    },
    {
      name: "space_x",
      type: "string",
      enum: ["default", "sm", "lg"],
    },
    {
      name: "space_y",
      type: "string",
      enum: ["default", "sm", "lg"],
    },
    {
      name: "className",
      type: "string",
    },
  ],
});

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
