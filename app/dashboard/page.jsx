import Card from "../ui/dashboard/card/Card";
import Charts from "../ui/dashboard/charts/charts";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/Rightbar";
import Transactions from "../ui/dashboard/Transactions/Transactions";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
      
            <Card   />
            <Card   />
            <Card   />

        
        </div>
        <Transactions />
        <Charts />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;