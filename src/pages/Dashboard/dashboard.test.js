import { render, screen, fireEvent } from "@testing-library/react";
import DashBoard from "./index";
import { renderWithRouter } from "../../setupTests";
import { actionTagData } from "../../utils/dummy-data"
import ActionTagTable from "../../components/ActionTagTable";
import { Space, Tag } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
describe("dashboard", () => {

  const actionTagColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a className='text-primary'>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Detail',
      key: 'detail',
      render: (_, record) => (
        <Space size="middle">
          <a className='text-primary'>{record.name}'s detail</a>
        </Space>
      ),
    },
    {
      title: 'Edit',
      key: 'edit',
      render: (_, key) => (
        <Space size="middle" className="flex justify-center">
          <EditOutlined style={{ fontSize: '14px' }} onClick={() => console.log('called')} data-testid="EditOutlinedIcon-test"/>
        </Space>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, key) => (
        <Space size="middle" className="flex justify-center">
          <DeleteOutlined style={{ color: '#ee4b4f', fontSize: '14px' }} onClick={() => console.log('called')} data-testid="DeleteOutlinedIcon-test"/>
        </Space>
      ),
    },
  ];

  test('render correctly statics card', () => {
    renderWithRouter(<DashBoard />)
    const statisCardBlock = screen.getByTestId("statisCard");
    expect(statisCardBlock).toBeInTheDocument();

  })

  test('render correctly transction Card', () => {
    renderWithRouter(<DashBoard />)
    const transctionCardBlock = screen.getByTestId("transction-card");
    expect(transctionCardBlock).toBeInTheDocument();
  })
  test('render correctly projectListCard', () => {
    renderWithRouter(<DashBoard />)
    const projectListCardBlock = screen.getByTestId("project-list-card");
    expect(projectListCardBlock).toBeInTheDocument();
  })

  test('render correctly OrderOverviewCard', () => {
    renderWithRouter(<DashBoard />)
    const OrderOverviewCardBlock = screen.getByTestId("OrderOverviewCard");
    expect(OrderOverviewCardBlock).toBeInTheDocument();
  })

  test('render correctly BankOutlinedIcon', () => {
    renderWithRouter(<DashBoard />)
    const BankOutlinedIcon = screen.getByTestId("BankOutlined-icon");
    expect(BankOutlinedIcon).toBeInTheDocument();
  })

  test('render correctly salaryTitle', () => {
    renderWithRouter(<DashBoard />)
    const salaryTitle = screen.getByTestId("salary-title");
    expect(salaryTitle).toBeInTheDocument();
  })

  test('render correctly ActionTagTable', () => {
    renderWithRouter(<DashBoard />)
    const ActionTagTableBlock = screen.getByTestId("ActionTagTable");
    expect(ActionTagTableBlock).toBeInTheDocument();
  })
  test('render correctly UserEditCard', () => {
    renderWithRouter(<DashBoard />)
    const UserEditCardBlock = screen.getByTestId("UserEditCard");
    expect(UserEditCardBlock).toBeInTheDocument();
  })
  test('render correctly TransactionList', () => {
    renderWithRouter(<DashBoard />)
    const TransactionListBlock = screen.getByTestId("TransactionList");
    expect(TransactionListBlock).toBeInTheDocument();
  })

  test('render correctly belongInteractiveText', () => {
    renderWithRouter(<DashBoard />)
    const belongInteractiveText = screen.getByTestId("belong-interactive");
    expect(belongInteractiveText).toBeInTheDocument();
  })
  test('render correctly salaryAmount', () => {
    renderWithRouter(<DashBoard />)
    const salaryAmount = screen.getByTestId("amount-salary");
    expect(salaryAmount).toBeInTheDocument();
  })
  test('render correctly SketchOutlinedIcon', () => {
    renderWithRouter(<DashBoard />)
    const SketchOutlinedIcon = screen.getByTestId("SketchOutlined-icon");
    expect(SketchOutlinedIcon).toBeInTheDocument();
  })

  test('render correctly payPalTitle', () => {
    renderWithRouter(<DashBoard />)
    const payPalTitle = screen.getByTestId("Paypal-text");
    expect(payPalTitle).toBeInTheDocument();
  })

  test('render correctly freelancePayment', () => {
    renderWithRouter(<DashBoard />)
    const freelancePayment = screen.getByTestId("freelance-payment");
    expect(freelancePayment).toBeInTheDocument();
  })

  test('render correctly paypalAmount', () => {
    renderWithRouter(<DashBoard />)
    const paypalAmount = screen.getByTestId("amount-paypal");
    expect(paypalAmount).toBeInTheDocument();
  })

  test('render correctly headerTitle', () => {
    renderWithRouter(<DashBoard />)
    const headerTitle = screen.getByTestId("pie-chart-title");
    expect(headerTitle).toBeInTheDocument();
  })

  test('render correctly pieChart', () => {
    renderWithRouter(<DashBoard />)
    const pieChart = screen.getByTestId("pie-chart");
    expect(pieChart).toBeInTheDocument();
  })

  test("table header column render perfectly", () => {
    renderWithRouter(<ActionTagTable dataSource={actionTagData} columns={actionTagColumns} />)
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByText('Tags')).toBeInTheDocument();
    expect(screen.getByText('Detail')).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();

  });
  test("table data render perfectly", () => {
    render(<ActionTagTable dataSource={actionTagData} columns={actionTagColumns} />)
    expect(screen.getByText('John Brown')).toBeInTheDocument();
    expect(screen.getByText('Jim Green')).toBeInTheDocument();
  });


  test('calls onclickEdit function on edit icon click', () => {
    renderWithRouter(<ActionTagTable dataSource={actionTagData} columns={actionTagColumns} />);
    const editIcon = screen.getAllByTestId('EditOutlinedIcon-test')[0];
    expect(editIcon).toBeInTheDocument();
    fireEvent.click(editIcon);
  });

  test('calls onclickDelete function on edit icon click', () => {
    renderWithRouter(<ActionTagTable dataSource={actionTagData} columns={actionTagColumns} />);
    const editIcon = screen.getAllByTestId('DeleteOutlinedIcon-test')[0];
    expect(editIcon).toBeInTheDocument();
    fireEvent.click(editIcon);
  });

  
})