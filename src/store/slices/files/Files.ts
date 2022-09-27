import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserFile } from 'types/Files';

export interface FileState{
    userFiles: UserFile[];
    activeFilesIds: string[];
    editorActiveId: string | null;
    viewerActiveId: string[];
}

export const initialState: FileState = {
    userFiles: [],
    activeFilesIds: [],
    editorActiveId: null,
    viewerActiveId:[],
}

const fileSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        setFiles(state, action: PayloadAction<UserFile[]>) {
            console.log('setFiles');
            state.userFiles = action.payload;
            state.activeFilesIds = [];
        },
        addActiveFile(state, action: PayloadAction<string>) {
            state.activeFilesIds.push(action.payload)
        },
        removeActiveFile(state, action: PayloadAction<string>) {
            state.activeFilesIds = state.activeFilesIds.filter((fileId) => fileId !== action.payload);
        },
        setEditorActiveFile(state, action: PayloadAction<string | null>) {
            state.editorActiveId = action.payload
        },
        updateFileCode(state, action: PayloadAction<{ fileId: string; newCode: string }>) {
            const { fileId, newCode } = action.payload;
            const { userFiles } = state;
            let userFileToUpdate = userFiles.find((file) => file.id = fileId);
            if (userFileToUpdate) {
                userFileToUpdate.code = newCode;
            }
        },
        toggleDirOpen(state, action: PayloadAction<string>) {
            if (state.viewerActiveId.includes(action.payload)) {
                state.viewerActiveId = state.viewerActiveId.filter(val => val !== action.payload);
            } else {
                state.viewerActiveId.push(action.payload);
           }
            
        },
       

    }
})

export const {setFiles,addActiveFile,removeActiveFile,setEditorActiveFile,updateFileCode,toggleDirOpen}  = fileSlice.actions
export const fileReducers = fileSlice.reducer;