import { Box } from "@mui/material";

import logo from "../../assets/logo-triibo.png";
import {
  Search,
  SearchIconWrapper,
  StyledImg,
  StyledInputBase,
  StyledToolbar,
  StyledSearchSharp,
} from "./style";
import { useState } from "react";

export function Header({ setResult }) {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    setResult(value);
  };

  return (
    <Box>
      <StyledToolbar>
        <StyledImg src={logo} />
        <Search>
          <SearchIconWrapper>
            <StyledSearchSharp />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Procurar…"
            inputProps={{ "aria-label": "search" }}
            value={input}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
        </Search>
      </StyledToolbar>
    </Box>
  );
}
