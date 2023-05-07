import React, { useEffect, useState } from "react";
import "./EditProduct.scss";

import { useParams, useLocation } from "react-router-dom";
import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";

import ImageUpload from "../../components/ImageUpload";
import { companyOptions, productData } from "../../utils/dummy-data";
import { formatter, formatterPrice } from "../../utils/commonFunction";
const { TextArea } = Input;

const EditProduct = () => {
  const [form] = Form.useForm();

  const params = useParams();
  const location = useLocation();

  const [getSrc, setGetSrc] = useState([]);
  const [formInitialValue, setformInitialValue] = useState(null);

  // console.log('params', params);
  // console.log('location', location);

  useEffect(() => {
    if (params?.status === "edit") {
      let product = productData.find(
        (item) => item.key === location?.state?.key
      );

      form.setFieldsValue({
        productName: product?.name,
        productPrice: product?.price,
        productDescription: product?.description,
        productCompany: product?.companies,
        productQuantity: product?.quantity,
      });

      let imageDetails = [];
      product?.imageList?.map((item, index) => {
        // let obj = {};
        // obj = { ...obj,  };
        imageDetails.push({imagebase64: item});
        if (index === product?.imageList?.length - 1) {
          setGetSrc(imageDetails);
        }
      });

      setformInitialValue(product);
    }
  }, []);

  const onFinish = (values) => {
    // console.log(values);
    // if (values) {
    // const formData = new FormData();
    // formData.append('data', JSON.stringify(values));
    // getSrc?.map((item, index) => {
    //     return (
    //         formData.append('image', item?.file)
    //     )
    // })
    // console.log('formData', formData);
    // }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    // let arrayOfImages = [];

    // getSrc?.map((item) => {
    //   arrayOfImages.push(item);
    // });
    // console.log('arrayOfImages', arrayOfImages);
    // form.setFieldsValue({ uploadImage: arrayOfImages });
    form.setFieldsValue({ uploadImageDrag: getSrc });
  }, [getSrc]);

  return (
    <div className="p-3 shadow-md rounded bg-white">
      {params?.status === "edit" ? 
        <div className="fs-18 text-bolder mb-3" data-testid='edit-title-data-id'>
          Edit Product
        </div>
       :
        <div className="fs-18 text-bolder mb-3" data-testid='add-title-data-id'>
          Add Product
        </div>
       }
      <div className="product-box-add-edit">
        {params?.status === "add" || params?.status === "edit" ? (
          <Form
            name="formExample"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            scrollToFirstError
            requiredMark={"optional"}
            form={form}
          >
            <Row gutter={[24, 24]}>
              <Col xs={24} md={8}>
                <Form.Item
                  label="Product Name"
                  name="productName"
                  rules={[
                    { required: true, message: "Please enter product name!" },
                  ]}
                  data-testid="product-name"
                >
                  <Input size="large" placeholder="Enter Product Name" />
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Form.Item
                  label="Product Price"
                  name="productPrice"
                  rules={[
                    { required: true, message: "Please enter product price!" },
                    {
                      pattern: /^[1-9]\d{0,5}(?:\.\d{1,2})?$/,
                      // pattern: /^(?:[1-9][0-9]{2}|[1-9][0-9]|[1-9])$/,
                      message: "Please enter price between 1-999999",
                    },
                  ]}
                  data-testid="product-price"
                >
                  <Input
                    prefix="Rs. "
                    className="w-full"
                    placeholder="Enter Product Price"
                    size="large"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Form.Item
                  label="Product Company"
                  name="productCompany"
                  rules={[
                    {
                      required: true,
                      message: "Please select product company!",
                    },
                  ]}
                  data-testid="product-company"
                >
                  <Select
                    mode="multiple"
                    allowClear
                    className="w-full"
                    placeholder="Please select"
                    size="large"
                    // onChange={handleChangeSelectMultiple}
                    options={companyOptions}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={24}>
                <Form.Item
                  label="Product Description"
                  name="productDescription"
                  rules={[
                    {
                      required: true,
                      message: "Please enter product description!",
                    },
                  ]}
                  data-testid="product-description"
                >
                  <TextArea
                    className="w-full"
                    size="large"
                    placeholder="Enter Product Description"
                    rows={4}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={24}>
                <Form.Item
                  label="Drag And Drop Upload"
                  name="uploadImageDrag"
                  rules={[{ required: true, message: "Please upload image!" }]}
                  data-testid="upload-Image-Drag"
                >
                  <ImageUpload
                    getSrc={getSrc}
                    setGetSrc={setGetSrc}
                    isDregger={true}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={24}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    data-testid="update-add-btn "
                  >
                    {params?.status === "edit"
                      ? "Update Product"
                      : "Add Product"}
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        ) : (
          <div data-testid="wrong-msg">'Somthing went wrong'</div>
        )}
      </div>
    </div>
  );
};

export default EditProduct;
