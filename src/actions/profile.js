export const CHANGE_PROFILE_NAME = "PROFILE::CHANGE_PROFILE_NAME"
export const CHANGE_SHOW_INFO = "PROFILE::CHANGE_SHOW_INFO"

export const changeName = (name) => ({
    type: CHANGE_PROFILE_NAME,
    payload: {
        name
    }
})

export const changeShowInfo = (showName) => ({
    type: CHANGE_SHOW_INFO,
    payload: {
        showName
    }
})