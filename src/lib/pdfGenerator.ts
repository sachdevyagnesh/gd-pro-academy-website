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
  reportSubtitle?: string; // e.g. "Corporate Training Needs Assessment Report"
  nextStepsLine?: string;  // e.g. "Ready to build your team's skills? Contact us to schedule your program:"
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
  const primaryColor: [number, number, number] = [10, 36, 99];
  const goldColor: [number, number, number] = [212, 175, 55];
  const textColor: [number, number, number] = [51, 51, 51];
  const lightGray: [number, number, number] = [128, 128, 128];

  // === HEADER SECTION ===
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

  // Header text
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(...primaryColor);
  doc.text('GD PRO ACADEMY', margin + 38, yPos + 12);
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...lightGray);
  doc.text('Professional Skills Assessment Report', margin + 38, yPos + 22);

  yPos = 65;

  doc.setDrawColor(...goldColor);
  doc.setLineWidth(0.5);
  doc.line(margin, yPos, pageWidth - margin, yPos);

  yPos += 12;

  // === REPORT DETAILS BOX ===
  const detailBoxHeight = 38;
  doc.setFillColor(248, 249, 250);
  doc.setDrawColor(230, 230, 230);
  doc.roundedRect(margin, yPos, contentWidth, detailBoxHeight, 4, 4, 'FD');
  
  const col1X = margin + 8;
  const col2X = pageWidth / 2 + 8;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryColor);
  doc.text('Report Details', col1X, yPos + 10);
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textColor);
  doc.setFontSize(9);
  
  doc.text('Date:', col1X, yPos + 20);
  doc.text(content.date, col1X + 25, yPos + 20);
  
  doc.text('Name:', col1X, yPos + 30);
  doc.text(content.userName || 'Anonymous', col1X + 25, yPos + 30);
  
  doc.text('Assessment:', col2X, yPos + 20);
  const assessmentText = doc.splitTextToSize(content.testType, contentWidth / 2 - 50);
  doc.text(assessmentText[0] || content.testType, col2X + 38, yPos + 20);

  yPos += detailBoxHeight + 12;

  // === SCORE SECTION ===
  const scoreBoxHeight = 55;
  doc.setFillColor(...primaryColor);
  doc.roundedRect(margin, yPos, contentWidth, scoreBoxHeight, 4, 4, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('YOUR SCORE', pageWidth / 2, yPos + 13, { align: 'center' });

  doc.setFontSize(36);
  doc.setFont('helvetica', 'bold');
  const scoreStr = `${content.score}`;
  const maxStr = `/ ${content.maxScore}`;
  const scoreWidth = doc.getTextWidth(scoreStr);
  const maxWidth = doc.getTextWidth(maxStr);
  const totalScoreWidth = scoreWidth + 4 + maxWidth * 0.55;
  const scoreStartX = (pageWidth - totalScoreWidth) / 2;
  
  doc.text(scoreStr, scoreStartX, yPos + 35);
  doc.setFontSize(18);
  doc.text(maxStr, scoreStartX + scoreWidth + 4, yPos + 35);

  // Result label
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(content.result, pageWidth / 2, yPos + 48, { align: 'center' });

  yPos += scoreBoxHeight + 12;

  // === DESCRIPTION ===
  doc.setTextColor(...textColor);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const descLines = doc.splitTextToSize(content.description, contentWidth);
  doc.text(descLines, margin, yPos);

  yPos += descLines.length * 4.5 + 10;

  // === RECOMMENDATION BOX ===
  // Calculate height dynamically based on content
  const recLines = doc.splitTextToSize(content.recommendation, contentWidth - 20);
  const recTextHeight = recLines.length * 4.5;
  const programLine = `Recommended Program: ${content.program}`;
  const programLines = doc.splitTextToSize(programLine, contentWidth - 20);
  const recBoxHeight = 16 + recTextHeight + 8 + programLines.length * 4.5 + 10;

  doc.setDrawColor(...goldColor);
  doc.setLineWidth(1.5);
  doc.setFillColor(255, 251, 235);
  doc.roundedRect(margin, yPos, contentWidth, recBoxHeight, 4, 4, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('OUR RECOMMENDATION', margin + 10, yPos + 12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textColor);
  doc.text(recLines, margin + 10, yPos + 22);

  const progY = yPos + 22 + recTextHeight + 4;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...primaryColor);
  doc.text('Recommended Program:', margin + 10, progY);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textColor);
  const progValueLines = doc.splitTextToSize(content.program, contentWidth - 80);
  doc.text(progValueLines, margin + 60, progY);

  yPos += recBoxHeight + 12;

  // === NEXT STEPS SECTION ===
  doc.setFillColor(248, 249, 250);
  doc.roundedRect(margin, yPos, contentWidth, 42, 4, 4, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...primaryColor);
  doc.text('NEXT STEPS', margin + 10, yPos + 12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textColor);
  doc.text('Ready to enhance your skills? Contact us to enroll:', margin + 10, yPos + 23);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Email: info@gdproacademy.in', margin + 10, yPos + 34);
  doc.text('Phone: +91 8356 837052', margin + 80, yPos + 34);

  // === FOOTER ===
  doc.setDrawColor(...goldColor);
  doc.setLineWidth(0.5);
  doc.line(margin, pageHeight - 25, pageWidth - margin, pageHeight - 25);
  doc.setLineWidth(1);
  doc.line(margin, pageHeight - 22, pageWidth - margin, pageHeight - 22);

  doc.setFontSize(7);
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
