import styled from "styled-components";
import {Typography} from "@/typography";
import {ETypographyVariant} from "@/typography/typography.types";
import {EPaperBorderRadius, paperBorderRadiuses} from "@";

const tableHeadDataPadding = '9px 12px 7px 12px';
const tableBodyDataPadding = '9px 12px';

export const StyledTableWrapper = styled.div`
    overflow: scroll;
    border-radius: ${paperBorderRadiuses[EPaperBorderRadius.Medium]} ${paperBorderRadiuses[EPaperBorderRadius.Medium]} 0 0;
`

export const StyledTable = styled.table.attrs({
    cellPadding: '0',
    cellSpacing: '0',
})`
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
`;

export const StyledTableHead = styled.thead.attrs({
    align: 'left',
    valign: 'center'
})`
    background-color: ${({theme}) => theme.colors.SecondaryDark};
`

export const StyledTableHeadData = styled(Typography).attrs({
    element: 'th',
    variant: ETypographyVariant.Body2GrayscaleVariant1,
})`
    padding: ${tableHeadDataPadding};
    text-align: left;
`

export const StyledTableBody = styled.tbody.attrs({
    align: 'left',
    valign: 'center',
})`
    background-color: ${({theme}) => theme.colors.WhiteBg};
`

export const StyledTableBodyRow = styled.tr`
    transform: scale(1);
    border-bottom: solid 1px ${({theme}) => theme.colors.GrayscaleVariant6};
    box-shadow: ${({theme}) => theme.shadows.LowShadow};
    &:last-of-type {
        border: none;
    }
`

export const StyledTableBodyData = styled(Typography).attrs({
    element: 'td',
    variant: ETypographyVariant.Body2GrayscaleVariant2,
})`
    padding: ${tableBodyDataPadding};
    border-right: solid 1px ${({theme}) => theme.colors.GrayscaleVariant6};
    &:last-of-type {
        border: none;
    }
`