import {useRecordContext} from "react-admin";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "@mui/material";


/**
 * Custom Field, Custom Style
 * sx : custom inline style
 *
 * @param source
 * @constructor
 */
const MyUrlField = ({source}) => {
    const record = useRecordContext()
    console.log(record)
    console.log(source)
    if (!record) return null;
    return <Link href={record[source]} sx={{ textDecoration: "none"}}>
        {record[source]}
        <LaunchIcon sx={{ fontSize: 14, ml:1}}></LaunchIcon>
    </Link>
}

export default MyUrlField