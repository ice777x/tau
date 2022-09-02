import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Grid, Container, Box } from "@mui/material";

export interface Artist {
    artist_name: string;
    artist_image: string;
    artist_url: string;
}
export interface Data {
    title: string;
    url: string;
    image: string;
    lyrics: string;
    artist: Artist[];
}

export default function LyricsDetail() {
    const { url } = useParams();
    const [data, setData] = React.useState<[Data] | null>(null);

    React.useEffect(() => {
        const veri = async () => {
            const vData = await axios.get(
                "https://iceweasel.herokuapp.com/lyrics/?query=" + url
            );
            const data = await vData.data.response;
            setData(data);
        };
        veri();
    }, []);
    let lyrics = data?.[0].lyrics.split("\n");
    return lyrics ? (
        <Container fixed>
            <Box className="flex flex-auto place-content-start">
                <Box className="mr-auto">
                    <img
                        src={data?.[0].image}
                        alt=""
                        className="w-80 h-60 object-fill"
                    />
                </Box>
                <Box className="mr-auto">
                    <Typography variant="h3" component={"span"}>
                        {data?.[0].artist["artist_name"]}
                    </Typography>
                    <Typography>{data?.[0].title}</Typography>
                </Box>
            </Box>
            <hr className="my-4 h-0.5 bg-slate-400" />
            <Grid item xs={12}>
                {lyrics
                    ? lyrics?.map((e) => {
                          if (e) {
                              return (
                                  <>
                                      <Typography
                                          align="center"
                                          variant={"subtitle1"}
                                          component={"h2"}
                                      >
                                          {e}
                                      </Typography>
                                      <br />
                                  </>
                              );
                          } else {
                              return <br />;
                          }
                      })
                    : null}
            </Grid>
        </Container>
    ) : (
        <div className="w-full h-[calc(100vh-150px)] absolute items-center justify-center flex">
            <Typography variant="h3" className="inline">
                Loading...
            </Typography>
        </div>
    );
}
