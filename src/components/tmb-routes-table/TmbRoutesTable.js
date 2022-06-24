import './tmb_routes_table.scss'
import React from "react"
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import hikerIcon from '../../icons/hiker.svg'
import carIcon from '../../icons/car.svg'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const rows = [
    createData('08.26.2022', '26.08.2022', 1, 'Les Houches', true,'Refuge de Miage', false,12, 1366),
    createData('08.27.2022', '27.08.2022', 2, 'Refuge de Miage', true,'Refuge de la Croix du Bonhomme', false,18, 1500),
    createData('08.28.2022', '28.08.2022', 3, 'Refuge de la Croix du Bonhomme', false,'Refugio Elisabetta', false,15, 966),
    createData('08.29.2022', '29.08.2022',4, 'Refugio Elisabetta', false,'Rifugio Maison Vieille', false,10, 580),
    createData('08.30.2022', '30.08.2022', 5, 'Refugio Maison Vieille', false,'Refugio Bonatti', false,20, 1600),
    createData('08.31.2022', '31.08.2022', 6, 'Refugio Bonatti', false,'La Fouly (Hôtel Edelweiss)', true,18, 900),
    createData('09.01.2022', '01.09.2022', 7, 'La Fouly (Hôtel Edelweiss)', true,'Relais d\'Arpette', false,17, 897),
    createData('09.02.2022', '02.09.2022', 8, 'Relais d\'Arpette', false,'Trient (Hôtel La Grande Ourse)', true,13, 1358),
    createData('09.03.2022', '03.09.2022', 9, 'Trient (Hôtel La Grande Ourse)', true,'Tré-le-Champ (Auberge La Boërne)', true,11, 991),
    createData('09.04.2022', '04.09.2022', 10, 'Tré-le-Champ (Auberge La Boërne)', true,'Refuge du Lac Blanc', false,5.7, 977),
    createData('09.05.2022', '05.09.2022', 11, 'Refuge du Lac Blanc', false, 'Les Houches', true,19, 921),
];

function createData(dateEn, dateFr, day, startingPoint, startAccessibleByCar, endingPoint, endAccessibleByCar, distance, elevation) {
    return { dateEn, dateFr, day, startingPoint, startAccessibleByCar, endingPoint, endAccessibleByCar, distance, elevation };
}

function TmbRoutesTable() {
    const classes = useStyles();
    const {t} = useTranslation('common');
    const currentLanguage = i18next.language;
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>{t('map_table_tmb.table_header_day')}</TableCell>
                        <TableCell>{t('map_table_tmb.table_header_start')}</TableCell>
                        <TableCell>{t('map_table_tmb.table_header_finish')}</TableCell>
                        <TableCell>Distance</TableCell>
                        <TableCell>{t('map_table_tmb.table_header_elevation')}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.day}>
                            <TableCell component="th" scope="row">
                                {currentLanguage === 'en' ? row.dateEn : row.dateFr}
                            </TableCell>
                            <TableCell>{row.day}</TableCell>
                            <TableCell>
                                <div className="destination-wrapper">
                                    <img src={getTransportationIcon(row.startAccessibleByCar)}  alt=""/>
                                    {row.startingPoint}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="destination-wrapper">
                                    <img src={getTransportationIcon(row.endAccessibleByCar)}  alt=""/>
                                    {row.endingPoint}
                                </div>
                            </TableCell>
                            <TableCell>{row.distance + 'km'}</TableCell>
                            <TableCell>{'+' + row.elevation + 'm'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function getTransportationIcon(isAccessibleByCar) {
    return isAccessibleByCar ? carIcon : hikerIcon;
}

export default TmbRoutesTable;
