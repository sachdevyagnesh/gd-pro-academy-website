import { jsPDF } from 'jspdf';
import logoSrc from '@/assets/gd-pro-logo.png';

interface PDFContent {
  title: string;
  date: string;
  userName: string;
  testType: string;
  score: number;
  maxScore: string;
  result: string;
  description: string;
  recommendation: string;
  program: string;
}

// Convert image to base64
const getBase64FromUrl = async (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = reject;
    img.src = url;
  });
};

export const generateAssessmentPDF = async (content: PDFContent): Promise<Blob> => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  let yPos = margin;

  // Colors
  const primaryColor: [number, number, number] = [10, 36, 99]; // Navy
  const goldColor: [number, number, number] = [212, 175, 55]; // Gold
  const textColor: [number, number, number] = [51, 51, 51]; // Dark gray

  // Add decorative header border
  doc.setDrawColor(...goldColor);
  doc.setLineWidth(2);
  doc.line(margin, 15, pageWidth - margin, 15);

  // Add logo
  try {
    const logoBase64 = await getBase64FromUrl(logoSrc);
    doc.addImage(logoBase64, 'PNG', margin, yPos, 25, 25);
  } catch (e) {
    console.log('Logo loading failed, continuing without logo');
  }

  // Header text
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...primaryColor);
  doc.text('GD PRO ACADEMY', margin + 30, yPos + 10);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textColor);
  doc.text('Professional Skills Assessment Report', margin + 30, yPos + 18);

  yPos += 35;

  // Decorative line under header
  doc.setDrawColor(...goldColor);
  doc.setLineWidth(0.5);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  
  yPos += 15;

  // Report details box
  doc.setFillColor(245, 245, 245);
  doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 35, 3, 3, 'F');
  
  doc.setFontSize(11);
  doc.setTextColor(...textColor);
  doc.text(`Date: ${content.date}`, margin + 5, yPos + 10);
  doc.text(`Name: ${content.userName || 'Anonymous'}`, margin + 5, yPos + 20);
  doc.text(`Assessment: ${content.testType}`, margin + 5, yPos + 30);

  yPos += 50;

  // Score section
  doc.setFillColor(...primaryColor);
  doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 50, 3, 3, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.text('YOUR SCORE', pageWidth / 2, yPos + 12, { align: 'center' });

  doc.setFontSize(36);
  doc.setFont('helvetica', 'bold');
  doc.text(`${content.score} / ${content.maxScore}`, pageWidth / 2, yPos + 32, { align: 'center' });

  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(content.result, pageWidth / 2, yPos + 45, { align: 'center' });

  yPos += 65;

  // Description
  doc.setTextColor(...textColor);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  const descLines = doc.splitTextToSize(content.description, pageWidth - 2 * margin);
  doc.text(descLines, margin, yPos);

  yPos += descLines.length * 6 + 15;

  // Recommendation box
  doc.setDrawColor(...goldColor);
  doc.setLineWidth(1);
  doc.setFillColor(255, 250, 240);
  doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 45, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...primaryColor);
  doc.text('OUR RECOMMENDATION', margin + 5, yPos + 12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...textColor);
  const recLines = doc.splitTextToSize(content.recommendation, pageWidth - 2 * margin - 10);
  doc.text(recLines, margin + 5, yPos + 22);

  doc.setFont('helvetica', 'bold');
  doc.text(`Recommended Program: ${content.program}`, margin + 5, yPos + 40);

  yPos += 60;

  // Contact section
  doc.setFillColor(245, 245, 245);
  doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 40, 3, 3, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('NEXT STEPS', margin + 5, yPos + 12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...textColor);
  doc.text('Contact us to enroll in your recommended program:', margin + 5, yPos + 22);
  doc.text('Email: info@gdproacademy.in  |  Phone: +91 8356 837052', margin + 5, yPos + 32);

  yPos += 55;

  // Authenticity stamp/seal
  const sealX = pageWidth - margin - 40;
  const sealY = yPos;
  
  // Outer circle
  doc.setDrawColor(...goldColor);
  doc.setLineWidth(2);
  doc.circle(sealX, sealY, 18, 'S');
  
  // Inner circle
  doc.setLineWidth(1);
  doc.circle(sealX, sealY, 14, 'S');

  // Seal text
  doc.setFontSize(6);
  doc.setTextColor(...primaryColor);
  doc.setFont('helvetica', 'bold');
  doc.text('GD PRO', sealX, sealY - 4, { align: 'center' });
  doc.text('ACADEMY', sealX, sealY + 1, { align: 'center' });
  doc.setFontSize(5);
  doc.text('CERTIFIED', sealX, sealY + 6, { align: 'center' });

  // Footer
  doc.setDrawColor(...goldColor);
  doc.setLineWidth(0.5);
  doc.line(margin, pageHeight - 20, pageWidth - margin, pageHeight - 20);

  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  doc.text(
    `This report is generated by GD Pro Academy | © ${new Date().getFullYear()} All Rights Reserved`,
    pageWidth / 2,
    pageHeight - 12,
    { align: 'center' }
  );
  doc.text('www.gdproacademy.in', pageWidth / 2, pageHeight - 7, { align: 'center' });

  return doc.output('blob');
};

export const downloadPDF = async (content: PDFContent, filename: string) => {
  const blob = await generateAssessmentPDF(content);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
