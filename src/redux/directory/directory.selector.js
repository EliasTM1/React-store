import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

//  ? Actual Selector
export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)