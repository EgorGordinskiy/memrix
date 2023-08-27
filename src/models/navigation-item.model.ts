import { type ReactNode } from 'react';

export interface INavigationItem {
  id: number;
  name: string;
  path: string;
  icon?: ReactNode;
}
