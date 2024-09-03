import type { RecipeVariants } from '@vanilla-extract/recipes';

import { container, textfield } from './TextField.css';

export type TextFieldVariants = Exclude<
  RecipeVariants<typeof textfield> & RecipeVariants<typeof container>,
  undefined
>;

export type TextFieldVariant<T extends keyof TextFieldVariants> = Exclude<
  TextFieldVariants[T],
  undefined
>;
