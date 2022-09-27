import { toggleDarkMode,darkModeReducer } from "./darkMode";

describe('dark mode reducer', () => {
    it('should enable the darkMode', () => {
        expect(darkModeReducer(false,toggleDarkMode)).toEqual(true)
    })
})


