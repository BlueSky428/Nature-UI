import * as React from 'react';
import { Dict } from '@nature-ui/utils';
import { jsx as emotion } from '@emotion/core';
/*
 * export const jsx = (
 *   type: React.ElementType = 'div',
 *   props: Dict,
 *   ...children: React.ReactNode[]
 * ) => React.createElement(type, props, ...children);
 */

export const jsx = (
  type: React.ElementType = 'div',
  props: Dict,
  ...children: React.ReactNode[]
) => emotion.apply(undefined, [type, props, ...children]);

export default jsx;
