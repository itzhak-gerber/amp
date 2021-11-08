import CsvDownload from 'react-json-to-csv';



function CExport({rowData})
{
    return(
        <td> <CsvDownload data={rowData} /></td>
    );
}



export default CExport;