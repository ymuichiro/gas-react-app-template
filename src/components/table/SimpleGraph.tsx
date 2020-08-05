import React from "react";
import { makeStyles, createStyles, Card, CardContent, Container, Typography } from "@material-ui/core";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, ResponsiveContainer, Legend, YAxis } from "recharts";

const useStyles = makeStyles(theme => createStyles({
    root: {
        flexGrow: 1,
    },
    graph_Title: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        textAlign: "center",
        fontWeight: "bold",
    },
}));

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];


/** 検索画面を提供する。かつ親要素へ検索条件を渡す。 */
export function SimpleGraph() {
    const classes = useStyles();

    const ResultGraph = () => <ResponsiveContainer height="100%" >
        <LineChart
            data={data}
        >
            <XAxis dataKey="name" />
            <YAxis type="number" hide={true} />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="name" stroke="#ff7300" yAxisId={0} />
        </LineChart>
    </ResponsiveContainer >

    /** データが存在しない場合の表示 */
    const NoData = () => <Typography color="textSecondary" align="center">データがありません</Typography>;

    return <Container style={{ height: "100%" }}>
        <Card style={{ height: "100%" }}>
            <CardContent className={classes.graph_Title}>
                Graph
            </CardContent>
            <CardContent>
                <div style={{ height: "20em", marginTop: "1em" }}>
                    {data.length === 0 ? <NoData /> : <ResultGraph />}
                </div>
            </CardContent>
        </Card>
    </Container>
}