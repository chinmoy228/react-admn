import { configureStore } from '@reduxjs/toolkit';

import sidebarCollapseReducer from '../reducers/SidebarCollapse';

export default configureStore({
    reducer: {
        sidebarCollapse: sidebarCollapseReducer,
    }
});