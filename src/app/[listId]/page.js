import React from "react";
import ListOfVideos from "./ListOfVideos";
import { dataChannels } from "@/helpers/data_channels";


export const generateStaticParams = () => {
  const channels = dataChannels.map((channel) => {
    return {
      params: {
        listId: channel.playlistid,
      },
    };
  });

  return channels;
};

const getVideoData = async (params) => {

  const data = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyA6SIW-ifR44KUlgYIg82rxovdfDc76NtY&playlistId=${params.listId}&maxResults=50`
  );
  const videos = await data.json();
  console.log(videos);
  return videos.items;
};

const Channel = async ({ params }) => {
  const videoData = await getVideoData(params);

  return <ListOfVideos videoData={videoData} />;
};

export default Channel;
