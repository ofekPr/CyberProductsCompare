import React from 'react'
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useTheme} from '@material-ui/core/styles';
import useStyles from '../sources/useStyles'
import {Link} from 'react-router-dom'

export default ({ slides }) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = slides.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
     };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const classes = useStyles();

    return (
        <div className="slideshow">
            <div className={classes.root}>
                <Paper square elevation={0} className={classes.header}>
                    <Typography><div className="slideShowText">{slides[activeStep].label}</div></Typography>
                </Paper>
                <Link to={slides[activeStep].to}>
                    <img
                        className={classes.img}
                        src={slides[activeStep].imgPath}
                        alt={slides[activeStep].label}
                    />
                </Link>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                    }
                />
            </div>
        </div>
    )
}