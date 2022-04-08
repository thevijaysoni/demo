import NavigationService from "../NavigationService"

//navigation functions
export const navigate = (routeName, params = {}) => {
    NavigationService.navigate(routeName, params)
}

export const replace = (routeName, params = {}) => {
    NavigationService.replace(routeName, params)
}

export const goBack = () => {
    NavigationService.back()
}

export const openDrawer = () => {
    NavigationService.openDrawer()
}

export const closeDrawer = () => {
    NavigationService.closeDrawer()
}

export const clearStack = (routeName, params) => {
    NavigationService.clearStack(routeName, params)
}

export const push = (routeName, params) => {
    NavigationService.push(routeName, params)
}