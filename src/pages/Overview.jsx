import Cards from "@/components/blocks/Cards";
import ChartAreaInteractive from "@/components/charts/ChartAreaInteractive";
import { supabase } from "@/lib/supabaseClient";
import React, { useEffect, useState } from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { PiChartLineUp, PiChartLineDown } from "react-icons/pi";

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
    <div className="flex flex-col items-center w-full h-full overflow-y-auto">
      {/* Cards Section */}
      <div className="flex w-full justify-between items-center">
        <Cards
          heading="Total Balance"
          amount={totalBalance}
          logo={<BiMoneyWithdraw size={30} />}
        />
        <Cards
          heading="Total Expense"
          amount={totalExpense}
          logo={<PiChartLineDown size={30} />}
        />
        <Cards
          heading="Total Income"
          amount={totalIncome}
          logo={<PiChartLineUp size={30} />}
        />
      </div>

      <div className="w-full">
        <ChartAreaInteractive transactions={transactions} />
      </div>
    </div>
  );
}

export default Overview;
