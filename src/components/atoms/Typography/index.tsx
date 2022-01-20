import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Tp = ({customstyle,type,children,...rest}:any) => {

    return (
            <Typography variant={type} style={customstyle}>
                {children}
            </Typography>
    )
}

export default Tp
