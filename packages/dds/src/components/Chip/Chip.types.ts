import type { RecipeVariants } from '@vanilla-extract/recipes';

import { chip } from './Chip.css';

export type ChipVariants = Exclude<RecipeVariants<typeof chip>, undefined>;

export type ChipVariant<T extends keyof ChipVariants> = Exclude<
  ChipVariants[T],
  undefined
>;
