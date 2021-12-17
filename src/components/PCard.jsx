import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Tooltip } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const obj = props.obj;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth:345,
        minHeight:'514px',
        margin: "5px",
      }}
    >
      {props.isLoading ? (
        <Box
        sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center'
        }}
        >
             <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        </Box>
      ) : (
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={obj.title}
          subheader={obj.category}
        />
      )}
      {
          props.isLoading?
          <Skeleton sx={{ height: 194 }} animation="wave" variant="rectangular" />
          :
          <CardMedia
          component="img"
          height="194"
          image={obj.image}
          alt="Image here"
        />
      }
        {
            props.isLoading?
            <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
          :
            <React.Fragment>
                <CardContent>
        <Typography variant="body2" color="text.secondary">
          {obj.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title={"Add to cart"}>
          <IconButton aria-label="add to cart">
            <AddShoppingCartIcon />
          </IconButton>
        </Tooltip>

        <ExpandMore
          expand={expanded}
          onClick={() => {
            console.log("not yet!");
          }}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
            </React.Fragment>
        }
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
}
