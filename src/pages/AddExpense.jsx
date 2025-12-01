import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function formatDate(date) {
  if (!date) return "";
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function AddExpense() {
  const [amount, setAmount] = useState("");
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(date);
  const [value, setValue] = useState(formatDate(date));
  const [type, setType] = useState("expense");

  const formatIndian = (value) => {
    const cleaned = value.replace(/,/g, "");
    if (cleaned === "") return "";
    return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleAmountChange = (e) => {
    let value = e.target.value;

    value = value.replace(/,/g, "");
    value = value.replace(/\D/g, "");

    if (value.length > 10) return;

    if (value) value = formatIndian(value);

    setAmount(value);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-110 h-130 border-2 rounded-xl p-6 flex flex-col gap-6">
        <p className="flex items-center justify-center font-geist text-lg">
          New transaction
        </p>

        {/* Amount Input */}
        <div className="flex justify-center relative px-4 py-2">
          <span
            className={`
              absolute top-1/2 -translate-y-1/2 font-bold text-5xl transition-all duration-200
              ${amount.length === 0 ? "left-1/2 -translate-x-1/2" : "left-4"}
            `}
          >
            ₹
          </span>

          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className={`
              font-geist font-bold text-5xl outline-none bg-transparent w-full
              ${amount.length > 0 ? "pl-10 text-left" : "text-center"}
            `}
          />
        </div>

        {/* Date Picker Section */}
        <div className="flex flex-col gap-2">
          <Label className="px-1 font-geist">Select Date</Label>

          <div className="relative flex gap-2">
            <Input
              value={value}
              className="bg-background pr-10 font-geist"
              onChange={(e) => {
                const newDate = new Date(e.target.value);
                setValue(e.target.value);
                if (!isNaN(newDate.getTime())) {
                  setDate(newDate);
                  setMonth(newDate);
                }
              }}
            />

            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                >
                  <CalendarIcon className="size-4" />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="end"
                alignOffset={-8}
                sideOffset={10}
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  month={month}
                  onMonthChange={setMonth}
                  onSelect={(newDate) => {
                    setDate(newDate);
                    setValue(formatDate(newDate));
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex w-full">
            <div className="flex w-full bg-muted p-1 rounded-lg">
              <button
                onClick={() => setType("income")}
                className={`w-1/2 py-1 rounded-md font-geist transition text-center
          ${type === "income" ? "bg-primary text-primary-foreground" : ""}
        `}
              >
                Income
              </button>

              <button
                onClick={() => setType("expense")}
                className={`w-1/2 py-1 rounded-md font-geist transition text-center
          ${type === "expense" ? "bg-primary text-primary-foreground" : ""}
        `}
              >
                Expense
              </button>
            </div>
          </div>
        </div>

        <div>
          <Input placeholder="description" />
        </div>

        <div className="w-full">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="internet">Internet</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="shopping">Shopping</SelectItem>
                <SelectItem value="gas">Gas</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Button className="cursor-pointer w-full">Add Transaction</Button>
        </div>
      </div>
    </div>
  );
}

export default AddExpense;
