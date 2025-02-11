import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const InputFileUpload = ({ onFileUpload, onExcelRead, style }) => {
  const [excelData, setExcelData] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log('Uploaded files:', acceptedFiles);
    onFileUpload(acceptedFiles);

    const excelFile = acceptedFiles[0];
    if (excelFile) {
      const data = [['x', 'Ganhos', 'Gastos'], [0, 0, 0], [1, 10, 5], [2, 23, 15]];
      console.log('Simulated Excel data:', data);
      setExcelData(data);
      onExcelRead(data);
    }
  }, [onFileUpload, onExcelRead]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ['.csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', '.txt'],
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        style={{ backgroundColor: '#2C516B', color: '#FFFFFF', ...style }}
      >
        Upload arq.
      </Button>
    </div>
  );
};

export default InputFileUpload;
