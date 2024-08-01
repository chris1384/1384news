import React, { useState, useEffect } from 'react';
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"

function SongSearch() {
  
  const [author, setAuthor] = useState('');
  const [songName, setSongName] = useState('');
  const [lyricContent, setLyricContent] = useState(''); 
  const [thumbnailContent, setThumbnailContent] = useState('');
  const [downloadContent, setDownloadContent] = useState('');
  const [fetchedData, setFetchedData] = useState({});

  const xkjashASDKJASLDJhxa = 'AIzaSyAj1bSNMbnhRg02GMj8bbcYP6r95o7s_w0';

  const searchSong = async (author, songName) => {
    if (!(author && songName)) {
      console.error('searchSong failed! Expected author & songName');
      return;
    }
  
    setLyricContent('GENERATING LYRICS');
    setThumbnailContent('GENERATING THUMBNAIL');
  
    try {
      const youtubeURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${author}&type=video&key=${xkjashASDKJASLDJhxa}`;
      const ytResponse = await fetch(youtubeURL);
      const ytData = await ytResponse.json();
  
      if (ytData) {
        let found = false;
  
        ytData.items.forEach(element => {
          if (found) return;
  
          const titleMatch = element.snippet.title.toLowerCase();
  
          if (titleMatch.includes(songName.toLowerCase())) {
            setThumbnailContent(
              <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${element.id.videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
              ></iframe>
            );
  
            setFetchedData({ videoID: element.id.videoId });
            found = true;
          }
        });
  
        if (!found) {
          setThumbnailContent('No matching video found.');
        }
      }
    } catch (error) {
      setThumbnailContent("Couldn't generate YouTube frame.");
      console.error(error);
    }
  
    try {
      // Fetch song lyrics
      const lyricsResponse = await fetch(`https://api.lyrics.ovh/v1/${author}/${songName}`);
      const lyricsData = await lyricsResponse.json();
  
      if (lyricsData.lyrics) {
        let lyrics = lyricsData.lyrics.split('\r\n');
        lyrics.shift();
        lyrics = lyrics.join('\r\n');
        setLyricContent(<p style={{color: "black"}}>{lyrics}</p>);
      }
    } catch (error) {
      setLyricContent("Couldn't generate song lyrics.");
      console.error(error);
    }
  };

  useEffect(() => {
    if (fetchedData.videoID) {
      setDownloadContent(
        // eslint-disable-next-line
        <iframe
          id="singleButtonApi"
          src={`https://api.vevioz.com/apis/single/mp3?url=https://www.youtube.com/watch?v=${fetchedData.videoID}`}
          width="100%"
          height="100%"
          allowTransparency="true"
          style={{ border: 'none' }}
        ></iframe>
      );
    }
  }, [fetchedData]);

  console.log(thumbnailContent)

  return (
    <div style={{display: "flex", flexDirection: "column", maxWidth: "400px"}}>

        <Form style={{justifyContent: "center", alignItems: "center", textAlign: "center", marginBottom: thumbnailContent === "" ? "300px" : null}}>
            <Form.Group className="mb-2" controlId="authName">
                <Form.Label style={{color: "black"}}>Please add the author name:</Form.Label>
                <Form.Control type="author" placeholder="Rabbit Junk" onChange={(e) => setAuthor(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-2" controlId="songName">
                <Form.Label style={{color: "black", marginTop: "12px"}}>And now the song name:</Form.Label>
                <Form.Control type="song" placeholder="Neurodivergent" onChange={(e) => setSongName(e.target.value)}/>
            </Form.Group>

            <Button variant="dark" style={{marginTop: "12px"}} onClick={() => searchSong(author, songName)}>
              Submit
            </Button>
        </Form>

        <div style={{marginBlock: "30px"}}>{lyricContent}</div>
        <div style={{marginBlock: "30px", height: "225px"}}>{thumbnailContent}</div>
        <div style={{marginBlock: "30px"}}>{downloadContent}</div>
    </div>
  );
};

export default SongSearch;
