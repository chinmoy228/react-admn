import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Charts from "./index";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Col, Row } from "antd";
import BarChart from "../../components/BarChart";
import { useParams } from 'react-router-dom';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ chartType: 'bar' }),
}))

describe("Charts page ", () => {
  test("render bar chart text", () => {
    const data = "bar"
    render(<Charts data={data}/>)
   
    const barchartText = screen.getByTestId("bar-chart-text");
    expect(barchartText).toBeInTheDocument();
  
  })
  test("render bar chart axis text", () => {
    const data = "bar"
    render(<Charts data={data}/>)
   
    const barchartText = screen.getByTestId("bar-chart-axis-text");
    expect(barchartText).toBeInTheDocument()
  
  })

  test("render bar chart grid text", () => {
    const data = "bar"
    render(<Charts data={data}/>)
   
    const barchartText = screen.getByTestId("bar-chart-grid-text")
    expect(barchartText).toBeInTheDocument();
  
  })

  test("render bar chart legend text", () => {
    const data = "bar"
    render(<Charts data={data}/>)
   
    const barchartText = screen.getByTestId("bar-chart-legend-text");
    expect(barchartText).toBeInTheDocument()
  
  })

  test("render bar chart horizontal text", () => {
    const data = "bar"
    render(<Charts data={data}/>)
   
    const barchartText = screen.getByTestId("bar-chart-horizontal-text");
    expect(barchartText).toBeInTheDocument()
  
  })

  // test("render group chart text", () => {
  //   const data = "group"
  //   render(<Charts data={data}/>)
   
  //   const barchartText = screen.getByTestId("group-chat-text");
  //   expect(barchartText).toBeInTheDocument()
  
  // })

  
  


});
