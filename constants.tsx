
import { Service, ServiceCategory } from './types';

export const WHATSAPP_NUMBER = '917893897700';

export const SERVICES: Service[] = [
  {
    id: 'startup-india',
    title: 'Startup India Services',
    description: 'Complete registration ecosystem for new ventures and companies.',
    icon: 'Rocket',
    category: ServiceCategory.REGISTRATION,
    popular: true,
    price: '₹1,999',
    subServices: [
      'Private Limited Company Registration',
      'LLP Registration',
      'Section 8 Company Registration',
      'Startup India (DPIIT) Recognition',
      'MSME / Udyam Registration',
      'GST Registration',
      'FSSAI Registration',
      'Trade License',
      'Partnership Firm Registration',
      'IEC Registration',
      'DSC Registration',
      'PF / ESI / PT Registration'
    ]
  },
  {
    id: 'gst-services',
    title: 'GST Services',
    description: 'End-to-end Goods and Services Tax management and compliance.',
    icon: 'FileText',
    category: ServiceCategory.COMPLIANCE,
    price: '₹499',
    subServices: [
      'GST Registration',
      'GST Return Filing',
      'GST Refund Application'
    ]
  },
  {
    id: 'statutory-filings',
    title: 'Statutory Filings',
    description: 'Mandatory periodic filings for all regulatory authorities.',
    icon: 'FileCheck',
    category: ServiceCategory.COMPLIANCE,
    popular: true,
    price: '₹999',
    subServices: [
      'GST Filings',
      'EPF Filings',
      'ESI Filings',
      'TDS Filings',
      'PT Filings',
      'ROC Filings: AOC-4, MGT-7A',
      'ROC Filings: Charge Filings',
      'ROC Filings: CSR & DIN',
      'ROC Filings: ESOP & Change in Charge'
    ]
  },
  {
    id: 'payroll-management',
    title: 'Payroll Management',
    description: 'Seamless salary and deduction management for your workforce.',
    icon: 'Users',
    category: ServiceCategory.MANAGEMENT,
    price: '₹1,499',
    subServices: [
      'Salary Structure Design',
      'Monthly Payslip Generation',
      'Joining & Experience Letters',
      'Statutory Deductions (PF, ESI, PT, TDS)'
    ]
  },
  {
    id: 'kpi-tracking',
    title: 'KPI Tracking',
    description: 'Data-driven performance metrics for strategic business growth.',
    icon: 'BarChart3',
    category: ServiceCategory.MANAGEMENT,
    price: '₹2,499',
    subServices: [
      'Financial Metrics Tracking',
      'Sales & Marketing Metrics',
      'Operational Efficiency Metrics',
      'Budget & Strategic Metrics',
      'Manhours & Timeliness Tracking'
    ]
  },
  {
    id: 'valuation-audits',
    title: 'Valuation & Audits',
    description: 'Precision business valuation and internal stock assessment.',
    icon: 'ShieldCheck',
    category: ServiceCategory.MANAGEMENT,
    price: '₹4,999',
    subServices: [
      'Business Valuation (DCF Method)',
      'Internal Stock Audits'
    ]
  }
];

export const STATS = [
  { label: 'Certifications Issued', value: '15,000+' },
  { label: 'Active Compliances', value: '40,000+' },
  { label: 'Certified Auditors', value: '120+' },
  { label: 'Assurance Rating', value: '99.9%' }
];
