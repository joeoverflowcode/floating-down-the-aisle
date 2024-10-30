import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
// import groom from "./sanity/schemas/groom-schema";
import schemas from "./sanity/schemas"

export const config = defineConfig({
    projectId:'t1ormuxd',
    dataset: "production",
    title: "Floating Down The Aisle",
    apiVersion: "2024-10-26",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas }
})