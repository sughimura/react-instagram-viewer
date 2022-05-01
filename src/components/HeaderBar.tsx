import { AppBar, IconButton, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

interface Props {
  children: React.ReactElement;
}
// NOTE: 上にスクロールするとAppBarが隠れ、下にスクロールするとAppBarが出てくる
// 以下の記事を参考に作成
// - https://mui.com/material-ui/react-app-bar/#hide-app-bar
// - https://lightbulbcat.hatenablog.com/entry/2019/08/20/041216
const HideOnScroll = (props: Props) => {
  const { children } = props
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" children={children} in={!trigger} />
  )
}

const HeaderBar = () => {
  return (
    <HideOnScroll>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
export default HeaderBar;
