import { jsPDF } from 'jspdf';

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
  reportSubtitle?: string;
  nextStepsLine?: string;
}

// Colors
const NAVY: [number, number, number] = [26, 42, 94];
const GOLD: [number, number, number] = [212, 175, 55];
const TEXT: [number, number, number] = [45, 45, 55];
const MUTED: [number, number, number] = [120, 120, 130];
const RED: [number, number, number] = [200, 60, 60];
const AMBER: [number, number, number] = [230, 160, 40];
const GREEN: [number, number, number] = [40, 160, 90];

type Band = { label: string; color: [number, number, number]; strengths: string[]; growth: string[] };

function getBand(score: number, max: number): Band {
  const pct = (score / max) * 10; // normalize to 0-10 scale
  if (pct <= 4) {
    return {
      label: 'Needs Foundational Work',
      color: RED,
      strengths: [
        'Willingness to self-assess and seek growth',
        'Awareness of current skill gaps',
      ],
      growth: [
        'Build core sales fundamentals: prospecting, discovery, closing',
        'Develop confidence in handling objections',
        'Practice structured communication frameworks',
      ],
    };
  }
  if (pct <= 7) {
    return {
      label: 'Intermediate Development',
      color: AMBER,
      strengths: [
        'Solid grasp of core sales conversations',
        'Consistent effort and coachability',
        'Comfortable in familiar sales scenarios',
      ],
      growth: [
        'Sharpen objection handling under pressure',
        'Elevate consultative and value-based selling',
        'Strengthen closing techniques for larger deals',
      ],
    };
  }
  return {
    label: 'Advanced',
    color: GREEN,
    strengths: [
      'Confident, persuasive client conversations',
      'Strong closing and negotiation instincts',
      'High self-awareness and consistency',
    ],
    growth: [
      'Move from performer to sales leader / mentor',
      'Master enterprise / strategic account selling',
      'Refine executive storytelling and influence',
    ],
  };
}

export const generateAssessmentPDF = async (content: PDFContent): Promise<Blob> => {
  const doc = new jsPDF();
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentW = pageW - 2 * margin;
  let y = margin;

  // ===== HEADER (wordmark, no icon) =====
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(2.5);
  doc.line(margin, 10, pageW - margin, 10);
  doc.setLineWidth(0.6);
  doc.line(margin, 13.5, pageW - margin, 13.5);

  y = 22;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...NAVY);
  doc.text('GD PRO ACADEMY', margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...MUTED);
  doc.text(
    content.reportSubtitle || 'Professional Skills Assessment Report',
    margin,
    y + 7,
  );

  y += 16;
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageW - margin, y);
  y += 8;

  // ===== REPORT DETAILS BOX =====
  const detailH = 26;
  doc.setFillColor(248, 249, 250);
  doc.setDrawColor(230, 230, 232);
  doc.roundedRect(margin, y, contentW, detailH, 3, 3, 'FD');

  const col1X = margin + 6;
  const col2X = pageW / 2 + 4;

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...NAVY);
  doc.text('DATE', col1X, y + 8);
  doc.text('NAME', col1X, y + 18);
  doc.text('ASSESSMENT', col2X, y + 8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...TEXT);
  doc.text(content.date, col1X + 22, y + 8);
  doc.text(content.userName || 'Anonymous', col1X + 22, y + 18);
  const assessLines = doc.splitTextToSize(content.testType, contentW / 2 - 30);
  doc.text(assessLines[0] || content.testType, col2X + 30, y + 8);
  if (assessLines[1]) doc.text(assessLines[1], col2X + 30, y + 14);

  y += detailH + 8;

  // ===== SCORE GAUGE =====
  const maxN = parseFloat(content.maxScore) || 10;
  const band = getBand(content.score, maxN);
  const pct = Math.max(0, Math.min(1, content.score / maxN));

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...NAVY);
  doc.text('YOUR SCORE', margin, y);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...NAVY);
  const scoreStr = `${content.score}`;
  doc.text(scoreStr, pageW - margin, y, { align: 'right' });
  const sw = doc.getTextWidth(scoreStr);
  doc.setFontSize(11);
  doc.setTextColor(...MUTED);
  doc.text(` / ${content.maxScore}`, pageW - margin - sw, y, { align: 'right' });

  y += 4;

  // Gauge bar (color-banded background + filled progress)
  const gaugeH = 8;
  const gy = y;
  const seg = contentW / 3;
  doc.setDrawColor(255, 255, 255);
  // red segment (0-4)
  doc.setFillColor(240, 220, 220);
  doc.rect(margin, gy, seg, gaugeH, 'F');
  // amber segment (5-7)
  doc.setFillColor(245, 232, 205);
  doc.rect(margin + seg, gy, seg, gaugeH, 'F');
  // green segment (8-10)
  doc.setFillColor(215, 235, 220);
  doc.rect(margin + 2 * seg, gy, seg, gaugeH, 'F');

  // Filled progress in band color
  const fillW = contentW * pct;
  doc.setFillColor(...band.color);
  doc.rect(margin, gy, fillW, gaugeH, 'F');

  // Border
  doc.setDrawColor(210, 210, 215);
  doc.setLineWidth(0.3);
  doc.rect(margin, gy, contentW, gaugeH, 'S');

  // Band label under gauge
  y += gaugeH + 5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...band.color);
  doc.text(band.label.toUpperCase(), margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...MUTED);
  doc.text('0-4 Foundational  •  5-7 Intermediate  •  8-10 Advanced', pageW - margin, y, { align: 'right' });

  y += 8;

  // ===== DESCRIPTION =====
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...TEXT);
  const descLines = doc.splitTextToSize(content.description, contentW);
  doc.text(descLines, margin, y);
  y += descLines.length * 4.6 + 6;

  // ===== TWO-COLUMN STRENGTHS / GROWTH =====
  const colGap = 6;
  const colW = (contentW - colGap) / 2;
  const bulletList = (items: string[], x: number, startY: number, maxW: number) => {
    let cy = startY;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...TEXT);
    items.forEach((it) => {
      const lines = doc.splitTextToSize(it, maxW - 5);
      doc.setFillColor(...GOLD);
      doc.circle(x + 1.5, cy - 1.2, 0.9, 'F');
      doc.text(lines, x + 5, cy);
      cy += lines.length * 4.4 + 1.5;
    });
    return cy;
  };

  // Measure heights
  const measure = (items: string[], maxW: number) => {
    let h = 0;
    items.forEach((it) => {
      const lines = doc.splitTextToSize(it, maxW - 5);
      h += lines.length * 4.4 + 1.5;
    });
    return h;
  };
  const bodyH = Math.max(measure(band.strengths, colW - 8), measure(band.growth, colW - 8));
  const boxH = 10 + bodyH + 4;

  // Left box: Strengths
  doc.setFillColor(245, 250, 245);
  doc.setDrawColor(215, 232, 220);
  doc.roundedRect(margin, y, colW, boxH, 2.5, 2.5, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...GREEN);
  doc.text('YOUR STRENGTHS', margin + 5, y + 7);
  bulletList(band.strengths, margin + 5, y + 14, colW - 8);

  // Right box: Growth areas
  const rx = margin + colW + colGap;
  doc.setFillColor(252, 247, 240);
  doc.setDrawColor(238, 220, 195);
  doc.roundedRect(rx, y, colW, boxH, 2.5, 2.5, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...AMBER);
  doc.text('GROWTH AREAS', rx + 5, y + 7);
  bulletList(band.growth, rx + 5, y + 14, colW - 8);

  y += boxH + 8;

  // ===== RECOMMENDATION BOX =====
  const recLines = doc.splitTextToSize(content.recommendation, contentW - 12);
  const progValueLines = doc.splitTextToSize(content.program, contentW - 12);
  const recBoxH = 10 + recLines.length * 4.5 + 6 + progValueLines.length * 4.8 + 6;

  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.8);
  doc.setFillColor(255, 251, 238);
  doc.roundedRect(margin, y, contentW, recBoxH, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...NAVY);
  doc.text('OUR RECOMMENDATION', margin + 6, y + 8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...TEXT);
  doc.text(recLines, margin + 6, y + 15);

  const progY = y + 15 + recLines.length * 4.5 + 4;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...NAVY);
  doc.text('Recommended Program:', margin + 6, progY);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...TEXT);
  doc.text(progValueLines, margin + 6, progY + 5);

  y += recBoxH + 8;

  // ===== CTA BLOCK =====
  const ctaH = 20;
  doc.setFillColor(...NAVY);
  doc.roundedRect(margin, y, contentW, ctaH, 3, 3, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text('BOOK YOUR FREE CONSULTATION', margin + 8, y + 8);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...GOLD);
  const waLabel = 'WhatsApp: +91 8356 837052';
  doc.textWithLink(waLabel, margin + 8, y + 15, { url: 'https://wa.me/918356837052?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation' });
  doc.setTextColor(230, 230, 235);
  doc.text('info@gdproacademy.in', pageW - margin - 8, y + 15, { align: 'right' });

  y += ctaH + 8;

  // ===== CREDIBILITY STRIP =====
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...MUTED);
  doc.text(
    '12+ Years Experience  |  24,000+ Training Hours  |  CPD, HRCI & SHRM Accredited',
    pageW / 2,
    y,
    { align: 'center' },
  );

  // ===== FOOTER (fixed at bottom with clearance) =====
  const footerTop = pageH - 16;
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.4);
  doc.line(margin, footerTop, pageW - margin, footerTop);

  doc.setFontSize(7);
  doc.setTextColor(...MUTED);
  doc.setFont('helvetica', 'normal');
  doc.text(
    `Official report generated by GD Pro Academy  •  © ${new Date().getFullYear()} All Rights Reserved`,
    pageW / 2,
    footerTop + 5,
    { align: 'center' },
  );
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...NAVY);
  doc.textWithLink('www.gdproacademy.in', pageW / 2, footerTop + 10, {
    align: 'center',
    url: 'https://www.gdproacademy.in',
  } as never);

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
