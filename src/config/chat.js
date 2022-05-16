const URL_BASE = "https://chabloz.eu/ws/chat/";

export const apiLoginUrl = URL_BASE + 'user/login?user=';
export const apiLogoutUrl = URL_BASE + 'user/logout';
export const apiUsers = URL_BASE + 'user/online';
export const apiGetMsg = URL_BASE + 'msg/get';
export const apiSendMsg = URL_BASE + 'msg/add?msg=';