import { AppDispatch, RootState } from "types/Store";
import { removeActiveFile, setEditorActiveFile } from "store/slices/files/Files";

export const closeFile = (fileToCloseId: string) =>(dispatch:AppDispatch,getState:()=>RootState)=> {
    const { files: { activeFilesIds, editorActiveId } } = getState();
    const activeFilesLength = activeFilesIds.length;
    if (activeFilesLength === 1) {
        dispatch(setEditorActiveFile(null));
    } else if (activeFilesLength >= 2 && fileToCloseId === editorActiveId) {
        const newActiveFileId = getNewActiveFiledId(activeFilesIds, activeFilesLength, fileToCloseId);
        dispatch(setEditorActiveFile(newActiveFileId));
    }
    dispatch(removeActiveFile(fileToCloseId));
}

const getNewActiveFiledId = (activeFilesIds: string[], activeFilesLength: number, fileToCloseId: string) => {
    const fileToBeRemovedIndex = activeFilesIds.indexOf(fileToCloseId);
    if (fileToBeRemovedIndex + 1 === activeFilesLength) {
        return activeFilesIds[fileToBeRemovedIndex - 1];
    }
    return activeFilesIds[fileToBeRemovedIndex + 1];
}