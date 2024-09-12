import React, { ChangeEvent } from "react";

interface MaskedInputProps {
  config: {
    mask: string | any;
    inputType:
      | "creditCard"
      | "macAddress"
      | "telephone"
      | "dateAndTime"
      | "alphanumeric"
      | "decimal"
      | string;
  };
  value: string;
  onChange: (newValue: string | any) => void;
  placeholder?: string;
  [key: string]: any; // Allow any other additional props
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  config,
  value,
  onChange,
  placeholder,
  ...restProps
}) => {
  const formatValue = (inputValue: string): string => {
    switch (config.inputType) {
      case "creditCard":
        return formatCreditCard(inputValue);
      case "macAddress":
        return formatMACAddress(inputValue);
      case "telephone":
        return formatTelephone(inputValue);
      case "dateAndTime":
        return formatDateTime(inputValue);
      case "alphanumeric":
        return formatAlphanumeric(inputValue);
      case "decimal":
        return formatDecimal(inputValue);
      default:
        return inputValue;
    }
  };

  const formatCreditCard = (inputValue: string): string => {
    // Format as credit card number (e.g., ####-####-####-####)
    return inputValue
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const formatMACAddress = (inputValue: string): string => {
    // Format as MAC address (e.g., AA:BB:CC:DD:EE:FF)
    return inputValue
      .replace(/[^a-fA-F0-9]/g, "")
      .slice(0, 12)
      .replace(/(.{2})/g, "$1:")
      .slice(0, 17)
      .toUpperCase();
  };

  const formatTelephone = (inputValue: string): string => {
    // Format as telephone number (e.g., (###) ###-####)
    return inputValue
      .replace(/\D/g, "")
      .slice(0, 10)
      .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  };

  const formatDateTime = (inputValue: string): string => {
    // Format as date and time (e.g., MM/DD/YYYY HH:mm)
    // Assumes the input is in the format MMDDYYYYHHmm
    return inputValue
      .replace(/\D/g, "")
      .slice(0, 12)
      .replace(/(\d{2})(\d{2})(\d{4})(\d{2})(\d{2})/, "$1/$2/$3 $4:$5");
  };

  const formatAlphanumeric = (inputValue: string): string => {
    // Remove non-alphanumeric characters
    return inputValue.replace(/[^a-zA-Z0-9]/g, "");
  };

  const formatDecimal = (inputValue: string): string => {
    // Format as decimal number
    const numericValue = inputValue.replace(/[^0-9.]/g, "");
    const parts = numericValue.split(".");
    const integerPart = parts[0].replace(/\D/g, "");
    const decimalPart = parts[1] ? `.${parts[1].replace(/\D/g, "")}` : "";
    return `${integerPart}${decimalPart}`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = formatValue(inputValue);

    if (onChange) {
      onChange(formattedValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

export default MaskedInput;
