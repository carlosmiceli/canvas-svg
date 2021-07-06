import styles from '../styles/Canvas.module.css'
import Categories from '../components/categories/categories'
import Svgs from '../components/svgs/svgs'
import { TextField, IconButton, InputAdornment } from "@material-ui/core/"
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


export default function Sidebar() {

    return (
        <div className={styles.sidebar}>
            <div className={styles.arrowSidebar}>
                <ArrowBackIosIcon />
            </div>
            <div className={styles.searchSidebar}>
                <TextField
                label="Search"
                placeholder="Tree, dog, house..."
                InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton>
                        <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                    )
                }}
                />
            </div>
            <div className={styles.svgContainer}>
                <Categories />
                <Svgs/>
            </div>
        </div>
    )

}

// var SideBar = React.createClass({
//     render: function() {
//       var sidebarClass = this.props.isOpen ? 'sidebar open' : 'sidebar';
//       return (
//         <div className={sidebarClass}>
//           <div>I slide into view</div>
//                   <div>Me too!</div>
//           <div>Meee Threeeee!</div>
//           <button onClick={this.props.toggleSidebar} className="sidebar-toggle">Toggle Sidebar</button>
//           </div>
//       );
//     }
//   });