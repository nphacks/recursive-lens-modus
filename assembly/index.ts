export * from "./quotes";
export * from "./generateText";

export function sayHello(name: string | null = null): string {
  return `Hello, ${name || "World"}!`;
}
