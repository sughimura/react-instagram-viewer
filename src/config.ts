type _Config = {
  fbAccessToken: string;
  fbPageUserId: string;
}

const Config: _Config = {
  fbAccessToken: process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN || "",
  fbPageUserId: process.env.REACT_APP_FACEBOOK_PAGE_USER_ID || ""
}

export default Config
