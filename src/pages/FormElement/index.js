import {
  Col,
  Input,
  Row,
  Form,
  InputNumber,
  Radio,
  Checkbox,
  Divider,
  DatePicker,
  TimePicker,
  Select,
  Switch,
  Button,
} from "antd";
import React, { useState } from "react";
import {
  UserOutlined,
  SettingOutlined,
  CheckOutlined,
  CloseOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import ImageUpload from "../../components/ImageUpload";
import { useEffect } from "react";
dayjs.extend(customParseFormat);

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const FormElement = () => {
  const plainOptions = ["Apple", "Pear", "Orange"];
  const defaultCheckedList = ["Apple", "Orange"];

  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = plainOptions.filter(
    (o) => !selectedItems.includes(o)
  );
  const [uploadedImageSrc, setuploadedImageSrc] = useState(null);
  const [getSrc, setGetSrc] = useState([]);
  const [getSrcDrg, setGetSrcDrg] = useState([]);

  const [form] = Form.useForm();

  const optionsCheck = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const multipleOptions = [
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Chikoo",
      value: "chikoo",
    },
    {
      label: "Cherry",
      value: "cherry",
    },
  ];

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onFinish = (values) => {
    console.log('values',values);
    if (values) {
      const formData = new FormData();
      formData.append("data", JSON.stringify(values));

      getSrc?.map((item, index) => {
        return formData.append("image", item?.file);
      });
      getSrcDrg?.map((item, index) => {
        return formData.append("image", item?.file);
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    //console.log("Failed:", errorInfo);
  };

  const onChangeCheck = (checkedList) => {
    setCheckedList(checkedList);
    setIndeterminate(
      !!checkedList.length && checkedList.length < optionsCheck.length
    );
    setCheckAll(checkedList.length === optionsCheck.length);
    form.validateFields(["checkedList"]);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(
      e.target.checked ? optionsCheck.map((item) => item.value) : []
    );
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    form.setFieldsValue({
      checkedList: e.target.checked
        ? optionsCheck.map((item) => item.value)
        : [],
    });
    form.validateFields(["checkedList"]);
  };

  const validateCheckedList = (rule, value) => {
    if (!checkAll && value.length === 0) {
      return Promise.reject("Please select at least one option.");
    }
    return Promise.resolve();
  };

  const onChangeDatePicker = (date, dateString) => {
    //console.log(date, dateString);
  };

  const onChangerangePicker = (date, dateString) => {
   // console.log(date, dateString);
  };

  const onChangeTimePicker = (time, timeString) => {
    //console.log(time, timeString);
  };

  const onChangeTimePickerRange = (time, timeString) => {
   // console.log(time, timeString);
  };

  const handleChangeSelect = (value) => {
    //console.log(`selected ${value}`);
  };

  const handleChangeSelectMultiple = (value) => {
   // console.log(`selected ${value}`);
  };

  const onChangeSwitch = (checked) => {
   // console.log(`switch to ${checked}`);
  };

  useEffect(() => {
    let arrayOfImages = [];

    getSrc?.map((item) => {
      arrayOfImages.push(item?.name);
    });

    form.setFieldsValue({ uploadImage: arrayOfImages });
  }, [getSrc]);

  useEffect(() => {
    let arrayOfImages = [];

    getSrcDrg?.map((item) => {
      arrayOfImages.push(item?.name);
    });

    form.setFieldsValue({ uploadImageDrag: arrayOfImages });
  }, [getSrcDrg]);

  return (
    <div className="p-3 shadow-md rounded bg-white">
      <div className="table-box">
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
          <Row>
            <Col className="fs-18 text-bolder mb-3" data-testid="normal-text">
              Normal Input
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Form.Item
                label="Input"
                name="inputLG"
                rules={[
                  { required: true, message: "Please enter your value!" },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Large size"
                  data-testid="normal-input-large"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Input"
                name="input"
                rules={[
                  { required: true, message: "Please enter your value!" },
                ]}
              >
                <Input
                  placeholder="Normal size"
                  prefix={<UserOutlined />}
                  data-testid="normal-input-normal"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Input"
                name="inputSM"
                rules={[
                  { required: true, message: "Please enter your value!" },
                ]}
              >
                <Input
                  size="small"
                  placeholder="Small size"
                  prefix={<UserOutlined />}
                  data-testid="normal-input-small"
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider className="mb-5" />

          <Row>
            <Col className="fs-18 text-bolder mb-3" data-testid="email-text">
              Email Input
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Form.Item
                label="Email"
                name="emailLG"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  {
                    type: "email",
                    message: "Please enter valid email!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Large size"
                  data-testid="email-input-large"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  {
                    type: "email",
                    message: "Please enter valid email!",
                  },
                ]}
              >
                <Input
                  placeholder="Normal size"
                  prefix={<UserOutlined />}
                  data-testid="email-input-normal"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Email"
                name="emailSM"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  {
                    type: "email",
                    message: "Please enter valid email!",
                  },
                ]}
              >
                <Input
                  size="small"
                  placeholder="Small size"
                  prefix={<UserOutlined />}
                  data-testid="email-input-small"
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider className="mb-5" />

          <Row>
            <Col className="fs-18 text-bolder mb-3" data-testid="password-text">
              Password Input
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Form.Item
                label="Password"
                name="passwordLG"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Large size"
                  data-testid="password-input-large"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Normal size"
                  prefix={<UserOutlined />}
                  data-testid="password-input-normal"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Password"
                name="passwordSM"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              >
                <Input.Password
                  size="small"
                  placeholder="Small size"
                  prefix={<UserOutlined />}
                  data-testid="password-input-small"
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider className="mb-5" />

          <Row>
            <Col className="fs-18 text-bolder mb-3" data-testid="number-text">
              Number Input
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Form.Item
                label="Number"
                name="numberdLG"
                rules={[
                  { required: true, message: "Please enter your number!" },
                ]}
              >
                <InputNumber
                  className="w-full"
                  size="large"
                  min={1}
                  max={10}
                  defaultValue={3}
                  data-testid="number-input-large"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Number"
                name="numberd"
                rules={[
                  { required: true, message: "Please enter your number!" },
                ]}
              >
                <InputNumber
                  className="w-full"
                  addonBefore={<SettingOutlined />}
                  min={1}
                  max={10}
                  defaultValue={3}
                  data-testid="number-input-normal"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Number"
                name="numberdSM"
                rules={[
                  { required: true, message: "Please enter your number!" },
                ]}
              >
                <InputNumber
                  className="w-full"
                  addonBefore={<SettingOutlined />}
                  size="small"
                  min={1}
                  max={10}
                  defaultValue={3}
                  data-testid="number-input-small"
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider className="mb-5" />

          <Row>
            <Col className="fs-18 text-bolder mb-3" data-testid="radio-text">
              Radio Input
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col xs={12} md={4}>
              <Form.Item
                label="Radio"
                name="radio"
                rules={[{ required: true, message: "Please select radio!" }]}
              >
                <Radio.Group>
                  <Radio value="select" data-testid="radio-btn-normal">
                    Select Me
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col xs={12} md={4}>
              <Form.Item label="Radio" name="radiodisabled">
                <Radio disabled={true} data-testid="radio-btn-disabled">
                  Select Me
                </Radio>
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Radio Group"
                name="radioGroup"
                rules={[{ required: true, message: "Please select radio!" }]}
              >
                <Radio.Group data-testid="radio-grp">
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                  <Radio value="other">Other</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Radio Group Button"
                name="radioGroupButton"
                rules={[{ required: true, message: "Please select radio!" }]}
              >
                <Radio.Group
                  optionType="button"
                  buttonStyle="solid"
                  data-testid="radio-grp-btn"w
                >
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                  <Radio value="other">Other</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>

          <Divider className="mb-5" />

          <Row>
            <Col className="fs-18 text-bolder mb-3" data-testid="checkbox-text">
              Checkbox Input
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col xs={12} md={4}>
              <Form.Item
                label="Checkbox"
                name="checkbox"
                rules={[{ required: true, message: "Please select checkbox!" }]}
              >
                <Checkbox.Group>
                  <Checkbox value="check" data-testid="checkbox-btn-normal">
                    Check Me
                  </Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </Col>
            <Col xs={12} md={4}>
              <Form.Item label="Checkbox" name="checkboxdisabled">
                <Checkbox disabled={true} data-testid="checkbox-btn-disabled">
                  Check Me
                </Checkbox>
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label="Checkbox Group"
                name="checkGroup"
                rules={[{ required: true, message: "Please select checkbox!" }]}
              >
                <Checkbox.Group data-testid="checkbox-grp">
                  <Checkbox value="apple">Apple</Checkbox>
                  <Checkbox value="banana">Banana</Checkbox>
                  <Checkbox value="chikoo">Chikoo</Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item>
                <Checkbox
                  indeterminate={indeterminate}
                  onChange={onCheckAllChange}
                  checked={checkAll}
                  data-testid="checkbox-grp-btn"
                >
                  Check all
                </Checkbox>
              </Form.Item>
              <Form.Item
                name="checkedList"
                rules={[{ validator: validateCheckedList }]}
                initialValue={[]}
              >
                <Checkbox.Group
                  options={optionsCheck}
                  value={checkedList}
                  onChange={onChangeCheck}
                  data-testid='checkedList-group-data-id'
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider className="mb-5" />

          <Row>
            <Col className="fs-18 text-bolder mb-3" data-testid="textarea-text">
              Text Area Input
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Textarea"
                name="textarea"
                rules={[{ required: true, message: "Please enter value!" }]}
              >
                <TextArea
                  className="w-full"
                  rows={4}
                  data-testid="text-area-normal"
                />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Textarea"
                name="textareaFixLength"
                rules={[{ required: true, message: "Please enter value!" }]}
              >
                <TextArea
                  rows={4}
                  placeholder="maxLength is 6"
                  maxLength={6}
                  data-testid="text-area-maxlength"
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider className="mb-5" />

          <Row>
            <Col
              className="fs-18 text-bolder mb-3"
              data-testid="datepicker-text"
            >
              Date Picker Input
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Date Picker"
                name="datepicker"
                rules={[{ required: true, message: "Please select date!" }]}
              >
                <DatePicker
                  className="w-full"
                  onChange={onChangeDatePicker}
                  data-testid="date-picker"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Date Range Picker"
                name="daterangepicker"
                rules={[
                  { required: true, message: "Please select date range!" },
                ]}
              >
                <RangePicker
                  className="w-full"
                  onChange={onChangerangePicker}
                  data-testid="Date-Range-Picker"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Week Picker"
                name="weekpicker"
                rules={[{ required: true, message: "Please select week!" }]}
              >
                <DatePicker
                  className="w-full"
                  onChange={onChangeDatePicker}
                  picker="week"
                  data-testid="week-picker"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Week Range Picker"
                name="weekrangepicker"
                rules={[
                  { required: true, message: "Please select week range!" },
                ]}
              >
                <RangePicker
                  className="w-full"
                  onChange={onChangerangePicker}
                  picker="week"
                  data-testid="week-Range-Picker"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Month Picker"
                name="monthpicker"
                rules={[{ required: true, message: "Please select month!" }]}
              >
                <DatePicker
                  className="w-full"
                  onChange={onChangeDatePicker}
                  picker="month"
                  data-testid="month-Picker"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Month Range Picker"
                name="monthrangepicker"
                rules={[
                  { required: true, message: "Please select month range!" },
                ]}
              >
                <RangePicker
                  className="w-full"
                  onChange={onChangerangePicker}
                  picker="month"
                  data-testid="month-Range-Picker"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Quarter Picker"
                name="quarterpicker"
                rules={[{ required: true, message: "Please select quarter!" }]}
              >
                <DatePicker
                  className="w-full"
                  onChange={onChangeDatePicker}
                  picker="quarter"
                  data-testid="quarter-Picker"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Quarter Range Picker"
                name="quarterrangepicker"
                rules={[
                  { required: true, message: "Please select quarter range!" },
                ]}
              >
                <RangePicker
                  className="w-full"
                  onChange={onChangerangePicker}
                  picker="quarter"
                  data-testid="quarter-Range-Picker"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Year Picker"
                name="yearpicker"
                rules={[{ required: true, message: "Please select year!" }]}
              >
                <DatePicker
                  className="w-full"
                  onChange={onChangeDatePicker}
                  picker="year"
                  data-testid="year-Picker"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Year Range Picker"
                name="yearrangepicker"
                rules={[
                  { required: true, message: "Please select year range!" },
                ]}
              >
                <RangePicker
                  className="w-full"
                  onChange={onChangerangePicker}
                  picker="year"
                  data-testid="year-Range-Picker"
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider className="mb-5" />

          <Row>
            <Col
              className="fs-18 text-bolder mb-3"
              data-testid="timepicker-text"
            >
              Time Picker Input
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Time Picker"
                name="timepicker"
                rules={[{ required: true, message: "Please select time!" }]}
              >
                <TimePicker
                  className="w-full"
                  onChange={onChangeTimePicker}
                  defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                  data-testid="time-picker"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Time Picker Range"
                name="timepickerrange"
                rules={[
                  { required: true, message: "Please select time range!" },
                ]}
              >
                <TimePicker.RangePicker
                  className="w-full"
                  onChange={onChangeTimePickerRange}
                  defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                  data-testid="time-Range-picker"
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider className="mb-5" />

          <Row>
            <Col
              className="fs-18 text-bolder mb-3"
              data-testid="Time-Date-Picker-With-Time-Picker-text"
            >
              Time Date Picker With Time Picker
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Date Picker With Time"
                name="datepickerwithtime"
                rules={[{ required: true, message: "Please select date!" }]}
              >
                <DatePicker
                  className="w-full"
                  onChange={onChangeDatePicker}
                  showTime
                  data-testid="Date-Picker-With-Time"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Date Range Picker With Time"
                name="daterangepickerwithtime"
                rules={[
                  { required: true, message: "Please select date range!" },
                ]}
              >
                <RangePicker
                  className="w-full"
                  onChange={onChangerangePicker}
                  showTime
                  data-testid="Date-Range-Picker-With-Time"
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider className="mb-5" />

          <Row>
            <Col className="fs-18 text-bolder mb-3" data-testid="Select-Input">
              Select Input
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={6}>
              <Form.Item
                label="Noramal Select"
                name="normalSelect"
                rules={[{ required: true, message: "Please select value!" }]}
                data-testid="Normal-Select"
              >
                <Select
                  defaultValue="lucy"
                  onChange={handleChangeSelect}
                  className="w-full"
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col xs={24} md={6}>
              <Form.Item
                label="Disable Select"
                name="disableSelect"
                data-testid="disable-Select"
              >
                <Select
                  defaultValue="lucy"
                  onChange={handleChangeSelect}
                  className="w-full"
                  disabled
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={6}>
              <Form.Item
                label="Loading Select"
                name="loadingSelect"
                rules={[{ required: true, message: "Please select value!" }]}
                data-testid="Loading-Select"
              >
                <Select
                  defaultValue="lucy"
                  onChange={handleChangeSelect}
                  className="w-full"
                  loading
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={6}>
              <Form.Item
                label="Allow Clear Select"
                name="clearSelect"
                rules={[{ required: true, message: "Please select value!" }]}
                data-testid="clear-Select"
              >
                <Select
                  defaultValue="lucy"
                  onChange={handleChangeSelect}
                  className="w-full"
                  allowClear
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Multiple Select"
                name="multipleSelect"
                rules={[{ required: true, message: "Please select value!" }]}
                data-testid="multipleSelect"
              >
                <Select
                  mode="multiple"
                  allowClear
                  className="w-full"
                  placeholder="Please select"
                  onChange={handleChangeSelectMultiple}
                  options={multipleOptions}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Remove Multiple Select"
                name="removemultipleSelect"
                rules={[{ required: true, message: "Please select value!" }]}
                data-testid="removemultipleSelect"
              >
                <Select
                  mode="multiple"
                  placeholder="Inserted are removed"
                  value={selectedItems}
                  onChange={setSelectedItems}
                  className="w-full"
                  options={filteredOptions.map((item) => ({
                    value: item,
                    label: item,
                  }))}
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider className="mb-5" />

          <Row gutter={[24, 24]}>
            <Col
              xs={24}
              className="fs-18 text-bolder mb-3"
              data-testid="Switch-Input-Text"
            >
              Switch Input
            </Col>
            <Col xs={24} md={6}>
              <Form.Item
                label="Noramal Switch"
                name="normalSwitch"
                data-testid="normalSwitch"
              >
                <Switch defaultChecked onChange={onChangeSwitch} />
              </Form.Item>
            </Col>
            <Col xs={24} md={6}>
              <Form.Item
                label="Disable Switch"
                name="disableSwitch"
                data-testid="disableSwitch"
              >
                <Switch defaultChecked disabled onChange={onChangeSwitch} />
              </Form.Item>
            </Col>
            <Col xs={24} md={6}>
              <Form.Item
                label="Switch With Text"
                name="textSwitch"
                data-testid="textSwitch"
              >
                <Switch
                  defaultChecked
                  checkedChildren="Yes"
                  unCheckedChildren="No"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={6}>
              <Form.Item
                label="Switch With Icon"
                name="iconSwitch"
                data-testid="iconSwitch"
              >
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider className="mb-5" />

          <Row gutter={[24, 24]}>
            <Col
              xs={24}
              className="fs-18 text-bolder mb-3"
              data-testid="image-upload-text"
            >
              Image Upload
            </Col>
            {uploadedImageSrc ? (
              <img
                src={uploadedImageSrc}
                alt="avatar"
                style={{
                  width: "100%",
                }}
              />
            ) : null}
            <Col xs={24} md={24}>
              <Form.Item
                label="Upload"
                name="uploadImage"
                rules={[{ required: true, message: "Please upload image!" }]}
                data-testid="uploadImage"
              >
                <ImageUpload getSrc={getSrc} setGetSrc={setGetSrc} />
              </Form.Item>
            </Col>

            <Col xs={24} md={24}>
              <Form.Item
                label="Drag And Drop Upload"
                name="uploadImageDrag"
                rules={[{ required: true, message: "Please upload image!" }]}
                data-testid="uploadImageDrag"
              >
                <ImageUpload
                  getSrc={getSrcDrg}
                  setGetSrc={setGetSrcDrg}
                  isDregger={true}
                />
              </Form.Item>
            </Col>

            <Col xs={24} md={6}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  data-testid="submit-btn"
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>

          <Divider className="mb-5" orientation="left"></Divider>

          <Row gutter={[24, 24]}>
            <Col
              xs={24}
              className="fs-18 text-bolder mb-3 mt-5"
              data-testid="Buttons-text"
            >
              Buttons
            </Col>

            <Divider
              className="mb-5"
              orientation="left"
              data-testid="Primary-Buttons-text"
            >
              Primary Buttons
            </Divider>

            <Col xs={24} md={6}>
              <Button
                size="large"
                type="primary"
                data-testid="large-primary-btn"
              >
                Primary Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button type="primary" data-testid="normal-primary-btn">
                Primary Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button
                size="small"
                type="primary"
                data-testid="small-primary-btn"
              >
                Primary Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button
                type="primary"
                icon={<DownloadOutlined />}
                data-testid="DownloadOutlined-primary-btn"
              >
                Primary Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button
                type="primary"
                shape="round"
                data-testid="round-primary-btn"
              >
                Primary Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button
                disabled
                type="primary"
                data-testid="disabled-primary-btn"
              >
                Primary Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button loading type="primary" data-testid="loading-primary-btn">
                Primary Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button block type="primary" data-testid="block-primary-btn">
                Primary Button
              </Button>
            </Col>

            <Divider
              className="mb-5"
              orientation="left"
              data-testid="Default-Buttons-text"
            >
              Default Buttons
            </Divider>

            <Col xs={24} md={6}>
              <Button size="large" data-testid="large-Default-btn">
                Default Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button data-testid="normal-Default-btn">Default Button</Button>
            </Col>
            <Col xs={24} md={6}>
              <Button size="small" data-testid="small-Default-btn">
                Default Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button
                icon={<DownloadOutlined />}
                data-testid="DownloadOutlined-Default-btn"
              >
                Default Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button shape="round" data-testid="round-Default-btn">
                Default Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button disabled data-testid="disabled-Default-btn">
                Default Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button loading data-testid="loading-Default-btn">
                Default Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button block data-testid="block-Default-btn">
                Default Button
              </Button>
            </Col>

            <Divider className="mb-5" orientation="left">
              Dashed Buttons
            </Divider>

            <Col xs={24} md={6}>
              <Button size="large" type="dashed" data-testid="large-Dashed-btn">
                Dashed Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button type="dashed" data-testid="normal-Dashed-btn">
                Dashed Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button size="small" type="dashed" data-testid="small-Dashed-btn">
                Dashed Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
            <Button type="dashed" icon={<DownloadOutlined />} data-testid="DownloadOutlined-Dashed-btn">Dashed Button</Button>

            </Col>
            <Col xs={24} md={6}>
              <Button type="dashed" shape="round" data-testid="round-Dashed-btn">
                Dashed Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button disabled type="dashed" data-testid="disabled-Dashed-btn">
                Dashed Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button loading type="dashed" data-testid="loading-Dashed-btn">
                Dashed Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button block type="dashed" data-testid="block-Dashed-btn">
                Dashed Button
              </Button>
            </Col>

            <Divider className="mb-5" orientation="left">
              Text Buttons
            </Divider>

            <Col xs={24} md={6}>
              <Button size="large" type="text" data-testid="large-Text-btn">
                text Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button type="text" data-testid="normal-Text-btn">Text Button</Button>
            </Col>
            <Col xs={24} md={6}>
              <Button size="small" type="text" data-testid="small-Text-btn">
                Text Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button type="text" icon={<DownloadOutlined />} data-testid="DownloadOutlined-Text-btn">
                Text Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button type="text" shape="round" data-testid="round-Text-btn" >
                Text Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button disabled type="text" data-testid="disabled-Text-btn">
                Text Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button loading type="text" data-testid="loading-Text-btn">
                Text Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button block type="text" data-testid="block-Text-btn">
                Text Button
              </Button>
            </Col>

            <Divider className="mb-5" orientation="left" >
              Link Buttons
            </Divider>

            <Col xs={24} md={6}>
              <Button size="large" type="link" data-testid="large-Link-btn">
                link Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button type="link" data-testid="normal-Link-btn">Link Button</Button>
            </Col>
            <Col xs={24} md={6}>
              <Button size="small" type="link" data-testid="small-Link-btn">
                Link Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button type="link" icon={<DownloadOutlined />} data-testid="DownloadOutlined-Link-btn">
                Link Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button type="link" shape="round" data-testid="round-Link-btn">
                Link Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button disabled type="link" data-testid="disabled-Link-btn">
                Link Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button loading type="link" data-testid="loading-Link-btn">
                Link Button
              </Button>
            </Col>
            <Col xs={24} md={6}>
              <Button block type="link" data-testid="block-Link-btn">
                Link Button
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default FormElement;
