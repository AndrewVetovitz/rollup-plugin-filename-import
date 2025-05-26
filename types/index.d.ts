import { Plugin } from 'rollup';

export interface RollupJsonOptions {}

/**
 * Convert .json files to ES6 modules
 */
export default function json(options?: RollupJsonOptions): Plugin;