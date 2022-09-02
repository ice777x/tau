import React from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Container, Typography, Paper } from "@mui/material";
import { useParams, Link } from "react-router-dom";

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

export default function Lyrics() {
    const [data, setData] = React.useState<[Data] | null>(null);
    const { query } = useParams();
    React.useEffect(() => {
        const veri = async () => {
            const vData = await axios.get(
                "https://iceweasel.herokuapp.com/lyrics/?query=" + query
            );
            const data = await vData.data.response;
            setData(data);
        };
        veri();
    }, [data]);
    return (
        <Container sx={{ marginTop: 4 }} fixed>
            <Grid container spacing={4}>
                {data?.map((e, i) => {
                    return (
                        <Grid item key={i} xs={3}>
                            <Paper elevation={2}>
                                <Link
                                    to={
                                        "/lyrics/text/" +
                                        e.title.split("-")[1].trim()
                                    }
                                    style={{ textDecoration: "none" }}
                                >
                                    <img
                                        src={e.image}
                                        alt={e.title}
                                        className={"w-72"}
                                    />
                                    <Typography
                                        variant="body2"
                                        className="pl-1"
                                    >
                                        {e.title}
                                    </Typography>

                                    <Typography
                                        variant="subtitle2"
                                        className="pl-1"
                                    >
                                        Author: {e.artist["artist_name"]}
                                    </Typography>
                                </Link>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
}
