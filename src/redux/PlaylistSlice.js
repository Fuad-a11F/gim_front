import { createSlice } from '@reduxjs/toolkit'

export const playlistSlice = createSlice({
    name: 'playlist',
    initialState: {
        playlist: [],
        now_singing: {}
    },
    reducers: {
        add_playlist_array(state, action) {
            state.playlist = action.payload
        },
        add_playlist(state, action) {
            state.playlist.push(action.payload)
        },
        remove_playlist(state, action) {
            state.playlist = false
        },
        plus_music_count(state, action) {
            state.playlist.forEach(item => {
                if (item.id == action.payload) {
                    item.music_count += 1
                }
            })
        },
        minus_music_count(state, action) {
            state.playlist.forEach(item => {
                if (item.id == action.payload) {
                    item.music_count -= 1
                }
            })
        },
        play_music(state, action) {
            state.now_singing = action.payload
        },
    }
})

export default playlistSlice.reducer
export const { add_playlist_array, add_playlist, remove_playlist, plus_music_count, minus_music_count, play_music } = playlistSlice.actions