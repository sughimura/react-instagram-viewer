type _Config = {
  fbAccessToken: string;
  fbPageId: string;
}

const Config: _Config = {
  fbAccessToken: process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN || "",
  fbPageId: process.env.REACT_APP_FACEBOOK_PAGE_ID || ""
}

export default Config
