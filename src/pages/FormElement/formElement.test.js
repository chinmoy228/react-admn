import FormElement from "./index";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { renderWithRouter } from "../../setupTests";
import userEvent from "@testing-library/user-event";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import { UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Radio, Select, Switch } from "antd";

const handleChangeSelectMultiple = jest.fn();
const handleChangeSelect = jest.fn();
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
describe("Form element", () => {
  test("render Normal Input correctly", () => {
    renderWithRouter(<FormElement />);
    const normalInputText = screen.getByTestId("normal-text");
    expect(normalInputText).toBeInTheDocument();

    const largeSizeNormalInput = screen.getByTestId("normal-input-large");
    expect(largeSizeNormalInput).toBeInTheDocument();

    const normalSizeNormalInput = screen.getByTestId("normal-input-normal");
    expect(normalSizeNormalInput).toBeInTheDocument();

    const smallSizeNormalInput = screen.getByTestId("normal-input-small");
    expect(smallSizeNormalInput).toBeInTheDocument();
  });
  
  test("render Email Input  correctly", () => {
    renderWithRouter(<FormElement />);
    const emailInputText = screen.getByTestId("email-text");
    expect(emailInputText).toBeInTheDocument();

    const largeSizeEmailInput = screen.getByTestId("email-input-large");
    expect(largeSizeEmailInput).toBeInTheDocument();

    const normalSizeEmailInput = screen.getByTestId("email-input-normal");
    expect(normalSizeEmailInput).toBeInTheDocument();

    const smallSizeEmailInput = screen.getByTestId("email-input-small");
    expect(smallSizeEmailInput).toBeInTheDocument();
  });
  test("render password Input  correctly", () => {
    renderWithRouter(<FormElement />);
    const passwordInputText = screen.getByTestId("password-text");
    expect(passwordInputText).toBeInTheDocument();

    const largeSizePasswordInput = screen.getByTestId("password-input-large");
    expect(largeSizePasswordInput).toBeInTheDocument();

    const normalSizePasswordInput = screen.getByTestId("password-input-normal");
    expect(normalSizePasswordInput).toBeInTheDocument();

    const smallSizePasswordInput = screen.getByTestId("password-input-small");
    expect(smallSizePasswordInput).toBeInTheDocument();
  });
  test("render number Input  correctly", () => {
    renderWithRouter(<FormElement />);
    const numberInputText = screen.getByTestId("number-text");
    expect(numberInputText).toBeInTheDocument();

    const largeSizeNumberInput = screen.getByTestId("number-input-large");
    expect(largeSizeNumberInput).toBeInTheDocument();

    const normalSizeNumberInput = screen.getByTestId("number-input-normal");
    expect(normalSizeNumberInput).toBeInTheDocument();

    const smallSizeNumberInput = screen.getByTestId("number-input-small");
    expect(smallSizeNumberInput).toBeInTheDocument();
  });
  test("render radio Input  correctly", () => {
    renderWithRouter(<FormElement />);
    const radioInputText = screen.getByTestId("radio-text");
    expect(radioInputText).toBeInTheDocument();

    const radioBtnNormal = screen.getByTestId("radio-btn-normal");
    expect(radioBtnNormal).toBeInTheDocument();

    const radioBtnDisabled = screen.getByTestId("radio-btn-disabled");
    expect(radioBtnDisabled).toBeInTheDocument();

    const radioGroup = screen.getByTestId("radio-grp");
    expect(radioGroup).toBeInTheDocument();

    const radioGroupBtn = screen.getByTestId("radio-grp-btn");
    expect(radioGroupBtn).toBeInTheDocument();
  });

  test("render checkbox Input  correctly", () => {
    renderWithRouter(<FormElement />);
    const checkboxInputText = screen.getByTestId("checkbox-text");
    expect(checkboxInputText).toBeInTheDocument();

    const checkboxBtnNormal = screen.getByTestId("checkbox-btn-normal");
    expect(checkboxBtnNormal).toBeInTheDocument();

    const checkboxBtnDisabled = screen.getByTestId("checkbox-btn-disabled");
    expect(checkboxBtnDisabled).toBeInTheDocument();

    const checkboxGroup = screen.getByTestId("checkbox-grp");
    expect(checkboxGroup).toBeInTheDocument();

    const checkboxGroupBtn = screen.getByTestId("checkbox-grp-btn");
    expect(checkboxGroupBtn).toBeInTheDocument();
  });
  test("render textArea Input  correctly", () => {
    renderWithRouter(<FormElement />);
    const textAreaInputText = screen.getByTestId("textarea-text");
    expect(textAreaInputText).toBeInTheDocument();

    const textAreaNormal = screen.getByTestId("text-area-normal");
    expect(textAreaNormal).toBeInTheDocument();

    const textAreaMaxLength = screen.getByTestId("text-area-maxlength");
    expect(textAreaMaxLength).toBeInTheDocument();
  });
  test("render datePicker Input  correctly", () => {
    renderWithRouter(<FormElement />);
    const datePickerInputText = screen.getByTestId("datepicker-text");
    expect(datePickerInputText).toBeInTheDocument();

    const datePickerNormal = screen.getByTestId("date-picker");
    expect(datePickerNormal).toBeInTheDocument();

    const datePickerWithRange = screen.getByTestId("Date-Range-Picker");
    expect(datePickerWithRange).toBeInTheDocument();

    const weekPickerNormal = screen.getByTestId("week-picker");
    expect(weekPickerNormal).toBeInTheDocument();

    const weekPickerWithRange = screen.getByTestId("week-Range-Picker");
    expect(weekPickerWithRange).toBeInTheDocument();

    // const monthPickerNormal=screen.getByTestId('month-picker')
    // expect(monthPickerNormal).toBeInTheDocument();

    const monthPickerWithRange = screen.getByTestId("month-Range-Picker");
    expect(monthPickerWithRange).toBeInTheDocument();

    const quarterPickerNormal = screen.getByTestId("quarter-Picker");
    expect(quarterPickerNormal).toBeInTheDocument();

    const quarterPickerWithRange = screen.getByTestId("quarter-Range-Picker");
    expect(quarterPickerWithRange).toBeInTheDocument();

    const yearPickerNormal = screen.getByTestId("year-Picker");
    expect(yearPickerNormal).toBeInTheDocument();

    const yearPickerWithRange = screen.getByTestId("year-Range-Picker");
    expect(yearPickerWithRange).toBeInTheDocument();
  });
  test("render timePicker Input  correctly", () => {
    renderWithRouter(<FormElement />);
    const timePickerInputText = screen.getByTestId("timepicker-text");
    expect(timePickerInputText).toBeInTheDocument();

    const timePickerNormal = screen.getByTestId("time-picker");
    expect(timePickerNormal).toBeInTheDocument();

    const timePickerWithRange = screen.getByTestId("time-Range-picker");
    expect(timePickerWithRange).toBeInTheDocument();

    const weekPickerNormal = screen.getByTestId("week-picker");
    expect(weekPickerNormal).toBeInTheDocument();

    const weekPickerWithRange = screen.getByTestId("week-Range-Picker");
    expect(weekPickerWithRange).toBeInTheDocument();

    // const monthPickerNormal=screen.getByTestId('month-picker')
    // expect(monthPickerNormal).toBeInTheDocument();

    const monthPickerWithRange = screen.getByTestId("month-Range-Picker");
    expect(monthPickerWithRange).toBeInTheDocument();

    const quarterPickerNormal = screen.getByTestId("quarter-Picker");
    expect(quarterPickerNormal).toBeInTheDocument();

    const quarterPickerWithRange = screen.getByTestId("quarter-Range-Picker");
    expect(quarterPickerWithRange).toBeInTheDocument();

    const yearPickerNormal = screen.getByTestId("year-Picker");
    expect(yearPickerNormal).toBeInTheDocument();

    const yearPickerWithRange = screen.getByTestId("year-Range-Picker");
    expect(yearPickerWithRange).toBeInTheDocument();
  });
  test("render Time Date Picker With Time Picker correctly", () => {
    renderWithRouter(<FormElement />);
    const TimeDatePickerWithTimePickerText = screen.getByTestId(
      "Time-Date-Picker-With-Time-Picker-text"
    );
    expect(TimeDatePickerWithTimePickerText).toBeInTheDocument();

    const DatePickerWithTime = screen.getByTestId("Date-Picker-With-Time");
    expect(DatePickerWithTime).toBeInTheDocument();

    const DateRangePickerWithTime = screen.getByTestId(
      "Date-Range-Picker-With-Time"
    );
    expect(DateRangePickerWithTime).toBeInTheDocument();
  });
  test("render Select Input correctly", () => {
    renderWithRouter(<FormElement />);
    const SelectInputText = screen.getByTestId("Select-Input");
    expect(SelectInputText).toBeInTheDocument();

    const NormalSelect = screen.getByTestId("Normal-Select");
    expect(NormalSelect).toBeInTheDocument();

    const disableSelect = screen.getByTestId("disable-Select");
    expect(disableSelect).toBeInTheDocument();

    const clearSelect = screen.getByTestId("clear-Select");
    expect(clearSelect).toBeInTheDocument();

    const LoadingSelect = screen.getByTestId("Loading-Select");
    expect(LoadingSelect).toBeInTheDocument();

    const multipleSelect = screen.getByTestId("multipleSelect");
    expect(multipleSelect).toBeInTheDocument();

    const removemultipleSelect = screen.getByTestId("removemultipleSelect");
    expect(removemultipleSelect).toBeInTheDocument();
  });
  test("render switch Input correctly", () => {
    renderWithRouter(<FormElement />);
    const SwitchInputText = screen.getByTestId("Switch-Input-Text");
    expect(SwitchInputText).toBeInTheDocument();

    const normalSwitch = screen.getByTestId("normalSwitch");
    expect(normalSwitch).toBeInTheDocument();

    const disableSwitch = screen.getByTestId("disableSwitch");
    expect(disableSwitch).toBeInTheDocument();

    const textSwitch = screen.getByTestId("textSwitch");
    expect(textSwitch).toBeInTheDocument();

    const iconSwitch = screen.getByTestId("iconSwitch");
    expect(iconSwitch).toBeInTheDocument();
  });
  test("render Image Upload correctly", () => {
    renderWithRouter(<FormElement />);
    const ImageUploadText = screen.getByTestId("image-upload-text");
    expect(ImageUploadText).toBeInTheDocument();

    const uploadImage = screen.getByTestId("uploadImage");
    expect(uploadImage).toBeInTheDocument();

    const uploadImageDrag = screen.getByTestId("uploadImageDrag");
    expect(uploadImageDrag).toBeInTheDocument();

    const submitButton = screen.getByTestId("submit-btn");
    expect(submitButton).toBeInTheDocument();
  });

  test("render primary buttons correctly", () => {
    renderWithRouter(<FormElement />);
    const ButtonsText = screen.getByTestId("Buttons-text");
    expect(ButtonsText).toBeInTheDocument();

    const PrimaryButtonstext = screen.getByTestId("Primary-Buttons-text");
    expect(PrimaryButtonstext).toBeInTheDocument();

    const largeprimarybtn = screen.getByTestId("large-primary-btn");
    expect(largeprimarybtn).toBeInTheDocument();

    const normalprimarybtn = screen.getByTestId("normal-primary-btn");
    expect(normalprimarybtn).toBeInTheDocument();

    const smallprimarybtn = screen.getByTestId("small-primary-btn");
    expect(smallprimarybtn).toBeInTheDocument();

    const DownloadOutlinedprimarybtn = screen.getByTestId(
      "DownloadOutlined-primary-btn"
    );
    expect(DownloadOutlinedprimarybtn).toBeInTheDocument();

    const roundprimarybtn = screen.getByTestId("round-primary-btn");
    expect(roundprimarybtn).toBeInTheDocument();

    const disabledprimarybtn = screen.getByTestId("disabled-primary-btn");
    expect(disabledprimarybtn).toBeInTheDocument();

    const loadingprimarybtn = screen.getByTestId("loading-primary-btn");
    expect(loadingprimarybtn).toBeInTheDocument();

    const blockprimarybtn = screen.getByTestId("block-primary-btn");
    expect(blockprimarybtn).toBeInTheDocument();
  });
  test("render default buttons correctly", () => {
    renderWithRouter(<FormElement />);

    const DefaultButtonstext = screen.getByTestId("Default-Buttons-text");
    expect(DefaultButtonstext).toBeInTheDocument();

    const largeDefaultbtn = screen.getByTestId("large-Default-btn");
    expect(largeDefaultbtn).toBeInTheDocument();

    const normalDefaultbtn = screen.getByTestId("normal-Default-btn");
    expect(normalDefaultbtn).toBeInTheDocument();

    const smallDefaultbtn = screen.getByTestId("small-Default-btn");
    expect(smallDefaultbtn).toBeInTheDocument();

    const DownloadOutlinedDefaultbtn = screen.getByTestId(
      "DownloadOutlined-Default-btn"
    );
    expect(DownloadOutlinedDefaultbtn).toBeInTheDocument();

    const roundDefaultbtn = screen.getByTestId("round-Default-btn");
    expect(roundDefaultbtn).toBeInTheDocument();

    const disabledDefaultbtn = screen.getByTestId("disabled-Default-btn");
    expect(disabledDefaultbtn).toBeInTheDocument();

    const loadingDefaultbtn = screen.getByTestId("loading-Default-btn");
    expect(loadingDefaultbtn).toBeInTheDocument();

    const blockDefaultbtn = screen.getByTestId("block-Default-btn");
    expect(blockDefaultbtn).toBeInTheDocument();
  });
  test("render dashed buttons correctly", () => {
    renderWithRouter(<FormElement />);

    const largeDashedbtn = screen.getByTestId("large-Dashed-btn");
    expect(largeDashedbtn).toBeInTheDocument();

    const normalDashedbtn = screen.getByTestId("normal-Dashed-btn");
    expect(normalDashedbtn).toBeInTheDocument();

    const smallDashedbtn = screen.getByTestId("small-Dashed-btn");
    expect(smallDashedbtn).toBeInTheDocument();

    const DownloadOutlinedDashedbtn = screen.getByTestId(
      "DownloadOutlined-Dashed-btn"
    );
    expect(DownloadOutlinedDashedbtn).toBeInTheDocument();

    const roundDashedbtn = screen.getByTestId("round-Dashed-btn");
    expect(roundDashedbtn).toBeInTheDocument();

    const disabledDashedbtn = screen.getByTestId("disabled-Dashed-btn");
    expect(disabledDashedbtn).toBeInTheDocument();

    const loadingDashedbtn = screen.getByTestId("loading-Dashed-btn");
    expect(loadingDashedbtn).toBeInTheDocument();

    const blockDashedbtn = screen.getByTestId("block-Dashed-btn");
    expect(blockDashedbtn).toBeInTheDocument();
  });
  test("render text buttons correctly", () => {
    renderWithRouter(<FormElement />);

    const largeTextbtn = screen.getByTestId("large-Text-btn");
    expect(largeTextbtn).toBeInTheDocument();

    const normalTextbtn = screen.getByTestId("normal-Text-btn");
    expect(normalTextbtn).toBeInTheDocument();

    const smallTextbtn = screen.getByTestId("small-Text-btn");
    expect(smallTextbtn).toBeInTheDocument();

    const DownloadOutlinedTextbtn = screen.getByTestId(
      "DownloadOutlined-Text-btn"
    );
    expect(DownloadOutlinedTextbtn).toBeInTheDocument();

    const roundTextbtn = screen.getByTestId("round-Text-btn");
    expect(roundTextbtn).toBeInTheDocument();

    const disabledTextbtn = screen.getByTestId("disabled-Text-btn");
    expect(disabledTextbtn).toBeInTheDocument();

    const loadingTextbtn = screen.getByTestId("loading-Text-btn");
    expect(loadingTextbtn).toBeInTheDocument();

    const blockDashedbtn = screen.getByTestId("block-Text-btn");
    expect(blockDashedbtn).toBeInTheDocument();
  });
  test("render link buttons correctly", () => {
    renderWithRouter(<FormElement />);

    const largeLinkbtn = screen.getByTestId("large-Link-btn");
    expect(largeLinkbtn).toBeInTheDocument();

    const normalLinkbtn = screen.getByTestId("normal-Link-btn");
    expect(normalLinkbtn).toBeInTheDocument();

    const smallLinkbtn = screen.getByTestId("small-Link-btn");
    expect(smallLinkbtn).toBeInTheDocument();

    const DownloadOutlinedLinkbtn = screen.getByTestId(
      "DownloadOutlined-Link-btn"
    );
    expect(DownloadOutlinedLinkbtn).toBeInTheDocument();

    const roundLinkbtn = screen.getByTestId("round-Link-btn");
    expect(roundLinkbtn).toBeInTheDocument();

    const disabledLinkbtn = screen.getByTestId("disabled-Link-btn");
    expect(disabledLinkbtn).toBeInTheDocument();

    const loadingLinkbtn = screen.getByTestId("loading-Link-btn");
    expect(loadingLinkbtn).toBeInTheDocument();

    const blockLinkbtn = screen.getByTestId("block-Link-btn");
    expect(blockLinkbtn).toBeInTheDocument();
  });
 

  test("updates value on change", async () => {
    renderWithRouter(<FormElement />);
    const input1 = screen.getByTestId("normal-input-large");
    fireEvent.change(input1, { target: { value: "test" } });
    await waitFor(() => expect(input1.value).toBe("test"));

    const input2 = screen.getByTestId("normal-input-normal");
    fireEvent.change(input2, { target: { value: "test" } });
    await waitFor(() => expect(input2.value).toBe("test"));

    const input3 = screen.getByTestId("normal-input-normal");
    fireEvent.change(input3, { target: { value: "test" } });
    await waitFor(() => expect(input3.value).toBe("test"));
  });

;

  test("should display a normal size email input field", () => {
    render(
      <Form>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter valid email!" },
          ]}
        >
          <Input
            type="email"
            placeholder="Normal size"
            prefix={<UserOutlined />}
            data-testid="email-input-normal"
          />
        </Form.Item>
      </Form>
    );

    const emailInput = screen.getByTestId("email-input-normal");

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("placeholder", "Normal size");
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });
  test("should display a large size email input field", () => {
    render(
      <Form>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter valid email!" },
          ]}
        >
          <Input
            type="email"
            placeholder="Large size"
            prefix={<UserOutlined />}
            data-testid="email-input-large"
          />
        </Form.Item>
      </Form>
    );

    const emailInput = screen.getByTestId("email-input-large");

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("placeholder", "Large size");
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });
  test("should display a small size email input field", () => {
    render(
      <Form>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter valid email!" },
          ]}
        >
          <Input
            type="email"
            placeholder="Small size"
            prefix={<UserOutlined />}
            data-testid="email-input-small"
          />
        </Form.Item>
      </Form>
    );

    const emailInput = screen.getByTestId("email-input-small");

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("placeholder", "Small size");
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  test("should display an error message when Large email field is left empty", async () => {
    render(<FormElement />);

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByTestId("email-input-large");
    expect(errorMessage).toBeInTheDocument();
  });

  test("should display an error message when normal email field is left empty", async () => {
    render(<FormElement />);

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByTestId("email-input-normal");
    expect(errorMessage).toBeInTheDocument();
  });

  test("should display an error message when small email field is left empty", async () => {
    render(<FormElement />);

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByTestId("email-input-small");
    expect(errorMessage).toBeInTheDocument();
  });

  test("should display an error message when large normal Input field is left empty", async () => {
    render(<FormElement />);

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByTestId("normal-input-large");
    expect(errorMessage).toBeInTheDocument();
  });

  test("should display an error message when  normal Input field is left empty", async () => {
    render(<FormElement />);

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByTestId("normal-input-normal");
    expect(errorMessage).toBeInTheDocument();
  });

  test("should display an error message when  small Input field is left empty", async () => {
    render(<FormElement />);

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByTestId("normal-input-small");
    expect(errorMessage).toBeInTheDocument();
  });
  test("should display an error message when  large password Input field is left empty", async () => {
    render(<FormElement />);

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByTestId("password-input-large");
    expect(errorMessage).toBeInTheDocument();
  });

  test("should display an error message when  normal password Input field is left empty", async () => {
    render(<FormElement />);

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByTestId("password-input-normal");
    expect(errorMessage).toBeInTheDocument();
  });

  test("should display an error message when  small password Input field is left empty", async () => {
    render(<FormElement />);

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByTestId("password-input-normal");
    expect(errorMessage).toBeInTheDocument();
  });

  test("should display an error message when  large number Input field is left empty", async () => {
    render(<FormElement />);

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByTestId("number-input-large");
    expect(errorMessage).toBeInTheDocument();
  });

  test("should display an error message when  normal number Input field is left empty", async () => {
    render(<FormElement />);

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByTestId("number-input-normal");
    expect(errorMessage).toBeInTheDocument();
  });

  test("should display an error message when  small number Input field is left empty", async () => {
    render(<FormElement />);

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByTestId("number-input-small");
    expect(errorMessage).toBeInTheDocument();
  });

  test("renders without error", () => {
    render(
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
    );
    expect(screen.getByTestId("multipleSelect")).toBeInTheDocument();
  });

  test("displays correct label in multiSelect", () => {
    render(
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
    );
    expect(screen.getByLabelText("Multiple Select")).toBeInTheDocument();
  });

  test("displays correct label in loadingSelect", () => {
    render(
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
    );
    expect(screen.getByLabelText("Loading Select")).toBeInTheDocument();
  });

  test("displays correct label in normalSelect", () => {
    render(
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
    );
    expect(screen.getByLabelText("Noramal Select")).toBeInTheDocument();
  });

  test('checkbox is unchecked initially', () => {
      render(<FormElement/>)
     const checkbox = screen.getByTestId('checkbox-btn-normal');
     expect(checkbox).toBeInTheDocument();
     expect(checkbox).not.toBeChecked();
     const submitButton = screen.getByRole('button', { name: /submit/i });
      userEvent.click(submitButton);    
  })

  test('Click submit button', () => {

    renderWithRouter(<FormElement />);

    const submitButton = screen.getByTestId("submit-btn");
    expect(submitButton).toBeInTheDocument();
    fireEvent.submit(submitButton);

  })

  test('Checkbox group change check', () => {

    renderWithRouter(<FormElement />);

    const Option1 = screen.getByText("Option 1");
    expect(Option1).toBeInTheDocument();

    fireEvent.click(Option1);

  })


  test('Checkbox change check', () => {

    renderWithRouter(<FormElement />);

    const Option1 = screen.getByText("Check all");
    expect(Option1).toBeInTheDocument();

    fireEvent.click(Option1);

  })
 
  

 
});
