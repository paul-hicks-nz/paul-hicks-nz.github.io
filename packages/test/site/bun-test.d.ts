import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import { Matchers, AsymmetricMatchers } from "bun:test";

declare module "bun:test" {
  // We interface merge with Bun's internal Matchers interface
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Matchers<T> extends TestingLibraryMatchers<typeof expect.stringContaining, T> { }
  interface AsymmetricMatchers extends TestingLibraryMatchers { }
}
