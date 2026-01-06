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
  const contentWidth = pageWidth - 2 * margin;
  let yPos = margin;

  // Colors
  const primaryColor: [number, number, number] = [10, 36, 99]; // Navy
  const goldColor: [number, number, number] = [212, 175, 55]; // Gold
  const textColor: [number, number, number] = [51, 51, 51]; // Dark gray
  const lightGray: [number, number, number] = [128, 128, 128];

  // === HEADER SECTION ===
  // Top decorative line
  doc.setDrawColor(...goldColor);
  doc.setLineWidth(3);
  doc.line(margin, 12, pageWidth - margin, 12);
  
  doc.setLineWidth(1);
  doc.line(margin, 16, pageWidth - margin, 16);

  yPos = 25;

  // Add logo
  try {
    const logoBase64 = await getBase64FromUrl(logoSrc);
    doc.addImage(logoBase64, 'PNG', margin, yPos, 30, 30);
  } catch (e) {
    console.log('Logo loading failed, continuing without logo');
  }

  // Header text - aligned to right of logo
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(...primaryColor);
  doc.text('GD PRO ACADEMY', margin + 38, yPos + 12);
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...lightGray);
  doc.text('Professional Skills Assessment Report', margin + 38, yPos + 22);

  yPos = 65;

  // Decorative divider
  doc.setDrawColor(...goldColor);
  doc.setLineWidth(0.5);
  doc.line(margin, yPos, pageWidth - margin, yPos);

  yPos += 15;

  // === REPORT DETAILS BOX ===
  doc.setFillColor(248, 249, 250);
  doc.setDrawColor(230, 230, 230);
  doc.roundedRect(margin, yPos, contentWidth, 40, 4, 4, 'FD');
  
  // Details content - properly aligned in two columns
  const col1X = margin + 10;
  const col2X = pageWidth / 2 + 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryColor);
  doc.text('Report Details', col1X, yPos + 12);
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textColor);
  doc.setFontSize(10);
  
  doc.text(`Date:`, col1X, yPos + 24);
  doc.text(content.date, col1X + 35, yPos + 24);
  
  doc.text(`Name:`, col1X, yPos + 34);
  doc.text(content.userName || 'Anonymous', col1X + 35, yPos + 34);
  
  doc.text(`Assessment:`, col2X, yPos + 24);
  doc.text(content.testType, col2X + 45, yPos + 24);

  yPos += 55;

  // === SCORE SECTION ===
  doc.setFillColor(...primaryColor);
  doc.roundedRect(margin, yPos, contentWidth, 60, 4, 4, 'F');

  // Score header
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('YOUR SCORE', pageWidth / 2, yPos + 15, { align: 'center' });

  // Score value - centered and large
  doc.setFontSize(42);
  doc.setFont('helvetica', 'bold');
  doc.text(`${content.score}`, pageWidth / 2 - 15, yPos + 40, { align: 'center' });
  
  doc.setFontSize(20);
  doc.text(`/ ${content.maxScore}`, pageWidth / 2 + 25, yPos + 40, { align: 'center' });

  // Result label
  doc.setFontSize(13);
  doc.setFont('helvetica', 'normal');
  doc.text(content.result, pageWidth / 2, yPos + 54, { align: 'center' });

  yPos += 75;

  // === DESCRIPTION ===
  doc.setTextColor(...textColor);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const descLines = doc.splitTextToSize(content.description, contentWidth);
  doc.text(descLines, margin, yPos);

  yPos += descLines.length * 5 + 15;

  // === RECOMMENDATION BOX ===
  doc.setDrawColor(...goldColor);
  doc.setLineWidth(1.5);
  doc.setFillColor(255, 251, 235);
  doc.roundedRect(margin, yPos, contentWidth, 55, 4, 4, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...primaryColor);
  doc.text('OUR RECOMMENDATION', margin + 10, yPos + 14);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...textColor);
  const recLines = doc.splitTextToSize(content.recommendation, contentWidth - 20);
  doc.text(recLines, margin + 10, yPos + 26);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...primaryColor);
  doc.text('Recommended Program:', margin + 10, yPos + 46);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textColor);
  doc.text(content.program, margin + 60, yPos + 46);

  yPos += 70;

  // === NEXT STEPS SECTION ===
  doc.setFillColor(248, 249, 250);
  doc.roundedRect(margin, yPos, contentWidth, 45, 4, 4, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('NEXT STEPS', margin + 10, yPos + 14);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...textColor);
  doc.text('Ready to enhance your skills? Contact us to enroll:', margin + 10, yPos + 26);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Email: info@gdproacademy.in', margin + 10, yPos + 38);
  doc.text('Phone: +91 8356 837052', margin + 80, yPos + 38);

  // === AUTHENTICITY SEAL ===
  const sealX = pageWidth - margin - 30;
  const sealY = yPos + 25;
  
  // Outer circle
  doc.setDrawColor(...goldColor);
  doc.setLineWidth(2);
  doc.circle(sealX, sealY, 20, 'S');
  
  // Inner circle
  doc.setLineWidth(1);
  doc.circle(sealX, sealY, 16, 'S');
  
  // Inner decorative circle
  doc.setLineWidth(0.5);
  doc.circle(sealX, sealY, 12, 'S');

  // Seal text
  doc.setFontSize(7);
  doc.setTextColor(...primaryColor);
  doc.setFont('helvetica', 'bold');
  doc.text('GD PRO', sealX, sealY - 3, { align: 'center' });
  doc.text('ACADEMY', sealX, sealY + 2, { align: 'center' });
  doc.setFontSize(5);
  doc.setFont('helvetica', 'normal');
  doc.text('CERTIFIED', sealX, sealY + 7, { align: 'center' });

  // === FOOTER ===
  // Decorative lines
  doc.setDrawColor(...goldColor);
  doc.setLineWidth(0.5);
  doc.line(margin, pageHeight - 25, pageWidth - margin, pageHeight - 25);
  
  doc.setLineWidth(1);
  doc.line(margin, pageHeight - 22, pageWidth - margin, pageHeight - 22);

  doc.setFontSize(8);
  doc.setTextColor(...lightGray);
  doc.setFont('helvetica', 'normal');
  doc.text(
    `This is an official report generated by GD Pro Academy | © ${new Date().getFullYear()} All Rights Reserved`,
    pageWidth / 2,
    pageHeight - 14,
    { align: 'center' }
  );
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryColor);
  doc.text('www.gdproacademy.in', pageWidth / 2, pageHeight - 8, { align: 'center' });

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
