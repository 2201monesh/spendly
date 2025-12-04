import Cards from "@/components/blocks/Cards";
import ChartAreaInteractive from "@/components/charts/ChartAreaInteractive";
import { supabase } from "@/lib/supabaseClient";
import React, { useEffect, useState } from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { PiChartLineUp, PiChartLineDown } from "react-icons/pi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

function Overview() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Get current logged-in user
      const { data: { user } = {} } = await supabase.auth.getUser();
      if (!user) return;

      const userId = user.id;

      // Fetch user's transactions
      const { data: transactions, error } = await supabase
        .from("transactions")
        .select("*")
        .eq("user_id", userId);

      if (error) {
        console.error("Error fetching transactions:", error.message);
        return;
      }

      setTransactions(transactions);

      // Calculate totals
      const income = transactions
        .filter((t) => t.type === "income")
        .reduce((acc, t) => acc + parseFloat(t.amount), 0);

      const expense = transactions
        .filter((t) => t.type === "expense")
        .reduce((acc, t) => acc + parseFloat(t.amount), 0);

      setTotalIncome(income);
      setTotalExpense(expense);
      setTotalBalance(income - expense);
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full overflow-y-auto">
      <div className="w-[50%]">
        <div className="grid w-full grid-cols-2 gap-2">
          <Cards
            heading="Income"
            amount={totalBalance}
            logo={<RiMoneyDollarCircleFill size={22} />}
          />
          <Cards
            heading="Expense"
            amount={totalExpense}
            logo={<RiMoneyDollarCircleFill size={22} />}
          />
          <Cards
            heading="Savings"
            amount={totalIncome}
            logo={<RiMoneyDollarCircleFill size={22} />}
          />
          <Cards
            heading="Investment"
            amount={totalIncome}
            logo={<RiMoneyDollarCircleFill size={22} />}
          />
        </div>
        <div className="w-full">
          <ChartAreaInteractive transactions={transactions} />
        </div>
      </div>

      {/* <div className="w-full">
        <ChartAreaInteractive transactions={transactions} />
      </div> */}
    </div>
  );
}

export default Overview;
