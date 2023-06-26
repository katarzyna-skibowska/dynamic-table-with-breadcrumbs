import { Breadcrumbs as MUIBreadcrumbs, Box, Link } from "@mui/material";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcrumbs = () => {
  return (
    <Box>
      <MUIBreadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link href="/" to="/">
          Home
        </Link>
        <Link href="/books" to="/books">
          Books
        </Link>
      </MUIBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
