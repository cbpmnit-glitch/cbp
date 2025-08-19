import React, { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";
import * as XLSX from "xlsx";

const Attendance = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [attendanceData, setAttendanceData] = useState(() => {
    return JSON.parse(localStorage.getItem("attendanceData")) || [];
  });
  const [scanning, setScanning] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });
  const animationRef = useRef(null);
  const streamRef = useRef(null);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("attendanceData", JSON.stringify(attendanceData));
  }, [attendanceData]);

  // Start scanner
  const startScanner = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      streamRef.current = stream;
      videoRef.current.srcObject = stream;
      await videoRef.current.play();
      setScanning(true);
      setStatus({ message: "Scanner started. Point camera at QR code.", type: "success" });
      scanQRCode();
    } catch (err) {
      console.error(err);
      setStatus({ message: "Error accessing camera: " + err.message, type: "error" });
    }
  };

  // Stop scanner
  const stopScanner = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    setScanning(false);
    setStatus({ message: "Scanner stopped.", type: "" });
  };

  // QR scanning loop
  const scanQRCode = () => {
    if (!scanning) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "dontInvert" });

      if (code) processQRCode(code.data);
    }

    animationRef.current = requestAnimationFrame(scanQRCode);
  };

  // Process scanned QR code
  const processQRCode = (qrData) => {
    try {
      const [studentId, studentName] = qrData.split(":");
      const today = new Date().toDateString();
      const alreadyMarked = attendanceData.some(
        (record) => record.studentId === studentId && new Date(record.timestamp).toDateString() === today
      );

      if (alreadyMarked) {
        setStatus({ message: `${studentName} (${studentId}) already marked present today.`, type: "error" });
        return;
      }

      const timestamp = new Date().toISOString();
      const newRecord = { studentId, studentName, timestamp };
      setAttendanceData((prev) => [...prev, newRecord]);

      setStatus({ message: `Attendance marked for ${studentName} (${studentId})`, type: "success" });

      // Temporarily pause scanning
      setScanning(false);
      setTimeout(() => setScanning(true), 2000);
    } catch (err) {
      console.error(err);
      setStatus({ message: "Invalid QR code format. Expected 'studentId:studentName'", type: "error" });
    }
  };

  // Download Excel
  const downloadExcel = () => {
    if (attendanceData.length === 0) {
      setStatus({ message: "No attendance records to download.", type: "error" });
      return;
    }
    const wsData = [
      ["Student ID", "Name", "Timestamp"],
      ...attendanceData.map((record) => [record.studentId, record.studentName, new Date(record.timestamp).toLocaleString()]),
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Attendance");
    const date = new Date().toISOString().split("T")[0];
    XLSX.writeFile(wb, `attendance_${date}.xlsx`);
    setStatus({ message: "Excel file downloaded successfully.", type: "success" });
  };

  // Clear records
  const clearRecords = () => {
    if (window.confirm("Are you sure you want to clear all attendance records?")) {
      setAttendanceData([]);
      setStatus({ message: "All attendance records cleared.", type: "success" });
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => stopScanner();
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>QR Attendance System</h1>

      <div style={{ border: "1px solid #ddd", padding: 20, borderRadius: 5, marginBottom: 20 }}>
        <h2>Scan Student QR Code</h2>
        <div style={{ position: "relative", width: "100%", height: 300, backgroundColor: "#f0f0f0", marginBottom: 10 }}>
          <video ref={videoRef} playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <canvas ref={canvasRef} style={{ display: "none" }} />
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 200,
            height: 200,
            border: "3px solid #4CAF50",
            backgroundColor: "rgba(255,255,255,0.3)"
          }} />
        </div>
        <button onClick={startScanner} disabled={scanning}>Start Scanner</button>
        <button onClick={stopScanner} disabled={!scanning} style={{ marginLeft: 10 }}>Stop Scanner</button>
        <div style={{ marginTop: 10, padding: 10, borderRadius: 4, backgroundColor: status.type === "success" ? "#dff0d8" : status.type === "error" ? "#f2dede" : "", color: status.type === "success" ? "#3c763d" : status.type === "error" ? "#a94442" : "" }}>
          {status.message}
        </div>
      </div>

      <div style={{ border: "1px solid #ddd", padding: 20, borderRadius: 5 }}>
        <h2>Attendance Records</h2>
        <button onClick={downloadExcel} style={{ marginRight: 10 }}>Download Excel</button>
        <button onClick={clearRecords}>Clear Records</button>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 10 }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: 8, backgroundColor: "#f2f2f2" }}>Student ID</th>
              <th style={{ border: "1px solid #ddd", padding: 8, backgroundColor: "#f2f2f2" }}>Name</th>
              <th style={{ border: "1px solid #ddd", padding: 8, backgroundColor: "#f2f2f2" }}>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: 8 }}>{record.studentId}</td>
                <td style={{ border: "1px solid #ddd", padding: 8 }}>{record.studentName}</td>
                <td style={{ border: "1px solid #ddd", padding: 8 }}>{new Date(record.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
