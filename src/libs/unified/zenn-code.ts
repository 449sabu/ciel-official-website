import type { Code } from 'mdast';
import type { Plugin, Transformer } from 'unified';
import type { Node } from 'unist';
import { visit } from 'unist-util-visit';
import { isCode } from '@/libs/unified/mdast-test';

export const remarkZennCode: Plugin = (): Transformer => {
  return (tree: Node) => {
    const visitor = (node: Code) => {
      if (node.meta) {
        const regex = /:(.*)/;
        const match = node.meta.match(regex);
        if (match) {
          node.meta = `title="${match[1]}"`;
        }
      }
    };
    visit(tree, isCode, visitor);
  };
};