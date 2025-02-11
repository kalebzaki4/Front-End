import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chart } from 'react-google-charts';
import './style.css';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function MediaCard() {
  return (
    <>
      <Card className="card" sx={{ maxWidth: 350, borderRadius: 3 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Soma das entradas
          </Typography>
          <Typography className='typography' variant="h5" color="text.secondary">
            R$1.500,00
          </Typography>
        </CardContent>
      </Card>
      <Card className="card" sx={{ maxWidth: 350, borderRadius: 3 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Aluguel
          </Typography>
          <Typography className='typography' variant="h5" color="text.secondary">
            R$400,00
          </Typography>
        </CardContent>
      </Card>
      <Card className="card" sx={{ maxWidth: 350, borderRadius: 3 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Conta de água
          </Typography>
          <Typography className='typography' variant="h5" color="text.secondary">
            R$100,00
          </Typography>
        </CardContent>
      </Card>
      <Card className="card" sx={{ maxWidth: 350, borderRadius: 3 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Conta de luz
          </Typography>
          <Typography className='typography' variant="h5" color="text.secondary">
            R$200,00
          </Typography>
        </CardContent>
      </Card>
      <Card className='card2'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gráfico dos Ganhos/Gastos:
          </Typography>
          <Chart
            chartType="AreaChart"
            width="100%"
            height="300px"
            data={[
              ["x", "Ganhos", "Gastos"],
              [0, 0, 0],
              [1, 10, 5],
              [2, 23, 15],
              [3, 17, 9],
              [4, 18, 10],
              [5, 9, 5],
              [6, 11, 3],
            ]}
            options={{
              hAxis: {
                title: "Dias",
              },
              vAxis: {
                title: "Gastos",
              },
              series: {
                1: { curveType: "function" },
              },
            }}
          />
          <Typography variant="body2" color="text.secondary">
            As informações do gráfico podem variar com a sua lista, sendo alteráveis. Você pode atualizá-las aqui conforme necessário.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Saiba mais</Button>
        </CardActions>
      </Card>
      <Card className='card3'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Listas de gastos:
          </Typography>
          <Chart
            chartType="PieChart"
            width="100%"
            height="300px"
            data={[
              ["Task", "Hours per Day"],
              ["Soma das saidas", 11  ],
              ["Aluguel", 4],
              ["Conta de água", 2],
              ["Conta de luz", 3],
            ]}
            options={{
              title: "Analise dos dados:",
              pieHole: 0.4,
              is3D: false,
            }}
          />
          <Typography variant="body2" color="text.secondary">
            As informações do gráfico podem variar com a sua lista, sendo alteráveis. Você pode atualizá-las aqui.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Saiba mais</Button>
        </CardActions>
      </Card>
      <Card className='card4'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lista de Gastos:
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions>
          <Button size="small">Saiba mais</Button>
        </CardActions>
      </Card>
    </>
  );
}
  