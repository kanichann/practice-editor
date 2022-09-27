import { createSelector } from '@reduxjs/toolkit';
const selectTreeViewData = (userFiles) => {

    const result = {};
    //返すのはサイドバーの構造
    let id;
    for (let i = 0; i < userFiles.length; i++) {
        const userFile = userFiles[i];
        console.log(userFile)
        const { name, relativePath, id, extension } = userFile;
        const paths = relativePath.split('/');
        let j = 0;
        let currentLevel = result;

        while (paths[j] !== name) {
            const path = paths[j];
            console.log(currentLevel, 'start');

            if (!Array.isArray(currentLevel) && !currentLevel.id) {
                console.log(currentLevel, 'current1-2')
                currentLevel.id = id;;
                currentLevel.name = path;
                currentLevel.children = [];
                currentLevel = currentLevel.children;
                console.log(currentLevel, 'current1')
                j++;
                continue;
            }

            if (!Array.isArray(currentLevel) && currentLevel.children) {
                currentLevel = currentLevel.children;
                console.log(currentLevel, 'current2')
                j++;
                continue;
            }

            const subfolder = currentLevel.find((child) => child.name === path);

            if (subfolder) {
                currentLevel = subfolder.children;
                console.log(currentLevel, 'current3')
                j++;
            } else {

                currentLevel.push({});
                currentLevel = currentLevel[currentLevel.length - 1];
                console.log(currentLevel, 'current4')
            }
        }

        const fileData = { id, name, extension };
        currentLevel.push(fileData);
    }


    console.log(result);
    return result;
};

export default createSelector(state => state.files.userFiles, selectTreeViewData);