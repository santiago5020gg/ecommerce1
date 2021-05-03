import { createSelector } from "reselect";

const selectDIrectory = state => state.directory;

export const selectDIrectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);