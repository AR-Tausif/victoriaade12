import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useGetChartDataQuery } from "../../redux/api/dashboard.api";

export default function UserManagementChart() {
  const [year, setYear] = useState("2025"); // Default to 2025 based on server data
  const [accountType] = useState("all"); // Filter: all, user, provider

  const [yearOpen, setYearOpen] = useState(false);

  // Fetch chart data using RTK Query
  const { data, isLoading, isFetching } = useGetChartDataQuery({ year });

  // Extract chart data from server response
  const chartData = data?.data?.chartData || [];
  const buyersData = chartData.map((item: any) => item.buyers); // Users
  const sellersData = chartData.map((item: any) => item.sellers); // Service Providers
  const months = chartData.map((item: any) => item.month); // X-axis categories

  // Determine max value for y-axis dynamically
  const maxValue = Math.max(
    ...buyersData,
    ...sellersData,
    10 // Minimum max value
  );
  const yAxisMax = Math.ceil(maxValue * 1.2); // Add 20% buffer

  // Chart options
  const options = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 1,
      },
    },
    colors: ["#a855f7", "#e9d5ff"], // Purple for sellers, light purple for buyers
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories:
        months.length > 0
          ? months
          : [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: yAxisMax,
      tickAmount: 5, // Adjust based on max value
      labels: {
        formatter: (val: number) => val.toFixed(0),
      },
    },
    grid: {
      borderColor: "#f3f4f6",
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      offsetX: 40,
      markers: {
        radius: 12,
        width: 8,
        height: 8,
      },
    },
  };

  // Filter series based on accountType
  const series = [
    ...(accountType === "all" || accountType === "provider"
      ? [
          {
            name: "Sellers",
            data: sellersData,
          },
        ]
      : []),
    ...(accountType === "all" || accountType === "user"
      ? [
          {
            name: "Buyers",
            data: buyersData,
          },
        ]
      : []),
  ];

  // Dropdown handlers
  const handleYearChange = (selectedYear: string) => {
    setYear(selectedYear);
    setYearOpen(false);
  };

  // Inline styles (unchanged)
  const styles = {
    card: {
      width: "100%",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      padding: "16px",
      fontFamily: "Arial, sans-serif",
    } as React.CSSProperties,
    cardHeader: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: "8px",
    } as React.CSSProperties,
    cardTitle: {
      fontSize: "18px",
      fontWeight: "500",
      margin: 0,
    } as React.CSSProperties,
    filterContainer: {
      display: "flex",
      gap: "8px",
    },
    dropdown: {
      position: "relative",
      display: "inline-block",
    } as React.CSSProperties,
    dropdownButton: {
      backgroundColor: "white",
      border: "1px solid #e2e8f0",
      borderRadius: "4px",
      padding: "6px 12px",
      fontSize: "14px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minWidth: "120px",
    },
    yearDropdownButton: {
      backgroundColor: "white",
      border: "1px solid #e2e8f0",
      borderRadius: "4px",
      padding: "6px 12px",
      fontSize: "14px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minWidth: "80px",
    },
    dropdownContent: {
      display: "block",
      position: "absolute",
      backgroundColor: "white",
      minWidth: "120px",
      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
      zIndex: 1,
      borderRadius: "4px",
      marginTop: "4px",
    },
    dropdownItem: {
      color: "black",
      padding: "10px 12px",
      textDecoration: "none",
      display: "block",
      fontSize: "14px",
      cursor: "pointer",
    },
    chartContainer: {
      height: "300px",
      width: "100%",
    },
    hidden: {
      display: "none",
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h2 style={styles.cardTitle}>User Management</h2>
        <div style={styles.filterContainer}>
          {/* Account Type Dropdown */}
          {/* <div style={styles.dropdown}>
            <button
              style={styles.dropdownButton}
              onClick={() => setAccountTypeOpen(!accountTypeOpen)}
            >
              {accountType === "all"
                ? "Account Type"
                : accountType === "user"
                ? "buyers"
                : "sellers"}
              <span>▼</span>
            </button>
            <div
              style={accountTypeOpen ? styles.dropdownContent : styles.hidden}
            >
              <div
                style={styles.dropdownItem}
                onClick={() => handleAccountTypeChange("all")}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "#f8f9fa")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "white")
                }
              >
                All Types
              </div>
              <div
                style={styles.dropdownItem}
                onClick={() => handleAccountTypeChange("user")}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "#f8f9fa")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "white")
                }
              >
                User
              </div>
              <div
                style={styles.dropdownItem}
                onClick={() => handleAccountTypeChange("provider")}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "#f8f9fa")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "white")
                }
              >
                Service Provider
              </div>
            </div>
          </div> */}

          {/* Year Dropdown */}
          <div style={styles.dropdown}>
            <button
              style={styles.yearDropdownButton}
              onClick={() => setYearOpen(!yearOpen)}
            >
              {year}
              <span>▼</span>
            </button>
            <div style={yearOpen ? styles.dropdownContent : styles.hidden}>
              {["2022", "2023", "2024", "2025"].map((yr) => (
                <div
                  key={yr}
                  style={styles.dropdownItem}
                  onClick={() => handleYearChange(yr)}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "#f8f9fa")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor = "white")
                  }
                >
                  {yr}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chart Rendering */}
      <div style={styles.chartContainer}>
        {isLoading || isFetching ? (
          <div>Loading chart data...</div>
        ) : typeof window !== "undefined" && chartData.length > 0 ? (
          <ReactApexChart
            options={options as any}
            series={series}
            type="bar"
            height="100%"
            width="100%"
          />
        ) : (
          <div>No data available for {year}</div>
        )}
      </div>
    </div>
  );
}
