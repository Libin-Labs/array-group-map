import * as api from '@lp-labs/array-group-map';
import { groupBy } from '@lp-labs/array-group-map';
console.log(groupBy(['ant', 'ape', 'bee'], (word) => word[0]));
// @ts-expect-error invalid argument must be rejected by declarations
api.groupBy('items', (x) => x);
