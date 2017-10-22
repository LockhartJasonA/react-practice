export const performLockUnlock = (state) => {
    if(state === 'locked') {
        return {
            type: 'UNLOCK_DEVICE'
        }
    }
    else if (state === 'unlocked')
    {
        return {
            type: 'LOCK_DEVICE'
        }
    }
};
