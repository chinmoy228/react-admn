import { FilePdfOutlined } from "@ant-design/icons";
import { Card, Button } from "antd";

const ListWithDownloadBtn = () => {

  const onClickDownloadPDF = () => {
    fetch('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
          alink.click();
      })
  })
  };

  return (
    <Card className="card-with-shadow rounded shadow-md" data-testid="card-download">
      <div className="d-flex justify-between">
        <p className="fs-18 m-0 text-bolder" data-testid="invoice-text">Invoices</p>
        <div>
          <Button data-testid="view-btn">View All</Button>
        </div>
      </div>

      {[1, 2, 3, 4, 5,6].map((key) => (
        <div className="d-flex justify-between mt-3 align-items-center" key={key}>
          <div>
            <p className="m-0 text-bolder " data-testid={`date-${key}`}>March, 01, 2020</p>
            <p className="m-0 text-black-light fs-8" data-testid={`id-${key}`}>#MS-415646</p>
          </div>
          <div className="d-flex">
            <p className="m-0 text-black-light mr-4 "data-testid={`price-${key}`}>$180</p>
            <div className="cursor-pointer">
              <Button type="link" href="#" className="d-flex items-start" onClick={onClickDownloadPDF} data-testid={`pdf-btn-${key}`}>
                <FilePdfOutlined data-testid={`pdf-outline-${key}`}/>
                <p className="m-0 text-bolder pl-1 lh-16" data-testid={`pdf-txt-${key}`}>PDF</p>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};
export default ListWithDownloadBtn;
