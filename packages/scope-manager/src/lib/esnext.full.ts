// THIS CODE WAS AUTOMATICALLY GENERATED
// DO NOT EDIT THIS CODE BY HAND
// RUN THE FOLLOWING COMMAND FROM THE WORKSPACE ROOT TO REGENERATE:
// npx nx generate-lib @typescript-eslint/scope-manager

import { ImplicitLibVariableOptions } from '../variable';
import { esnext } from './esnext';
import { dom } from './dom';
import { webworker_importscripts } from './webworker.importscripts';
import { scripthost } from './scripthost';
import { dom_iterable } from './dom.iterable';

export const esnext_full = {
  ...esnext,
  ...dom,
  ...webworker_importscripts,
  ...scripthost,
  ...dom_iterable,
} as Record<string, ImplicitLibVariableOptions>;
