import {
  Box,
  CircularProgress,
  Container,
  Pagination,
  Typography,
} from "@mui/material";
import { Header } from "./components/header/Header";
import { Post } from "./components/post/Post";
import "./styles.css";
import { useRequestPost } from "./hooks/usePost";
import { useEffect, useState } from "react";

function App() {
  const [pageApi, setPageApi] = useState(1);
  const [search, setSearch] = useState("");
  const { fetchPosts, isRequesting, data: posts } = useRequestPost(10);
  let filteredPosts = [];

  if (search) {
    filteredPosts = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(search) ||
        post.body.toLowerCase().includes(search)
      );
    });
  }

  useEffect(() => {
    fetchPosts(pageApi);
  }, [pageApi]);

  return (
    <>
      <Box>
        <Header setResult={setSearch} />
      </Box>
      {isRequesting ? (
        <Box className="box">
          <CircularProgress />
        </Box>
      ) : (
        <Container
          className="container"
          sx={{ paddingTop: 8, paddingBottom: 8 }}
        >
          {search ? (
            filteredPosts.length > 0 ? (
              filteredPosts.map((post) => {
                return (
                  <Post title={post.title} body={post.body} key={post.id} />
                );
              })
            ) : (
              <Typography sx={{ textAlign: "center" }}>
                Nada Encontrado!
              </Typography>
            )
          ) : (
            posts.map((post) => {
              return <Post title={post.title} body={post.body} key={post.id} />;
            })
          )}
          <Box className="box">
            {!search && (
              <Pagination
                count={10}
                variant="outlined"
                onChange={(e, value) => (
                  setPageApi(value), setResultSearch([])
                )}
              />
            )}
          </Box>
        </Container>
      )}
    </>
  );
}

export default App;
