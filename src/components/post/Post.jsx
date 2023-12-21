import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import { useState } from "react";

export function Post({ title, author, body }) {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Box sx={{ paddingBottom: 4 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2">
            {isReadMore ? `${body.slice(0, 100)}...` : `${body}\n\n`}
            <span>
              <Link onClick={toggleReadMore}>
                {isReadMore ? "Leia mais" : "Mostrar menos"}
              </Link>
            </span>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
