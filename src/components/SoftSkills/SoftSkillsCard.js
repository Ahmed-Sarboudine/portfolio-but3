import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { Modal, Backdrop } from '@material-ui/core';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg';
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg';
import './SoftSkills.css';

function SoftSkillsCard({ id, skillName, description }) {
    const { theme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    const useStyles = makeStyles((t) => ({
        educationCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
                cursor: 'pointer',
            },
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.secondary,
            border: `2px solid ${theme.primary}`,
            boxShadow: t.shadows[5],
            padding: t.spacing(4, 4, 3),
            maxWidth: '500px',
            borderRadius: '10px',
            outline: 'none',
        },
        modalTitle: {
            color: theme.primary,
            marginBottom: '10px',
        },
        modalDescription: {
            color: theme.tertiary80,
        },
    }));

    const classes = useStyles();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // ✅ Corrige le scroll bloqué après fermeture de la modal
    useEffect(() => {
        if (!open) {
            setTimeout(() => {
                document.body.style.overflow = 'auto';
            }, 300); // attendre la fin de l'animation du modal
        }
    }, [open]);

    // ✅ Sécurité : réinitialise le scroll si le composant est démonté
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <>
            <Fade bottom>
                <div
                    key={id}
                    className={`education-card ${classes.educationCard}`}
                    onClick={handleOpen}
                >
                    <div className="educard-img" style={{ backgroundColor: theme.primary }}>
                        <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                    </div>
                    <div className="education-details">
                        <h4 style={{ color: theme.tertiary }}>{skillName}</h4>
                        <h5 style={{ color: theme.tertiary80 }}>
                            {description.length > 70 ? description.substring(0, 70) + '...' : description}
                        </h5>
                    </div>
                </div>
            </Fade>

            {/* ✅ Modal Material-UI */}
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
                className={classes.modal}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 className={classes.modalTitle}>{skillName}</h2>
                        <p className={classes.modalDescription}>{description}</p>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}

export default SoftSkillsCard;
