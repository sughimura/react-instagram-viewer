import React, { useEffect, useState } from 'react';
import { Box, ImageList, ImageListItem } from '@mui/material';
import Config from '../config';

type Error = { message: string }
type Item = {
  id: number,
  mediaUrl: string,
  mediaType: string,
  likeCount: number,
  commentsCount: number,
  caption: string
}

export default function ImgList() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);

  const fetchPhotos = (hashtagId: string) => {
    FB.api(
      `/${hashtagId}/top_media`,
      'get',
      {
        "user_id": Config.fbPageUserId,
        access_token: Config.fbAccessToken,
        "fields":"id,media_type,media_url,permalink,like_count,comments_count,caption,timestamp,children{id,media_url}"
      },
      function(response: any) {
        if (response.error) {
          setError({ message: response.error.message });
          return;
        }
        setIsLoaded(true);
        setItems(
          response.data.map((post: any): Item => {
            return {
              id: post.id,
              mediaUrl: post.media_url,
              mediaType: post.media_type,
              likeCount: post.like_count,
              commentsCount: post.comments_count,
              caption: post.caption
            }
          })
        );
      }
    );
  }

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    const hashMonsteraId = '17843684002004351'
    setTimeout(()=> fetchPhotos(hashMonsteraId), 1000)
  }, [])

  if (error) {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <div>Error: {error.message}</div>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <div>Loading...</div>
      </div>
    );
  } else {
    return (
      <Box>
        <ImageList sx={{ width: '100%' }} cols={1}>
          {items.map((item => (
            <ImageListItem key={item.id}>
              <img
                src={item.mediaUrl}
                loading="lazy"
                alt='img'/>
            </ImageListItem>
          )))
          }
        </ImageList>
      </Box>
    );
  }
}
