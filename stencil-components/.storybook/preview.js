import {
  defineCustomElements
} from '../dist/esm/loader.js';
import '../www/build/rds-components.css';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
