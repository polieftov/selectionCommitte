import {IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import AddStudentDialog from "./adding_dialog/AddStudentDialog";

function StudentsPageToolbar() {
    const [openAddStudentDlg, setOpenAddStudentDlg] = useState(false);

    return (
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setOpenAddStudentDlg(true)}
            >
                <AddIcon/>
            </IconButton>
            <AddStudentDialog open={openAddStudentDlg} setOpen={setOpenAddStudentDlg}/>
        </Toolbar>
    );

}

export default StudentsPageToolbar;