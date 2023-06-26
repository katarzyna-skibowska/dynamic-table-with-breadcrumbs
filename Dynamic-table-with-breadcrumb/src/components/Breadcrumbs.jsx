import { Breadcrumbs as MUIBreadcrumbs, Box, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcrumbs = () => {
  return (
    <Box>
      <MUIBreadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
        <Link color="#181816" className="breadcrumb-link" href="/" to="/">
          Home
        </Link>
        <Link color="#181816" href="/books" to="/books">
          Books
        </Link>
      </MUIBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
