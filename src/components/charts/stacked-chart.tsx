"use client";

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

// Dynamically import ApexCharts to avoid SSR issues
// const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

export default function UserManagementChart() {
  const [year, setYear] = useState("2024");
  const [accountType, setAccountType] = useState("all");
  const [accountTypeOpen, setAccountTypeOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);

  // Sample data for the chart
  const userData = [25, 10, 35, 35, 20, 18, 30, 10, 25, 10, 15, 15];
  const serviceProviderData = [30, 40, 25, 30, 35, 35, 25, 40, 30, 40, 35, 35];

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
        // horizontal: false,
        columnWidth: "40%",
        columnHeight: "10%",
        borderRadius: 1,
        background: "#000",
      },
    },
    colors: ["#a855f7", "#e9d5ff"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
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
      max: 50,
      tickAmount: 3,
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

  const series = [
    {
      name: "Service Provider",
      data: serviceProviderData,
    },
    {
      name: "User",
      data: userData,
    },
  ];

  // Custom dropdown handler
  const handleYearChange = (selectedYear: string) => {
    setYear(selectedYear);
    setYearOpen(false);
  };

  const handleAccountTypeChange = (selectedType: string) => {
    setAccountType(selectedType);
    setAccountTypeOpen(false);
  };

  // Inline styles
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
    dropdownItemHover: {
      backgroundColor: "#f8f9fa",
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
          <div style={styles.dropdown}>
            <button
              style={styles.dropdownButton}
              onClick={() => setAccountTypeOpen(!accountTypeOpen)}
            >
              {accountType === "all"
                ? "Account Type"
                : accountType === "user"
                ? "User"
                : "Service Provider"}
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
          </div>

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
              <div
                style={styles.dropdownItem}
                onClick={() => handleYearChange("2022")}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "#f8f9fa")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "white")
                }
              >
                2022
              </div>
              <div
                style={styles.dropdownItem}
                onClick={() => handleYearChange("2023")}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "#f8f9fa")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "white")
                }
              >
                2023
              </div>
              <div
                style={styles.dropdownItem}
                onClick={() => handleYearChange("2024")}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "#f8f9fa")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "white")
                }
              >
                2024
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.chartContainer}>
        {typeof window !== "undefined" && (
          <ReactApexChart
            options={options as any}
            series={series}
            type="bar"
            height="100%"
            width="100%"
          />
        )}
      </div>
    </div>
  );
}
