// // publication et lecture de publication
// // rendre devoir
// // discussions

// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import PosterFile from './posterFile';
// import Publication from './publication';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   toolbar: {
//     minHeight: 20,
//     alignItems: 'flex-start',
//     paddingTop: theme.spacing(1),
//     paddingBottom: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     alignSelf: 'flex-end',
//   },
// }));

// export default function DetailCours() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" class="text-white bg-dark p-2 rounded">
//         <Toolbar className={classes.toolbar}>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="open drawer"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography className={classes.title} variant="h4" color="blue"  noWrap>
//             Apprentissage Automatique</Typography>
//           <Typography className = {classes.AppBar} variant= "subtitle2">Dr Ahmed Mouhamadou Wade</Typography>
//           <IconButton aria-label="search" color="inherit">
//             <SearchIcon />
//           </IconButton>
//           <IconButton aria-label="display more actions" edge="end" color="inherit">
//             <MoreIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
      
      
//       <PosterFile />
//       <Publication />
//     </div>
//   );
// }