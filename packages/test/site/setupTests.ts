import { GlobalRegistrator } from "@happy-dom/global-registrator";
// This makes 'window' and 'document' available globally
GlobalRegistrator.register();

import { expect, afterEach } from 'bun:test';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

// Cleanup after each test to prevent memory leaks and ensure a clean state for the next test.
// We use dynamic import here to ensure that the global registrator is registered before
// we import the cleanup function from @testing-library/react. This is necessary because the
// global registrator sets up the global environment that @testing-library/react relies on.
afterEach(async () => {
  const { cleanup } = await import("@testing-library/react");
  cleanup();
});
